import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import ImagePreloader from '@/components/ImagePreloader'
import { coffeeCabanaKeywords } from '@/lib/constants/seo-keywords'
import { localBusinessSchema, organizationSchema } from '@/lib/constants/schema'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.coffeecabana.pt'),
  title: 'Coffee Cabana - Plantação de Café Orgânico | Terceira, Açores',
  description: 'Coffee Cabana - A única quinta de café orgânico da Terceira, Açores. Da plantação à chávena, uma experiência autêntica de agriturismo familiar.',
  keywords: coffeeCabanaKeywords,
  authors: [{ name: 'Coffee Cabana' }],
  creator: 'Coffee Cabana',
  publisher: 'Coffee Cabana',
  robots: 'index, follow',
  openGraph: {
    title: 'Coffee Cabana - Plantação de Café Orgânico | Terceira, Açores',
    description: 'The only coffee grown and roasted on Terceira Island',
    url: 'https://www.coffeecabana.pt',
    siteName: 'Coffee Cabana',
    locale: 'pt_PT',
    type: 'website',
    images: [
      {
        url: 'https://www.coffeecabana.pt/images/coffeecabana/Banana_EcoCamp-49.jpg',
        width: 1200,
        height: 630,
        alt: 'Coffee Cabana - Organic coffee plantation in Terceira, Azores',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coffee Cabana - Plantação de Café Orgânico | Terceira, Açores',
    description: 'The only coffee grown and roasted on Terceira Island',
    images: ['https://www.coffeecabana.pt/images/coffeecabana/Banana_EcoCamp-49.jpg'],
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
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta name="geo.region" content="PT-20" />
        <meta name="geo.placename" content="Terceira, Azores" />
        <meta name="geo.position" content="38.7333;-27.2167" />
        <meta name="ICBM" content="38.7333, -27.2167" />
        
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

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Unregister old service worker */}
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistrations().then(function(registrations) {
                for(let registration of registrations) {
                  registration.unregister();
                }
              });
              // Clear all caches
              if ('caches' in window) {
                caches.keys().then(function(names) {
                  names.forEach(function(name) {
                    caches.delete(name);
                  });
                });
              }
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