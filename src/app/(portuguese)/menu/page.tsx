import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu - Coffee Cabana | Café Orgânico Terceira',
  description: 'Descubra nosso menu de café orgânico cultivado e torrado na Ilha Terceira. Desde grãos especiais até bebidas artesanais.',
  keywords: 'menu café Terceira, café orgânico menu, coffee menu Azores, specialty coffee Terceira',
  authors: [{ name: 'Coffee Cabana' }],
  creator: 'Coffee Cabana',
  publisher: 'Coffee Cabana',
  robots: 'index, follow',
  openGraph: {
    title: 'Menu - Coffee Cabana | Café Orgânico Terceira',
    description: 'Descubra nosso menu de café orgânico cultivado e torrado na Ilha Terceira. Desde grãos especiais até bebidas artesanais.',
    url: 'https://coffeecabana.pt/menu',
    siteName: 'Coffee Cabana',
    locale: 'pt_PT',
    type: 'website',
    images: [
      {
        url: '/images/coffee/coffee-cabana-instagram.png',
        width: 1200,
        height: 630,
        alt: 'Menu - Coffee Cabana | Café Orgânico Terceira',
        type: 'image/png',
      },
    ],
  },
  alternates: {
    canonical: 'https://coffeecabana.pt/menu',
    languages: {
      'pt': 'https://coffeecabana.pt/menu',
      'en': 'https://coffeecabana.pt/en/menu',
      'de': 'https://coffeecabana.pt/de/menu',
      'es': 'https://coffeecabana.pt/es/menu',
      'fr': 'https://coffeecabana.pt/fr/menu',
    },
  },
}

export default function MenuPage() {
  const t = {
    title: 'Menu',
    subtitle: 'Café Artesanal & Produtos Frescos',
    intro: 'Descubra os nossos cafés especiais e produtos frescos da quinta, todos preparados com ingredientes locais e métodos tradicionais.',
    categories: {
      specialtyCoffee: {
        title: 'Café Especial',
        items: [
          { name: 'Espresso', price: '€2.00' },
          { name: 'Americano', price: '€2.00' },
          { name: 'Latte', price: '€2.50' },
          { name: 'Café com Leite', price: '€2.50' },
          { name: 'Café Filtrado', price: '€2.50' },
          { name: 'Cappuccino', price: '€3.00' },
          { name: 'Café Gelado', price: '€3.00' },
          { name: 'Café Irlandês', price: '€4.00' }
        ]
      },
      tea: {
        title: 'Chá',
        items: [
          { name: 'Coffee Bark Tea', price: '€2.00' },
          { name: 'Gorreana Tea', price: '€2.00' },
          { name: 'Chá do Dia', price: '€2.00' }
        ]
      },
      lightMeals: {
        title: 'Refeições Ligeiras',
        items: [
          { name: 'Pequeno-Almoço Saudável', price: '€6.50', description: 'Tosta de abacate e ovo, com chá e sumo de laranja' },
          { name: 'Pequeno-Almoço Leve', price: '€6.50', description: 'Iogurte grego com granola, fruta e mel, chá e sumo de laranja' },
          { name: 'Pequeno-Almoço Tradicional', price: '€6.50', description: 'Tosta de bolo levedo com presunto e queijo, chá e sumo de laranja' },
          { name: 'Fruta da Época', price: '€2.50' },
          { name: 'Pão de Banana', price: '€3.00' },
          { name: 'Bolo do Dia', price: '€3.00' },
          { name: 'Pastelaria', price: '€2.50' },
          { name: 'Pastelaria Pequena', price: '€1.50' },
          { name: 'Waffles com fruta | mel | chocolate', price: '€4.00' },
          { name: 'Panquecas com fruta | mel | chocolate', price: '€4.00' },
          { name: 'Iogurte Grego com Granola e Fruta', price: '€4.00' },
          { name: 'Tosta de Abacate e Ovo', price: '€4.00' },
          { name: 'Tosta de Bolo Levedo', price: '€4.00' },
          { name: 'Tosta', price: '€3.00' },
          { name: 'Tosta de Presunto e Queijo', price: '€3.50' },
          { name: 'Tosta de Pão', price: '€2.00' }
        ]
      },
      beverages: {
        title: 'Bebidas',
        items: [
          { name: 'Água 33cl', price: '€1.00' },
          { name: 'Água 1.5L', price: '€2.00' },
          { name: 'Sumo de Laranja', price: '€1.50' },
          { name: 'Refrigerante', price: '€1.50' },
          { name: 'Leite com Chocolate', price: '€2.50' },
          { name: 'Batido', price: '€3.50' },
          { name: 'Smoothie', price: '€4.00' },
          { name: 'Caipirinha', price: '€4.50' },
          { name: 'Sumo de Cana', price: '€3.50' },
          { name: 'Gin', price: '€6.00' },
          { name: 'Digestivo | Shot | Licor', price: '€3.00' },
          { name: 'Cerveja', price: '€1.50' },
          { name: 'Bananika', price: '€4.00' }
        ]
      },
      iceCream: {
        title: 'Gelado Quinta dos Açores',
        items: [
          { name: 'Gelado de Baunilha', price: '€3.50' },
          { name: 'Gelado de Chocolate', price: '€3.50' },
          { name: 'Gelado de Frutos Silvestres', price: '€4.00' },
          { name: 'Copo de Gelados', price: '€5.00' }
        ]
      }
    }
  }

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70" 
           style={{ backgroundImage: 'url(/images/coffee/farm.jpeg)' }}>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Content Section */}
        <section className="pt-48 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            {/* Title and Intro */}
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold text-black mb-4">Nosso {t.title}</h1>
            </div>
          </div>

          {/* First Row: Combined Coffee, Tea & Beverages */}
          <div className="max-w-6xl mx-auto px-6 mb-12">
            <div className="flex justify-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300 md:shadow-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] w-full max-w-5xl">
                <div className="grid grid-cols-12 divide-x divide-gray-300">
                  {/* Specialty Coffee Section */}
                  <div className="col-span-3 px-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{t.categories.specialtyCoffee.title}</h2>
                    <div className="space-y-1">
                      {t.categories.specialtyCoffee.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-1">
                          <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
                          <span className="text-sm font-bold text-gray-800 ml-2">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tea Section */}
                  <div className="col-span-3 px-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{t.categories.tea.title}</h2>
                    <div className="space-y-1">
                      {t.categories.tea.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-1">
                          <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
                          <span className="text-sm font-bold text-gray-800 ml-2">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Beverages Section */}
                  <div className="col-span-6 px-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{t.categories.beverages.title}</h2>
                    <div className="grid grid-cols-2 gap-y-1">
                      {t.categories.beverages.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-1 px-2">
                          <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
                          <span className="text-sm font-bold text-gray-800 ml-2">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row: Light Meals */}
          <div className="max-w-6xl mx-auto px-6 mb-12">
            <div className="flex justify-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300 w-full max-w-5xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{t.categories.lightMeals.title}</h2>
                <div className="grid grid-cols-2 gap-y-2">
                  {t.categories.lightMeals.items.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-2 px-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
                          {'description' in item && item.description && (
                            <p className="text-sm text-gray-600 mt-1 italic">{item.description}</p>
                          )}
                        </div>
                        <span className="text-base font-bold text-gray-800 ml-3">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Third Row: Ice Cream */}
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 max-w-md w-full shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.categories.iceCream.title}</h2>
                <div className="space-y-4">
                  {t.categories.iceCream.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
                      <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
                      <span className="text-base font-bold text-gray-800 ml-3">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 