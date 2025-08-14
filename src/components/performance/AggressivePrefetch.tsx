'use client'

import { useEffect } from 'react'

interface PrefetchConfig {
  // Story page images
  storyImages: string[]
  // Menu page images  
  menuImages: string[]
  // Homepage secondary images (load after critical)
  secondaryImages: string[]
  // Video files
  videoFiles: string[]
  // Locale-specific images
  localeImages: {
    pt: string[]
    en: string[]
  }
}

const PREFETCH_CONFIG: PrefetchConfig = {
  storyImages: [
    '/images/coffeecabana/farm.webp',
    '/images/coffeecabana/bernardo.webp',
    '/images/coffeecabana/family.png',
  ],
  menuImages: [
    '/images/coffeecabana/Banana_EcoCamp-52.jpg',
  ],
  secondaryImages: [
    '/images/coffeecabana/Banana_EcoCamp-02.webp',
    '/images/coffeecabana/Banana_EcoCamp-08.webp',
    '/images/coffeecabana/Banana_EcoCamp-23.webp',
    '/images/coffeecabana/Banana_EcoCamp-30.webp',
    '/images/coffeecabana/Banana_EcoCamp-46.jpg',
    '/images/coffeecabana/Banana_EcoCamp-49.jpg',
  ],
  videoFiles: [
    '/images/coffeecabana/1080pvid.webm',
  ],
  localeImages: {
    pt: [
      '/images/logos/story/portuguese/ourstorypt3.png',
      '/images/logos/menu/portuguese/menulogopt.png',
    ],
    en: [
      '/images/logos/story/english/ourstoryen.png', 
      '/images/logos/menu/english/menulogoen.png',
    ]
  }
}

interface AggressivePrefetchProps {
  locale?: string
  delay?: number // Delay before starting prefetch (ms)
}

export default function AggressivePrefetch({ locale = 'pt', delay = 2000 }: AggressivePrefetchProps) {
  
  useEffect(() => {
    // Wait for critical homepage resources to load first
    const prefetchTimer = setTimeout(() => {
      // Combine all resources to prefetch
      const resourcesToPrefetch = [
        ...PREFETCH_CONFIG.storyImages,
        ...PREFETCH_CONFIG.menuImages,
        ...PREFETCH_CONFIG.secondaryImages,
        ...PREFETCH_CONFIG.videoFiles,
        ...PREFETCH_CONFIG.localeImages[locale as keyof typeof PREFETCH_CONFIG.localeImages] || PREFETCH_CONFIG.localeImages.pt,
        // Also prefetch the other locale for language switching
        ...PREFETCH_CONFIG.localeImages[locale === 'pt' ? 'en' : 'pt']
      ]

      // Remove duplicates
      const uniqueResources = [...new Set(resourcesToPrefetch)]

      // Try service worker first, fallback to manual prefetch
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        // Service worker is active, use it for batched prefetching
        navigator.serviceWorker.controller.postMessage({
          type: 'PREFETCH_IMAGES',
          images: uniqueResources
        })
      } else {
        // Fallback: manual prefetch
        uniqueResources.forEach((resourceSrc, index) => {
          // Stagger the prefetching to avoid overwhelming the network
          setTimeout(() => {
            prefetchImage(resourceSrc)
          }, index * 100) // 100ms between each prefetch
        })
      }

    }, delay)

    return () => clearTimeout(prefetchTimer)
  }, [locale, delay])

  return null // This component renders nothing
}

// Utility function to prefetch an image
function prefetchImage(src: string) {
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

// Export prefetch configuration for reuse
export { PREFETCH_CONFIG }