'use client'

import React, { Fragment, useState } from 'react'
import Image from 'next/image'

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('specialtyCoffeeAndTea')

  const content = {
    en: {
      title: 'Menu',
      subtitle: 'Artisan Coffee & Fresh Products',
      intro: 'Discover our specialty coffees and fresh farm products, all prepared with local ingredients and traditional methods.',
      tabs: {
        specialtyCoffeeAndTea: 'Specialty Coffee & Tea',
        beverages: 'Beverages',
        lightMeals: 'Light Meals',
        iceCream: 'Quinta dos Açores Ice Cream'
      },
      categories: {
        specialtyCoffee: {
          title: 'Specialty Coffee',
          items: [
            { name: 'Espresso', price: '€2.00' },
            { name: 'Americano', price: '€2.00' },
            { name: 'Latte', price: '€2.50' },
            { name: 'Coffee with Milk', price: '€2.50' },
            { name: 'Drip Coffee', price: '€2.50' },
            { name: 'Cappuccino', price: '€3.00' },
            { name: 'Iced Coffee', price: '€3.00' },
            { name: 'Irish Coffee', price: '€4.00' }
          ]
        },
        tea: {
          title: 'Tea',
          items: [
            { name: 'Cascara Tea', price: '€2.00' },
            { name: 'Gorreana Tea', price: '€2.00' },
            { name: 'Tea of the Day', price: '€2.00' }
          ]
        },
        lightMeals: {
          title: 'Light Meals',
          items: [
            { name: 'Healthy Breakfast', price: '€6.50', description: 'Avocado and egg toast, with tea and orange juice' },
            { name: 'Light Breakfast', price: '€6.50', description: 'Greek yogurt with granola, fruit and honey, tea and orange juice' },
            { name: 'Traditional Breakfast', price: '€6.50', description: 'Bolo levedo toast with ham and cheese, tea and orange juice' },
            { name: 'Seasonal Fruit', price: '€2.50' },
            { name: 'Banana Bread', price: '€3.00' },
            { name: 'Cake of the Day', price: '€3.00' },
            { name: 'Pastry', price: '€2.50' },
            { name: 'Small Pastry', price: '€1.50' },
            { name: 'Waffles with fruit | honey | chocolate', price: '€4.00' },
            { name: 'Pancakes with fruit | honey | chocolate', price: '€4.00' },
            { name: 'Greek Yogurt with Granola and Fruit', price: '€4.00' },
            { name: 'Avocado and Egg Toast', price: '€4.00' },
            { name: 'Bolo Levedo Toast', price: '€4.00' },
            { name: 'Toast', price: '€3.00' },
            { name: 'Ham and Cheese Toast', price: '€3.50' },
            { name: 'Bread Toast', price: '€2.00' }
          ]
        },
        beverages: {
          title: 'Beverages',
          items: [
            { name: 'Water 33cl', price: '€1.00' },
            { name: 'Water 1.5L', price: '€2.00' },
            { name: 'Orange Juice', price: '€1.50' },
            { name: 'Soda', price: '€1.50' },
            { name: 'Chocolate Milk', price: '€2.50' },
            { name: 'Milkshake', price: '€3.50' },
            { name: 'Smoothie', price: '€4.00' },
            { name: 'Caipirinha', price: '€4.50' },
            { name: 'Sugar Cane Juice', price: '€3.50' },
            { name: 'Gin', price: '€6.00' },
            { name: 'Digestive | Shot | Liqueur', price: '€3.00' },
            { name: 'Beer', price: '€1.50' },
            { name: 'Bananika', price: '€4.00' }
          ]
        },
        iceCream: {
          title: 'Quinta dos Açores Ice Cream',
          items: [
            { name: '1 Scoop', price: '€2.00' },
            { name: '2 Scoops', price: '€3.00' },
            { name: '3 Scoops', price: '€4.00' },
          ]
        }
      }
    }
  }

  // For now, default to English content - you can add locale detection later
  const t = content.en

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
                  src="/images/logos/menu/english/menulogoen.png" 
                  alt="Our Menu" 
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