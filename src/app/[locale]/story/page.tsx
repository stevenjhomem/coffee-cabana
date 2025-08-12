"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import GoogleMapsButton from "@/components/ui/GoogleMapsButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { storyContent } from "@/constants/story"

// Critical resource preloading for story page LCP
const CriticalResourcePreload = ({ locale }: { locale: string }) => (
  <>
    <link rel="preload" href="/images/coffeecabana/farm.webp" as="image" fetchPriority="high" />
    <link rel="dns-prefetch" href="/images/coffeecabana/" />
    <link rel="dns-prefetch" href="/images/logos/story/" />
  </>
)

interface Props {
  params: Promise<{ locale: string }>
}

export default function StoryPage({ params }: Props) {
  const [locale, setLocale] = useState<string>("en")
  const [mounted, setMounted] = useState(false)
  const [backgroundLoaded, setBackgroundLoaded] = useState(false)

  useEffect(() => {
    const getLocale = async () => {
      const { locale: resolvedLocale } = await params
      setLocale(resolvedLocale)
    }
    getLocale()
  }, [params])

  useEffect(() => {
    setMounted(true)
  }, [])


  return (
    <>
      <CriticalResourcePreload locale={locale} />
      <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen flex items-start justify-center overflow-hidden">
        {/* Photo Background - Optimized for LCP */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/coffeecabana/farm.webp"
            alt="Coffee Cabana organic coffee farm in Terceira, Azores"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center justify-center h-full">
          {/* Main title - Brand name stays consistent */}
          <div className="mb-8 transition-opacity duration-800" style={{ opacity: mounted ? 1 : 0 }}>
            <div className="flex justify-center">
              <h1 className="relative z-20 select-none">
                <Image
                  src={locale === "pt" ? "/images/logos/story/portuguese/ourstorypt3.png" : "/images/logos/story/english/ourstoryen.png"}
                  alt={locale === "pt" ? "A Nossa História - Coffee Cabana" : "Our Story - Coffee Cabana"}
                  width={600}
                  height={192}
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
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-800" style={{ opacity: mounted ? 1 : 0 }}>
          <div className="text-white hover:text-warm-tan transition-colors duration-300 cursor-pointer text-center">
            <div className="text-xs uppercase tracking-wider mb-2 opacity-80 font-semibold">scroll</div>
            <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 mx-auto stroke-2" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mobile: Title + Image + Text */}
            <div className="lg:hidden">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {storyContent.en.story.title}
                <br />
                <span className="text-amber-600">{storyContent.en.story.name}</span>
              </h2>
              <div className="relative mb-8">
                <Image
                  src="/images/coffeecabana/bernardo.webp"
                  alt="José Bernardo working in the banana plantation at Coffee Cabana farm"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {storyContent.en.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* Desktop: Text + Image (original layout) */}
            <div className="hidden lg:block">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {storyContent.en.story.title}
                <br />
                <span className="text-amber-600">{storyContent.en.story.name}</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {storyContent.en.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <Image
                src="/images/coffeecabana/bernardo.webp"
                alt="José Bernardo working in the banana plantation at Coffee Cabana farm"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Craft Section */}
      <section className="py-24 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mobile: Title + Image + Text */}
            <div className="lg:hidden">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {storyContent.en.coffeeCraft.title}
                <br />
                <span className="text-amber-600">{storyContent.en.coffeeCraft.subtitle}</span>
              </h2>
              <div className="relative mb-8">
                <Image
                  src="/images/coffeecabana/family.png"
                  alt="Marcel, Marta and their two daughters at Coffee Cabana farm"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {storyContent.en.coffeeCraft.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* Desktop: Image + Text (original layout) */}
            <div className="hidden lg:block order-2 lg:order-1 relative">
              <Image
                src="/images/coffeecabana/family.png"
                alt="Marcel, Marta and their two daughters at Coffee Cabana farm"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div className="hidden lg:block order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {storyContent.en.coffeeCraft.title}
                <br />
                <span className="text-amber-600">{storyContent.en.coffeeCraft.subtitle}</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {storyContent.en.coffeeCraft.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-black">
            {storyContent.en.footer.title}
            <br />
            <span className="text-amber-600">{storyContent.en.footer.subtitle}</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            {storyContent.en.footer.description}
          </p>
          <GoogleMapsButton 
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-colors duration-300"
          >
            {storyContent.en.footer.button}
          </GoogleMapsButton>
        </div>
      </section>
      </div>
    </>
  )
} 