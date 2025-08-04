import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ImageCarousel from '@/components/sections/ImageCarousel'
import OurMission from '@/components/sections/OurMission'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: {
      'pt': '/',
      'en': '/en',
      'x-default': '/',
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
