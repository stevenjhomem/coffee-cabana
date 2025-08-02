/** @type {import('next').NextConfig} */
const nextConfig = {
  // SEO and Performance optimizations
  experimental: {
    optimizeCss: true,
    cssChunking: 'loose',
  },
  
  // Optimize for modern browsers - remove legacy polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: false,
  },
  
  // Use SWC minification and target modern browsers
  swcMinify: true,
  
  
  
  // Development configuration
  allowedDevOrigins: ['192.168.0.170'],
  
  // Optimized image configuration with extended cache lifetimes
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images for 1 year
    minimumCacheTTL: 31536000,
    // Enable static optimization for better caching
    unoptimized: false,
    // Quality settings for better compression
    quality: 85,
    // Enable lazy loading by default
    loader: 'default',
    // Optimize for better performance
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },



  // Optimized cache headers for different asset types
  async headers() {
    return [
      // Cache static images for 1 year
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, s-maxage=31536000, immutable',
          },
        ],
      },
      // Cache Next.js optimized images for 1 year
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, s-maxage=31536000, immutable',
          },
        ],
      },
      // Cache static assets for 1 year
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, s-maxage=31536000, immutable',
          },
        ],
      },
      // Cache fonts for 1 year
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, s-maxage=31536000, immutable',
          },
        ],
      },
      // Cache video files for 1 year
      {
        source: '/images/:path*.(mp4|webm|mov|avi)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, s-maxage=31536000, immutable',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      // Cache favicon and icons for 1 week
      {
        source: '/(favicon.ico|icon.png|apple-touch-icon.png|manifest.json)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, s-maxage=604800',
          },
        ],
      },
      // Default cache for HTML pages (shorter for dynamic content)
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },

  // Optimize bundle for modern browsers - exclude polyfills  
  webpack: (config: any, options: any) => {
    if (!options.isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
      
      // Exclude polyfills for modern browsers
      config.resolve.alias = {
        ...config.resolve.alias,
        'core-js/modules': false,
        'regenerator-runtime': false,
      };
    }
    return config;
  },
}

module.exports = nextConfig