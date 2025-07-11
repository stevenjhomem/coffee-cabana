/** @type {import('next').NextConfig} */
const nextConfig = {
  
  // Cache control headers
  async headers() {
    return [
      // Cache static assets for a long time but with versioning
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      // Cache images with shorter duration
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=31536000'
          }
        ]
      },
      // HTML pages - no cache to ensure updates
      {
        source: '/(.*).html',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate'
          },
          {
            key: 'Pragma',
            value: 'no-cache'
          },
          {
            key: 'Expires',
            value: '0'
          }
        ]
      },
      // API routes and dynamic content
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate'
          }
        ]
      },
    ]
  },

  // Generate build ID for cache busting only on actual deployments
  generateBuildId: async () => {
    // Use package.json version + git commit or timestamp
    const pkg = require('./package.json')
    const timestamp = process.env.VERCEL_GIT_COMMIT_SHA || Date.now()
    return `v${pkg.version}-${timestamp.toString().slice(-8)}`
  }
}

module.exports = nextConfig