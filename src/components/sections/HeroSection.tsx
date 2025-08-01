'use client'

import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

interface HeroSectionProps {
  locale?: string
}

export default function HeroSection({ locale = 'pt' }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const logoRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Aggressive video loading strategy
  useEffect(() => {
    if (mounted && videoRef.current) {
      const video = videoRef.current
      
      // Start loading immediately with aggressive settings
      video.preload = 'auto' // Load entire video
      video.load()
      
      // Multiple attempts for maximum compatibility
      const attemptPlay = async () => {
        try {
          // Ensure video is muted for autoplay policies
          video.muted = true
          video.playsInline = true
          
          // First attempt
          await video.play()
        } catch (error1) {
          console.log('First play attempt failed:', error1)
          
          try {
            // Second attempt with a small delay
            await new Promise(resolve => setTimeout(resolve, 100))
            await video.play()
          } catch (error2) {
            console.log('Second play attempt failed:', error2)
            
            // Third attempt - force reload and try again
            try {
              video.load()
              await new Promise(resolve => setTimeout(resolve, 200))
              await video.play()
            } catch (error3) {
              console.log('All play attempts failed:', error3)
              setVideoError(true)
            }
          }
        }
      }
      
      // Start attempting to play as soon as possible
      attemptPlay()
    }
  }, [mounted])

  useEffect(() => {
    if (videoLoaded && logoRef.current && scrollRef.current) {
      logoRef.current.style.opacity = '1'
      scrollRef.current.style.opacity = '1'
    }
  }, [videoLoaded])

  useEffect(() => {
    const video = videoRef.current
    return () => {
      if (video) {
        video.pause()
        video.currentTime = 0
      }
    }
  }, [])

  const content = {
    pt: {
      subtitle: "Café Orgânico de Terceira",
      description: "O único café cultivado e torrado na Ilha Terceira. Experimente nossa jornada da plantação à chávena no coração dos Açores.",
      ctaPrimary: "Prove Nosso Café",
      ctaSecondary: "Visite Nossa Quinta",
      scroll: "rolar",
      features: {
        organic: { title: "100% Orgânico", desc: "Cultivado sem químicos" },
        unique: { title: "Único em Terceira", desc: "Exclusivo da nossa quinta" },
        handRoasted: { title: "Torrado à Mão", desc: "Métodos tradicionais" }
      }
    },
    en: {
      subtitle: "Organic Coffee from Terceira",
      description: "The only coffee grown and roasted on Terceira Island. Experience our farm-to-cup journey in the heart of the Azores.",
      ctaPrimary: "Try Our Coffee",
      ctaSecondary: "Visit Our Farm",
      scroll: "scroll",
      features: {
        organic: { title: "100% Organic", desc: "Grown without chemicals" },
        unique: { title: "Unique to Terceira", desc: "Exclusive to our farm" },
        handRoasted: { title: "Hand Roasted", desc: "Traditional methods" }
      }
    }
  }

  const t = content[locale as keyof typeof content] || content.pt

  return (
    <section className="relative h-[100vh] flex items-start justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Video container - optimized for fastest loading globally */}
        <div className="absolute inset-0 w-full h-full">
          {/* Poster image - always shows first */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url(/images/coffeecabana/initialpic.jpg)',
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
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            onLoadedData={() => setVideoLoaded(true)}
            onCanPlay={() => setVideoLoaded(true)}
            onLoadedMetadata={() => {
              // Try to play as soon as metadata is available
              if (videoRef.current) {
                videoRef.current.play().catch(() => {
                  // Ignore errors here, main retry logic is in useEffect
                })
              }
            }}
            onError={() => {
              console.log('Video failed to load')
              setVideoError(true)
            }}
            style={{ 
              touchAction: 'none',
              zIndex: videoLoaded && !videoError ? 10 : 0
            }}
          >
            <source src="/images/coffeecabana/1080pvid.webm" type="video/webm" />
          </video>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center justify-center h-full">
        {/* Main title - Brand name stays consistent */}
        <div ref={logoRef} className="mb-8 transition-opacity duration-800" style={{ opacity: mounted ? 1 : 0 }}>
          <div className="flex justify-center">
            <h1 className="relative z-10 select-none">
              <Image
                src="/images/logos/home/coffeecabana.png"
                alt="Coffee Cabana - Organic Coffee from Terceira, Azores"
                width={600}
                height={192}
                priority
                className="w-96 md:w-[500px] lg:w-[600px] h-32 md:h-40 lg:h-48 object-contain brightness-0 invert"
                style={{
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                  WebkitTouchCallout: 'none'
                } as React.CSSProperties}
                draggable="false"
                onDragStart={(e) => e.preventDefault()}
              />
            </h1>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned within the section */}
      <div ref={scrollRef} className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-800" style={{ opacity: 0 }}>
        <div className="text-white hover:text-warm-tan transition-colors duration-300 cursor-pointer text-center">
          <div className="text-xs uppercase tracking-wider mb-2 opacity-80 font-semibold">{t.scroll}</div>
          <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 mx-auto stroke-2" />
        </div>
      </div>
    </section>
  )
}