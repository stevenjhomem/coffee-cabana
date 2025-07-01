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
    title: 'Menu - Coffee Cabana',
    description: 'Discover our organic coffee menu grown and roasted on Terceira Island',
    url: 'https://coffeecabana.pt/menu',
    siteName: 'Coffee Cabana',
    locale: 'pt_PT',
    type: 'website',
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
  }

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
              <h1 className="text-6xl font-bold text-black mb-4">Nosso {t.title}</h1>
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
              <div className="flex justify-center">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 max-w-md w-full shadow-2xl border border-white/30 hover:shadow-3xl transition-shadow duration-300">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.categories.lightMeals.title}</h2>
                  <div className="space-y-4">
                    {t.categories.lightMeals.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
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