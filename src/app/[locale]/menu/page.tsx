import type { Metadata } from 'next'
import MenuSection from '@/components/sections/MenuSection'
import { menuContent } from '@/constants/menu'

// Critical resource preloading for menu page LCP
const CriticalResourcePreload = ({ locale }: { locale: string }) => (
  <>
    <link rel="preload" href="/images/coffeecabana/Banana_EcoCamp-52.jpg" as="image" fetchPriority="high" />
    <link rel="preload" href={locale === 'en' ? '/images/logos/menu/english/menulogoen.png' : '/images/logos/menu/portuguese/menulogopt.png'} as="image" fetchPriority="high" />
    <link rel="dns-prefetch" href="/images/coffeecabana/" />
    <link rel="dns-prefetch" href="/images/logos/menu/" />
  </>
)

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  const metaData = {
    en: {
      title: 'Menu',
    },
  }

  const currentMeta = metaData[locale as keyof typeof metaData] || metaData.en

  return {
    ...currentMeta,
    openGraph: {
      title: currentMeta.title,
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
  
  // Logo now preloaded above
  
  return (
    <>
      <CriticalResourcePreload locale={locale} />
      <MenuSection 
        content={content} 
        logoPath={logoPath}
      />
    </>
  )
}