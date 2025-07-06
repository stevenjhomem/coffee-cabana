'use client'

import React, { Fragment, useState } from 'react'
import Image from 'next/image'

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('specialtyCoffeeAndTea')

  const t = {
    title: 'Menu',
    subtitle: 'Café Artesanal & Produtos Frescos',
    intro: 'Descubra os nossos cafés especiais e produtos frescos da quinta, todos preparados com ingredientes locais e métodos tradicionais.',
    tabs: {
      specialtyCoffeeAndTea: 'Café Especial e Chá',
      beverages: 'Bebidas',
      lightMeals: 'Refeições Ligeiras',
      iceCream: 'Gelado Quinta dos Açores'
    },
    categories: {
      specialtyCoffee: {
        title: 'Café Especial',
        items: [
          { name: 'Expresso', price: '€2.00' },
          { name: 'Americano', price: '€2.00' },
          { name: 'Meia de Leite', price: '€2.50' },
          { name: 'Galão', price: '€2.50' },
          { name: 'Café Pingado', price: '€2.50' },
          { name: 'Cappuccino', price: '€2.50' },
          { name: 'Café Gelado', price: '€3.00' },
          { name: 'Café Irlandês', price: '€4.00' }
        ]
      },
      tea: {
        title: 'Chá',
        items: [
          { name: 'Chá de casca de café', price: '€2.00' },
          { name: 'Chá Gorreana', price: '€2.00' },
          { name: 'Chá fresco do dia', price: '€2.00' },
        ]
      },
      beverages: {
        title: 'Bebidas',
        items: [
          { name: 'Água 33cl', price: '€1.00' },
          { name: 'Água 1.5L', price: '€2.00' },
          { name: 'Sumo de Laranja', price: '€1.50' },
          { name: 'Refrigerantes', price: '€1.50' },
          { name: 'Leite achocolatado', price: '€2.50' },
          { name: 'Batido', price: '€3.50' },
          { name: 'Smoothie', price: '€4.00' },
          { name: 'Caipirinha', price: '€4.50' },
          { name: 'Suco cana de açúcar', price: '€3.50' },
          { name: 'Gin', price: '€6.00' },
          { name: 'Digestivo | Shot | Licor', price: '€3.00' },
          { name: 'Cerveja', price: '€1.50' }, 
          { name: 'Bananika', price: '€4.00' }
        ]
      },
      lightMeals: {
        title: 'Refeições Ligeiras',
        items: [
          { name: 'Pequeno-Almoço Saudável', price: '€6.50', description: 'Torradas com ovo e abacate, com chá e sumo de laranja.' },
          { name: 'Pequeno-Almoço Leve', price: '€6.50', description: 'Iogurte grego com granola, fruta e mel, chá e sumo de laranja.' },
          { name: 'Pequeno-Almoço Tradicional', price: '€6.50', description: 'Torradas de bolo lêvedo com queijo e fiambre, chá e sumo de laranja' },
          { name: 'Fruta da Época', price: '€2.50' },
          { name: 'Pão de Banana', price: '€3.00' },
          { name: 'Bolo Caseiro do Dia', price: '€3.00' },
          { name: 'Doçaria', price: '€2.50' },
          { name: 'Doçaria mini', price: '€1.50' },
          { name: 'Waffles com fruta | mel | chocolate', price: '€4.00' },
          { name: 'Panquecas com fruta | mel | chocolate', price: '€4.00' },
          { name: 'Iogurte Grego com Granola e Fruta', price: '€4.00' },
          { name: 'Tosta de Abacate e Ovo', price: '€4.00' },
          { name: 'Tosta em Bolo Lêvedo', price: '€4.00' },
          { name: 'Tosta simples', price: '€3.00' },
          { name: 'Tosta mista', price: '€3.50' },
          { name: 'Torrado', price: '€2.00' }
        ]
      },
      iceCream: {
        title: 'Gelado Quinta dos Açores',
        items: [
          { name: '1 Bola', price: '€2.00' },
          { name: '2 Bolas', price: '€3.00' },
          { name: '3 Bolas', price: '€4.00' },
        ]
      }
    },
    alternates: {
      canonical: 'https://www.coffeecabana.pt/menu',
      languages: {
        'pt': 'https://www.coffeecabana.pt/menu',
        'en': 'https://www.coffeecabana.pt/en/menu',
        'x-default': 'https://www.coffeecabana.pt/menu',
      },
    },
  }

  const renderMenuContent = () => {
    switch (activeTab) {
      case 'specialtyCoffeeAndTea':
        return (
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
        )
      case 'beverages':
        return (
          <div className="bg-white rounded-lg p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300 w-full max-w-5xl">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{t.categories.beverages.title}</h2>
            <div className="flex flex-col md:flex-row">
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
        )
      case 'lightMeals':
        return (
          <div className="bg-white rounded-lg p-4 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300 w-full max-w-5xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{t.categories.lightMeals.title}</h2>
            <div className="flex flex-col md:flex-row">
              {(() => {
                const items = t.categories.lightMeals.items;
                const mid = Math.ceil(items.length / 2);
                const firstCol = items.slice(0, mid);
                const secondCol = items.slice(mid);
                return [firstCol, secondCol].map((col, colIdx) => (
                  <Fragment key={colIdx}>
                    <div className="flex-1 px-2 flex flex-col">
                      <div className="space-y-1 flex-1">
                        {col.map((item, index) => (
                          <div key={index} className="flex justify-between items-start py-1">
                            <div className="flex-1">
                              <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
                              {'description' in item && item.description && (
                                <p className="text-sm text-gray-600 mt-1 italic">{item.description}</p>
                              )}
                            </div>
                            <span className="text-base font-bold text-gray-800 ml-3">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Fragment>
                ));
              })()}
            </div>
          </div>
        )
      case 'iceCream':
        return (
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.categories.iceCream.title}</h2>
            <div className="space-y-4">
              {t.categories.iceCream.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center pb-3">
                  <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
                  <span className="text-base font-bold text-gray-800 ml-3">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
           style={{ backgroundImage: 'url(/images/coffeecabana/Banana_EcoCamp-52.jpg)' }}>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Content Section */}
        <section className="pt-48 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            {/* Title and Intro */}
            <div className="text-center mb-16">
              <div className="flex justify-center">
                <Image 
                  src="/images/logos/menu/portuguese/menulogopt.png" 
                  alt="Nosso Menu" 
                  width={600}
                  height={200}
                  className="h-32 md:h-40 lg:h-48 object-contain invert"
                />
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(t.tabs).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-white text-black shadow-lg'
                      : 'bg-black/20 text-white hover:bg-black/30'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Menu Content */}
            <div className="flex justify-center">
              {renderMenuContent()}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 