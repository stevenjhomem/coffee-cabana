'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

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
      scroll: "rolar",
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
      scroll: "scroll",
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
      scroll: "scrollen",
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
      scroll: "desplazar",
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
      scroll: "défiler",
      features: {
        organic: { title: "100% Bio", desc: "Cultivé sans produits chimiques" },
        unique: { title: "Unique à Terceira", desc: "Exclusif à notre ferme" },
        handRoasted: { title: "Torréfié à la Main", desc: "Méthodes traditionnelles" }
      }
    }
  }

  const t = content[locale as keyof typeof content] || content.pt

  return (
    <section className="relative h-[90vh] md:h-screen flex items-start justify-center overflow-hidden">
      {/* Photo Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/coffee/Banana_EcoCamp-02.jpg')`
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto pt-41">
        {/* Main title - Brand name stays consistent */}
        <div className="mb-8">
          <div className="flex justify-center">
            <Image
              src="/images/coffee/homepagelogo.png"
              alt="Coffee Cabana"
              width={600}
              height={200}
              className="w-auto h-32 md:h-40 lg:h-48 brightness-0 invert"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned within the section */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="text-white hover:text-warm-tan transition-colors duration-300 cursor-pointer text-center">
          <div className="text-xs uppercase tracking-wider mb-2 opacity-80 font-semibold">{t.scroll}</div>
          <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 mx-auto stroke-2" />
        </div>
      </div>
    </section>
  )
}