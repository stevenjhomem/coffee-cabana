import Image from 'next/image'

interface OurMissionProps {
  locale: string
}

export default function OurMission({ locale }: OurMissionProps) {
  const translations = {
    title: {
      en: 'From Plant to Cup',
      de: 'Von der Pflanze zur Tasse',
      es: 'De la Planta a la Taza',
      fr: 'De la Plante à la Tasse',
      pt: 'Da Planta à Chávena'
    },
    description: {
      en: "Coffee Cabana embodies the belief that the best experiences grow from authentic connections to place and community. We're " +
      "committed to sharing exceptional coffee, fresh tropical produce, and warm hospitality that naturally flourish when people" +
      " truly belong to the land they cultivate. Join us for coffee that tastes like nowhere else on earth, brunch ingredients picked" +
      " fresh from our farm, or a tour that shows you how our passion created this unique corner of the Azores.",
      pt: 'As nossas plantas de café crescem no microclima único da Ilha Terceira, nutridas pelo solo vulcânico e pelas brisas atlânticas.'
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Container - Image (Top on mobile, Left on desktop) */}
          <div className="flex-1 w-full lg:w-auto">
            <Image 
              src="/images/coffee/Banana_EcoCamp-46.jpg" 
              alt="Coffee plantation at Banana EcoCamp" 
              width={400} 
              height={320}
              className="rounded-lg object-cover w-full h-80"
            />
          </div>

          {/* Left Container - Text (Bottom on mobile, Left on desktop) */}
          <div className="flex-1 w-full lg:w-auto">
            <h2 className="text-4xl text-gray-600 mb-6">
              {translations.title[locale as keyof typeof translations.title] || translations.title.pt}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {translations.description[locale as keyof typeof translations.description] || translations.description.pt}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}