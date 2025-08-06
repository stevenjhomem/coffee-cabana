import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'A Nossa História',
  openGraph: {
    title: 'A Nossa História',
    url: '/story',
    images: [
      {
        url: '/images/coffeecabana/Banana_EcoCamp-52.jpg',
        width: 1200,
        height: 630,
        alt: 'Coffee Cabana - A Nossa História',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: '/story',
    languages: {
      'pt': '/story',
      'en': '/en/story',
      'x-default': '/story',
    },
  },
}

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}