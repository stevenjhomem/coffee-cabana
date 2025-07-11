"use client"

import React from "react"
import Image from "next/image"
import GoogleMapsButton from "@/components/ui/GoogleMapsButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

export default function StoryPage() {
  const content = {
    hero: {
      title: "Da Quinta ao Copo",
    },
    story: {
      title: "A Nossa História Começa Com",
      name: "José Bernardo",
      paragraphs: [
        "José Bernardo foi quem deu início a tudo isto.Nascido na ilha Terceira, partiu para Angola aos oito anos de idade, acompanhado da família. Foi nesse ambiente tropical que cresceu, estudou e participou com grande entusiasmo na gestão de uma fazenda com 1500 hectares.",
        "Em 1976, tal como muitos outros portugueses perante a guerra civil instalada naquele país, viu-se obrigado a abandonar todo o património económico e partir para a Califórnia.",
        "Alguns anos depois, regressou à ilha Terceira e, como funcionário público, participou na criação dos Serviços de Classificação de Leite dos Açores – “SERCLA”, onde exerceu o cargo de diretor.",
        "Tendo em conta que aquela África onde cresceu e foi feliz já não existia, aproveitou as condições edafoclimáticas deste pedaço de terreno para trazer um pouco de África para cá. Hoje, cultiva com grande orgulho mais de cinquenta variedades de plantas tropicais, transformando este espaço num verdadeiro parque temático.",
        "Lembrando-se de um aviso do avô, que dizia:“A agricultura é uma forma de empobrecer alegremente”, decidiu construir algumas cabanas num ambiente de glamping, de forma a contribuir para a rentabilidade da exploração.",
        "Atualmente, o Tropical Lodge integra duas vertentes: o Banana Eco Camp e a Coffee Cabana.",
        "Enquanto não for proibido sonhar, o céu é o limite."
      ]
    },
    coffeeCraft: {
      title: "A Nossa História Continua Com",
      subtitle: "Marcel e Marta",
      paragraphs: [
        "Marcel, filho de um agricultor e de uma veterinária, cresceu com uma forte ligação à natureza e aos animais. Após terminar o ensino secundário, decidiu prosseguir os estudos nos Países Baixos, de onde a sua mãe é natural. Lá, concluiu uma licenciatura em Operações Marítimas e começou a trabalhar a bordo de navios com bandeira holandesa como Oficial da Marinha Mercante.",
        "Durante uma das suas licenças, Marcel conheceu a Marta, com quem teve a sua primeira filha. Ao perceber que a vida no mar implicava longos períodos longe de casa — e sem querer perder o crescimento da filha — Marcel tomou a decisão de regressar aos Açores.",
        "Fixou-se na Ilha Terceira, onde vivia a Marta. Em 2023, o Bernardo procurava alguém para assumir a gestão do Banana Eco Camp e da Coffee Cabana. Após uma pesquisa alargada, reconheceu que o percurso agrícola do Marcel e as competências versáteis adquiridas no mar faziam dele o candidato ideal.",
        "Hoje, o Marcel e a Marta vivem na quinta com as suas duas filhas pequenas. Juntos, estão sempre prontos para receber os hóspedes com carinho e hospitalidade."
      ]
    },
    footer: {
      title: "Vem Fazer Parte da Nossa História",
      subtitle: "Um Copo de Cada Vez",
      description: "Visitem-nos para provar a diferença que a paixão, a qualidade e a tradição familiar fazem.",
      button: "Vem Visitar-nos"
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
              backgroundImage: `url("/images/coffeecabana/farm.jpeg")`
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center justify-center h-full">
          {/* Main title - Brand name stays consistent */}
          <div className="mb-8">
            <div className="flex justify-center">
              <h1
                className="w-96 md:w-[500px] lg:w-[600px] h-24 md:h-40 lg:h-48 bg-contain bg-center bg-no-repeat brightness-0 invert relative z-20 select-none"
                style={{
                  backgroundImage: `url("/images/logos/story/portuguese/ourstorypt3.png")`,
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  msUserSelect: "none",
                  WebkitTouchCallout: "none"
                }}
                draggable="false"
              >
                <span className="sr-only">A Nossa História - Coffee Cabana</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Scroll indicator - positioned within the section */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="text-white hover:text-warm-tan transition-colors duration-300 cursor-pointer text-center">
            <div className="text-xs uppercase tracking-wider mb-2 opacity-80 font-semibold">rolar</div>
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
                  alt="José Bernardo trabalhando na plantação de bananas na quinta Coffee Cabana"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {t.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
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
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <Image
                src="/images/coffeecabana/bernardo.jpeg"
                alt="José Bernardo trabalhando na plantação de bananas na quinta Coffee Cabana"
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
                  src="/images/coffeecabana/family.png"
                  alt="Marcel, Marta e suas duas filhas na quinta Coffee Cabana"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                {t.coffeeCraft.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* Desktop: Image + Text (original layout) */}
            <div className="hidden lg:block order-2 lg:order-1 relative">
              <Image
                src="/images/coffeecabana/family.png"
                alt="Marcel, Marta e suas duas filhas na quinta Coffee Cabana"
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
                  <p key={index}>{paragraph}</p>
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