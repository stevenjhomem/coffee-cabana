import type { Metadata } from 'next'
import React, { Fragment } from 'react'

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
          { name: 'Chá Preto', price: '€2.00' },
          { name: 'Chá Verde', price: '€2.00' },
          { name: 'Chá de Ervas', price: '€2.50' },
          { name: 'Chá de Frutos', price: '€2.50' }
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
    <div className="min-h-screen relative bg-white">
      {/* Background Image (hidden on mobile) */}
      <div className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
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

          {/* Mobile: One section per category */}
          <div className="block md:hidden">
            {/* Specialty Coffee */}
            <div className="max-w-6xl mx-auto px-4 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300 w-full">
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{t.categories.specialtyCoffee.title}</h2>
                <div className="space-y-1">
                  {t.categories.specialtyCoffee.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-1">
                      <span className="text-sm font-semibold text-gray-800">{item.name}</span>
                      <span className="text-sm font-bold text-gray-800 ml-2">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Tea */}
            <div className="max-w-6xl mx-auto px-4 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300 w-full">
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{t.categories.tea.title}</h2>
                <div className="space-y-1">
                  {t.categories.tea.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-1">
                      <span className="text-sm font-semibold text-gray-800">{item.name}</span>
                      <span className="text-sm font-bold text-gray-800 ml-2">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Beverages */}
            <div className="max-w-6xl mx-auto px-4 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300 w-full">
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{t.categories.beverages.title}</h2>
                <div className="space-y-1">
                  {t.categories.beverages.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-1">
                      <span className="text-sm font-semibold text-gray-800">{item.name}</span>
                      <span className="text-sm font-bold text-gray-800 ml-2">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Light Meals */}
            <div className="max-w-6xl mx-auto px-4 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300 w-full">
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{t.categories.lightMeals.title}</h2>
                <div className="space-y-2">
                  {t.categories.lightMeals.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-start py-1">
                      <div>
                        <span className="text-sm font-semibold text-gray-800">{item.name}</span>
                        {'description' in item && item.description && (
                          <p className="text-xs text-gray-600 mt-1 italic">{item.description}</p>
                        )}
                      </div>
                      <span className="text-sm font-bold text-gray-800 ml-2">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Ice Cream */}
            <div className="max-w-6xl mx-auto px-4 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300 w-full">
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{t.categories.iceCream.title}</h2>
                <div className="space-y-1">
                  {t.categories.iceCream.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-1">
                      <span className="text-sm font-semibold text-gray-800">{item.name}</span>
                      <span className="text-sm font-bold text-gray-800 ml-2">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet: Current layout (hidden on mobile) */}
          <div className="hidden md:block">
            {/* Coffee & Tea Section: Two Columns in One Card */}
            <div className="max-w-6xl mx-auto px-6 mb-8">
              <div className="flex justify-center">
                <div className="bg-white rounded-lg p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300 w-full max-w-5xl">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Specialty Coffee Column */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{t.categories.specialtyCoffee.title}</h3>
                      <div className="space-y-1">
                        {t.categories.specialtyCoffee.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center py-1">
                            <h4 className="text-sm font-semibold text-gray-800">{item.name}</h4>
                            <span className="text-sm font-bold text-gray-800 ml-2">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Tea Column */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{t.categories.tea.title}</h3>
                      <div className="space-y-1">
                        {t.categories.tea.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center py-1">
                            <h4 className="text-sm font-semibold text-gray-800">{item.name}</h4>
                            <span className="text-sm font-bold text-gray-800 ml-2">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Beverages Section (remains below) */}
            <div className="max-w-6xl mx-auto px-6 mb-12">
              <div className="flex justify-center">
                <div className="bg-white rounded-lg p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300 w-full max-w-5xl">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{t.categories.beverages.title}</h2>
                  <div className="flex">
                    {(() => {
                      const items = t.categories.beverages.items;
                      const mid = Math.ceil(items.length / 2);
                      const firstCol = items.slice(0, mid);
                      const secondCol = items.slice(mid);
                      return [firstCol, secondCol].map((col, colIdx) => (
                        <Fragment key={colIdx}>
                          <div className="flex-1 px-2 flex flex-col">
                            <div className="space-y-1 flex-1">
                              {col.map((item, index) => (
                                <div key={index} className="flex justify-between items-center py-1">
                                  <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
                                  <span className="text-sm font-bold text-gray-800 ml-2">{item.price}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Fragment>
                      ));
                    })()}
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row: Light Meals */}
            <div className="max-w-6xl mx-auto px-6 mb-12">
              <div className="flex justify-center">
                <div className="bg-white rounded-lg p-4 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300 w-full max-w-5xl">
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
                <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300">
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
          </div>
        </section>
      </div>
    </div>
  )
} 