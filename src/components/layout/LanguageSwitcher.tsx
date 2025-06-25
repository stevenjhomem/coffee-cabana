'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface LanguageSwitcherProps {
  currentLocale: string
  isOpen: boolean
  onToggle: () => void
}

export default function LanguageSwitcher({ currentLocale, isOpen, onToggle }: LanguageSwitcherProps) {
  const languages = [
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ]

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center space-x-2 bg-transparent rounded-lg px-3 py-2 text-white hover:bg-white/10 transition-all duration-200 border border-white/30"
      >
        <span className="text-sm">{currentLanguage.flag}</span>
        <span className="text-sm font-medium hidden sm:block">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 py-1 z-50">
          {languages.map((language) => (
            <a
              key={language.code}
              href={`/${language.code}`}
              className={`flex items-center justify-end space-x-3 px-4 py-2 text-sm hover:bg-white/10 transition-colors duration-200 ${
                language.code === currentLocale ? 'bg-white/20 text-white font-medium' : 'text-white'
              }`}
              onClick={onToggle}
            >
              <span>{language.name}</span>
              <span>{language.flag}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}