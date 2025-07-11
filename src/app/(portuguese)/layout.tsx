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
    title: 'Coffee Cabana - Café Orgânico | Terceira, Açores',
    description: 'Coffee Cabana - Quinta de café orgânico em São Mateus da Calheta, Terceira. Cultivo sustentável, torrefação artesanal e experiências gastronómicas nos Açores.',
    keywords: coffeeCabanaKeywords,
    authors: [{ name: 'Coffee Cabana' }],
    creator: 'Coffee Cabana',
    publisher: 'Coffee Cabana',
    robots: 'index, follow',
    openGraph: {
      title: 'Coffee Cabana - Café Orgânico | Terceira, Açores',
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