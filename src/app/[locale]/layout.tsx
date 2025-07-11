import type { Metadata } from 'next'
import '../globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { coffeeCabanaKeywords } from '@/lib/constants/seo-keywords'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const metaData = {
    pt: {
      title: 'Coffee Cabana - Experiência de Café Orgânico | Terceira, Açores',
      description: 'Coffee Cabana - Quinta de café orgânico em São Mateus da Calheta, Terceira. Cultivo sustentável, torrefacção artesanal e experiências gastronómicas nos Açores.',
    },
    en: {
      title: 'Coffee Cabana - Agritourism & Organic Coffee | Terceira, Azores',
      description: 'Coffee Cabana - Organic coffee farm in São Mateus da Calheta, Terceira. Sustainable cultivation, artisan roasting and gastronomic experiences in the Azores.',
    },
  }

  const currentMeta = metaData[locale as keyof typeof metaData] || metaData.pt

  return {
    ...currentMeta,
    keywords: coffeeCabanaKeywords,
    authors: [{ name: 'Coffee Cabana' }],
    creator: 'Coffee Cabana',
    publisher: 'Coffee Cabana',
    robots: 'index, follow',
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      url: `https://www.coffeecabana.pt/${locale}`,
      siteName: 'Coffee Cabana',
      locale: locale === 'pt' ? 'pt_PT' : `${locale}_${locale.toUpperCase()}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://www.coffeecabana.pt/${locale}`,
      languages: {
        'pt': 'https://www.coffeecabana.pt',
        'en': 'https://www.coffeecabana.pt/en',
        'x-default': 'https://www.coffeecabana.pt',
      },
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  
  return (
    <>
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
    </>
  )
}