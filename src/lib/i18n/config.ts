export const locales = ['pt', 'en', 'de', 'es', 'fr'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'pt'; // Portuguese default for Azores

// Locales that should have URL prefixes (all except default)
export const prefixedLocales = locales.filter(locale => locale !== defaultLocale);

// Only show these languages in the language switcher
export const visibleLocales = ['pt', 'en'] as const;
export type VisibleLocale = typeof visibleLocales[number];

export const localeNames = {
  pt: 'Português',
  en: 'English', 
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
} as const;

export const localeFlags = {
  pt: '🇵🇹',
  en: '🇺🇸',
  de: '🇩🇪', 
  es: '🇪🇸',
  fr: '🇫🇷',
} as const;