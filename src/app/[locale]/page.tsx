import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ImageCarousel from '@/components/sections/ImageCarousel'
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
    authors: [{ name: 'Coffee Cabana' }],
    creator: 'Coffee Cabana',
    publisher: 'Coffee Cabana',
    robots: 'index, follow',
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      url: `https://www.coffeecabana.pt/${locale}`,
      siteName: 'Coffee Cabana',
      locale: `${locale}_${locale.toUpperCase()}`,
      type: 'website',
      images: [
        {
          url: '/images/coffeecabana/coffee-cabana-instagram.png',
          width: 1200,
          height: 630,
          alt: currentMeta.title,
          type: 'image/png',
        },
      ],
    },
    alternates: {
      canonical: `https://www.coffeecabana.pt/${locale}`,
      languages: {
        'pt': 'https://www.coffeecabana.pt',
        'en': 'https://www.coffeecabana.pt/en',
        'x-default': 'https://www.coffeecabana.pt',
      },
    },
  }
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  
  return (
    <main>
      <HeroSection locale={locale} />
      <ImageCarousel />
      <OurMission locale={locale} />
    </main>
  )
}