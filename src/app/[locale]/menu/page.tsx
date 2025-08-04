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

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  const metaData = {
    en: {
      title: 'Menu - Coffee Cabana | Organic Coffee Terceira',
      description: 'Discover our menu with specialty coffee, teas, beverages and light meals. All products are fresh and local.',
    },
  }

  const currentMeta = metaData[locale as keyof typeof metaData] || metaData.en

  return {
    ...currentMeta,
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      url: `/${locale}/menu`,
      locale: `${locale}_${locale.toUpperCase()}`,
      images: [
        {
          url: '/images/coffeecabana/Banana_EcoCamp-52.jpg',
          width: 1200,
          height: 630,
          alt: currentMeta.title,
          type: 'image/jpeg',
        },
      ],
    },
    alternates: {
      canonical: `/${locale}/menu`,
      languages: {
        'pt': '/menu',
        'en': '/en/menu',
        'x-default': '/menu',
      },
    },
  }
}

export default async function MenuPage({ params }: PageProps) {
  const { locale } = await params
  
  const content = locale === 'en' ? menuContent.en : menuContent.pt
  const logoPath = locale === 'en' 
    ? '/images/logos/menu/english/menulogoen.png'
    : '/images/logos/menu/portuguese/menulogopt.png'
  
  return (
    <>
      <BackgroundPreload />
      <MenuSection 
        content={content} 
        logoPath={logoPath}
      />
    </>
  )
}