import UnifiedLayout from '@/components/layout/UnifiedLayout'

type Props = {
  children: React.ReactNode
}

export default function PortugueseLayout({ children }: Props) {
  return (
    <UnifiedLayout locale="pt">
      {children}
    </UnifiedLayout>
  )
} 