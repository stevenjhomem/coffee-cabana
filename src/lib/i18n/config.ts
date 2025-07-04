export const locales = ['pt', 'en'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'pt';

// Locales that should have URL prefixes (all except default)
export const prefixedLocales = locales.filter(locale => locale !== defaultLocale);

// Only show these languages in the language switcher
export const visibleLocales = ['pt', 'en'] as const;
export type VisibleLocale = typeof visibleLocales[number];

export const localeNames = {
  pt: 'Português',
  en: 'English', 
} as const;

export const localeFlags = {
  pt: '🇵🇹',
  en: '🇺🇸',
} as const;