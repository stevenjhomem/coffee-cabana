export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "Coffee Cabana",
  "description": "The only coffee grown and roasted on Terceira Island. Experience our farm-to-cup journey in the heart of the Azores.",
  "url": "https://www.coffeecabana.pt",
  "telephone": "+351919116145",
  "email": "bananaecocamp@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R. Q.ta Dona Joana Forjaz",
    "addressLocality": "São Mateus da Calheta",
    "addressRegion": "Terceira",
    "postalCode": "9700-559",
    "addressCountry": "PT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "38.7333",
    "longitude": "-27.2167"
  },
  "openingHours": [
    "Mo-Th 08:00-17:00",
    "Fr-Su 08:00-19:00"
  ],
  "sameAs": [
    "https://www.instagram.com/coffee_cabana_official/",
    "https://www.facebook.com/p/Coffee-Cabana-100076131101706/"
  ],
  "servesCuisine": ["Coffee", "Breakfast", "Brunch"],
  "priceRange": "$$",
  "image": "https://www.coffeecabana.pt/images/coffeecabana/Banana_EcoCamp-49.jpg",
  "hasMenu": "https://www.coffeecabana.pt/menu",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Coffee Cabana",
  "url": "https://www.coffeecabana.pt",
  "logo": "https://www.coffeecabana.pt/images/coffeecabana/logo.svg",
  "sameAs": [
    "https://www.instagram.com/coffee_cabana_official/",
    "https://www.facebook.com/p/Coffee-Cabana-100076131101706/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+351919116145",
    "contactType": "Customer Service",
    "availableLanguage": ["Portuguese", "English"]
  }
}

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Organic Terceira Coffee",
  "description": "Unique organic coffee grown and roasted on Terceira Island in the Azores. From plantation to cup experience.",
  "brand": {
    "@type": "Brand",
    "name": "Coffee Cabana"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "price": "12.00",
    "priceCurrency": "EUR",
    "seller": {
      "@type": "Organization",
      "name": "Coffee Cabana"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "58"
  }
}