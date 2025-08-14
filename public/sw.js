// Service Worker for aggressive image caching
const CACHE_NAME = 'coffee-cabana-images-v1'

// All critical images to cache aggressively
const CRITICAL_IMAGES = [
  // Homepage images
  '/images/coffeecabana/initialpic.webp',
  '/images/coffeecabana/logo.svg',
  
  // Story page images
  '/images/coffeecabana/farm.webp',
  '/images/coffeecabana/bernardo.webp',
  '/images/coffeecabana/family.png',
  
  // Menu page images
  '/images/coffeecabana/Banana_EcoCamp-52.jpg',
  
  // Carousel images (if they exist)
  '/images/coffeecabana/Banana_EcoCamp-02.webp',
  '/images/coffeecabana/Banana_EcoCamp-08.webp',
  '/images/coffeecabana/Banana_EcoCamp-23.webp',
  '/images/coffeecabana/Banana_EcoCamp-30.webp',
  
  // Logo variations
  '/images/logos/story/portuguese/ourstorypt3.png',
  '/images/logos/story/english/ourstoryen.png',
  '/images/logos/menu/portuguese/menulogopt.png',
  '/images/logos/menu/english/menulogoen.png',
]

// Install event - cache critical images immediately
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(CRITICAL_IMAGES)
      })
      .then(() => {
        return self.skipWaiting() // Activate immediately
      })
      .catch((error) => {
        return self.skipWaiting() // Continue anyway
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => {
      return self.clients.claim() // Take control immediately
    })
  )
})

// Fetch event - serve cached images instantly
self.addEventListener('fetch', (event) => {
  // Only handle image requests
  if (event.request.destination === 'image' || event.request.url.includes('/images/')) {
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse
          }
          
          // Not in cache, fetch and cache it
          return fetch(event.request)
            .then((response) => {
              // Only cache successful responses
              if (response.status === 200) {
                const responseToCache = response.clone()
                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(event.request, responseToCache)
                  })
              }
              return response
            })
        })
    )
  }
})

// Listen for prefetch messages from the main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PREFETCH_IMAGES') {
    const images = event.data.images
    if (Array.isArray(images)) {
      images.forEach((imageUrl) => {
        fetch(imageUrl)
          .then((response) => {
            if (response.status === 200) {
              return caches.open(CACHE_NAME)
                .then((cache) => {
                  return cache.put(imageUrl, response)
                })
            }
          })
          .catch(() => {
            // Silently fail for prefetch requests
          })
      })
    }
  }
})