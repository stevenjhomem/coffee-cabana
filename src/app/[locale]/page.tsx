import HeroSection from '@/components/sections/HeroSection'
import OurMission from '@/components/sections/OurMission'

interface PageProps {
  params: Promise<{ locale: string }>
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