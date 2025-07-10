"use client"

import { useImagePreloader } from "@/lib/hooks/useImagePreloader"

export default function ImagePreloader() {
  useImagePreloader()
  
  // This component doesn't render anything visible
  return null
}