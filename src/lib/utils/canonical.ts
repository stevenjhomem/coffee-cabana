export function generateCanonicalUrl(pathname: string, locale?: string): string {
  const baseUrl = 'https://coffeecabana.pt' // Update this to your actual domain
  
  // Remove locale prefix from pathname if it exists
  let cleanPath = pathname
  
  // If we have a locale and it's not Portuguese, remove the locale prefix
  if (locale && locale !== 'pt') {
    cleanPath = pathname.replace(`/${locale}`, '')
  }
  
  // Ensure path starts with /
  if (!cleanPath.startsWith('/')) {
    cleanPath = `/${cleanPath}`
  }
  
  // For Portuguese (default locale), use the path without locale prefix
  if (!locale || locale === 'pt') {
    return `${baseUrl}${cleanPath}`
  }
  
  // For other locales, include the locale prefix
  return `${baseUrl}/${locale}${cleanPath}`
}

export function generateAlternateUrls(pathname: string): Record<string, string> {
  const baseUrl = 'https://coffeecabana.pt' // Update this to your actual domain
  const locales = ['pt', 'en', 'de', 'es', 'fr']
  
  // Remove any existing locale prefix
  let cleanPath = pathname
  for (const locale of locales) {
    cleanPath = cleanPath.replace(`/${locale}`, '')
  }
  
  // Ensure path starts with /
  if (!cleanPath.startsWith('/')) {
    cleanPath = `/${cleanPath}`
  }
  
  const alternateUrls: Record<string, string> = {}
  
  locales.forEach(locale => {
    if (locale === 'pt') {
      // Portuguese is the default, no prefix
      alternateUrls[locale] = `${baseUrl}${cleanPath}`
    } else {
      // Other locales have prefix
      alternateUrls[locale] = `${baseUrl}/${locale}${cleanPath}`
    }
  })
  
  return alternateUrls
} 