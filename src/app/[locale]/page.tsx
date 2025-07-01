import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import OurMission from '@/components/sections/OurMission'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  const metaData = {
    en: {
      title: 'Coffee Cabana - Organic Coffee Terceira | Azores',
      description: 'The only coffee grown and roasted on Terceira Island. Experience our farm-to-cup journey in the heart of the Azores.',
    },
    de: {
      title: 'Coffee Cabana - Bio-Kaffee Terceira | Azoren',
      description: 'Der einzige Kaffee, der auf der Insel Terceira angebaut und geröstet wird. Erleben Sie unsere Reise von der Farm zur Tasse.',
    },
    es: {
      title: 'Coffee Cabana - Café Orgánico Terceira | Azores',
      description: 'El único café cultivado y tostado en la Isla Terceira. Experimenta nuestro viaje de la granja a la taza.',
    },
    fr: {
      title: 'Coffee Cabana - Café Bio Terceira | Açores',
      description: 'Le seul café cultivé et torréfié sur l\'île de Terceira. Découvrez notre voyage de la ferme à la tasse.',
    },
  }

  const currentMeta = metaData[locale as keyof typeof metaData] || metaData.en

  return {
    ...currentMeta,
    keywords: 'café Terceira, café orgânico Azores, coffee shop Angra do Heroísmo, plantation café Açores',
    authors: [{ name: 'Coffee Cabana' }],
    creator: 'Coffee Cabana',
    publisher: 'Coffee Cabana',
    robots: 'index, follow',
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      url: `https://coffeecabana.pt/${locale}`,
      siteName: 'Coffee Cabana',
      locale: `${locale}_${locale.toUpperCase()}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://coffeecabana.pt/${locale}`,
      languages: {
        'pt': 'https://coffeecabana.pt',
        'en': 'https://coffeecabana.pt/en',
        'de': 'https://coffeecabana.pt/de',
        'es': 'https://coffeecabana.pt/es',
        'fr': 'https://coffeecabana.pt/fr',
      },
    },
  }
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  
  return (
    <main>
      <HeroSection locale={locale} />
      <OurMission locale={locale} />
    </main>
  )
}