import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function PortugueseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header locale="pt" />
      {children}
      <Footer locale="pt" />
    </>
  )
} 