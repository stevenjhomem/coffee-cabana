"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import GoogleMapsButton from "@/components/ui/GoogleMapsButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

interface Props {
  params: Promise<{ locale: string }>
}

export default function StoryPage({ params }: Props) {
  const [locale, setLocale] = useState<string>("en")

  useEffect(() => {
    const getLocale = async () => {
      const { locale: resolvedLocale } = await params
      setLocale(resolvedLocale)
    }
    getLocale()
  }, [params])

  const content = {
    en: {
      logo: "/images/logos/story/english/ourstoryen.png",
      hero: {
        title: "FROM FARM TO CUP",
      },
      story: {
        title: "Our Story Begins With",
        name: "José Bernardo",
        paragraphs: [
          "José is the one who started it all. Born on Terceira Island, he moved to Angola, Africa, with his family in 1958 at the age of eight. From the late 1950s through the early 1970s, they managed a farm, where José gained extensive knowledge and experience in African agriculture.",
          "When the war broke out in Angola, like many other Portuguese families, they were forced to flee—returning to Portugal empty-handed.",
          "Soon after, they emigrated to California, USA. However, it wasn't long before José decided to return to his roots on Terceira. Back home, he worked for the regional government as the CEO of the Agriculture Department.",
          "After retiring, he purchased a piece of land he believed had the potential to grow tropical fruits. That's when he began planting bananas and coffee.",
          "In 2016, as a personal project and hobby, he built his first wooden cabin. Today, that vision has expanded into a beautiful eco retreat with six simple cabins, three luxury cabins, and various amenities throughout the property.",
          "In 2019, he created Coffee Cabana. Originally intended to serve guests, it quickly became a place to share their unique, homegrown coffee with the public."
        ]
      },
      coffeeCraft: {
        title: "Our Story Continues With",
        subtitle: "Marcel and Marta",
        paragraphs: [
          "Marcel, the son of a farmer and a veterinarian, grew up with a deep connection to nature and animals. After finishing high school, he decided to pursue his studies in the Netherlands, where his mother is originally from. There, he completed a degree in Maritime Operations and began working aboard Dutch-flagged ships as a Maritime Officer.",
          "During one of his leaves, Marcel met Marta, with whom he had his first daughter. Realizing that maritime life meant long periods away from home—and not wanting to miss his daughter growing up—Marcel made the decision to return to the Azores.",
          "He settled on Terceira Island, where Marta was living. In 2023, Bernardo was searching for someone new to manage Banana Eco Camp and Coffee Cabana. After an extensive search, he recognized that Marcel's farming background and the versatile skills he had acquired at sea made him the ideal candidate.",
          "Today, Marcel and Marta live on the farm with their two young daughters. Together, they are always on hand to welcome guests with warmth and care."
        ]
      },
      footer: {
        title: "Come Be Part Of Our Story",
        subtitle: "One Cup At A Time",
        description: "Visit us to taste the difference that passion, quality, and family tradition make.",
        button: "Come Visit Us"
      }
    }
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen flex items-start justify-center overflow-hidden">
        {/* Photo Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/images/coffeecabana/farm.jpeg")`
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center justify-center h-full">
          {/* Main title - Brand name stays consistent */}
          <div className="mb-8">
            <div className="flex justify-center">
              <div
                className="w-96 md:w-[500px] lg:w-[600px] h-32 md:h-40 lg:h-48 bg-contain bg-center bg-no-repeat brightness-0 invert relative z-20 select-none"
                style={{
                  backgroundImage: locale === "pt" 
                    ? `url("/images/logos/story/portuguese/ourstorypt3.png")`
                    : `url("/images/logos/story/english/ourstoryen.png")`,
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  msUserSelect: "none",
                  WebkitTouchCallout: "none"
                }}
                draggable="false"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator - positioned within the section */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
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
                {t.story.title}
                <br />
                <span className="text-amber-600">{t.story.name}</span>
              </h2>
              <div className="relative mb-8">
                <Image
                  src="/images/coffeecabana/bernardo.jpeg"
                  alt="José Bernardo working in the banana plantation at Coffee Cabana farm"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {t.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* Desktop: Text + Image (original layout) */}
            <div className="hidden lg:block">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {t.story.title}
                <br />
                <span className="text-amber-600">{t.story.name}</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {t.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <Image
                src="/images/coffeecabana/bernardo.jpeg"
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
                {t.coffeeCraft.title}
                <br />
                <span className="text-amber-600">{t.coffeeCraft.subtitle}</span>
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
                {t.coffeeCraft.paragraphs.map((paragraph, index) => (
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
                {t.coffeeCraft.title}
                <br />
                <span className="text-amber-600">{t.coffeeCraft.subtitle}</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {t.coffeeCraft.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            {t.footer.title}
          </h2>
          <p className="text-xl md:text-2xl text-amber-400 mb-8">
            {t.footer.subtitle}
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            {t.footer.description}
          </p>
          <GoogleMapsButton 
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-colors duration-300"
          >
            {t.footer.button}
          </GoogleMapsButton>
        </div>
      </section>
    </div>
  )
} 