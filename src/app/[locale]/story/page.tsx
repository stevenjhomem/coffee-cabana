import type { Metadata } from 'next'
import Image from "next/image"
import GoogleMapsButton from "@/components/ui/GoogleMapsButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const metaData = {
    en: {
      title: 'Our Story - Coffee Cabana | Azores',
      description: 'Discover the story of Coffee Cabana, from plantation to cup, in the heart of Terceira Island.',
    },
    de: {
      title: 'Unsere Geschichte - Coffee Cabana | Azoren',
      description: 'Entdecken Sie die Geschichte von Coffee Cabana, von der Plantage bis zur Tasse, im Herzen der Insel Terceira.',
    },
    es: {
      title: 'Nuestra Historia - Coffee Cabana | Azores',
      description: 'Descubre la historia de Coffee Cabana, desde la plantación hasta la taza, en el corazón de la Isla Terceira.',
    },
    fr: {
      title: 'Notre Histoire - Coffee Cabana | Açores',
      description: 'Découvrez l\'histoire de Coffee Cabana, de la plantation à la tasse, au cœur de l\'île de Terceira.',
    },
  }

  const currentMeta = metaData[locale as keyof typeof metaData] || metaData.en

  return {
    ...currentMeta,
    keywords: 'história café Terceira, coffee story Azores, plantation café Açores, coffee farm Terceira',
    authors: [{ name: 'Coffee Cabana' }],
    creator: 'Coffee Cabana',
    publisher: 'Coffee Cabana',
    robots: 'index, follow',
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      url: `https://coffeecabana.pt/${locale}/story`,
      siteName: 'Coffee Cabana',
      locale: `${locale}_${locale.toUpperCase()}`,
      type: 'website',
      images: [
        {
          url: '/images/coffee/coffee-cabana-instagram.png',
          width: 1200,
          height: 630,
          alt: currentMeta.title,
          type: 'image/png',
        },
      ],
    },
    alternates: {
      canonical: `https://coffeecabana.pt/${locale}/story`,
      languages: {
        'pt': 'https://coffeecabana.pt/story',
        'en': 'https://coffeecabana.pt/en/story',
        'de': 'https://coffeecabana.pt/de/story',
        'es': 'https://coffeecabana.pt/es/story',
        'fr': 'https://coffeecabana.pt/fr/story',
      },
    },
  }
}

