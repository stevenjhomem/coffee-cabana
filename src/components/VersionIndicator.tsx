'use client'

import { useState, useEffect } from 'react'

export default function VersionIndicator() {
  const [buildTime] = useState(() => new Date().toISOString())
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Double-click bottom right corner to show version
    const handleDoubleClick = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      // Check if click is in bottom-right 100px area
      if (clientX > innerWidth - 100 && clientY > innerHeight - 100) {
        setIsVisible(prev => !prev)
      }
    }

    document.addEventListener('dblclick', handleDoubleClick)
    return () => document.removeEventListener('dblclick', handleDoubleClick)
  }, [buildTime])

  if (!isVisible) return null

  return (
    <div 
      className="fixed bottom-4 right-4 bg-black/80 text-white text-xs px-3 py-2 rounded-lg z-50 font-mono"
      onClick={() => setIsVisible(false)}
    >
      Build: {buildTime.slice(0, 19).replace('T', ' ')}
    </div>
  )
}