import { Metadata } from 'next'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const metaData = {
    pt: {
      title: 'Menu - Coffee Cabana | Açores',
      description: 'Explore o nosso menu de café artesanal e produtos frescos da quinta no Coffee Cabana.',
    },
    en: {
      title: 'Menu - Coffee Cabana | Azores',
      description: 'Explore our artisanal coffee menu and fresh farm products at Coffee Cabana.',
    },
    de: {
      title: 'Menü - Coffee Cabana | Azoren',
      description: 'Entdecken Sie unser handwerkliches Kaffeemenü und frische Hofprodukte bei Coffee Cabana.',
    },
    es: {
      title: 'Menú - Coffee Cabana | Azores',
      description: 'Explora nuestro menú de café artesanal y productos frescos de la granja en Coffee Cabana.',
    },
    fr: {
      title: 'Menu - Coffee Cabana | Açores',
      description: 'Découvrez notre menu de café artisanal et nos produits frais de la ferme chez Coffee Cabana.',
    },
  }

  return metaData[locale as keyof typeof metaData] || metaData.pt
}

export default async function MenuPage({ params }: Props) {
  const { locale } = await params

  const content = {
    pt: {
      title: 'Menu',
      subtitle: 'Café Artesanal & Produtos Frescos',
      intro: 'Descubra os nossos cafés especiais e produtos frescos da quinta, todos preparados com ingredientes locais e métodos tradicionais.',
      categories: {
        specialtyCoffee: {
          title: 'Café Especial',
          items: [
            { name: 'Espresso', description: 'Café puro e intenso', price: '€2.50' },
            { name: 'Cappuccino', description: 'Espresso com leite cremoso', price: '€3.50' },
            { name: 'Latte', description: 'Café suave com leite', price: '€3.00' },
            { name: 'Americano', description: 'Café longo e suave', price: '€2.80' },
            { name: 'Mocha', description: 'Café com chocolate e leite', price: '€4.00' }
          ]
        },
        tea: {
          title: 'Chá',
          items: [
            { name: 'Chá Preto', description: 'Chá preto tradicional', price: '€2.00' },
            { name: 'Chá Verde', description: 'Chá verde fresco', price: '€2.00' },
            { name: 'Chá de Ervas', description: 'Infusão de ervas locais', price: '€2.50' },
            { name: 'Chá de Frutos', description: 'Chá de frutos silvestres', price: '€2.50' }
          ]
        },
        lightMeals: {
          title: 'Refeições Ligeiras',
          items: [
            { name: 'Pão Caseiro', description: 'Pão fresco da nossa padaria', price: '€1.50' },
            { name: 'Tosta Mista', description: 'Queijo e fiambre grelhados', price: '€4.50' },
            { name: 'Bolo Caseiro', description: 'Bolos frescos diários', price: '€3.00' },
            { name: 'Sanduíche Vegetariano', description: 'Legumes frescos da quinta', price: '€5.00' }
          ]
        },
        beverages: {
          title: 'Bebidas',
          items: [
            { name: 'Sumo Natural', description: 'Sumos frescos de frutas locais', price: '€3.50' },
            { name: 'Limonada', description: 'Limonada caseira', price: '€3.00' },
            { name: 'Água Mineral', description: 'Água natural ou com gás', price: '€1.50' },
            { name: 'Refrigerante', description: 'Bebidas refrigerantes', price: '€2.50' }
          ]
        },
        iceCream: {
          title: 'Gelado Quinta dos Açores',
          items: [
            { name: 'Gelado de Baunilha', description: 'Gelado cremoso de baunilha', price: '€3.50' },
            { name: 'Gelado de Chocolate', description: 'Gelado rico de chocolate', price: '€3.50' },
            { name: 'Gelado de Frutos Silvestres', description: 'Gelado de frutos locais', price: '€4.00' },
            { name: 'Copo de Gelados', description: '3 bolas à escolha', price: '€5.00' }
          ]
        }
      }
    },
    en: {
      title: 'Menu',
      subtitle: 'Artisanal Coffee & Fresh Products',
      intro: 'Discover our special coffees and fresh farm products, all prepared with local ingredients and traditional methods.',
      categories: {
        specialtyCoffee: {
          title: 'Specialty Coffee',
          items: [
            { name: 'Espresso', description: 'Pure and intense coffee', price: '€2.50' },
            { name: 'Cappuccino', description: 'Espresso with creamy milk', price: '€3.50' },
            { name: 'Latte', description: 'Smooth coffee with milk', price: '€3.00' },
            { name: 'Americano', description: 'Long and smooth coffee', price: '€2.80' },
            { name: 'Mocha', description: 'Coffee with chocolate and milk', price: '€4.00' }
          ]
        },
        tea: {
          title: 'Tea',
          items: [
            { name: 'Black Tea', description: 'Traditional black tea', price: '€2.00' },
            { name: 'Green Tea', description: 'Fresh green tea', price: '€2.00' },
            { name: 'Herbal Tea', description: 'Infusion of local herbs', price: '€2.50' },
            { name: 'Fruit Tea', description: 'Wild fruit tea', price: '€2.50' }
          ]
        },
        lightMeals: {
          title: 'Light Meals',
          items: [
            { name: 'Homemade Bread', description: 'Fresh bread from our bakery', price: '€1.50' },
            { name: 'Grilled Sandwich', description: 'Grilled cheese and ham', price: '€4.50' },
            { name: 'Homemade Cake', description: 'Fresh daily cakes', price: '€3.00' },
            { name: 'Vegetarian Sandwich', description: 'Fresh vegetables from the farm', price: '€5.00' }
          ]
        },
        beverages: {
          title: 'Beverages',
          items: [
            { name: 'Natural Juice', description: 'Fresh local fruit juice', price: '€3.50' },
            { name: 'Lemonade', description: 'Homemade lemonade', price: '€3.00' },
            { name: 'Mineral Water', description: 'Natural water or with gas', price: '€1.50' },
            { name: 'Soda', description: 'Refreshing drinks', price: '€2.50' }
          ]
        },
        iceCream: {
          title: 'Quinta dos Açores Ice Cream',
          items: [
            { name: 'Vanilla Ice Cream', description: 'Creamy vanilla ice cream', price: '€3.50' },
            { name: 'Chocolate Ice Cream', description: 'Rich chocolate ice cream', price: '€3.50' },
            { name: 'Wild Fruit Ice Cream', description: 'Local fruit ice cream', price: '€4.00' },
            { name: 'Ice Cream Scoop', description: '3 scoops to choose from', price: '€5.00' }
          ]
        }
      }
    },
    de: {
      title: 'Menü',
      subtitle: 'Handwerklicher Kaffee & Frische Produkte',
      intro: 'Entdecken Sie unsere Spezialkaffees und frischen Hofprodukte, alle zubereitet mit lokalen Zutaten und traditionellen Methoden.',
      categories: {
        specialtyCoffee: {
          title: 'Spezialkaffee',
          items: [
            { name: 'Espresso', description: 'Reiner und intensiver Kaffee', price: '€2.50' },
            { name: 'Cappuccino', description: 'Espresso mit cremiger Milch', price: '€3.50' },
            { name: 'Latte', description: 'Sanfter Kaffee mit Milch', price: '€3.00' },
            { name: 'Americano', description: 'Langer und sanfter Kaffee', price: '€2.80' },
            { name: 'Mocha', description: 'Kaffee mit Schokolade und Milch', price: '€4.00' }
          ]
        },
        tea: {
          title: 'Tee',
          items: [
            { name: 'Schwarztee', description: 'Traditioneller Schwarztee', price: '€2.00' },
            { name: 'Grüntee', description: 'Frischer Grüntee', price: '€2.00' },
            { name: 'Kräutertee', description: 'Kräutertee aus lokalen Kräutern', price: '€2.50' },
            { name: 'Früchtetee', description: 'Wildfrüchtetee', price: '€2.50' }
          ]
        },
        lightMeals: {
          title: 'Lichtes Essen',
          items: [
            { name: 'Hausgemachtes Brot', description: 'Frisches Brot aus unserer Bäckerei', price: '€1.50' },
            { name: 'Grill-Sandwich', description: 'Gegrilltes Käse- und Schinkensandwich', price: '€4.50' },
            { name: 'Hausgemachter Kuchen', description: 'Frische tägliche Kuchen', price: '€3.00' },
            { name: 'Vegetarischer Sandwich', description: 'Frische Gemüsesandwiches', price: '€5.00' }
          ]
        },
        beverages: {
          title: 'Getränke',
          items: [
            { name: 'Natürliches Saft', description: 'Natürlicher Fruchtensaft aus lokalen Früchten', price: '€3.50' },
            { name: 'Limonade', description: 'Zitronenlimonade', price: '€3.00' },
            { name: 'Mineralwasser', description: 'Natürliches Wasser oder mit Gas', price: '€1.50' },
            { name: 'Sodawasser', description: 'Erfrischendes Wasser', price: '€2.50' }
          ]
        },
        iceCream: {
          title: 'Gelato Quinta dos Açores',
          items: [
            { name: 'Vanillegelato', description: 'Klassisches Vanillegelato', price: '€3.50' },
            { name: 'Schokogelato', description: 'Fruchtiges Schokogelato', price: '€3.50' },
            { name: 'Wildfrüchtegelato', description: 'Wildfrüchtegelato aus lokalen Früchten', price: '€4.00' },
            { name: 'Gelatobüchlein', description: '3 Kugeln zum Auswählen', price: '€5.00' }
          ]
        }
      }
    },
    es: {
      title: 'Menú',
      subtitle: 'Café Artesanal y Productos Frescos',
      intro: 'Descubre nuestros cafés especiales y productos frescos de la granja, todos preparados con ingredientes locales y métodos tradicionales.',
      categories: {
        specialtyCoffee: {
          title: 'Café Especial',
          items: [
            { name: 'Espresso', description: 'Café puro e intenso', price: '€2.50' },
            { name: 'Cappuccino', description: 'Espresso con leche cremosa', price: '€3.50' },
            { name: 'Latte', description: 'Café suave con leche', price: '€3.00' },
            { name: 'Americano', description: 'Café largo y suave', price: '€2.80' },
            { name: 'Mocha', description: 'Café con chocolate y leche', price: '€4.00' }
          ]
        },
        tea: {
          title: 'Chá',
          items: [
            { name: 'Chá Preto', description: 'Chá preto tradicional', price: '€2.00' },
            { name: 'Chá Verde', description: 'Chá verde fresco', price: '€2.00' },
            { name: 'Chá de Ervas', description: 'Infusão de ervas locais', price: '€2.50' },
            { name: 'Chá de Frutos', description: 'Chá de frutos silvestres', price: '€2.50' }
          ]
        },
        lightMeals: {
          title: 'Refeições Ligeiras',
          items: [
            { name: 'Pan Casero', description: 'Pan fresco de nuestra panadería', price: '€1.50' },
            { name: 'Sándwich Tostado', description: 'Queso y jamón a la plancha', price: '€4.50' },
            { name: 'Pastel Casero', description: 'Pasteles frescos diarios', price: '€3.00' },
            { name: 'Sanduíche Vegetariano', description: 'Legumes frescos da quinta', price: '€5.00' }
          ]
        },
        beverages: {
          title: 'Bebidas',
          items: [
            { name: 'Sumo Natural', description: 'Sumos frescos de frutas locais', price: '€3.50' },
            { name: 'Limonada', description: 'Limonada caseira', price: '€3.00' },
            { name: 'Água Mineral', description: 'Água natural ou com gás', price: '€1.50' },
            { name: 'Refrigerante', description: 'Bebidas refrigerantes', price: '€2.50' }
          ]
        },
        iceCream: {
          title: 'Gelado Quinta dos Açores',
          items: [
            { name: 'Gelado de Baunilha', description: 'Gelado cremoso de baunilha', price: '€3.50' },
            { name: 'Gelado de Chocolate', description: 'Gelado rico de chocolate', price: '€3.50' },
            { name: 'Gelado de Frutos Silvestres', description: 'Gelado de frutos locais', price: '€4.00' },
            { name: 'Copo de Gelados', description: '3 bolas à escolha', price: '€5.00' }
          ]
        }
      }
    },
    fr: {
      title: 'Menu',
      subtitle: 'Café Artisanal et Produits Frais',
      intro: 'Découvrez nos cafés spéciaux et nos produits frais de la ferme, tous préparés avec des ingrédients locaux et des méthodes traditionnelles.',
      categories: {
        specialtyCoffee: {
          title: 'Café Spécial',
          items: [
            { name: 'Espresso', description: 'Café pur et intense', price: '€2.50' },
            { name: 'Cappuccino', description: 'Espresso avec lait crémeux', price: '€3.50' },
            { name: 'Latte', description: 'Café doux avec lait', price: '€3.00' },
            { name: 'Americano', description: 'Café long et doux', price: '€2.80' },
            { name: 'Mocha', description: 'Café avec chocolat et lait', price: '€4.00' }
          ]
        },
        tea: {
          title: 'Thé',
          items: [
            { name: 'Thé Noir', description: 'Thé noir traditionnel', price: '€2.00' },
            { name: 'Thé Vert', description: 'Thé vert frais', price: '€2.00' },
            { name: 'Thé d\'Herbes', description: 'Infusion d\'herbes locales', price: '€2.50' },
            { name: 'Thé de Fruits', description: 'Thé de fruits sauvages', price: '€2.50' }
          ]
        },
        lightMeals: {
          title: 'Petits Repas',
          items: [
            { name: 'Pain Maison', description: 'Pain frais de notre boulangerie', price: '€1.50' },
            { name: 'Sandwich Grillé', description: 'Fromage et jambon grillés', price: '€4.50' },
            { name: 'Gâteau Maison', description: 'Gâteaux frais quotidiens', price: '€3.00' },
            { name: 'Sandwich Végétarien', description: 'Légumes frais de la ferme', price: '€5.00' }
          ]
        },
        beverages: {
          title: 'Boissons',
          items: [
            { name: 'Jus Naturel', description: 'Jus de fruits frais de la ferme', price: '€3.50' },
            { name: 'Limonade', description: 'Limonade maison', price: '€3.00' },
            { name: 'Eau Minérale', description: 'Eau naturelle ou gazeuse', price: '€1.50' },
            { name: 'Soda', description: 'Boissons rafraîchissantes', price: '€2.50' }
          ]
        },
        iceCream: {
          title: 'Gelato Quinta dos Açores',
          items: [
            { name: 'Gelato alla Vaniglia', description: 'Gelato cremoso alla vaniglia', price: '€3.50' },
            { name: 'Gelato al Cioccolato', description: 'Gelato ricco al cioccolato', price: '€3.50' },
            { name: 'Gelato ai Frutti Silvestri', description: 'Gelato ai frutti locali', price: '€4.00' },
            { name: 'Cono di Gelato', description: '3 boules à choisir', price: '€5.00' }
          ]
        }
      }
    }
  }

  const t = content[locale as keyof typeof content] || content.pt

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 hidden md:block" 
           style={{ backgroundImage: 'url(/images/coffee/Banana_EcoCamp-49.jpg)' }}>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Content Section */}
        <section className="pt-48 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            {/* Title and Intro */}
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold text-black mb-4">Our {t.title}</h1>
            </div>

            <div className="space-y-12">
              {/* First Row: Specialty Coffee, Tea, Beverages */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300 md:shadow-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.categories.specialtyCoffee.title}</h2>
                  <div className="space-y-4">
                    {t.categories.specialtyCoffee.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-start border-b border-gray-200 pb-3">
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-gray-800 mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <span className="text-base font-bold text-gray-800 ml-3">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.categories.tea.title}</h2>
                  <div className="space-y-4">
                    {t.categories.tea.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-start border-b border-gray-200 pb-3">
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-gray-800 mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <span className="text-base font-bold text-gray-800 ml-3">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.categories.beverages.title}</h2>
                  <div className="space-y-4">
                    {t.categories.beverages.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-start border-b border-gray-200 pb-3">
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-gray-800 mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <span className="text-base font-bold text-gray-800 ml-3">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Second Row: Light Meals */}
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.categories.lightMeals.title}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {t.categories.lightMeals.items.slice(0, 2).map((item, index) => (
                      <div key={index} className="flex justify-between items-start border-b border-gray-200 pb-3">
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-gray-800 mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <span className="text-base font-bold text-gray-800 ml-3">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {t.categories.lightMeals.items.slice(2).map((item, index) => (
                      <div key={index + 2} className="flex justify-between items-start border-b border-gray-200 pb-3">
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-gray-800 mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <span className="text-base font-bold text-gray-800 ml-3">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Third Row: Ice Cream */}
              <div className="flex justify-center">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 max-w-md w-full shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.categories.iceCream.title}</h2>
                  <div className="space-y-4">
                    {t.categories.iceCream.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-start border-b border-gray-200 pb-3">
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-gray-800 mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
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