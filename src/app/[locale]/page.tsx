import HeroSection from '@/components/sections/HeroSection'

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  
  return (
    <main>
      <HeroSection locale={locale} />
      
      {/* Next section preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-light text-coffee-brown mb-6">
              {locale === 'en' ? 'From Plant to Cup' : 
               locale === 'de' ? 'Von der Pflanze zur Tasse' :
               locale === 'es' ? 'De la Planta a la Taza' :
               locale === 'fr' ? 'De la Plante à la Tasse' :
               'Da Planta à Chávena'}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {locale === 'en' ? 'Our coffee plants grow in the unique microclimate of Terceira Island, nurtured by volcanic soil and Atlantic breezes.' :
               'As nossas plantas de café crescem no microclima único da Ilha Terceira, nutridas pelo solo vulcânico e pelas brisas atlânticas.'}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}