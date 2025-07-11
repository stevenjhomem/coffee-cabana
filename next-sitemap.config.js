/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.coffeecabana.pt',
  generateRobotsTxt: false, // Keep existing robots.txt
  exclude: ['/api/*', '/admin/*'],
  generateIndexSitemap: false,
  alternateRefs: [
    {
      href: 'https://www.coffeecabana.pt',
      hreflang: 'pt',
    },
    {
      href: 'https://www.coffeecabana.pt/en',
      hreflang: 'en',
    },
  ],
  transform: async (config, path) => {
    // Add lastmod for better SEO
    return {
      loc: path,
      changefreq: path === '/' || path === '/en' ? 'daily' : 'weekly',
      priority: path === '/' || path === '/en' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    }
  },
}