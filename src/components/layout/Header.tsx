'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'
import { defaultLocale } from '@/lib/i18n/config'

interface HeaderProps {
  locale?: string
}

export default function Header({ locale = 'pt' }: HeaderProps) {
  const router = useRouter()
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

  const handleNavigation = (href: string) => {
    setIsMenuOpen(false)
    // Use setTimeout to ensure the menu closes before navigation
    setTimeout(() => {
      router.push(href)
    }, 100)
  }

  const navigation = {
    pt: [
      { name: 'Início', href: `/` },
      { name: 'A Nossa História', href: `/story` },
      { name: 'A Ementa', href: `/menu` },
    ],
    en: [
      { name: 'Home', href: `/en` },
      { name: 'Our Story', href: `/en/story` },
      { name: 'Menu', href: `/en/menu` },
    ],
  }

  const navItems = navigation[locale as keyof typeof navigation] || navigation.pt

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-sm border-b border-white/20 shadow-lg">
      <nav className="px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="flex items-center group">
                <a href={locale === defaultLocale ? '/' : `/${locale}`} className="flex items-center">
                    {/* Logo placeholder - you can replace with your SVG logo */}
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                        <Image 
                          src="/images/coffeecabana/logo.svg" 
                          alt="Coffee Cabana Logo" 
                          width={56} 
                          height={56}
                          className="object-contain"
                        />
                    </div>
                </a>
            </h1>
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
                <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 py-1 z-[110]">
                  <div className="px-4 py-2 space-y-2">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item.href)}
                        className="block w-full text-left text-white hover:text-gray-300 transition-colors duration-200 font-medium py-2 text-right"
                      >
                        {item.name}
                      </button>
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
                <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 py-1 z-[110]">
                  <div className="px-4 py-2 space-y-2">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item.href)}
                        className="block w-full text-left text-white hover:text-gray-300 transition-colors duration-200 font-medium py-2 text-right"
                      >
                        {item.name}
                      </button>
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