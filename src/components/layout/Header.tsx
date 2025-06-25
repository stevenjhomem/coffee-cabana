'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'

interface HeaderProps {
  locale?: string
}

export default function Header({ locale = 'pt' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = {
    pt: [
      { name: 'Início', href: `/pt` },
      { name: 'Nossa História', href: `/pt/story` },
      { name: 'Café', href: `/pt/coffee` },
      { name: 'Visite-nos', href: `/pt/visit` },
      { name: 'Contacto', href: `/pt/contact` },
    ],
    en: [
      { name: 'Home', href: `/en` },
      { name: 'Our Story', href: `/en/story` },
      { name: 'Coffee', href: `/en/coffee` },
      { name: 'Visit Us', href: `/en/visit` },
      { name: 'Contact', href: `/en/contact` },
    ],
    de: [
      { name: 'Startseite', href: `/de` },
      { name: 'Unsere Geschichte', href: `/de/story` },
      { name: 'Kaffee', href: `/de/coffee` },
      { name: 'Besuchen Sie uns', href: `/de/visit` },
      { name: 'Kontakt', href: `/de/contact` },
    ],
    es: [
      { name: 'Inicio', href: `/es` },
      { name: 'Nuestra Historia', href: `/es/story` },
      { name: 'Café', href: `/es/coffee` },
      { name: 'Visítanos', href: `/es/visit` },
      { name: 'Contacto', href: `/es/contact` },
    ],
    fr: [
      { name: 'Accueil', href: `/fr` },
      { name: 'Notre Histoire', href: `/fr/story` },
      { name: 'Café', href: `/fr/coffee` },
      { name: 'Visitez-nous', href: `/fr/visit` },
      { name: 'Contact', href: `/fr/contact` },
    ],
  }

  const navItems = navigation[locale as keyof typeof navigation] || navigation.pt

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href={`/${locale}`} className="flex items-center group">
                {/* Logo placeholder - you can replace with your SVG logo */}
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                    <Image 
                      src="/images/coffee/logo.svg" 
                      alt="Coffee Cabana Logo" 
                      width={32} 
                      height={32}
                      className="object-contain"
                    />
                </div>
            </a>
          </div>

          {/* Desktop Navigation - Far Right */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
            {/* Language Switcher */}
            <LanguageSwitcher currentLocale={locale} />
          </div>

          {/* Mobile Menu Button - Far Right */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>

        {/* Navigation Menu - Both Desktop and Mobile */}
        {isMenuOpen && (
          <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-warm-tan transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}