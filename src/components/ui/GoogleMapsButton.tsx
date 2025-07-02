'use client'

import { Button } from "@/components/ui/Button"

interface GoogleMapsButtonProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "lg" | "md"
}

export default function GoogleMapsButton({ children, className, size = "md" }: GoogleMapsButtonProps) {
  const openGoogleMaps = () => {
    const address = encodeURIComponent('Coffee Cabana, R. Q.ta Dona Joana Forjaz, 9700-559, Portugal')
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank')
  }

  return (
    <Button 
      size={size}
      className={className}
      onClick={openGoogleMaps}
    >
      {children}
    </Button>
  )
} 