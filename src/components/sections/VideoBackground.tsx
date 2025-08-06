'use client'

import { useEffect, useRef } from 'react'

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      // Try to play the video
      videoRef.current.play().catch(() => {
        // Video autoplay not supported on this device
      })
    }
  }, [])

  return (
    <div className="absolute inset-0">
      {/* Fallback background image */}
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/coffeecabana/Banana_EcoCamp-02.webp')`
        }}
      />
      
      {/* Video overlay */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/coffeecabana/1080pvid.webm" type="video/webm" />
      </video>
    </div>
  )
} 