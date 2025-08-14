export const navigation = {
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
} as const

export type NavigationLocale = keyof typeof navigation
export type NavigationItem = typeof navigation.pt[number]
