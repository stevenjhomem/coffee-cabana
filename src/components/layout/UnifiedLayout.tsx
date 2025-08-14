import Header from './Header'
import Footer from './Footer'
import { defaultLocale } from '@/lib/i18n/config'

interface UnifiedLayoutProps {
  children: React.ReactNode
  locale?: string
}

export default function UnifiedLayout({ children, locale = defaultLocale }: UnifiedLayoutProps) {
  return (
    <>
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
    </>
  )
}
