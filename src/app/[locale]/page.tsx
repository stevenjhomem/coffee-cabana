import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ImageCarousel from '@/components/sections/ImageCarousel'
import OurMission from '@/components/sections/OurMission'
import AggressivePrefetch from '@/components/performance/AggressivePrefetch'

// Using Next.js Image priority attribute for preloading instead of manual link tags

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  const metaData = {
    en: {
      title: 'Coffee Cabana | Organic Coffee Terceira, Azores', 
      description: 'Welcome to Coffee Cabana! Discover our unique organic coffee plantation in São Mateus da Calheta, Terceira. Visit our family farm in the Azores.',
    },
  }

  const currentMeta = metaData[locale as keyof typeof metaData] || metaData.en

  return {
    ...currentMeta,
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      url: `/${locale}`,
      locale: `${locale}_${locale.toUpperCase()}`,
      images: [
        {
          url: '/images/coffeecabana/coffee-cabana-instagram.webp',
          width: 1200,
          height: 630,
          alt: currentMeta.title,
          type: 'image/png',
        },
      ],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'pt': '/',
        'en': '/en',
        'x-default': '/',
      },
    },
  }
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  
  return (
    <>
      <AggressivePrefetch locale={locale} delay={1500} />
      <main>
        <HeroSection locale={locale} />
        <ImageCarousel />
        <OurMission locale={locale} />
      </main>
    </>
  )
}