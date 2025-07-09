import type { Metadata } from 'next'

interface MetadataConfig {
  title: string
  description: string
  url: string
  locale: string
  imagePath?: string
  imageAlt?: string
  keywords?: string
}

export function generateMetadata(config: MetadataConfig): Metadata {
  const {
    title,
    description,
    url,
    locale,
    imagePath = '/images/coffeecabana/Banana_EcoCamp-49.jpg',
    imageAlt = title,
    keywords = 'Coffee Cabana, café orgânico, Terceira, Açores, organic coffee'
  } = config

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'Coffee Cabana' }],
    creator: 'Coffee Cabana',
    publisher: 'Coffee Cabana',
    robots: 'index, follow',
    openGraph: {
      title,
      description,
      url,
      siteName: 'Coffee Cabana',
      locale: locale === 'en' ? 'en_US' : 'pt_PT',
      type: 'website',
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 630,
          alt: imageAlt,
          type: 'image/jpeg',
        },
      ],
    },
    alternates: {
      canonical: url,
      languages: {
        'pt': locale === 'en' ? url.replace('/en', '') : url,
        'en': locale === 'en' ? url : url.replace('/', '/en/'),
        'x-default': locale === 'en' ? url.replace('/en', '') : url,
      },
    },
  }
}