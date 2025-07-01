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
    title: 'Coffee Cabana - Authentic Azores Coffee',
    description: 'The only coffee grown and roasted on Terceira Island',
    url: 'https://coffeecabana.pt',
    siteName: 'Coffee Cabana',
    locale: 'pt_PT',
    type: 'website',
  },
  alternates: {
    canonical: 'https://coffeecabana.pt',
    languages: {
      'pt': 'https://coffeecabana.pt',
      'en': 'https://coffeecabana.pt/en',
      'de': 'https://coffeecabana.pt/de',
      'es': 'https://coffeecabana.pt/es',
      'fr': 'https://coffeecabana.pt/fr',
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
