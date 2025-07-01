import type { Metadata } from 'next'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const metaData = {
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

  const currentMeta = metaData[locale as keyof typeof metaData] || metaData.en

  return {
    ...currentMeta,
    keywords: 'menu café Terceira, café orgânico menu, coffee menu Azores, specialty coffee Terceira',
    authors: [{ name: 'Coffee Cabana' }],
    creator: 'Coffee Cabana',
    publisher: 'Coffee Cabana',
    robots: 'index, follow',
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      url: `https://coffeecabana.pt/${locale}/menu`,
      siteName: 'Coffee Cabana',
      locale: `${locale}_${locale.toUpperCase()}`,
      type: 'website',
      images: [
        {
          url: '/images/coffee/coffee-cabana-instagram.png',
          width: 1200,
          height: 630,
          alt: currentMeta.title,
          type: 'image/png',
        },
      ],
    },
    alternates: {
      canonical: `https://coffeecabana.pt/${locale}/menu`,
      languages: {
        'pt': 'https://coffeecabana.pt/menu',
        'en': 'https://coffeecabana.pt/en/menu',
        'de': 'https://coffeecabana.pt/de/menu',
        'es': 'https://coffeecabana.pt/es/menu',
        'fr': 'https://coffeecabana.pt/fr/menu',
      },
    },
  }
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
            { name: 'Pão Caseiro', price: '€1.50' },
            { name: 'Tosta Mista', price: '€4.50' },
            { name: 'Bolo Caseiro', price: '€3.00' },
            { name: 'Sanduíche Vegetariano', price: '€5.00' }
          ]
        },
        beverages: {
          title: 'Bebidas',
          items: [
            { name: 'Sumo Natural', price: '€3.50' },
            { name: 'Limonada', price: '€3.00' },
            { name: 'Água Mineral', price: '€1.50' },
            { name: 'Refrigerante', price: '€2.50' }
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
            { name: 'Black Tea', price: '€2.00' },
            { name: 'Green Tea', price: '€2.00' },
            { name: 'Herbal Tea', price: '€2.50' },
            { name: 'Fruit Tea', price: '€2.50' }
          ]
        },
        lightMeals: {
          title: 'Light Meals',
          items: [
            { name: 'Homemade Bread', price: '€1.50' },
            { name: 'Grilled Sandwich', price: '€4.50' },
            { name: 'Homemade Cake', price: '€3.00' },
            { name: 'Vegetarian Sandwich', price: '€5.00' }
          ]
        },
        beverages: {
          title: 'Beverages',
          items: [
            { name: 'Natural Juice', price: '€3.50' },
            { name: 'Lemonade', price: '€3.00' },
            { name: 'Mineral Water', price: '€1.50' },
            { name: 'Soda', price: '€2.50' }
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
            { name: 'Schwarztee', price: '€2.00' },
            { name: 'Grüntee', price: '€2.00' },
            { name: 'Kräutertee', price: '€2.50' },
            { name: 'Früchtetee', price: '€2.50' }
          ]
        },
        lightMeals: {
          title: 'Lichtes Essen',
          items: [
            { name: 'Hausgemachtes Brot', price: '€1.50' },
            { name: 'Grill-Sandwich', price: '€4.50' },
            { name: 'Hausgemachter Kuchen', price: '€3.00' },
            { name: 'Vegetarischer Sandwich', price: '€5.00' }
          ]
        },
        beverages: {
          title: 'Getränke',
          items: [
            { name: 'Natürliches Saft', price: '€3.50' },
            { name: 'Limonade', price: '€3.00' },
            { name: 'Mineralwasser', price: '€1.50' },
            { name: 'Sodawasser', price: '€2.50' }
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
            { name: 'Pan Casero', price: '€1.50' },
            { name: 'Sándwich Tostado', price: '€4.50' },
            { name: 'Pastel Casero', price: '€3.00' },
            { name: 'Sanduíche Vegetariano', price: '€5.00' }
          ]
        },
        beverages: {
          title: 'Bebidas',
          items: [
            { name: 'Sumo Natural', price: '€3.50' },
            { name: 'Limonada', price: '€3.00' },
            { name: 'Água Mineral', price: '€1.50' },
            { name: 'Refrigerante', price: '€2.50' }
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
            { name: 'Thé Noir', price: '€2.00' },
            { name: 'Thé Vert', price: '€2.00' },
            { name: 'Thé d\'Herbes', price: '€2.50' },
            { name: 'Thé de Fruits', price: '€2.50' }
          ]
        },
        lightMeals: {
          title: 'Petits Repas',
          items: [
            { name: 'Pain Maison', price: '€1.50' },
            { name: 'Sandwich Grillé', price: '€4.50' },
            { name: 'Gâteau Maison', price: '€3.00' },
            { name: 'Sandwich Végétarien', price: '€5.00' }
          ]
        },
        beverages: {
          title: 'Boissons',
          items: [
            { name: 'Jus Naturel', price: '€3.50' },
            { name: 'Limonade', price: '€3.00' },
            { name: 'Eau Minérale', price: '€1.50' },
            { name: 'Soda', price: '€2.50' }
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
                      <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
                        <span className="text-base font-bold text-gray-800 ml-3">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.categories.tea.title}</h2>
                  <div className="space-y-4">
                    {t.categories.tea.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
                        <span className="text-base font-bold text-gray-800 ml-3">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.categories.beverages.title}</h2>
                  <div className="space-y-4">
                    {t.categories.beverages.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
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
                      <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
                        <span className="text-base font-bold text-gray-800 ml-3">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {t.categories.lightMeals.items.slice(2).map((item, index) => (
                      <div key={index + 2} className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
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