"use client"

import React from "react"
import Image from "next/image"
import GoogleMapsButton from "@/components/ui/GoogleMapsButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { storyContent } from "@/constants/story"

// Critical resource preloading for story page LCP
const CriticalResourcePreload = () => (
  <>
    <link rel="preload" href="/images/coffeecabana/farm.jpeg" as="image" fetchPriority="high" />
    <link rel="dns-prefetch" href="/images/coffeecabana/" />
  </>
)


export default function StoryPage() {

  return (
    <>
      <CriticalResourcePreload />
      <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen flex items-start justify-center overflow-hidden">
        {/* Photo Background - Optimized for LCP */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/coffeecabana/farm.jpeg"
            alt="Quinta de café orgânico Coffee Cabana na Terceira, Açores"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center justify-center h-full">
          {/* Main title - Brand name stays consistent */}
          <div className="mb-8">
            <div className="flex justify-center">
              <h1
                className="w-96 md:w-[500px] lg:w-[600px] h-24 md:h-40 lg:h-48 bg-contain bg-center bg-no-repeat brightness-0 invert relative z-20 select-none"
                style={{
                  backgroundImage: `url("/images/logos/story/portuguese/ourstorypt3.png")`,
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  msUserSelect: "none",
                  WebkitTouchCallout: "none"
                }}
                draggable="false"
              >
                <span className="sr-only">A Nossa História - Coffee Cabana</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Scroll indicator - positioned within the section */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="text-white hover:text-warm-tan transition-colors duration-300 cursor-pointer text-center">
            <div className="text-xs uppercase tracking-wider mb-2 opacity-80 font-semibold">rolar</div>
            <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 mx-auto stroke-2" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mobile: Title + Image + Text */}
            <div className="lg:hidden">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {storyContent.pt.story.title}
                <br />
                <span className="text-amber-600">{storyContent.pt.story.name}</span>
              </h2>
              <div className="relative mb-8">
                <Image
                  src="/images/coffeecabana/bernardo.jpeg"
                  alt="José Bernardo trabalhando na plantação de bananas na quinta Coffee Cabana"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {storyContent.pt.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* Desktop: Text + Image (original layout) */}
            <div className="hidden lg:block">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {storyContent.pt.story.title}
                <br />
                <span className="text-amber-600">{storyContent.pt.story.name}</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {storyContent.pt.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <Image
                src="/images/coffeecabana/bernardo.jpeg"
                alt="José Bernardo trabalhando na plantação de bananas na quinta Coffee Cabana"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Craft Section */}
      <section className="py-24 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mobile: Title + Image + Text */}
            <div className="lg:hidden">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {storyContent.pt.coffeeCraft.title}
                <br />
                <span className="text-amber-600">{storyContent.pt.coffeeCraft.subtitle}</span>
              </h2>
              <div className="relative mb-8">
                <Image
                  src="/images/coffeecabana/family.png"
                  alt="Marcel, Marta e suas duas filhas na quinta Coffee Cabana"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {storyContent.pt.coffeeCraft.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* Desktop: Image + Text (original layout) */}
            <div className="hidden lg:block order-2 lg:order-1 relative">
              <Image
                src="/images/coffeecabana/family.png"
                alt="Marcel, Marta e suas duas filhas na quinta Coffee Cabana"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div className="hidden lg:block order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {storyContent.pt.coffeeCraft.title}
                <br />
                <span className="text-amber-600">{storyContent.pt.coffeeCraft.subtitle}</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {storyContent.pt.coffeeCraft.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-black">
            {storyContent.pt.footer.title}
            <br />
            <span className="text-amber-600">{storyContent.pt.footer.subtitle}</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            {storyContent.pt.footer.description}
          </p>
          <div className="flex justify-center">
            <GoogleMapsButton 
              size="lg" 
              className="bg-amber-400 text-black hover:bg-amber-300 px-8 py-3 text-lg font-medium"
            >
              {storyContent.pt.footer.button}
            </GoogleMapsButton>
          </div>
        </div>
      </section>
      </div>
    </>
  )
} 