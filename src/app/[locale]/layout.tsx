import type { Metadata } from 'next'
import '../globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const metaData = {
    pt: {
      title: 'Coffee Cabana - Café Orgânico Terceira | Açores',
      description: 'O único café cultivado e torrado na Ilha Terceira. Experimente nossa jornada da plantação à chávena no coração dos Açores.',
    },
    en: {
      title: 'Coffee Cabana - Organic Coffee Terceira | Azores',
      description: 'The only coffee grown and roasted on Terceira Island. Experience our farm-to-cup journey in the heart of the Azores.',
    },
  }

  const currentMeta = metaData[locale as keyof typeof metaData] || metaData.pt

  return {
    ...currentMeta,
    keywords: 'café Terceira, café orgânico Azores, coffee shop Angra do Heroísmo, plantation café Açores',
    authors: [{ name: 'Coffee Cabana' }],
    creator: 'Coffee Cabana',
    publisher: 'Coffee Cabana',
    robots: 'index, follow',
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      url: `https://coffeecabana.pt/${locale}`,
      siteName: 'Coffee Cabana',
      locale: locale === 'pt' ? 'pt_PT' : `${locale}_${locale.toUpperCase()}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://coffeecabana.pt/${locale}`,
      languages: {
        'pt': 'https://coffeecabana.pt',
        'en': 'https://coffeecabana.pt/en',
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