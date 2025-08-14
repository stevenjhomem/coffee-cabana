import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ImageCarousel from '@/components/sections/ImageCarousel'
import OurMission from '@/components/sections/OurMission'
import AggressivePrefetch from '@/components/performance/AggressivePrefetch'

export const metadata: Metadata = {
  // Be sure to add in the alternates the languages you want to support as you scale the site to include more languages
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
    <>
      <AggressivePrefetch locale="pt" delay={1500} />
      <main>
        <HeroSection locale="pt" />
        <ImageCarousel />
        <OurMission locale="pt" />
      </main>
    </>
  )
}
