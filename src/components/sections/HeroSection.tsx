'use client'

import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

interface HeroSectionProps {
  locale?: string
}

export default function HeroSection({ locale = 'pt' }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const logoRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && videoRef.current) {
      const video = videoRef.current
      // Try to play the video manually if autoplay fails
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Video autoplay failed, trying manual play:', error)
          // For iOS and other browsers that might block autoplay
          video.muted = true
          video.play().catch(e => {
            console.log('Manual video play also failed:', e)
            setVideoFailed(true)
          })
        })
      }
    }
  }, [mounted])

  useEffect(() => {
    if (videoLoaded && logoRef.current && scrollRef.current) {
      logoRef.current.style.opacity = '1'
      scrollRef.current.style.opacity = '1'
    }
  }, [videoLoaded])

  useEffect(() => {
    return () => {
      const video = videoRef.current
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
    <section className="relative h-[90vh] md:h-screen flex items-start justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback background image - only show if video fails */}
        {videoFailed && (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/images/coffeecabana/Banana_EcoCamp-02.jpg)' }}
          />
        )}
        {/* Video container - always present */}
        <div className="absolute inset-0 w-full h-full">
          {mounted && (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover pointer-events-none"
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => {
                setVideoFailed(true)
              }}
              onCanPlay={() => {}}
              style={{ touchAction: 'none' }}
            >
              <source src="/images/coffeecabana/backgroundvideo2.mp4" type="video/mp4" />
            </video>
          )}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center justify-center h-full">
        {/* Main title - Brand name stays consistent */}
        <div ref={logoRef} className="mb-8 transition-opacity duration-800" style={{ opacity: 0 }}>
          <div className="flex justify-center">
            <h1
              className="w-96 md:w-[500px] lg:w-[600px] h-32 md:h-40 lg:h-48 bg-contain bg-center bg-no-repeat brightness-0 invert relative z-10 select-none"
              style={{
                backgroundImage: `url('/images/logos/home/coffeecabana.png')`,
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none',
                WebkitTouchCallout: 'none'
              } as React.CSSProperties}
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
            >
              <span className="sr-only">Coffee Cabana - Organic Coffee from Terceira, Azores</span>
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