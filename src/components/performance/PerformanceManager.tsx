'use client'

import { useEffect } from 'react'
import { 
  registerServiceWorker, 
  cleanupOldServiceWorkers, 
  prefetchResources
} from '@/lib/utils/performance'

interface PerformanceManagerProps {
  locale?: string
}

export default function PerformanceManager({ 
  locale = 'pt'
}: PerformanceManagerProps) {
  useEffect(() => {
    // Register service worker
    registerServiceWorker()

    // Clean up old service workers
    cleanupOldServiceWorkers()

    // Prefetch resources immediately
    prefetchResources(locale, 0)
  }, [locale])

  // This component renders nothing - it's purely for performance optimization
  return null
}
