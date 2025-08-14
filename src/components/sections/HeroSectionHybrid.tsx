import Image from 'next/image'
import { ScrollIndicator } from '@/components/story/StoryClientComponents'
import VideoPlayer from './VideoPlayer'

interface HeroSectionProps {
  locale?: string
}

export default function HeroSectionHybrid({ locale = 'pt' }: HeroSectionProps) {
  return (
    <section className="relative h-[90vh] md:h-screen flex items-start justify-center overflow-hidden">
      {/* Static Background Image - Loads immediately for LCP */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/coffeecabana/initialpic.webp"
          alt={locale === 'pt' ? "Coffee Cabana - A única quinta de café orgânico da Terceira, Açores" : "Coffee Cabana - The only organic coffee farm in Terceira, Azores"}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Video Enhancement - Loads progressively and replaces background */}
      <VideoPlayer />

      {/* Hero Content - Server rendered, always on top */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center justify-center h-full">
        <div className="mb-8">
          <div className="flex justify-center">
            <h1 className="relative z-20 select-none">
              <Image
                src="/images/coffeecabana/logo.svg"
                alt="Coffee Cabana Logo"
                width={240}
                height={240}
                priority
                className="w-60 md:w-72 lg:w-80 h-60 md:h-72 lg:h-80 object-contain"
                style={{
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                  WebkitTouchCallout: 'none'
                } as React.CSSProperties}
                draggable="false"
              />
            </h1>
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-4">
            {locale === 'pt' ? 'A única quinta de café orgânico da Terceira' : 'The only organic coffee farm in Terceira'}
          </h2>
          <p className="text-lg md:text-xl text-white/80">
            {locale === 'pt' ? 'São Mateus da Calheta, Açores' : 'São Mateus da Calheta, Azores'}
          </p>
        </div>
      </div>

      {/* Scroll indicator - client component for interactivity */}
      <ScrollIndicator locale={locale} />
    </section>
  )
}