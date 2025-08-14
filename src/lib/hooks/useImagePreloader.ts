"use client"

import { useEffect } from "react"

// List of all images used throughout the site for preloading
const imageList = [
  // Story page images
  "/images/coffeecabana/farm.webp",
  "/images/coffeecabana/bernardo.webp", 
  "/images/coffeecabana/family.png",
  
  // Background images
  "/images/coffeecabana/Banana_EcoCamp-52.jpg",
  "/images/coffeecabana/Banana_EcoCamp-30.webp",
  "/images/coffeecabana/Banana_EcoCamp-46.jpg",
  "/images/coffeecabana/Banana_EcoCamp-02.webp",
  
  // Carousel images
  "/images/coffeecabana/Banana_EcoCamp-08.webp",
  "/images/coffeecabana/Banana_EcoCamp-23.webp",
  "/images/coffeecabana/blackandwhitepour.webp",
  "/images/coffeecabana/cooltea.webp",
  
  // Logo variations
  "/images/logos/home/coffeecabana.webp",
  "/images/logos/story/english/ourstoryen.png",
  "/images/logos/story/portuguese/ourstorypt3.png", 
  "/images/logos/menu/english/menulogoen.png",
  "/images/logos/menu/portuguese/menulogopt.png",
  
  // Other images
  "/images/coffeecabana/coffee-cabana-instagram.webp"
]

export const useImagePreloader = () => {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return

    const preloadAssets = () => {
      // Preload images
      imageList.forEach((src) => {
        const img = new Image()
        img.src = src
      })

      // Preload video
      const video = document.createElement("video")
      video.preload = "metadata"
      video.src = "/images/coffeecabana/1080pvid.webm"
    }

    // Preload after a longer delay to not interfere with LCP
    const timer = setTimeout(preloadAssets, 5000)
    
    return () => clearTimeout(timer)
  }, [])
}