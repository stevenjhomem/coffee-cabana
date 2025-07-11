import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import ImagePreloader from '@/components/ImagePreloader'
import { coffeeCabanaKeywords } from '@/lib/constants/seo-keywords'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.coffeecabana.pt'),
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
    url: 'https://www.coffeecabana.pt',
    siteName: 'Coffee Cabana',
    locale: 'pt_PT',
    type: 'website',
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-H2RPXY9L0L"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H2RPXY9L0L');
          `
        }} />
        <meta name="google-site-verification" content="CDrB5Y8OZEbOw2klQTldA2Ig7x7anReYqXgam6fCEws" />
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/images/coffeecabana/logo.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/images/coffeecabana/logo.svg" type="image/svg+xml" />

        <style dangerouslySetInnerHTML={{
          __html: `
            .no-translate {
              -webkit-translate: no;
              translate: no;
            }
            .brand-name {
              -webkit-translate: no !important;
              translate: no !important;
            }
          `
        }} />

      </head>
      <body className={inter.className}>
        {children}
        <ImagePreloader />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}