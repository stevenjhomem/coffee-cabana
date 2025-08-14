// Unified Performance Manager
// Consolidates all performance optimizations from various components

export interface PerformanceConfig {
  // Image preloading configuration
  images: {
    story: string[]
    menu: string[]
    secondary: string[]
    locale: {
      pt: string[]
      en: string[]
    }
  }
  // Video files
  videos: string[]
  // Service worker configuration
  serviceWorker: {
    cacheName: string
    criticalImages: string[]
  }
}

export const PERFORMANCE_CONFIG: PerformanceConfig = {
  images: {
    story: [
      '/images/coffeecabana/farm.webp',
      '/images/coffeecabana/bernardo.webp',
      '/images/coffeecabana/family.png',
    ],
    menu: [
      '/images/coffeecabana/Banana_EcoCamp-52.jpg',
    ],
    secondary: [
      '/images/coffeecabana/Banana_EcoCamp-02.webp',
      '/images/coffeecabana/Banana_EcoCamp-08.webp',
      '/images/coffeecabana/Banana_EcoCamp-23.webp',
      '/images/coffeecabana/Banana_EcoCamp-30.webp',
      '/images/coffeecabana/Banana_EcoCamp-46.jpg',
      '/images/coffeecabana/Banana_EcoCamp-49.jpg',
    ],
    locale: {
      pt: [
        '/images/logos/story/portuguese/ourstorypt3.png',
        '/images/logos/menu/portuguese/menulogopt.png',
      ],
      en: [
        '/images/logos/story/english/ourstoryen.png', 
        '/images/logos/menu/english/menulogoen.png',
      ]
    }
  },
  videos: [
    '/images/coffeecabana/1080pvid.webm',
  ],
  serviceWorker: {
    cacheName: 'coffee-cabana-images-v1',
    criticalImages: [
      '/images/coffeecabana/initialpic.webp',
      '/images/coffeecabana/logo.svg',
      '/images/coffeecabana/farm.webp',
      '/images/coffeecabana/bernardo.webp',
      '/images/coffeecabana/family.png',
      '/images/coffeecabana/Banana_EcoCamp-52.jpg',
      '/images/coffeecabana/Banana_EcoCamp-02.webp',
      '/images/coffeecabana/Banana_EcoCamp-08.webp',
      '/images/coffeecabana/Banana_EcoCamp-23.webp',
      '/images/coffeecabana/Banana_EcoCamp-30.webp',
      '/images/logos/story/portuguese/ourstorypt3.png',
      '/images/logos/story/english/ourstoryen.png',
      '/images/logos/menu/portuguese/menulogopt.png',
      '/images/logos/menu/english/menulogoen.png',
    ]
  }
}

// Image preloading utilities
export const preloadImage = (src: string): void => {
  if (typeof window === 'undefined') return

  // Method 1: Create link element (most compatible)
  const link = document.createElement('link')
  link.rel = 'prefetch'
  link.href = src
  link.as = 'image'
  document.head.appendChild(link)

  // Method 2: Also use Image constructor for immediate caching
  const img = new Image()
  img.src = src
}

export const preloadVideo = (src: string): void => {
  if (typeof window === 'undefined') return

  const video = document.createElement('video')
  video.preload = 'metadata'
  video.src = src
}

// Service worker utilities
export const registerServiceWorker = async (): Promise<void> => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return

  try {
    await navigator.serviceWorker.register('/sw.js')
  } catch {
    // Service worker registration failed silently
  }
}

export const cleanupOldServiceWorkers = async (): Promise<void> => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return

  try {
    const registrations = await navigator.serviceWorker.getRegistrations()
    registrations.forEach((registration) => {
      if (registration.scope.includes('old-domain') || registration.scope.includes('sw.js')) {
        registration.unregister()
      }
    })
  } catch {
    // Cleanup failed silently
  }
}

// Route-based performance optimizations
export const isHomepageRoute = (pathname: string): boolean => {
  return pathname === '/' || pathname === '/en' || Boolean(pathname.match(/^\/[a-z]+$/))
}

// Unified prefetch function
export const prefetchResources = (
  locale: string = 'pt',
  delay: number = 0
): void => {
  if (typeof window === 'undefined') return

  const executePrefetch = () => {
    const resourcesToPrefetch = [
      ...PERFORMANCE_CONFIG.images.story,
      ...PERFORMANCE_CONFIG.images.menu,
      ...PERFORMANCE_CONFIG.images.secondary,
      ...PERFORMANCE_CONFIG.videos,
      ...PERFORMANCE_CONFIG.images.locale[locale as keyof typeof PERFORMANCE_CONFIG.images.locale] || PERFORMANCE_CONFIG.images.locale.pt,
      // Also prefetch the other locale for language switching
      ...PERFORMANCE_CONFIG.images.locale[locale === 'pt' ? 'en' : 'pt']
    ]

    // Remove duplicates
    const uniqueResources = [...new Set(resourcesToPrefetch)]

    // Try service worker first, fallback to manual prefetch
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'PREFETCH_IMAGES',
        images: uniqueResources
      })
    } else {
      // Fallback: manual prefetch
      uniqueResources.forEach((resourceSrc, index) => {
        setTimeout(() => {
          if (resourceSrc.includes('.webm') || resourceSrc.includes('.mp4')) {
            preloadVideo(resourceSrc)
          } else {
            preloadImage(resourceSrc)
          }
        }, index * 100) // 100ms between each prefetch
      })
    }
  }

  if (delay > 0) {
    setTimeout(executePrefetch, delay)
  } else {
    executePrefetch()
  }
}
