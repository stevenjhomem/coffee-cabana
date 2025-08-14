import '../globals.css'
import UnifiedLayout from '@/components/layout/UnifiedLayout'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return [
    { locale: 'en' },
  ]
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  
  return (
    <>
      {/* Preload critical background images for all pages */}
      <link
        rel="preload"
        as="image"
        href="/images/coffeecabana/farm.webp"
        type="image/webp"
      />
      <link
        rel="preload"
        as="image"
        href="/images/coffeecabana/Banana_EcoCamp-52.jpg"
        type="image/jpeg"
      />
      <UnifiedLayout locale={locale}>
        {children}
      </UnifiedLayout>
    </>
  )
}