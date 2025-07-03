'use client'

import React, { Fragment, useState } from 'react'

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('specialtyCoffeeAndTea')

  const content = {
    pt: {
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
    },
    en: {
      title: 'Menu',
      subtitle: 'Artisanal Coffee & Fresh Products',
      intro: 'Discover our special coffees and fresh farm products, all prepared with local ingredients and traditional methods.',
      tabs: {
        specialtyCoffeeAndTea: 'Specialty Coffee and Tea',
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
            { name: 'Coffee w/ Milk', price: '€2.50' },
            { name: 'Drip Coffee', price: '€2.50' },
            { name: 'Cappuccino', price: '€3.00' },
            { name: 'Iced Coffee', price: '€3.00' },
            { name: 'Irish Coffee', price: '€4.00' }
          ]
        },
        tea: {
          title: 'Tea',
          items: [
            { name: 'Coffee Bark Tea', price: '€2.00' },
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
            { name: 'Digestive | Shot | Liquor', price: '€3.00' },
            { name: 'Beer', price: '€1.50' },
            { name: 'Bananika', price: '€4.00' }
          ]
        },
        iceCream: {
          title: 'Quinta dos Açores Ice Cream',
          items: [
            { name: 'Vanilla Ice Cream', price: '€3.50' },
            { name: 'Chocolate Ice Cream', price: '€3.50' },
            { name: 'Wild Fruit Ice Cream', price: '€4.00' },
            { name: 'Ice Cream Scoop', price: '€5.00' }
          ]
        }
      }
    },
    de: {
      title: 'Menü',
      subtitle: 'Handwerklicher Kaffee & Frische Produkte',
      intro: 'Entdecken Sie unsere Spezialkaffees und frischen Hofprodukte, alle zubereitet mit lokalen Zutaten und traditionellen Methoden.',
      tabs: {
        specialtyCoffeeAndTea: 'Spezialkaffee und Tee',
        beverages: 'Getränke',
        lightMeals: 'Lichtes Essen',
        iceCream: 'Gelato Quinta dos Açores'
      },
      categories: {
        specialtyCoffee: {
          title: 'Spezialkaffee',
          items: [
            { name: 'Espresso', price: '€2.00' },
            { name: 'Americano', price: '€2.00' },
            { name: 'Latte', price: '€2.50' },
            { name: 'Kaffee mit Milch', price: '€2.50' },
            { name: 'Filterkaffee', price: '€2.50' },
            { name: 'Cappuccino', price: '€3.00' },
            { name: 'Eiskaffee', price: '€3.00' },
            { name: 'Irish Coffee', price: '€4.00' }
          ]
        },
        tea: {
          title: 'Tee',
          items: [
            { name: 'Coffee Bark Tea', price: '€2.00' },
            { name: 'Gorreana Tea', price: '€2.00' },
            { name: 'Tee des Tages', price: '€2.00' }
          ]
        },
        lightMeals: {
          title: 'Lichtes Essen',
          items: [
            { name: 'Gesundes Frühstück', price: '€6.50', description: 'Avocado und Ei Toast, mit Tee und Orangensaft' },
            { name: 'Leichtes Frühstück', price: '€6.50', description: 'Griechischer Joghurt mit Granola, Obst und Honig, Tee und Orangensaft' },
            { name: 'Traditionelles Frühstück', price: '€6.50', description: 'Bolo levedo Toast mit Schinken und Käse, Tee und Orangensaft' },
            { name: 'Saisonales Obst', price: '€2.50' },
            { name: 'Bananenbrot', price: '€3.00' },
            { name: 'Kuchen des Tages', price: '€3.00' },
            { name: 'Gebäck', price: '€2.50' },
            { name: 'Kleines Gebäck', price: '€1.50' },
            { name: 'Waffeln mit Obst | Honig | Schokolade', price: '€4.00' },
            { name: 'Pfannkuchen mit Obst | Honig | Schokolade', price: '€4.00' },
            { name: 'Griechischer Joghurt mit Granola und Obst', price: '€4.00' },
            { name: 'Avocado und Ei Toast', price: '€4.00' },
            { name: 'Bolo Levedo Toast', price: '€4.00' },
            { name: 'Toast', price: '€3.00' },
            { name: 'Schinken und Käse Toast', price: '€3.50' },
            { name: 'Brot Toast', price: '€2.00' }
          ]
        },
        beverages: {
          title: 'Getränke',
          items: [
            { name: 'Wasser 33cl', price: '€1.00' },
            { name: 'Wasser 1.5L', price: '€2.00' },
            { name: 'Orangensaft', price: '€1.50' },
            { name: 'Soda', price: '€1.50' },
            { name: 'Schokoladenmilch', price: '€2.50' },
            { name: 'Milchshake', price: '€3.50' },
            { name: 'Smoothie', price: '€4.00' },
            { name: 'Caipirinha', price: '€4.50' },
            { name: 'Zuckerrohrsaft', price: '€3.50' },
            { name: 'Gin', price: '€6.00' },
            { name: 'Digestif | Shot | Likör', price: '€3.00' },
            { name: 'Bier', price: '€1.50' },
            { name: 'Bananika', price: '€4.00' }
          ]
        },
        iceCream: {
          title: 'Gelato Quinta dos Açores',
          items: [
            { name: 'Vanillegelato', price: '€3.50' },
            { name: 'Schokogelato', price: '€3.50' },
            { name: 'Wildfrüchtegelato', price: '€4.00' },
            { name: 'Gelatobüchlein', price: '€5.00' }
          ]
        }
      }
    },
    es: {
      title: 'Menú',
      subtitle: 'Café Artesanal y Productos Frescos',
      intro: 'Descubre nuestros cafés especiales y productos frescos de la granja, todos preparados con ingredientes locales y métodos tradicionales.',
      tabs: {
        specialtyCoffeeAndTea: 'Café Especial y Té',
        beverages: 'Bebidas',
        lightMeals: 'Comidas Ligeras',
        iceCream: 'Gelado Quinta dos Açores'
      },
      categories: {
        specialtyCoffee: {
          title: 'Café Especial',
          items: [
            { name: 'Espresso', price: '€2.00' },
            { name: 'Americano', price: '€2.00' },
            { name: 'Latte', price: '€2.50' },
            { name: 'Café con Leche', price: '€2.50' },
            { name: 'Café de Filtro', price: '€2.50' },
            { name: 'Capuchino', price: '€3.00' },
            { name: 'Café Helado', price: '€3.00' },
            { name: 'Café Irlandés', price: '€4.00' }
          ]
        },
        tea: {
          title: 'Té',
          items: [
            { name: 'Coffee Bark Tea', price: '€2.00' },
            { name: 'Gorreana Tea', price: '€2.00' },
            { name: 'Té del Día', price: '€2.00' }
          ]
        },
        lightMeals: {
          title: 'Comidas Ligeras',
          items: [
            { name: 'Desayuno Saludable', price: '€6.50', description: 'Tostada de aguacate y huevo, con té y zumo de naranja' },
            { name: 'Desayuno Ligero', price: '€6.50', description: 'Yogur griego con granola, fruta y miel, té y zumo de naranja' },
            { name: 'Desayuno Tradicional', price: '€6.50', description: 'Tostada de bolo levedo con jamón y queso, té y zumo de naranja' },
            { name: 'Fruta de Temporada', price: '€2.50' },
            { name: 'Pan de Plátano', price: '€3.00' },
            { name: 'Pastel del Día', price: '€3.00' },
            { name: 'Pastelería', price: '€2.50' },
            { name: 'Pastelería Pequeña', price: '€1.50' },
            { name: 'Gofres con fruta | miel | chocolate', price: '€4.00' },
            { name: 'Tortitas con fruta | miel | chocolate', price: '€4.00' },
            { name: 'Yogur Griego con Granola y Fruta', price: '€4.00' },
            { name: 'Tostada de Aguacate y Huevo', price: '€4.00' },
            { name: 'Tostada de Bolo Levedo', price: '€4.00' },
            { name: 'Tostada', price: '€3.00' },
            { name: 'Tostada de Jamón y Queso', price: '€3.50' },
            { name: 'Tostada de Pan', price: '€2.00' }
          ]
        },
        beverages: {
          title: 'Bebidas',
          items: [
            { name: 'Agua 33cl', price: '€1.00' },
            { name: 'Agua 1.5L', price: '€2.00' },
            { name: 'Zumo de Naranja', price: '€1.50' },
            { name: 'Refresco', price: '€1.50' },
            { name: 'Leche con Chocolate', price: '€2.50' },
            { name: 'Batido', price: '€3.50' },
            { name: 'Smoothie', price: '€4.00' },
            { name: 'Caipirinha', price: '€4.50' },
            { name: 'Zumo de Caña', price: '€3.50' },
            { name: 'Ginebra', price: '€6.00' },
            { name: 'Digestivo | Shot | Licor', price: '€3.00' },
            { name: 'Cerveza', price: '€1.50' },
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
    },
    fr: {
      title: 'Menu',
      subtitle: 'Café Artisanal et Produits Frais',
      intro: 'Découvrez nos cafés spéciaux et nos produits frais de la ferme, tous préparés avec des ingrédients locaux et des méthodes traditionnelles.',
      tabs: {
        specialtyCoffeeAndTea: 'Café Spécial et Thé',
        beverages: 'Boissons',
        lightMeals: 'Petits Repas',
        iceCream: 'Gelato Quinta dos Açores'
      },
      categories: {
        specialtyCoffee: {
          title: 'Café Spécial',
          items: [
            { name: 'Espresso', price: '€2.00' },
            { name: 'Américain', price: '€2.00' },
            { name: 'Latte', price: '€2.50' },
            { name: 'Café au Lait', price: '€2.50' },
            { name: 'Café Filtré', price: '€2.50' },
            { name: 'Cappuccino', price: '€3.00' },
            { name: 'Café Glacé', price: '€3.00' },
            { name: 'Irish Coffee', price: '€4.00' }
          ]
        },
        tea: {
          title: 'Thé',
          items: [
            { name: 'Coffee Bark Tea', price: '€2.00' },
            { name: 'Gorreana Tea', price: '€2.00' },
            { name: 'Thé du Jour', price: '€2.00' }
          ]
        },
        lightMeals: {
          title: 'Petits Repas',
          items: [
            { name: 'Petit Déjeuner Sain', price: '€6.50', description: 'Toast à l\'avocat et aux œufs, avec thé et jus d\'orange' },
            { name: 'Petit Déjeuner Léger', price: '€6.50', description: 'Yaourt grec avec granola, fruits et miel, thé et jus d\'orange' },
            { name: 'Petit Déjeuner Traditionnel', price: '€6.50', description: 'Toast de bolo levedo avec jambon et fromage, thé et jus d\'orange' },
            { name: 'Fruits de Saison', price: '€2.50' },
            { name: 'Pain aux Bananes', price: '€3.00' },
            { name: 'Gâteau du Jour', price: '€3.00' },
            { name: 'Pâtisserie', price: '€2.50' },
            { name: 'Petite Pâtisserie', price: '€1.50' },
            { name: 'Gaufres avec fruits | miel | chocolat', price: '€4.00' },
            { name: 'Crêpes avec fruits | miel | chocolat', price: '€4.00' },
            { name: 'Yaourt Grec avec Granola et Fruits', price: '€4.00' },
            { name: 'Toast à l\'Avocat et aux Œufs', price: '€4.00' },
            { name: 'Toast de Bolo Levedo', price: '€4.00' },
            { name: 'Toast', price: '€3.00' },
            { name: 'Toast Jambon et Fromage', price: '€3.50' },
            { name: 'Toast de Pain', price: '€2.00' }
          ]
        },
        beverages: {
          title: 'Boissons',
          items: [
            { name: 'Eau 33cl', price: '€1.00' },
            { name: 'Eau 1.5L', price: '€2.00' },
            { name: 'Jus d\'Orange', price: '€1.50' },
            { name: 'Soda', price: '€1.50' },
            { name: 'Lait au Chocolat', price: '€2.50' },
            { name: 'Milkshake', price: '€3.50' },
            { name: 'Smoothie', price: '€4.00' },
            { name: 'Caipirinha', price: '€4.50' },
            { name: 'Jus de Canne', price: '€3.50' },
            { name: 'Gin', price: '€6.00' },
            { name: 'Digestif | Shot | Liqueur', price: '€3.00' },
            { name: 'Bière', price: '€1.50' },
            { name: 'Bananika', price: '€4.00' }
          ]
        },
        iceCream: {
          title: 'Gelato Quinta dos Açores',
          items: [
            { name: 'Gelato alla Vaniglia', price: '€3.50' },
            { name: 'Gelato al Cioccolato', price: '€3.50' },
            { name: 'Gelato ai Frutti Silvestri', price: '€4.00' },
            { name: 'Cono di Gelato', price: '€5.00' }
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
        )
      case 'lightMeals':
        return (
          <div className="bg-white rounded-lg p-4 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300 w-full max-w-5xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{t.categories.lightMeals.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
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
        )
      case 'iceCream':
        return (
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
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#9e520a' }}>
      {/* Background Image (hidden on mobile) */}
      <div className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
           style={{ backgroundImage: 'url(/images/coffee/Banana_EcoCamp-52.jpg)' }}>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Content Section */}
        <section className="pt-48 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            {/* Title and Intro */}
            <div className="text-center mb-16">
              <div className="flex justify-center">
                <img 
                  src="/images/coffee/menulogo.png" 
                  alt="Our Menu" 
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