// Service Worker for silent cache management
const CACHE_NAME = `coffee-cabana-v${Date.now()}`;
const STATIC_CACHE = `coffee-cabana-static-v${Date.now()}`;

// Install new version silently
self.addEventListener('install', (event) => {
  // Don't skip waiting - let updates happen naturally
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    // Clear old caches silently
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Take control of all clients silently
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // For HTML pages, always fetch from network
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone response for cache
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // Fallback to cache if network fails
          return caches.match(request);
        })
    );
    return;
  }

  // For static assets, cache first
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        // Fetch in background to update cache
        fetch(request).then((response) => {
          const responseClone = response.clone();
          caches.open(STATIC_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
        });
        return cached;
      }

      return fetch(request).then((response) => {
        const responseClone = response.clone();
        caches.open(STATIC_CACHE).then((cache) => {
          cache.put(request, responseClone);
        });
        return response;
      });
    })
  );
});