import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale

  const metaData = {
    pt: {
      title: 'Coffee Cabana - Café Orgânico Terceira | Açores',
      description: 'O único café cultivado e torrado na Ilha Terceira. Experimente nossa jornada da plantação à chávena no coração dos Açores.',
    },
    en: {
      title: 'Coffee Cabana - Organic Coffee Terceira | Azores',
      description: 'The only coffee grown and roasted on Terceira Island. Experience our farm-to-cup journey in the heart of the Azores.',
    },
    de: {
      title: 'Coffee Cabana - Bio-Kaffee Terceira | Azoren',
      description: 'Der einzige Kaffee, der auf der Insel Terceira angebaut und geröstet wird. Erleben Sie unsere Reise von der Farm zur Tasse.',
    },
    es: {
      title: 'Coffee Cabana - Café Orgánico Terceira | Azores',
      description: 'El único café cultivado y tostado en la Isla Terceira. Experimenta nuestro viaje de la granja a la taza.',
    },
    fr: {
      title: 'Coffee Cabana - Café Bio Terceira | Açores',
      description: 'Le seul café cultivé et torréfié sur l\'île de Terceira. Découvrez notre voyage de la ferme à la tasse.',
    },
  }

  return metaData[locale as keyof typeof metaData] || metaData.pt
}

export default function LocaleLayout({ children, params }: Props) {
  return (
    <>
      {children}
    </>
  )
}