export default async function StoryPage({ params }: Props) {
  const { locale } = await params

  const content = {
    pt: {
      hero: {
        title: 'FROM FARM TO CUP',
        subtitle: 'A story of sustainable agriculture, artisan coffee, and family tradition'
      },
      story: {
        title: 'Our Story Begins With',
        name: 'José Bernardo',
        paragraphs: [
          'José is the one who started it all. Born on Terceira Island, he moved to Angola, Africa, with his family in 1958 at the age of eight. From the late 1950s through the early 1970s, they managed a farm, where José gained extensive knowledge and experience in African agriculture.',
          'When the war broke out in Angola, like many other Portuguese families, they were forced to flee—returning to Portugal empty-handed.',
          'Soon after, they emigrated to California, USA. However, it wasn&apos;t long before José decided to return to his roots on Terceira. Back home, he worked for the regional government as the CEO of the Agriculture Department.',
          'After retiring, he purchased a piece of land he believed had the potential to grow tropical fruits. That&apos;s when he began planting bananas and coffee.',
          'In 2016, as a personal project and hobby, he built his first wooden cabin. Today, that vision has expanded into a beautiful eco retreat with six simple cabins, three luxury cabins, and various amenities throughout the property.',
          'In 2019, he created Coffee Cabana. Originally intended to serve guests, it quickly became a place to share their unique, homegrown coffee with the public.'
        ]
      },
      coffeeCraft: {
        title: 'Our Story Continues With',
        subtitle: 'Marcel and Marta',
        paragraphs: [
          'Marcel, the son of a farmer and a veterinarian, grew up with a deep connection to nature and animals. After finishing high school, he decided to pursue his studies in the Netherlands, where his mother is originally from. There, he completed a degree in Maritime Operations and began working aboard Dutch-flagged ships as a Maritime Officer.',
          'During one of his leaves, Marcel met Marta, with whom he had his first daughter. Realizing that maritime life meant long periods away from home—and not wanting to miss his daughter growing up—Marcel made the decision to return to the Azores.',
          'He settled on Terceira Island, where Marta was living. In 2023, Bernardo was searching for someone new to manage Banana Eco Camp and Coffee Cabana. After an extensive search, he recognized that Marcel&apos;s farming background and the versatile skills he had acquired at sea made him the ideal candidate.',
          'Today, Marcel and Marta live on the farm with their two young daughters. Together, they are always on hand to welcome guests with warmth and care.'
        ]
      },
      footer: {
        title: 'Experience Our Story',
        subtitle: 'One Cup At A Time',
        description: 'Visit us to taste the difference that passion, quality, and family tradition make.',
        button: 'Come Visit Us'
      }
    },
    en: {
      hero: {
        title: 'FROM FARM TO CUP',
        subtitle: 'A story of sustainable agriculture, artisan coffee, and family tradition'
      },
      story: {
        title: 'Our Story Begins With',
        name: 'José Bernardo',
        paragraphs: [
          'José is the one who started it all. Born on Terceira Island, he moved to Angola, Africa, with his family in 1958 at the age of eight. From the late 1950s through the early 1970s, they managed a farm, where José gained extensive knowledge and experience in African agriculture.',
          'When the war broke out in Angola, like many other Portuguese families, they were forced to flee—returning to Portugal empty-handed.',
          'Soon after, they emigrated to California, USA. However, it wasn&apos;t long before José decided to return to his roots on Terceira. Back home, he worked for the regional government as the CEO of the Agriculture Department.',
          'After retiring, he purchased a piece of land he believed had the potential to grow tropical fruits. That&apos;s when he began planting bananas and coffee.',
          'In 2016, as a personal project and hobby, he built his first wooden cabin. Today, that vision has expanded into a beautiful eco retreat with six simple cabins, three luxury cabins, and various amenities throughout the property.',
          'In 2019, he created Coffee Cabana. Originally intended to serve guests, it quickly became a place to share their unique, homegrown coffee with the public.'
        ]
      },
      coffeeCraft: {
        title: 'Our Story Continues With',
        subtitle: 'Marcel and Marta',
        paragraphs: [
          'Marcel, the son of a farmer and a veterinarian, grew up with a deep connection to nature and animals. After finishing high school, he decided to pursue his studies in the Netherlands, where his mother is originally from. There, he completed a degree in Maritime Operations and began working aboard Dutch-flagged ships as a Maritime Officer.',
          'During one of his leaves, Marcel met Marta, with whom he had his first daughter. Realizing that maritime life meant long periods away from home—and not wanting to miss his daughter growing up—Marcel made the decision to return to the Azores.',
          'He settled on Terceira Island, where Marta was living. In 2023, Bernardo was searching for someone new to manage Banana Eco Camp and Coffee Cabana. After an extensive search, he recognized that Marcel&apos;s farming background and the versatile skills he had acquired at sea made him the ideal candidate.',
          'Today, Marcel and Marta live on the farm with their two young daughters. Together, they are always on hand to welcome guests with warmth and care.'
        ]
      },
      footer: {
        title: 'Experience Our Story',
        subtitle: 'One Cup At A Time',
        description: 'Visit us to taste the difference that passion, quality, and family tradition make.',
        button: 'Come Visit Us'
      }
    },
    de: {
      hero: {
        title: 'VON DER FARM ZUR TASSE',
        subtitle: 'Eine Geschichte nachhaltiger Landwirtschaft, handwerklichen Kaffees und Familientradition'
      },
      story: {
        title: 'Unsere Geschichte beginnt mit',
        name: 'José Bernardo',
        paragraphs: [
          'José ist derjenige, der alles begonnen hat. Geboren auf der Insel Terceira, zog er 1958 im Alter von acht Jahren mit seiner Familie nach Angola, Afrika. Von den späten 1950er Jahren bis in die frühen 1970er Jahre bewirtschafteten sie eine Farm, wo José umfangreiche Kenntnisse und Erfahrungen in der afrikanischen Landwirtschaft sammelte.',
          'Als der Krieg in Angola ausbrach, mussten sie wie viele andere portugiesische Familien fliehen und kehrten mit leeren Händen nach Portugal zurück.',
          'Kurz darauf emigrierten sie nach Kalifornien, USA. Es dauerte jedoch nicht lange, bis José beschloss, zu seinen Wurzeln auf Terceira zurückzukehren. Zuhause arbeitete er für die Regionalregierung als CEO der Abteilung für Landwirtschaft.',
          'Nach seiner Pensionierung kaufte er ein Stück Land, von dem er glaubte, dass es das Potenzial habe, tropische Früchte anzubauen. Dann begann er, Bananen und Kaffee zu pflanzen.',
          '2016 baute er als persönliches Projekt und Hobby seine erste Holzhütte. Heute hat sich diese Vision zu einem wunderschönen Öko-Retreat mit sechs einfachen Hütten, drei Luxushütten und verschiedenen Annehmlichkeiten auf dem gesamten Grundstück erweitert.',
          '2019 schuf er Coffee Cabana. Ursprünglich gedacht, um Gäste zu bewirten, wurde es schnell zu einem Ort, um ihren einzigartigen, selbst angebauten Kaffee mit der Öffentlichkeit zu teilen.'
        ]
      },
      coffeeCraft: {
        title: 'Hergestellt mit',
        subtitle: 'Präzision & Sorgfalt',
        paragraphs: [
          'Unser Ansatz zum Kaffee ist in derselben Aufmerksamkeit für Details verwurzelt, die wir in die Landwirtschaft bringen. Jede Bohne wird sorgfältig ausgewählt, jede Röstung wird sorgfältig handgefertigt.',
          'Wir glauben, dass großartiger Kaffee mehr ist als nur ein Getränk—es ist ein Moment der Verbindung, eine Pause am Tag, eine Feier des Handwerks.',
          'Von unseren Händen zu Ihrer Tasse stellen wir sicher, dass jeder Schritt des Prozesses die Reise von der Farm zum Tisch ehrt.'
        ]
      },
      footer: {
        title: 'Erleben Sie unsere Geschichte',
        subtitle: 'Eine Tasse nach der anderen',
        description: 'Besuchen Sie uns, um den Unterschied zu schmecken, den Leidenschaft, Qualität und Familientradition ausmachen.',
        button: 'Besuchen Sie uns'
      }
    },
    es: {
      hero: {
        title: 'DE LA GRANJA A LA TAZA',
        subtitle: 'Una historia de agricultura sostenible, café artesanal y tradición familiar'
      },
      story: {
        title: 'Nuestra historia comienza con',
        name: 'José Bernardo',
        paragraphs: [
          'José es quien lo inició todo. Nacido en la Isla Terceira, se mudó a Angola, África, con su familia en 1958 a la edad de ocho años. Desde finales de la década de 1950 hasta principios de la de 1970, administraron una granja, donde José adquirió amplios conocimientos y experiencia en agricultura africana.',
          'Cuando estalló la guerra en Angola, como muchas otras familias portuguesas, se vieron obligados a huir, regresando a Portugal con las manos vacías.',
          'Poco después, emigraron a California, EE.UU. Sin embargo, no pasó mucho tiempo antes de que José decidiera regresar a sus raíces en Terceira. En casa, trabajó para el gobierno regional como CEO del Departamento de Agricultura.',
          'Después de jubilarse, compró una parcela de tierra que creía que tenía potencial para cultivar frutas tropicales. Fue entonces cuando comenzó a plantar plátanos y café.',
          'En 2016, como proyecto personal y hobby, construyó su primera cabaña de madera. Hoy, esa visión se ha expandido a un hermoso retiro ecológico con seis cabañas simples, tres cabañas de lujo y varias comodidades en toda la propiedad.',
          'En 2019, creó Coffee Cabana. Originalmente destinado a servir a los huéspedes, rápidamente se convirtió en un lugar para compartir su café único y cultivado en casa con el público.'
        ]
      },
      coffeeCraft: {
        title: 'Elaborado con',
        subtitle: 'Precisión y Cuidado',
        paragraphs: [
          'Nuestro enfoque del café está arraigado en la misma atención al detalle que traemos a la agricultura. Cada grano se selecciona cuidadosamente, cada tostado se elabora meticulosamente.',
          'Creemos que el gran café es más que solo una bebida—es un momento de conexión, una pausa en el día, una celebración de la artesanía.',
          'De nuestras manos a su taza, nos aseguramos de que cada paso del proceso honre el viaje de la granja a la mesa.'
        ]
      },
      footer: {
        title: 'Experimenta Nuestra Historia',
        subtitle: 'Una Taza a la Vez',
        description: 'Visítanos para probar la diferencia que la pasión, la calidad y la tradición familiar hacen.',
        button: 'Ven a Visitarnos'
      }
    },
    fr: {
      hero: {
        title: 'DE LA FERME À LA TASSE',
        subtitle: 'Une histoire d\'agriculture durable, de café artisanal et de tradition familiale'
      },
      story: {
        title: 'Notre histoire commence avec',
        name: 'José Bernardo',
        paragraphs: [
          'José est celui qui a tout commencé. Né sur l\'île de Terceira, il a déménagé en Angola, Afrique, avec sa famille en 1958 à l\'âge de huit ans. De la fin des années 1950 au début des années 1970, ils ont géré une ferme, où José a acquis une vaste connaissance et expérience en agriculture africaine.',
          'Lorsque la guerre a éclaté en Angola, comme beaucoup d\'autres familles portugaises, ils ont été forcés de fuir—retournant au Portugal les mains vides.',
          'Peu après, ils ont émigré en Californie, USA. Cependant, il ne fallut pas longtemps avant que José décide de retourner à ses racines sur Terceira. Chez lui, il a travaillé pour le gouvernement régional en tant que PDG du Département de l\'Agriculture.',
          'Après sa retraite, il a acheté un terrain qu\'il croyait avoir le potentiel de cultiver des fruits tropicaux. C\'est alors qu\'il a commencé à planter des bananes et du café.',
          'En 2016, comme projet personnel et passe-temps, il a construit sa première cabane en bois. Aujourd\'hui, cette vision s\'est étendue à un beau retraite écologique avec six cabanes simples, trois cabanes de luxe et diverses commodités dans toute la propriété.',
          'En 2019, il a créé Coffee Cabana. Initialement destiné à servir les clients, il est rapidement devenu un lieu pour partager leur café unique et cultivé à la maison avec le public.'
        ]
      },
      coffeeCraft: {
        title: 'Élaboré avec',
        subtitle: 'Précision et Soin',
        paragraphs: [
          'Notre approche du café est ancrée dans le même souci du détail que nous apportons à l\'agriculture. Chaque grain est soigneusement sélectionné, chaque torréfaction est méticuleusement élaborée.',
          'Nous croyons que le grand café est plus qu\'une simple boisson—c\'est un moment de connexion, une pause dans la journée, une célébration de l\'artisanat.',
          'De nos mains à votre tasse, nous nous assurons que chaque étape du processus honore le voyage de la ferme à la table.'
        ]
      },
      footer: {
        title: 'Découvrez Notre Histoire',
        subtitle: 'Une Tasse à la Fois',
        description: 'Visitez-nous pour goûter la différence que la passion, la qualité et la tradition familiale font.',
        button: 'Venez Nous Visiter'
      }
    }
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen flex items-start justify-center overflow-hidden">
        {/* Photo Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/coffee/farm.jpeg')`
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto pt-50">
          {/* Main title - Brand name stays consistent */}
          <div className="mb-8">
            <div className="flex justify-center">
              <Image
                src="/images/coffee/ourstorylogo.png"
                alt="Coffee Cabana"
                width={600}
                height={200}
                className="w-auto h-32 md:h-40 lg:h-48 brightness-0 invert"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-6 drop-shadow-lg">
            {t.hero.title}
          </h1>
        </div>

        {/* Scroll indicator - positioned within the section */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="text-white hover:text-warm-tan transition-colors duration-300 cursor-pointer text-center">
            <div className="text-xs uppercase tracking-wider mb-2 opacity-80 font-semibold">scroll</div>
            <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 mx-auto stroke-2" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mobile: Title + Image + Text */}
            <div className="lg:hidden">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {t.story.title}
                <br />
                <span className="text-amber-600">{t.story.name}</span>
              </h2>
              <div className="relative mb-8">
                <Image
                  src="/images/coffee/bernardo.jpeg"
                  alt="Bernardo working in the banana plantation"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {t.story.paragraphs.map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            </div>
            
            {/* Desktop: Text + Image (original layout) */}
            <div className="hidden lg:block">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {t.story.title}
                <br />
                <span className="text-amber-600">{t.story.name}</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {t.story.paragraphs.map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <Image
                src="/images/coffee/bernardo.jpeg"
                alt="Bernardo working in the banana plantation"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Craft Section */}
      <section className="py-24 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mobile: Title + Image + Text */}
            <div className="lg:hidden">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {t.coffeeCraft.title}
                <br />
                <span className="text-amber-600">{t.coffeeCraft.subtitle}</span>
              </h2>
              <div className="relative mb-8">
                <Image
                  src="/images/coffee/family.png"
                  alt="Marcel and Marta family"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {t.coffeeCraft.paragraphs.map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            </div>
            
            {/* Desktop: Image + Text (original layout) */}
            <div className="hidden lg:block order-2 lg:order-1 relative">
              <Image
                src="/images/coffee/family.png"
                alt="Marcel and Marta family"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div className="hidden lg:block order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                {t.coffeeCraft.title}
                <br />
                <span className="text-amber-600">{t.coffeeCraft.subtitle}</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {t.coffeeCraft.paragraphs.map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-black">
            {t.footer.title}
            <br />
            <span className="text-amber-600">{t.footer.subtitle}</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            {t.footer.description}
          </p>
          <div className="flex justify-center">
            <GoogleMapsButton 
              size="lg" 
              className="bg-amber-400 text-black hover:bg-amber-300 px-8 py-3 text-lg font-medium"
            >
              {t.footer.button}
            </GoogleMapsButton>
          </div>
        </div>
      </section>
    </div>
  )
} 