'use client'

import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"

// Client component for interactive elements only
export function ScrollIndicator({ locale }: { locale: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollText = locale === 'pt' ? 'rolar' : 'scroll'

  return (
    <div 
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-800" 
      style={{ opacity: mounted ? 1 : 0 }}
    >
      <div className="text-white hover:text-warm-tan transition-colors duration-300 cursor-pointer text-center">
        <div className="text-xs uppercase tracking-wider mb-2 opacity-80 font-semibold">{scrollText}</div>
        <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 mx-auto stroke-2" />
      </div>
    </div>
  )
}

// Client component for simple mounted state (legacy support)
export function ImageLoadingState({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div 
      className="transition-opacity duration-500" 
      style={{ opacity: mounted ? 1 : 0 }}
    >
      {children}
    </div>
  )
}

// Hook for managing story page image loading coordination
export function useStoryImageLoading() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [backgroundLoaded, setBackgroundLoaded] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)

  useEffect(() => {
    if (backgroundLoaded && logoLoaded) {
      setImagesLoaded(true)
    }
  }, [backgroundLoaded, logoLoaded])

  return {
    imagesLoaded,
    backgroundLoaded,
    logoLoaded,
    setBackgroundLoaded,
    setLogoLoaded
  }
}

// Client component for story hero section with coordinated image loading
interface StoryHeroSectionProps {
  locale: string
  logoSrc: string
  logoAlt: string
}

export function StoryHeroSection({ locale, logoSrc, logoAlt }: StoryHeroSectionProps) {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [backgroundLoaded, setBackgroundLoaded] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)

  useEffect(() => {
    if (backgroundLoaded && logoLoaded) {
      setImagesLoaded(true)
    }
  }, [backgroundLoaded, logoLoaded])

  return (
    <section className="relative h-[90vh] md:h-screen flex items-start justify-center overflow-hidden">
      {/* Photo Background - Show immediately when loaded */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/coffeecabana/farm.webp"
          alt={locale === 'en' ? "Coffee Cabana organic coffee farm in Terceira, Azores" : "Quinta de café orgânico Coffee Cabana na Terceira, Açores"}
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
          onLoad={() => setBackgroundLoaded(true)}
        />
      </div>

      {/* Hero Content - Show logo when loaded */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center justify-center h-full">
        <div className="mb-8">
          <div className="flex justify-center">
            <h1 className="relative z-20 select-none">
              <Image
                src={logoSrc}
                alt={logoAlt}
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
                onLoad={() => setLogoLoaded(true)}
              />
            </h1>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Show after images load */}
      {imagesLoaded && (
        <div>
          <ScrollIndicator locale={locale} />
        </div>
      )}
    </section>
  )
}