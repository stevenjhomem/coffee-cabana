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
  }

  const currentMeta = metaData[locale as keyof typeof metaData] || metaData.en

  return {
    ...currentMeta,
    keywords: 'Terceira coffee, Azores brunch, tropical bananas, Angra do Heroísmo restaurant, agritourism farm, breakfast Terceira, organic coffee, banana plantation Azores, farm to table, coffee shop Azores',
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
      canonical: `https://coffeecabana.pt/${locale}`,
      languages: {
        'pt': 'https://coffeecabana.pt',
        'en': 'https://coffeecabana.pt/en',
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