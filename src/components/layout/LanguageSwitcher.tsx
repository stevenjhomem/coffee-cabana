'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { locales, localeNames, localeFlags, defaultLocale } from '@/lib/i18n/config'

interface LanguageSwitcherProps {
  currentLocale: string
  isOpen: boolean
  onToggle: () => void
}

export default function LanguageSwitcher({ currentLocale, isOpen, onToggle }: LanguageSwitcherProps) {
  const languages = locales.map(code => ({
    code,
    name: localeNames[code as keyof typeof localeNames],
    flag: localeFlags[code as keyof typeof localeFlags]
  }))

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center space-x-2 bg-transparent rounded-lg px-3 py-2 text-white hover:bg-white/10 transition-all duration-200 border border-white/30"
      >
        <span className="text-sm">{currentLanguage.flag}</span>
        <span className="text-sm font-medium hidden sm:block">{currentLanguage.code.toUpperCase()}</span>
        <FontAwesomeIcon 
          icon={faChevronDown} 
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 py-1 z-50">
          {languages.map((language) => {
            const href = language.code === defaultLocale ? '/' : `/${language.code}`
            return (
              <a
                key={language.code}
                href={href}
                className={`flex items-center justify-end space-x-3 px-4 py-2 text-sm hover:bg-white/10 transition-colors duration-200 ${
                  language.code === currentLocale ? 'bg-white/20 text-white font-medium' : 'text-white'
                }`}
                onClick={onToggle}
              >
                <span>{language.name}</span>
                <span>{language.flag}</span>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}