import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coffee Cabana - Café Orgânico Terceira | Azores',
  description: 'O único café cultivado e torrado na Ilha Terceira. Experimente nossa jornada da plantação à chávena no coração dos Açores.',
  keywords: 'café Terceira, café orgânico Azores, coffee shop Angra do Heroísmo, plantation café Açores',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <meta name="google" content="notranslate" />
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
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}