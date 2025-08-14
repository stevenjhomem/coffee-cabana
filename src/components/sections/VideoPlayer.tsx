'use client'

import { useState, useEffect, useRef } from 'react'

export default function VideoPlayer() {
  const [mounted, setMounted] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Progressive video loading - only after component mounts
  useEffect(() => {
    if (mounted && videoRef.current) {
      const video = videoRef.current
      
      // Delay video loading to not interfere with LCP
      const timer = setTimeout(() => {
        video.preload = 'metadata'
        video.muted = true
        video.playsInline = true
        video.load()
        
        const attemptPlay = async () => {
          try {
            await video.play()
            setVideoLoaded(true)
          } catch {
            setVideoError(true)
          }
        }
        
        attemptPlay()
      }, 1000) // Delay video loading by 1 second
      
      return () => clearTimeout(timer)
    }
  }, [mounted])

  if (!mounted || videoError) {
    return null
  }

  return (
    <div 
      className={`absolute inset-0 transition-opacity duration-1000 ${
        videoLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ zIndex: 1 }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        playsInline
        muted
      >
        <source src="/images/coffeecabana/1080pvid.webm" type="video/webm" />
      </video>
    </div>
  )
}