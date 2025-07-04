import type { Metadata } from 'next'
import React from 'react'
import Image from "next/image"
import GoogleMapsButton from "@/components/ui/GoogleMapsButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Sobre Nós - Coffee Cabana | Açores',
  description: 'Descubra a história por detrás do Coffee Cabana, a única quinta de café na Ilha Terceira, e o nosso compromisso com o café orgânico e a agricultura sustentável.',
  keywords: 'café Terceira, brunch Açores, bananas tropicais, restaurante Angra do Heroísmo, quinta agriturismo, pequeno-almoço Terceira, café orgânico, plantation bananas Açores, farm to table Terceira, café da manhã Azores',
  authors: [{ name: 'Coffee Cabana' }],
  creator: 'Coffee Cabana',
  publisher: 'Coffee Cabana',
  robots: 'index, follow',
  openGraph: {
    title: 'A Nossa História - Coffee Cabana | Açores',
    description: 'Descubra a história por detrás do Coffee Cabana, a única quinta de café na Ilha Terceira, e o nosso compromisso com o café orgânico e a agricultura sustentável.',
    url: 'https://coffeecabana.pt/story',
    siteName: 'Coffee Cabana',
    locale: 'pt_PT',
    type: 'website',
    images: [
      {
        url: '/images/coffeecabana/Banana_EcoCamp-49.jpg',
        width: 1200,
        height: 630,
        alt: 'Sobre Nós - Coffee Cabana | Açores',
        type: 'image/png',
      },
    ],
  },
  alternates: {
    canonical: 'https://coffeecabana.pt/story',
    languages: {
      'pt': 'https://coffeecabana.pt/story',
      'en': 'https://coffeecabana.pt/en/story',
    },
  },
}

export default function StoryPage() {
  const content = {
    hero: {
      title: 'Da Quinta ao Copo',
    },
    story: {
      title: 'A Nossa História Começa Com',
      name: 'José Bernardo',
      paragraphs: [
        'O José foi quem começou tudo. Nascido na Ilha Terceira, mudou-se para Angola, em África, com a família em 1958, com apenas oito anos de idade. Desde o final dos anos 50 até ao início dos anos 70, geriram uma quinta, onde o José adquiriu vastos conhecimentos e experiência em agricultura africana.',
        'Quando rebentou a guerra em Angola, tal como muitas outras famílias portuguesas, foram forçados a fugir — regressando a Portugal de mãos vazias.',
        'Pouco tempo depois, emigraram para a Califórnia, nos Estados Unidos. No entanto, não demorou muito até que o José decidisse voltar às suas raízes na Terceira. Já em casa, trabalhou para o governo regional como diretor do Departamento de Agricultura.',
        'Após a reforma, comprou um terreno em que acreditava ter potencial para cultivar frutas tropicais. Foi então que começou a plantar bananas e café.',
        'Em 2016, como projeto pessoal e passatempo, construiu a sua primeira cabana de madeira. Hoje, essa visão cresceu e transformou-se num bonito retiro ecológico com seis cabanas simples, três cabanas de luxo e várias comodidades espalhadas pela propriedade.',
        'Em 2019, criou a Coffee Cabana. Inicialmente pensada para servir os hóspedes, rapidamente se tornou um espaço para partilhar o seu café único e cultivado localmente com o público.'
      ]
    },
    coffeeCraft: {
      title: 'A Nossa História Continua Com',
      subtitle: 'Marcel e Marta',
      paragraphs: [
        'Marcel, filho de um agricultor e de uma veterinária, cresceu com uma forte ligação à natureza e aos animais. Após terminar o ensino secundário, decidiu prosseguir os estudos nos Países Baixos, de onde a sua mãe é natural. Lá, concluiu uma licenciatura em Operações Marítimas e começou a trabalhar a bordo de navios com bandeira holandesa como Oficial da Marinha Mercante.',
        'Durante uma das suas licenças, Marcel conheceu a Marta, com quem teve a sua primeira filha. Ao perceber que a vida no mar implicava longos períodos longe de casa — e sem querer perder o crescimento da filha — Marcel tomou a decisão de regressar aos Açores.',
        'Fixou-se na Ilha Terceira, onde vivia a Marta. Em 2023, o Bernardo procurava alguém para assumir a gestão do Banana Eco Camp e da Coffee Cabana. Após uma pesquisa alargada, reconheceu que o percurso agrícola do Marcel e as competências versáteis adquiridas no mar faziam dele o candidato ideal.',
        'Hoje, o Marcel e a Marta vivem na quinta com as suas duas filhas pequenas. Juntos, estão sempre prontos para receber os hóspedes com carinho e hospitalidade.'
      ]
    },
    footer: {
      title: 'Vem Fazer Parte da Nossa História',
      subtitle: 'Um Copo de Cada Vez',
      description: 'Visitem-nos para provar a diferença que a paixão, a qualidade e a tradição familiar fazem.',
      button: 'Vem Visitar-nos'
    }
  }

  const t = content

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen flex items-start justify-center overflow-hidden">
        {/* Photo Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/coffeecabana/farm.jpeg')`
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto pt-41">
          {/* Main title - Brand name stays consistent */}
          <div className="mb-8">
            <div className="flex justify-center">
              <Image
                src="/images/logos/story/portuguese/ourstorypt.png"
                alt="Coffee Cabana"
                width={600}
                height={200}
                className="w-auto h-32 md:h-40 lg:h-48 brightness-0 invert"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-6">
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
                  src="/images/coffeecabana/bernardo.jpeg"
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
                src="/images/coffeecabana/bernardo.jpeg"
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
                <span className="whitespace-nowrap">{t.coffeeCraft.title}</span>
                <br />
                <span className="text-amber-600 whitespace-nowrap">{t.coffeeCraft.subtitle}</span>
              </h2>
              <div className="relative mb-8">
                <Image
                  src="/images/coffeecabana/family.png"
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
                src="/images/coffeecabana/family.png"
                alt="Marcel and Marta family"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div className="hidden lg:block order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-black">
                <span className="whitespace-nowrap">{t.coffeeCraft.title}</span>
                <br />
                <span className="text-amber-600 whitespace-nowrap">{t.coffeeCraft.subtitle}</span>
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