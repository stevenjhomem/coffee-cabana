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
  
  // Carousel images
  "/images/coffeecabana/Banana_EcoCamp-08.jpg",
  "/images/coffeecabana/Banana_EcoCamp-23.jpg",
  "/images/coffeecabana/blackandwhitepour.png",
  "/images/coffeecabana/cooltea.png",
  
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

    // Preload after a delay to not interfere with initial page load
    const timer = setTimeout(preloadAssets, 2000)
    
    return () => clearTimeout(timer)
  }, [])
}