import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Coffee Cabana Theme 1 (Rustic Earth) - Updated
        'coffee-brown': '#8B4513',
        'warm-tan': '#D2B48C',      // PRIMARY
        'berry-red': '#DC143C',     // SECONDARY  
        'cream': '#F5DEB3',
        'dark-brown': '#654321',
        // Additional coffee-inspired colors
        'espresso': '#3C2414',
        'latte': '#E8D5B7',
        'mocha': '#8B4513',
      },
      fontFamily: {
        'sans': ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'display': ['Inter', 'sans-serif'], // For headers
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config