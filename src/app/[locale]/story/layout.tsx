import { Metadata } from "next"

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const metaData = {
    en: {
      title: 'Our Story',
    }
  }

  const currentMeta = metaData[locale as keyof typeof metaData] || metaData.en

  return {
    ...currentMeta,
    openGraph: {
      title: currentMeta.title,
      url: `/${locale}/story`,
      locale: `${locale}_${locale.toUpperCase()}`,
      images: [
        {
          url: '/images/coffeecabana/Banana_EcoCamp-52.jpg',
          width: 1200,
          height: 630,
          alt: `Coffee Cabana - ${currentMeta.title}`,
          type: 'image/jpeg',
        },
      ],
    },
    alternates: {
      canonical: `/${locale}/story`,
      languages: {
        'pt': '/story',
        'en': '/en/story',
        'x-default': '/story',
      },
    },
  }
}

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}