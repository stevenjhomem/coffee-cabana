import type { Metadata } from 'next'
import MenuSection from '@/components/sections/MenuSection'
import { menuContent } from '@/data/menu'

// Critical resource preloading for menu page LCP
const BackgroundPreload = () => (
  <link rel="preload" href="/images/coffeecabana/Banana_EcoCamp-52.jpg" as="image" fetchPriority="high" />
)

export const metadata: Metadata = {
  title: 'A Ementa',
  openGraph: {
    title: 'A Ementa',
    url: '/menu',
    images: [
      {
        url: '/images/coffeecabana/Banana_EcoCamp-52.jpg',
        width: 1200,
        height: 630,
        alt: 'Coffee Cabana - A Ementa',
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