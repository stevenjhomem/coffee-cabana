import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

type Props = {
  children: React.ReactNode
}

export default function PortugueseLayout({ children }: Props) {
  return (
    <>
      <Header locale="pt" />
      {children}
      <Footer locale="pt" />
    </>
  )
} 