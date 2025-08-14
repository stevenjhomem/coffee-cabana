import type { Metadata } from 'next'
import Image from "next/image"
import GoogleMapsButton from "@/components/ui/GoogleMapsButton"
import { storyContent } from "@/constants/story"
import { StoryHeroSection } from "@/components/story/StoryClientComponents"

export const metadata: Metadata = {
  title: 'A Nossa História',
  description: 'Descubra a história única do Coffee Cabana, a quinta de café orgânico familiar na Terceira, Açores. Conheça José Bernardo, Marcel e Marta.',
  openGraph: {
    title: 'A Nossa História - Coffee Cabana',
    description: 'Descubra a história única do Coffee Cabana, a quinta de café orgânico familiar na Terceira, Açores.',
    url: '/story',
    images: [
      {
        url: '/images/coffeecabana/farm.webp',
        width: 1200,
        height: 630,
        alt: 'Quinta de café orgânico Coffee Cabana na Terceira, Açores',
        type: 'image/webp',
      },
    ],
  },
  alternates: {
    canonical: '/story',
    languages: {
      'pt': '/story',
      'en': '/en/story',
      'x-default': '/story',
    },
  },
}

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with coordinated image loading */}
      <StoryHeroSection 
        locale="pt"
        logoSrc="/images/logos/story/portuguese/ourstorypt3.png"
        logoAlt="A Nossa História - Coffee Cabana"
      />

      {/* Story Section */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mobile: Title + Image + Text */}
            <div className="lg:hidden">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {storyContent.pt.story.title}
                <br />
                <span className="text-amber-600">{storyContent.pt.story.name}</span>
              </h2>
              <div className="relative mb-8">
                <Image
                  src="/images/coffeecabana/bernardo.webp"
                  alt="José Bernardo trabalhando na plantação de bananas na quinta Coffee Cabana"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {storyContent.pt.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* Desktop: Text + Image (original layout) */}
            <div className="hidden lg:block">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {storyContent.pt.story.title}
                <br />
                <span className="text-amber-600">{storyContent.pt.story.name}</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {storyContent.pt.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <Image
                src="/images/coffeecabana/bernardo.webp"
                alt="José Bernardo trabalhando na plantação de bananas na quinta Coffee Cabana"
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
                {storyContent.pt.coffeeCraft.title}
                <br />
                <span className="text-amber-600">{storyContent.pt.coffeeCraft.subtitle}</span>
              </h2>
              <div className="relative mb-8">
                <Image
                  src="/images/coffeecabana/family.png"
                  alt="Marcel, Marta e suas duas filhas na quinta Coffee Cabana"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {storyContent.pt.coffeeCraft.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* Desktop: Image + Text (original layout) */}
            <div className="hidden lg:block order-2 lg:order-1 relative">
              <Image
                src="/images/coffeecabana/family.png"
                alt="Marcel, Marta e suas duas filhas na quinta Coffee Cabana"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div className="hidden lg:block order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {storyContent.pt.coffeeCraft.title}
                <br />
                <span className="text-amber-600">{storyContent.pt.coffeeCraft.subtitle}</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {storyContent.pt.coffeeCraft.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-black">
            {storyContent.pt.footer.title}
            <br />
            <span className="text-amber-600">{storyContent.pt.footer.subtitle}</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            {storyContent.pt.footer.description}
          </p>
          <div className="flex justify-center">
            <GoogleMapsButton 
              size="lg" 
              className="bg-amber-400 text-black hover:bg-amber-300 px-8 py-3 text-lg font-medium"
            >
              {storyContent.pt.footer.button}
            </GoogleMapsButton>
          </div>
        </div>
      </section>
    </div>
  )
} 