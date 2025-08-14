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
    <UnifiedLayout locale={locale}>
      {children}
    </UnifiedLayout>
  )
}