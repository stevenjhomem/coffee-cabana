import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ImageCarousel from '@/components/sections/ImageCarousel'
import OurMission from '@/components/sections/OurMission'

// Critical resource preloading for homepage LCP
const CriticalResourcePreload = () => (
  <>
    <link rel="preload" href="/images/logos/home/coffeecabana.png" as="image" fetchPriority="high" />
    <link rel="dns-prefetch" href="/images/coffeecabana/" />
  </>
)

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
          url: '/images/coffeecabana/coffee-cabana-instagram.png',
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
      <CriticalResourcePreload />
      <main>
        <HeroSection locale={locale} />
        <ImageCarousel />
        <OurMission locale={locale} />
      </main>
    </>
  )
}