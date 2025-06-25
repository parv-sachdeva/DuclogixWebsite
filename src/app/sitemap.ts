import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ducologix.com'
  const locales = ['en', 'de', 'fr', 'es', 'zh']
  
  const routes = [
    '',
    '/business-consulting',
    '/life-sciences',
    '/case-studies',
    '/case-studies/bulkrna-app',
    '/case-studies/scrna-app',
    '/case-studies/global-pharma-supply-chain',
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Add all routes for all locales
  locales.forEach(locale => {
    routes.forEach(route => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : route.includes('case-studies') ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route.includes('case-studies') ? 0.8 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map(loc => [loc, `${baseUrl}/${loc}${route}`])
          )
        }
      })
    })
  })

  return sitemap
}
