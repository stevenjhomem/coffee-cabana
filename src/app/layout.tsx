import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import PerformanceManager from '@/components/performance/PerformanceManager'
import CriticalCSS from '@/components/layout/CriticalCSS'
import SEOMetaTags from '@/components/layout/SEOMetaTags'
import SchemaOrg from '@/components/layout/SchemaOrg'
import PerformanceScripts from '@/components/layout/PerformanceScripts'
import { coffeeCabanaKeywords } from '@/lib/constants/seo-keywords'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.coffeecabana.pt'),
  title: {
    default: "Coffee Cabana",
    template: "Coffee Cabana - %s" 
  },
  description: 'Coffee Cabana - A única quinta de café orgânico da Terceira, Açores. Da plantação à chávena, uma experiência autêntica de agriturismo familiar.',
  keywords: coffeeCabanaKeywords,
  authors: [{ name: 'Coffee Cabana' }],
  creator: 'Coffee Cabana',
  publisher: 'Coffee Cabana',
  robots: 'index, follow',
  openGraph: {
    title: 'Coffee Cabana - Café Orgânico | Terceira, Açores',
    description: 'The only coffee grown and roasted on Terceira Island',
    url: '/',
    siteName: 'Coffee Cabana',
    locale: 'pt_PT',
    type: 'website',
    images: [
      {
        url: '/images/coffeecabana/Banana_EcoCamp-49.jpg',
        width: 1200,
        height: 630,
        alt: 'Coffee Cabana - Organic coffee plantation in Terceira, Azores',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/coffeecabana/Banana_EcoCamp-49.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <SEOMetaTags />
        <CriticalCSS />
        <SchemaOrg />
        <PerformanceScripts />
      </head>
      <body className={inter.className}>
        <PerformanceManager />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}