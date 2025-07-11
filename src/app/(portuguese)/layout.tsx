import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { coffeeCabanaKeywords } from '@/lib/constants/seo-keywords'

type Props = {
  children: React.ReactNode
}

export async function generateMetadata(): Promise<Metadata> {
  // For Portuguese pages, we'll use the current pathname
  // This will be handled by individual pages that can pass their pathname
  
  return {
    title: 'Coffee Cabana - Café Orgânico Terceira | Açores',
    description: 'O único café cultivado e torrado na Ilha Terceira. Experimente nossa jornada da plantação à chávena no coração dos Açores.',
    keywords: coffeeCabanaKeywords,
    authors: [{ name: 'Coffee Cabana' }],
    creator: 'Coffee Cabana',
    publisher: 'Coffee Cabana',
    robots: 'index, follow',
    openGraph: {
      title: 'Coffee Cabana - Authentic Azores Coffee',
      description: 'The only coffee grown and roasted on Terceira Island',
      url: 'https://coffeecabana.pt',
      siteName: 'Coffee Cabana',
      locale: 'pt_PT',
      type: 'website',
    },
  }
}

export default function PortugueseLayout({
  children,
}: Props) {
  return (
    <>
      <Header locale="pt" />
      {children}
      <Footer locale="pt" />
    </>
  )
} 