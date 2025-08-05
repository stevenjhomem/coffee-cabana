import type { Metadata } from 'next'
import MenuSection from '@/components/sections/MenuSection'
import { menuContent } from '@/data/menu'

// Preload the background image
const BackgroundPreload = () => (
  <link 
    rel="preload" 
    as="image" 
    href="/images/coffeecabana/Banana_EcoCamp-52.jpg"
    fetchPriority="high"
  />
)

export const metadata: Metadata = {
  title: 'Menu',
  openGraph: {
    title: 'Menu',
    url: '/menu',
    images: [
      {
        url: '/images/coffeecabana/Banana_EcoCamp-52.jpg',
        width: 1200,
        height: 630,
        alt: 'Menu Coffee Cabana - Café Orgânico Terceira',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: '/menu',
    languages: {
      'pt': '/menu',
      'en': '/en/menu',
      'x-default': '/menu',
    },
  },
}

export default function MenuPage() {
  return (
    <>
      <BackgroundPreload />
      <MenuSection 
        content={menuContent.pt} 
        logoPath="/images/logos/menu/portuguese/menulogopt.png"
      />
    </>
  )
}