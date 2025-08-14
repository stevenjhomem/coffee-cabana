import type { Metadata } from 'next'
import Image from "next/image"
import GoogleMapsButton from "@/components/ui/GoogleMapsButton"
import { storyContent } from "@/constants/story"
import { StoryHeroSection } from "@/components/story/StoryClientComponents"

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  const metaData = {
    en: {
      title: 'Our Story',
      description: 'Discover the unique story of Coffee Cabana, the family organic coffee farm in Terceira, Azores. Meet José Bernardo, Marcel and Marta.',
    },
  }

  const currentMeta = metaData[locale as keyof typeof metaData] || metaData.en

  return {
    ...currentMeta,
    openGraph: {
      title: `${currentMeta.title} - Coffee Cabana`,
      description: currentMeta.description,
      url: `/${locale}/story`,
      locale: `${locale}_${locale.toUpperCase()}`,
      images: [
        {
          url: '/images/coffeecabana/farm.webp',
          width: 1200,
          height: 630,
          alt: locale === 'en' ? 'Coffee Cabana organic coffee farm in Terceira, Azores' : 'Quinta de café orgânico Coffee Cabana na Terceira, Açores',
          type: 'image/webp',
        },
      ],
    },
    alternates: {
      canonical: `/${locale}/story`,
      languages: {
        'pt': '/story',
        'en': '/en/story',
        'x-default': '/story',
      },
    },
  }
}

export default async function StoryPage({ params }: PageProps) {
  const { locale } = await params
  const content = locale === 'en' ? storyContent.en : storyContent.pt
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with coordinated image loading */}
      <StoryHeroSection 
        locale={locale}
        logoSrc={locale === "pt" ? "/images/logos/story/portuguese/ourstorypt3.png" : "/images/logos/story/english/ourstoryen.png"}
        logoAlt={locale === "pt" ? "A Nossa História - Coffee Cabana" : "Our Story - Coffee Cabana"}
      />

      {/* Story Section */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mobile: Title + Image + Text */}
            <div className="lg:hidden">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {content.story.title}
                <br />
                <span className="text-amber-600">{content.story.name}</span>
              </h2>
              <div className="relative mb-8">
                <Image
                  src="/images/coffeecabana/bernardo.webp"
                  alt={locale === 'en' ? "José Bernardo working in the banana plantation at Coffee Cabana farm" : "José Bernardo trabalhando na plantação de bananas na quinta Coffee Cabana"}
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {content.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* Desktop: Text + Image (original layout) */}
            <div className="hidden lg:block">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {content.story.title}
                <br />
                <span className="text-amber-600">{content.story.name}</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {content.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <Image
                src="/images/coffeecabana/bernardo.webp"
                alt={locale === 'en' ? "José Bernardo working in the banana plantation at Coffee Cabana farm" : "José Bernardo trabalhando na plantação de bananas na quinta Coffee Cabana"}
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
                {content.coffeeCraft.title}
                <br />
                <span className="text-amber-600">{content.coffeeCraft.subtitle}</span>
              </h2>
              <div className="relative mb-8">
                <Image
                  src="/images/coffeecabana/family.png"
                  alt={locale === 'en' ? "Marcel, Marta and their two daughters at Coffee Cabana farm" : "Marcel, Marta e suas duas filhas na quinta Coffee Cabana"}
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {content.coffeeCraft.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* Desktop: Image + Text (original layout) */}
            <div className="hidden lg:block order-2 lg:order-1 relative">
              <Image
                src="/images/coffeecabana/family.png"
                alt={locale === 'en' ? "Marcel, Marta and their two daughters at Coffee Cabana farm" : "Marcel, Marta e suas duas filhas na quinta Coffee Cabana"}
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div className="hidden lg:block order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {content.coffeeCraft.title}
                <br />
                <span className="text-amber-600">{content.coffeeCraft.subtitle}</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {content.coffeeCraft.paragraphs.map((paragraph, index) => (
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
            {content.footer.title}
            <br />
            <span className="text-amber-600">{content.footer.subtitle}</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            {content.footer.description}
          </p>
          <GoogleMapsButton 
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-colors duration-300"
          >
            {content.footer.button}
          </GoogleMapsButton>
        </div>
      </section>
    </div>
  )
} 