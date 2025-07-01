import type { Metadata } from 'next'

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

export default async function StoryPage({ params }: Props) {
  const { locale } = await params

  const content = {
    pt: {
      title: 'Nossa História',
      subtitle: 'Da Plantação à Chávena',
      intro: 'A nossa jornada começou com uma paixão simples: criar o melhor café possível no coração dos Açores.',
    },
    en: {
      title: 'Our Story',
      subtitle: 'From Plantation to Cup',
      intro: 'Our journey began with a simple passion: to create the best coffee possible in the heart of the Azores.',
    },
    de: {
      title: 'Unsere Geschichte',
      subtitle: 'Von der Plantage zur Tasse',
      intro: 'Unsere Reise begann mit einer einfachen Leidenschaft: den besten Kaffee im Herzen der Azoren zu kreieren.',
    },
    es: {
      title: 'Nuestra Historia',
      subtitle: 'De la Plantación a la Taza',
      intro: 'Nuestro viaje comenzó con una pasión simple: crear el mejor café posible en el corazón de las Azores.',
    },
    fr: {
      title: 'Notre Histoire',
      subtitle: 'De la Plantation à la Tasse',
      intro: 'Notre voyage a commencé avec une passion simple : créer le meilleur café possible au cœur des Açores.',
    }
  }

  const t = content[locale as keyof typeof content] || content.pt

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(/images/coffee/Banana_EcoCamp-01.jpg)' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl">{t.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <p className="text-xl text-gray-600 leading-relaxed">{t.intro}</p>
          </div>
        </div>
      </section>
    </div>
  )
} 