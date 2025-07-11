'use client'

import React, { Fragment, useState, useEffect } from 'react'

interface MenuItem {
  name: string
  price: string
  description?: string
}

interface MenuCategory {
  title: string
  items: MenuItem[]
}

interface MenuContent {
  tabs: {
    specialtyCoffeeAndTea: string
    beverages: string
    lightMeals: string
    iceCream: string
  }
  categories: {
    specialtyCoffee: MenuCategory
    tea: MenuCategory
    beverages: MenuCategory
    lightMeals: MenuCategory
    iceCream: MenuCategory
  }
}

interface MenuSectionProps {
  content: MenuContent
  logoPath: string
}

export default function MenuSection({ content, logoPath }: MenuSectionProps) {
  const [activeTab, setActiveTab] = useState('specialtyCoffeeAndTea')

  // Preload the background image for better performance
  useEffect(() => {
    const img = document.createElement('img')
    img.src = '/images/coffeecabana/Banana_EcoCamp-52.jpg'
  }, [])

  const renderMenuContent = () => {
    switch (activeTab) {
      case 'specialtyCoffeeAndTea':
        return (
          <div className="bg-white rounded-lg p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300 w-full max-w-5xl">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Specialty Coffee Column */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{content.categories.specialtyCoffee.title}</h3>
                <div className="space-y-1">
                  {content.categories.specialtyCoffee.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-1">
                      <h4 className="text-sm font-semibold text-gray-800">{item.name}</h4>
                      <span className="text-sm font-bold text-gray-800 ml-2">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Tea Column */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{content.categories.tea.title}</h3>
                <div className="space-y-1">
                  {content.categories.tea.items.map((item, index) => (
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
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{content.categories.beverages.title}</h2>
            <div className="flex flex-col md:flex-row">
              {(() => {
                const items = content.categories.beverages.items;
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{content.categories.lightMeals.title}</h2>
            <div className="flex flex-col md:flex-row">
              {(() => {
                const items = content.categories.lightMeals.items;
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
                              {item.description && (
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
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{content.categories.iceCream.title}</h2>
            <div className="space-y-4">
              {content.categories.iceCream.items.map((item, index) => (
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
      {/* Background Image - Normal positioning with consistent height */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/images/coffeecabana/Banana_EcoCamp-52.jpg)',
            minHeight: '100vh'
          }}
        />
      </div>
      
      {/* Content - Always visible, no loading delay */}
      <div className="relative z-10">
        {/* Content Section */}
        <section className="pt-48 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            {/* Title and Intro */}
            <div className="text-center mb-16">
              <div className="flex justify-center">
                <h1
                  className="h-32 md:h-40 lg:h-48 w-96 md:w-[500px] lg:w-[600px] bg-contain bg-center bg-no-repeat invert relative z-20 select-none"
                  style={{
                    backgroundImage: `url('${logoPath}')`,
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    MozUserSelect: 'none',
                    msUserSelect: 'none',
                    WebkitTouchCallout: 'none'
                  } as React.CSSProperties}
                  draggable="false"
                  onDragStart={(e) => e.preventDefault()}
                >
                  <span className="sr-only">Coffee Cabana Menu - Organic Coffee & Fresh Products</span>
                </h1>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(content.tabs).map(([key, label]) => (
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

            {/* Menu Content - Height set to accommodate longest section (light meals on mobile) */}
            <div className="flex justify-center">
              <div className="min-h-[1000px] md:min-h-[600px] flex items-start justify-center w-full">
                {renderMenuContent()}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}