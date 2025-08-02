/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.coffeecabana.pt',
  generateRobotsTxt: false,
  exclude: ['*'],
  generateIndexSitemap: false,
  
  additionalPaths: async () => [
    // Portuguese pages (default)
    { loc: '/', changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() },
    { loc: '/menu', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/story', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() },
    // English pages  
    { loc: '/en', changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() },
    { loc: '/en/menu', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/en/story', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() },
  ],
  
  transform: async (config, path) => {
    // Define the base path for alternate links
    const isEnPath = path.startsWith('/en')
    const basePath = isEnPath ? path.replace('/en', '') : path
    const cleanBasePath = basePath === '' ? '/' : basePath
    
    return {
      loc: path,
      changefreq: path === '/' || path === '/en' ? 'daily' : 'weekly', 
      priority: path === '/' || path === '/en' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        { href: `https://www.coffeecabana.pt${cleanBasePath === '/' ? '' : cleanBasePath}`, hreflang: 'pt' },
        { href: `https://www.coffeecabana.pt/en${cleanBasePath === '/' ? '' : cleanBasePath}`, hreflang: 'en' },
        { href: `https://www.coffeecabana.pt${cleanBasePath === '/' ? '' : cleanBasePath}`, hreflang: 'x-default' },
      ],
    }
  },
}