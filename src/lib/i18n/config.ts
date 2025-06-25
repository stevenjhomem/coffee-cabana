export const locales = ['pt', 'en', 'de', 'es', 'fr'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'pt'; // Portuguese default for Azores

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