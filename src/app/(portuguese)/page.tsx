import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ImageCarousel from '@/components/sections/ImageCarousel'
import OurMission from '@/components/sections/OurMission'

export const metadata: Metadata = {
  title: 'Coffee Cabana | Quinta de Café Orgânico São Mateus da Calheta, Terceira',
  description: 'Bem-vindos à Coffee Cabana! Descubra o único café cultivado em São Mateus da Calheta, Terceira. Visite nossa quinta orgânica nos Açores.',
  authors: [{ name: 'Coffee Cabana' }],
  creator: 'Coffee Cabana',
  publisher: 'Coffee Cabana',
  robots: 'index, follow',
  openGraph: {
    title: 'Coffee Cabana | Quinta de Café Orgânico São Mateus da Calheta, Terceira',
    description: 'Bem-vindos à Coffee Cabana! Descubra o único café cultivado em São Mateus da Calheta, Terceira. Visite nossa quinta orgânica nos Açores.',
    url: 'https://www.coffeecabana.pt',
    siteName: 'Coffee Cabana',
    locale: 'pt_PT',
    type: 'website',
    images: [
      {
        url: '/images/coffeecabana/Banana_EcoCamp-49.jpg',
        width: 1200,
        height: 630,
        alt: 'Coffee Cabana - Café Orgânico Terceira | Açores',
        type: 'image/png',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.coffeecabana.pt',
    languages: {
      'pt': 'https://www.coffeecabana.pt',
      'en': 'https://www.coffeecabana.pt/en',
      'x-default': 'https://www.coffeecabana.pt',
    },
  },
}

export default function HomePage() {
  return (
    <main>
      <HeroSection locale="pt" />
      <ImageCarousel />
      <OurMission locale="pt" />
    </main>
  )
}
