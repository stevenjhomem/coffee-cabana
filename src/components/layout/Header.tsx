'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'

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
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <nav className="w-full px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Far Left */}
          <div className="flex items-center">
            <a href={`/${locale}`} className="flex items-center group">
              <div className="w-12 h-12 bg-coffee-brown rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden border-2 border-green-900">
                <Image
                  src="/images/coffee/logo.svg"
                  alt="Coffee Cabana Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="ml-3 hidden sm:block">
                <span className="text-green-900 font-bold text-xl tracking-tight">
                  Coffee Cabana
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation - Far Right */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-green-900 hover:text-green-700 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            
            {/* Language Switcher */}
            <LanguageSwitcher currentLocale={locale} />
          </div>

          {/* Mobile Menu Button - Far Right */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher currentLocale={locale} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-900 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-green-900 hover:text-green-700 transition-colors duration-200 font-medium py-2"
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