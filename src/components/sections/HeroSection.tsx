'use client'

import { Button } from '@/components/ui/Button'

interface HeroSectionProps {
  locale?: string
}

export default function HeroSection({ locale = 'pt' }: HeroSectionProps) {
  const content = {
    pt: {
      subtitle: "Café Orgânico da Terceira",
      description: "O único café cultivado e torrado na Ilha Terceira. Experimente nossa jornada da plantação à chávena no coração dos Açores.",
      ctaPrimary: "Prove Nosso Café",
      ctaSecondary: "Visite a Quinta",
      features: {
        organic: { title: "100% Orgânico", desc: "Cultivado sem químicos" },
        unique: { title: "Único na Terceira", desc: "Exclusivo da nossa quinta" },
        handRoasted: { title: "Torrado à Mão", desc: "Métodos tradicionais" }
      }
    },
    en: {
      subtitle: "Organic Coffee from Terceira",
      description: "The only coffee grown and roasted on Terceira Island. Experience our farm-to-cup journey in the heart of the Azores.",
      ctaPrimary: "Taste Our Coffee",
      ctaSecondary: "Visit Our Farm",
      features: {
        organic: { title: "100% Organic", desc: "Grown without chemicals" },
        unique: { title: "Unique to Terceira", desc: "Exclusive to our farm" },
        handRoasted: { title: "Hand Roasted", desc: "Traditional methods" }
      }
    },
    de: {
      subtitle: "Bio-Kaffee aus Terceira",
      description: "Der einzige Kaffee, der auf der Insel Terceira angebaut und geröstet wird. Erleben Sie unsere Reise von der Farm zur Tasse im Herzen der Azoren.",
      ctaPrimary: "Probieren Sie unseren Kaffee",
      ctaSecondary: "Besuchen Sie unsere Farm",
      features: {
        organic: { title: "100% Bio", desc: "Ohne Chemikalien angebaut" },
        unique: { title: "Einzigartig auf Terceira", desc: "Exklusiv von unserer Farm" },
        handRoasted: { title: "Handgeröstet", desc: "Traditionelle Methoden" }
      }
    },
    es: {
      subtitle: "Café Orgánico de Terceira",
      description: "El único café cultivado y tostado en la Isla Terceira. Experimenta nuestro viaje de la granja a la taza en el corazón de las Azores.",
      ctaPrimary: "Prueba Nuestro Café",
      ctaSecondary: "Visita Nuestra Granja",
      features: {
        organic: { title: "100% Orgánico", desc: "Cultivado sin químicos" },
        unique: { title: "Único en Terceira", desc: "Exclusivo de nuestra granja" },
        handRoasted: { title: "Tostado a Mano", desc: "Métodos tradicionales" }
      }
    },
    fr: {
      subtitle: "Café Bio de Terceira",
      description: "Le seul café cultivé et torréfié sur l'île de Terceira. Découvrez notre voyage de la ferme à la tasse au cœur des Açores.",
      ctaPrimary: "Goûtez Notre Café",
      ctaSecondary: "Visitez Notre Ferme",
      features: {
        organic: { title: "100% Bio", desc: "Cultivé sans produits chimiques" },
        unique: { title: "Unique à Terceira", desc: "Exclusif à notre ferme" },
        handRoasted: { title: "Torréfié à la Main", desc: "Méthodes traditionnelles" }
      }
    }
  }

  const t = content[locale as keyof typeof content] || content.pt

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Photo Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/coffee/farm.jpeg')`
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        {/* Main title - Brand name stays consistent */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4">
            <span 
              className="block text-white"
              style={{
                textShadow: '4px 4px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)',
              }}
            >
              COFFEE
            </span>
            <span 
              className="block text-warm-tan mt-2 brand-name no-translate"
              style={{
                textShadow: '4px 4px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)',
              }}
              translate="no"
              data-translate="no"
              data-google-translate="no"
            >
              CABANA
            </span>
          </h1>
        </div>

        {/* Subtitle with emphasis */}
        <div className="mb-8">
          <p className="text-2xl md:text-3xl font-light tracking-wide opacity-95 mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-warm-tan mx-auto"></div>
        </div>

        {/* Descriptive text */}
        <p className="text-lg md:text-xl font-light mb-12 max-w-3xl mx-auto opacity-95 leading-relaxed" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          {t.description}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="primary" size="lg" className="min-w-[200px]">
            {t.ctaPrimary}
          </Button>
          <Button variant="outline" size="lg" className="min-w-[200px]">
            {t.ctaSecondary}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-white hover:text-warm-tan transition-colors duration-300 cursor-pointer">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}