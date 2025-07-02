import type { Metadata } from 'next'
import Image from "next/image"
import { Button } from "@/components/ui/Button"

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const metaData = {
    en: {
      title: 'Our Story - Coffee Cabana | Azores',
      description: 'Discover the story of Coffee Cabana, from plantation to cup, in the heart of Terceira Island.',
    },
    de: {
      title: 'Unsere Geschichte - Coffee Cabana | Azoren',
      description: 'Entdecken Sie die Geschichte von Coffee Cabana, von der Plantage bis zur Tasse, im Herzen der Insel Terceira.',
    },
    es: {
      title: 'Nuestra Historia - Coffee Cabana | Azores',
      description: 'Descubre la historia de Coffee Cabana, desde la plantación hasta la taza, en el corazón de la Isla Terceira.',
    },
    fr: {
      title: 'Notre Histoire - Coffee Cabana | Açores',
      description: 'Découvrez l\'histoire de Coffee Cabana, de la plantation à la tasse, au cœur de l\'île de Terceira.',
    },
  }

  const currentMeta = metaData[locale as keyof typeof metaData] || metaData.en

  return {
    ...currentMeta,
    keywords: 'história café Terceira, coffee story Azores, plantation café Açores, coffee farm Terceira',
    authors: [{ name: 'Coffee Cabana' }],
    creator: 'Coffee Cabana',
    publisher: 'Coffee Cabana',
    robots: 'index, follow',
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      url: `https://coffeecabana.pt/${locale}/story`,
      siteName: 'Coffee Cabana',
      locale: `${locale}_${locale.toUpperCase()}`,
      type: 'website',
      images: [
        {
          url: '/images/coffee/coffee-cabana-instagram.png',
          width: 1200,
          height: 630,
          alt: currentMeta.title,
          type: 'image/png',
        },
      ],
    },
    alternates: {
      canonical: `https://coffeecabana.pt/${locale}/story`,
      languages: {
        'pt': 'https://coffeecabana.pt/story',
        'en': 'https://coffeecabana.pt/en/story',
        'de': 'https://coffeecabana.pt/de/story',
        'es': 'https://coffeecabana.pt/es/story',
        'fr': 'https://coffeecabana.pt/fr/story',
      },
    },
  }
}

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image src="/images/coffee/farm.jpeg" alt="Banana plantation landscape" fill className="object-cover" priority />
        <div className="absolute inset-0" />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="absolute inset-0 border-2 border-white rounded-full opacity-60" />
              <div className="absolute inset-2 border border-white rounded-full opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl font-light tracking-[0.3em]">CAFÉ</div>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-6 drop-shadow-lg">
            FROM FARM
            <br />
            TO CUP
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            A story of sustainable agriculture, artisan coffee, and family tradition
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-white opacity-60" />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-black">
                Our Story Begins
                <br />
                <span className="text-amber-600">In The Fields</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  What started as a passion for sustainable agriculture has grown into something beautiful—a connection
                  between the earth we tend and the coffee we craft.
                </p>
                <p>
                  Our journey began in the banana plantations, where we learned the value of patience, quality, and
                  respect for the land. These same principles guide everything we do today.
                </p>
                <p>
                  Every cup tells a story of dedication, from the farmers who nurture the beans to the baristas who
                  perfect each brew.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/coffee/marcelworking.png"
                alt="Marcel working in the banana plantation"
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
                Crafted With
                <br />
                <span className="text-amber-600">Precision & Care</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  Our approach to coffee is rooted in the same attention to detail we bring to farming. Every bean is
                  carefully selected, every roast is meticulously crafted.
                </p>
                <p>
                  We believe that great coffee is more than just a beverage—it's a moment of connection, a pause in the
                  day, a celebration of craftsmanship.
                </p>
                <p>
                  From our hands to your cup, we ensure that every step of the process honors the journey from farm to
                  table.
                </p>
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
              A <span className="text-amber-600">Family</span> Tradition
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At the heart of everything we do is family—the foundation that keeps us grounded and the inspiration that
              drives us forward.
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
            <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-gray-700 mb-12">
              <p>
                Our children play in the same fields where we work, learning the value of hard work and the importance
                of caring for the land. This is more than a business—it's a legacy we're building together.
              </p>
              <p>
                Every decision we make is guided by the question: "What kind of world do we want to leave for the next
                generation?" The answer shapes everything from our sustainable farming practices to our commitment to
                quality.
              </p>
            </div>
            <Button size="lg" className="bg-amber-400 text-black hover:bg-amber-300 px-8 py-3 text-lg font-medium">
              Visit Our Café
            </Button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-black">
            Experience Our Story
            <br />
            <span className="text-amber-600">One Cup At A Time</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Visit us to taste the difference that passion, quality, and family tradition make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-400 text-black hover:bg-amber-300 px-8 py-3 text-lg font-medium">
              Find Our Location
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 text-lg font-medium bg-transparent"
            >
              Shop Our Coffee
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 