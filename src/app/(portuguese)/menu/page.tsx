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
  title: 'Menu - Coffee Cabana | Café Orgânico Terceira',
  description: 'Descubra a nossa ementa com café especial, chás, bebidas e refeições ligeiras. Todos os produtos são frescos e locais.',
  authors: [{ name: 'Coffee Cabana' }],
  creator: 'Coffee Cabana',
  publisher: 'Coffee Cabana',
  robots: 'index, follow',
  openGraph: {
    title: 'Menu - Coffee Cabana | Café Orgânico Terceira',
    description: 'Descubra a nossa ementa com café especial, chás, bebidas e refeições ligeiras. Todos os produtos são frescos e locais.',
    url: 'https://www.coffeecabana.pt/menu',
    siteName: 'Coffee Cabana',
    locale: 'pt_PT',
    type: 'website',
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
    canonical: 'https://www.coffeecabana.pt/menu',
    languages: {
      'pt': 'https://www.coffeecabana.pt/menu',
      'en': 'https://www.coffeecabana.pt/en/menu',
      'x-default': 'https://www.coffeecabana.pt/menu',
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