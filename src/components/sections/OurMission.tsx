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
      en: "Coffee Cabana embodies the belief that the best experiences only grow from authentic connections to the local environment " +
          "as well as the community. We're committed to sharing our exceptional coffee, fresh tropical produce, and our warm " +
          "hospitality with all who come to visit this amazing island we call home. Please consider joining us for coffee that " +
          "tastes like nowhere else on earth, brunch ingredients picked fresh from our farm, or a tour that shows you how our " +
          "passion created this unique corner of the island.",
      pt: "O Coffee Cabana nasce da convicção de que as melhores experiências só florescem a partir de ligações autênticas com " +
          "o ambiente local e com a comunidade. Comprometemo-nos a partilhar café de excelência, produtos tropicais frescos e " +
          "a nossa calorosa hospitalidade com todos os que visitam esta ilha maravilhosa que chamamos de casa. Convidamo-lo a " +
          "juntar-se a nós para saborear um café como nenhum outro no mundo, um brunch com ingredientes colhidos diretamente " +
          "da nossa quinta ou uma visita guiada que lhe mostra como a nossa paixão deu origem a este cantinho único da ilha.",
      de: "Coffee Cabana entsteht aus der Überzeugung, dass die besten Erfahrungen nur aus authentischen Verbindungen zur " +
          "lokalen Umwelt und zur Gemeinschaft erwachsen. Wir verpflichten uns, unseren außergewöhnlichen Kaffee, frische " +
          "tropische Produkte und unsere warme Gastfreundschaft mit allen zu teilen, die diese wunderbare Insel besuchen, " +
          "die wir unser Zuhause nennen. Wir laden Sie ein, sich uns anzuschließen, um Kaffee zu genießen, der nirgendwo " +
          "anders auf der Welt schmeckt, Brunch-Zutaten, die frisch von unserem Hof gepflückt werden, oder eine geführte " +
          "Tour, die Ihnen zeigt, wie unsere Leidenschaft diesen einzigartigen Winkel der Insel geschaffen hat.",
      es: "Coffee Cabana nace de la convicción de que las mejores experiencias solo florecen a partir de conexiones auténticas " +
          "con el entorno local y con la comunidad. Nos comprometemos a compartir café de excelencia, productos tropicales " +
          "frescos y nuestra cálida hospitalidad con todos los que visitan esta maravillosa isla que llamamos hogar. Te " +
          "invitamos a unirte a nosotros para saborear un café como ningún otro en el mundo, un brunch con ingredientes " +
          "cosechados directamente de nuestra granja o una visita guiada que te muestra cómo nuestra pasión dio origen a " +
          "este rincón único de la isla.",
      fr: "Coffee Cabana naît de la conviction que les meilleures expériences ne fleurissent qu'à partir de connexions " +
          "authentiques avec l'environnement local et la communauté. Nous nous engageons à partager notre café d'excellence, " +
          "nos produits tropicaux frais et notre chaleureuse hospitalité avec tous ceux qui visitent cette île merveilleuse " +
          "que nous appelons notre maison. Nous vous invitons à nous rejoindre pour savourer un café comme nulle part " +
          "ailleurs dans le monde, un brunch avec des ingrédients cueillis directement de notre ferme ou une visite guidée " +
          "qui vous montre comment notre passion a donné naissance à ce coin unique de l'île."
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