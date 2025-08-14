'use client'

import { useEffect, useState } from 'react'

interface ClientOnlyProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  ssr?: boolean
}

/**
 * ClientOnly component - Better alternative to mounted state pattern
 * 
 * Use this when you need to prevent hydration mismatches but want to avoid
 * the flash of unstyled content that comes with the mounted state pattern.
 * 
 * @param children - Content to render on client
 * @param fallback - Optional fallback content (renders on server and during hydration)
 * @param ssr - Whether to render children on server (default: false)
 */
export default function ClientOnly({ 
  children, 
  fallback = null, 
  ssr = false 
}: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(ssr)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  // If SSR is enabled, render children immediately
  if (ssr) {
    return <>{children}</>
  }

  // If not SSR, show fallback until client hydrates
  if (!hasMounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

/**
 * Hook for client-only logic
 * Returns true when component has mounted on client
 */
export function useClientOnly() {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted
}
