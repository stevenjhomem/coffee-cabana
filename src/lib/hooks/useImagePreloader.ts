"use client"

import { useEffect } from "react"

// List of all images used throughout the site for preloading
const imageList = [
  // Story page images
  "/images/coffeecabana/farm.jpeg",
  "/images/coffeecabana/bernardo.jpeg", 
  "/images/coffeecabana/family.png",
  
  // Background images
  "/images/coffeecabana/Banana_EcoCamp-52.jpg",
  "/images/coffeecabana/Banana_EcoCamp-30.jpg",
  "/images/coffeecabana/Banana_EcoCamp-46.jpg",
  "/images/coffeecabana/Banana_EcoCamp-02.jpg",
  
  // Logo variations
  "/images/logos/home/coffeecabana.png",
  "/images/logos/story/english/ourstoryen.png",
  "/images/logos/story/portuguese/ourstorypt3.png", 
  "/images/logos/menu/english/menulogoen.png",
  "/images/logos/menu/portuguese/menulogopt.png",
  
  // Other images
  "/images/coffeecabana/coffee-cabana-instagram.png"
]

export const useImagePreloader = () => {
  useEffect(() => {
    const preloadImages = () => {
      imageList.forEach((src) => {
        const img = new Image()
        img.src = src
        // Optional: add error handling
        img.onerror = () => console.warn(`Failed to preload image: ${src}`)
      })
    }

    // Preload after a delay to not interfere with initial page load
    // This gives the initial page time to fully load first
    const timer = setTimeout(preloadImages, 2000)
    
    return () => clearTimeout(timer)
  }, [])
}