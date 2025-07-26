'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const images = [
  '/images/coffeecabana/Banana_EcoCamp-08.jpg',
  '/images/coffeecabana/Banana_EcoCamp-30.jpg',
  '/images/coffeecabana/Banana_EcoCamp-23.jpg',
  '/images/coffeecabana/blackandwhitepour.png',
  '/images/coffeecabana/cooltea.png',
]

export default function ImageCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    let animationId: number
    let startTime: number
    
    const updateScrollSpeed = () => {
      return window.innerWidth < 768 ? 0.0325 : 0.0635 // pixels per millisecond
    }
    
    const scrollSpeed = updateScrollSpeed()

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime

      const scrollDistance = elapsed * scrollSpeed
      const totalWidth = scroller.scrollWidth / 3 // Third because we tripled images

      scroller.style.transform = `translateX(-${scrollDistance % totalWidth}px)`
      
      animationId = requestAnimationFrame(animate)
    }

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      animationId = requestAnimationFrame(animate)
    }, 100)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className="bg-[#eee8df] py-15 md:py-20 px-[10px]">
      <div className="overflow-hidden">
        <div className="flex justify-center items-center">
          <div 
            ref={scrollerRef}
            className="flex gap-[10px]"
            style={{ 
              width: `${images.length * 3 * 51}vw` // Triple width for seamless loop
            }}>
            {/* First set of images */}
            {images.map((image, index) => (
              <div
                key={`first-${index}`}
                className="relative w-[50vw] h-[300px] md:h-[500px] flex-shrink-0"
              >
                <Image
                  src={image}
                  alt={`Coffee Cabana - Organic coffee farm ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="50vw"
                  loading={index < 2 ? "eager" : "lazy"}
                  priority={index === 0}
                />
              </div>
            ))}
            {/* Second set for seamless loop */}
            {images.map((image, index) => (
              <div
                key={`second-${index}`}
                className="relative w-[50vw] h-[300px] md:h-[500px] flex-shrink-0"
              >
                <Image
                  src={image}
                  alt={`Coffee Cabana - Organic coffee farm ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="50vw"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Third set for seamless loop */}
            {images.map((image, index) => (
              <div
                key={`third-${index}`}
                className="relative w-[50vw] h-[300px] md:h-[500px] flex-shrink-0"
              >
                <Image
                  src={image}
                  alt={`Coffee Cabana - Organic coffee farm ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="50vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}