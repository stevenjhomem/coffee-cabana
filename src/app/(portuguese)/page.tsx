import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import OurMission from '@/components/sections/OurMission'

export const metadata: Metadata = {
  title: 'Coffee Cabana - Café Orgânico Terceira | Açores',
  description: 'O único café cultivado e torrado na Ilha Terceira. Experimente nossa jornada da plantação à chávena no coração dos Açores.',
  keywords: 'café Terceira, café orgânico Azores, coffee shop Angra do Heroísmo, plantation café Açores',
  authors: [{ name: 'Coffee Cabana' }],
  creator: 'Coffee Cabana',
  publisher: 'Coffee Cabana',
  robots: 'index, follow',
  openGraph: {
    title: 'Coffee Cabana - Café Orgânico Terceira | Açores',
    description: 'O único café cultivado e torrado na Ilha Terceira. Experimente nossa jornada da plantação à chávena no coração dos Açores.',
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
      <OurMission locale="pt" />
    </main>
  )
}
