import HeroSection from '@/components/sections/HeroSection'

interface PageProps {
  params: { locale: string }
}

export default function HomePage({ params }: PageProps) {
  return (
    <main>
      <HeroSection locale={params.locale} />
      
      {/* Next section preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-light text-coffee-brown mb-6">
              {params.locale === 'en' ? 'From Plant to Cup' : 
               params.locale === 'de' ? 'Von der Pflanze zur Tasse' :
               params.locale === 'es' ? 'De la Planta a la Taza' :
               params.locale === 'fr' ? 'De la Plante à la Tasse' :
               'Da Planta à Chávena'}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {params.locale === 'en' ? 'Our coffee plants grow in the unique microclimate of Terceira Island, nurtured by volcanic soil and Atlantic breezes.' :
               'As nossas plantas de café crescem no microclima único da Ilha Terceira, nutridas pelo solo vulcânico e pelas brisas atlânticas.'}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}