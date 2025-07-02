import type { Metadata } from 'next'
import React from 'react'
import Image from "next/image"
import GoogleMapsButton from "@/components/ui/GoogleMapsButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Sobre Nós - Coffee Cabana | Açores',
  description: 'Descubra a história por detrás do Coffee Cabana, a única quinta de café na Ilha Terceira, e o nosso compromisso com o café orgânico e a agricultura sustentável.',
  keywords: 'sobre Coffee Cabana, quinta de café Terceira, café orgânico Açores, agricultura sustentável',
  authors: [{ name: 'Coffee Cabana' }],
  creator: 'Coffee Cabana',
  publisher: 'Coffee Cabana',
  robots: 'index, follow',
  openGraph: {
    title: 'Sobre Nós - Coffee Cabana | Açores',
    description: 'Descubra a história por detrás do Coffee Cabana, a única quinta de café na Ilha Terceira, e o nosso compromisso com o café orgânico e a agricultura sustentável.',
    url: 'https://coffeecabana.pt/story',
    siteName: 'Coffee Cabana',
    locale: 'pt_PT',
    type: 'website',
    images: [
      {
        url: '/images/coffee/coffee-cabana-instagram.png',
        width: 1200,
        height: 630,
        alt: 'Sobre Nós - Coffee Cabana | Açores',
        type: 'image/png',
      },
    ],
  },
  alternates: {
    canonical: 'https://coffeecabana.pt/story',
    languages: {
      'pt': 'https://coffeecabana.pt/story',
      'en': 'https://coffeecabana.pt/en/story',
      'de': 'https://coffeecabana.pt/de/story',
      'es': 'https://coffeecabana.pt/es/story',
      'fr': 'https://coffeecabana.pt/fr/story',
    },
  },
}

export default function StoryPage() {
  const content = {
    hero: {
      title: 'FROM FARM TO CUP',
      subtitle: 'A story of sustainable agriculture, artisan coffee, and family tradition'
    },
    story: {
      title: 'Our Story Begins With',
      name: 'José Bernardo',
      paragraphs: [
        'José is the one who started it all. Born on Terceira Island, he moved to Angola, Africa, with his family in 1958 at the age of eight. From the late 1950s through the early 1970s, they managed a farm, where José gained extensive knowledge and experience in African agriculture.',
        'When the war broke out in Angola, like many other Portuguese families, they were forced to flee—returning to Portugal empty-handed.',
        'Soon after, they emigrated to California, USA. However, it wasn&apos;t long before José decided to return to his roots on Terceira. Back home, he worked for the regional government as the CEO of the Agriculture Department.',
        'After retiring, he purchased a piece of land he believed had the potential to grow tropical fruits. That&apos;s when he began planting bananas and coffee.',
        'In 2016, as a personal project and hobby, he built his first wooden cabin. Today, that vision has expanded into a beautiful eco retreat with six simple cabins, three luxury cabins, and various amenities throughout the property.',
        'In 2019, he created Coffee Cabana. Originally intended to serve guests, it quickly became a place to share their unique, homegrown coffee with the public.'
      ]
    },
    coffeeCraft: {
      title: 'Crafted With',
      subtitle: 'Precision & Care',
      paragraphs: [
        'Our approach to coffee is rooted in the same attention to detail we bring to farming. Every bean is carefully selected, every roast is meticulously crafted.',
        'We believe that great coffee is more than just a beverage—it&apos;s a moment of connection, a pause in the day, a celebration of craftsmanship.',
        'From our hands to your cup, we ensure that every step of the process honors the journey from farm to table.'
      ]
    },
    family: {
      title: 'A Family Tradition',
      subtitle: 'At the heart of everything we do is family—the foundation that keeps us grounded and the inspiration that drives us forward.',
      paragraphs: [
        'Our children play in the same fields where we work, learning the value of hard work and the importance of caring for the land. This is more than a business—it&apos;s a legacy we&apos;re building together.',
        'Every decision we make is guided by the question: &quot;What kind of world do we want to leave for the next generation?&quot; The answer shapes everything from our sustainable farming practices to our commitment to quality.'
      ]
    },
    footer: {
      title: 'Experience Our Story',
      subtitle: 'One Cup At A Time',
      description: 'Visit us to taste the difference that passion, quality, and family tradition make.',
      button: 'Come Visit Us'
    }
  }

  const t = content

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen flex items-start justify-center overflow-hidden">
        {/* Photo Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/coffee/farm.jpeg')`
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto pt-32">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="absolute inset-0 border-2 border-white rounded-full opacity-60" />
              <div className="absolute inset-2 border border-white rounded-full opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl font-light tracking-[0.3em]">CAFÉ</div>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-6">
            {t.hero.title.split(' ').slice(0, 2).join(' ')}
            <br />
            {t.hero.title.split(' ').slice(2).join(' ')}
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
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
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-black">
                {t.story.title}
                <br />
                <span className="text-amber-600">{t.story.name}</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {t.story.paragraphs.map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/coffee/bernardo.jpeg"
                alt="Bernardo working in the banana plantation"
                width={600}
                height={600}
                className="rounded-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-amber-600 rounded-full opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Craft Section */}
      <section className="py-24 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="/images/coffee/Banana_EcoCamp-01.jpg"
                alt="Artisan coffee brewing process"
                width={600}
                height={600}
                className="rounded-lg"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-amber-600 opacity-20 rounded-full" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-black">
                {t.coffeeCraft.title}
                <br />
                <span className="text-amber-600">{t.coffeeCraft.subtitle}</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {t.coffeeCraft.paragraphs.map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="py-24 px-6" style={{ backgroundColor: '#fafaf9' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-black">
              {t.family.title.split(' ').slice(0, 1).join(' ')} <span className="text-amber-600">{t.family.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t.family.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="relative">
              <Image
                src="/images/coffee/family.png"
                alt="Our family"
                width={600}
                height={400}
                className="rounded-lg w-full h-80 object-cover"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/coffee/marta.png"
                alt="Marta with child"
                width={600}
                height={400}
                className="rounded-lg w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-gray-700">
              {t.family.paragraphs.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-black">
            {t.footer.title}
            <br />
            <span className="text-amber-600">{t.footer.subtitle}</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            {t.footer.description}
          </p>
          <div className="flex justify-center">
            <GoogleMapsButton 
              size="lg" 
              className="bg-amber-400 text-black hover:bg-amber-300 px-8 py-3 text-lg font-medium"
            >
              {t.footer.button}
            </GoogleMapsButton>
          </div>
        </div>
      </section>
    </div>
  )
} 