'use client'

import { useEffect } from 'react'

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return
    
    if ('serviceWorker' in navigator) {
      // Register service worker for aggressive image caching
      navigator.serviceWorker.register('/sw.js')
        .then(() => {
          // Service worker registered successfully
        })
        .catch(() => {
          // Service worker registration failed
        })

      // Listen for service worker updates
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        // Service worker updated
      })
    }
  }, [])

  return null // This component renders nothing
}