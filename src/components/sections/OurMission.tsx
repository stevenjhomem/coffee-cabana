import Image from 'next/image'

interface OurMissionProps {
  locale: string
}

export default function OurMission({ locale }: OurMissionProps) {
  const translations = {
    title: {
      pt: 'Da Planta à Chávena',
      en: 'From Plant to Cup',
    },
    description: {
      pt: "O Coffee Cabana nasce da convicção de que as melhores experiências só florescem a partir de ligações autênticas com " +
          "o ambiente local e com a comunidade. Comprometemo-nos a partilhar café de excelência, produtos tropicais frescos e " +
          "a nossa calorosa hospitalidade com todos os que visitam esta ilha maravilhosa que chamamos de casa. Convidamo-lo a " +
          "juntar-se a nós para saborear um café como nenhum outro no mundo, um brunch com ingredientes colhidos diretamente " +
          "da nossa quinta ou uma visita guiada que lhe mostra como a nossa paixão deu origem a este cantinho único da ilha.",
      en: "Coffee Cabana embodies the belief that the best experiences only grow from authentic connections to the local environment " +
          "as well as the community. We're committed to sharing our exceptional coffee, fresh tropical produce, and our warm " +
          "hospitality with all who come to visit this amazing island we call home. Please consider joining us for coffee that " +
          "tastes like nowhere else on earth, brunch ingredients picked fresh from our farm, or a tour that shows you how our " +
          "passion created this unique corner of the island.",
    }
  }

  return (
    <section className="py-15 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Container - Image (Top on mobile, Left on desktop) */}
          <div className="flex-1 w-full lg:w-auto">
            <Image 
              src="/images/coffeecabana/Banana_EcoCamp-46.jpg" 
              alt="Plantação de café orgânico na quinta Coffee Cabana com vista para as montanhas da Terceira" 
              width={400} 
              height={320}
              className="rounded-lg object-cover w-full h-80"
              style={{ height: "auto" }}
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