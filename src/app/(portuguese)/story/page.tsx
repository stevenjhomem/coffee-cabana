import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nossa História - Coffee Cabana | Açores',
  description: 'Descubra a história do Coffee Cabana, desde a plantação até à chávena, no coração da Ilha Terceira.',
}

export default function StoryPage() {
  const t = {
    title: 'Nossa História',
    subtitle: 'Da Plantação à Chávena',
    intro: 'O Coffee Cabana nasce da convicção de que as melhores experiências só florescem a partir de ligações autênticas com o ambiente local e com a comunidade. Comprometemo-nos a partilhar café de excelência, produtos tropicais frescos e a nossa calorosa hospitalidade com todos os que visitam esta ilha maravilhosa que chamamos de casa. Convidamo-lo a juntar-se a nós para saborear um café como nenhum outro no mundo, um brunch com ingredientes colhidos diretamente da nossa quinta ou uma visita guiada que lhe mostra como a nossa paixão deu origem a este cantinho único da ilha.'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(/images/coffee/Banana_EcoCamp-01.jpg)' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl">{t.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <p className="text-xl text-gray-600 leading-relaxed">{t.intro}</p>
          </div>
        </div>
      </section>
    </div>
  )
} 