'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface VideoBackgroundProps {
  posterSrc: string
  videoSrc: string
  alt: string
}

export default function VideoBackground({ posterSrc, videoSrc, alt }: VideoBackgroundProps) {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Video loading and playing strategy - runs on every mount/re-render
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current
      
      // Reset video state
      setVideoError(false)
      setVideoLoaded(false)
      
      video.preload = 'metadata'
      video.muted = true
      video.playsInline = true
      video.currentTime = 0 // Ensure it starts from beginning
      video.load()
      
      // Simple play attempt - no delays
      const attemptPlay = async () => {
        try {
          await video.play()
        } catch {
          setVideoError(true)
        }
      }
      
      // Add a small delay to ensure video is ready
      setTimeout(() => {
        attemptPlay()
      }, 100)

      // Immediate fallback: show video after play attempt
      const immediateFallback = setTimeout(() => {
        setVideoLoaded(true)
      }, 200)

      // Backup fallback: if video doesn't load within 1 second, show it anyway
      const fallbackTimer = setTimeout(() => {
        setVideoLoaded(true)
      }, 1000)

      return () => {
        clearTimeout(immediateFallback)
        clearTimeout(fallbackTimer)
      }
    }
  }, []) // Empty dependency array - runs on every mount

  // Cleanup video on unmount
  useEffect(() => {
    return () => {
      const video = videoRef.current
      if (video) {
        video.pause()
        video.currentTime = 0
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      {/* Video container - optimized for fastest loading globally */}
      <div className="absolute inset-0 w-full h-full">
        {/* Poster image - optimized for LCP */}
        <Image
          src={posterSrc}
          alt={alt}
          fill
          priority
          quality={75}
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover"
          style={{ 
            zIndex: videoLoaded && !videoError ? 0 : 10
          }}
        />
        
        {/* Video element - starts hidden, appears when loaded */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          onLoadedData={() => {
            setVideoLoaded(true)
          }}
          onCanPlay={() => {
            setVideoLoaded(true)
          }}
          onPlay={() => {
            setVideoLoaded(true) // Also set loaded when video starts playing
          }}
          onLoadedMetadata={() => {
            // Video metadata loaded
          }}
          onError={() => {
            setVideoError(true)
          }}
          style={{ 
            touchAction: 'none',
            zIndex: videoLoaded && !videoError ? 10 : 0
          }}
        >
          <source src={videoSrc} type="video/webm" />
        </video>
      </div>
    </div>
  )
} 