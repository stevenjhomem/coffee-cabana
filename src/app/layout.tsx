import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import ImagePreloader from '@/components/ImagePreloader'
import { coffeeCabanaKeywords } from '@/lib/constants/seo-keywords'
import { localBusinessSchema, organizationSchema } from '@/lib/constants/schema'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.coffeecabana.pt'),
  title: 'Coffee Cabana - Café Orgânico | Terceira, Açores',
  description: 'Coffee Cabana - A única quinta de café orgânico da Terceira, Açores. Da plantação à chávena, uma experiência autêntica de agriturismo familiar.',
  keywords: coffeeCabanaKeywords,
  authors: [{ name: 'Coffee Cabana' }],
  creator: 'Coffee Cabana',
  publisher: 'Coffee Cabana',
  robots: 'index, follow',
  openGraph: {
    title: 'Coffee Cabana - Café Orgânico | Terceira, Açores',
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
    title: 'Coffee Cabana - Café Orgânico | Terceira, Açores',
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
        
        {/* Critical resource preloading - optimized for LCP */}
        <link rel="preload" href="/images/logos/home/coffeecabana.png" as="image" fetchPriority="high" />
        <link rel="preload" href="/images/coffeecabana/initialpic.jpg" as="image" fetchPriority="high" />
        
        {/* Defer heavy video until after LCP */}
        <link rel="dns-prefetch" href="/images/coffeecabana/" />
        
        {/* Font optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Critical CSS preload */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" fetchPriority="high" />
        
        {/* Critical inline CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical base styles */
            :root {
              --background: #ffffff;
              --foreground: #171717;
            }
            @media (prefers-color-scheme: dark) {
              :root {
                --background: #0a0a0a;
                --foreground: #ededed;
              }
            }
            body {
              background: var(--background);
              color: var(--foreground);
              font-family: Arial, Helvetica, sans-serif;
              margin: 0;
              padding: 0;
              border: none;
              outline: none;
            }
            html {
              margin: 0;
              padding: 0;
              border: none;
              outline: none;
            }
            *, *::before, *::after {
              box-sizing: border-box;
            }
            video {
              object-fit: cover;
              object-position: center;
            }
            video::-webkit-media-controls,
            video::-webkit-media-controls-enclosure {
              display: none !important;
            }
            video[poster] {
              object-fit: cover;
              object-position: center;
            }
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

        {/* Performance optimization: Lazy load heavy resources */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Defer video loading until after LCP
            document.addEventListener('DOMContentLoaded', function() {
              setTimeout(function() {
                var link = document.createElement('link');
                link.rel = 'preload';
                link.href = '/images/coffeecabana/1080pvid.webm';
                link.as = 'video';
                link.type = 'video/webm';
                document.head.appendChild(link);
              }, 2000);
            });
            
            // Service worker cleanup - only clear outdated caches
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistrations().then(function(registrations) {
                registrations.forEach(function(registration) {
                  if (registration.scope.includes('old-domain') || registration.scope.includes('sw.js')) {
                    registration.unregister();
                  }
                });
              });
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