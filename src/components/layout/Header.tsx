'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'
import { defaultLocale } from '@/lib/i18n/config'

interface HeaderProps {
  locale?: string
}

export default function Header({ locale = 'pt' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsLanguageOpen(false) // Close language switcher when menu opens
  }

  const handleLanguageToggle = () => {
    setIsLanguageOpen(!isLanguageOpen)
    setIsMenuOpen(false) // Close menu when language switcher opens
  }

  const navigation = {
    pt: [
      { name: 'Início', href: `/` },
      { name: 'Nossa História', href: `/story` },
      { name: 'Menu', href: `/menu` },
    ],
    en: [
      { name: 'Home', href: `/en` },
      { name: 'Our Story', href: `/en/story` },
      { name: 'Menu', href: `/en/menu` },
    ],
  }

  const navItems = navigation[locale as keyof typeof navigation] || navigation.pt

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/20 shadow-lg">
      <nav className="px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href={locale === defaultLocale ? '/' : `/${locale}`} className="flex items-center group">
                {/* Logo placeholder - you can replace with your SVG logo */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                    <Image 
                      src="/images/coffee/logo.svg" 
                      alt="Coffee Cabana Logo" 
                      width={56} 
                      height={56}
                      className="object-contain"
                    />
                </div>
            </a>
          </div>

          {/* Desktop Navigation - Far Right */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Language Switcher */}
            <LanguageSwitcher 
              currentLocale={locale} 
              isOpen={isLanguageOpen}
              onToggle={handleLanguageToggle}
            />
            <div className="relative">
              <button
                onClick={handleMenuToggle}
                className="text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                )}
              </button>
              
              {/* Desktop Navigation Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 py-1 z-50">
                  <div className="px-4 py-2 space-y-2">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block text-white hover:text-gray-300 transition-colors duration-200 font-medium py-2 text-right"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button - Far Right */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher 
              currentLocale={locale} 
              isOpen={isLanguageOpen}
              onToggle={handleLanguageToggle}
            />
            <div className="relative">
              <button
                onClick={handleMenuToggle}
                className="text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                )}
              </button>
              
              {/* Mobile Navigation Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 py-1 z-50">
                  <div className="px-4 py-2 space-y-2">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block text-white hover:text-gray-300 transition-colors duration-200 font-medium py-2 text-right"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}