/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        convertelle: {
          // Luminous Luxury Neutrals
          porcelain: '#FAF8F5',
          silk: '#FFFFFF',
          sand: '#F2EDE4',
          stone: '#E8E2D8',
          border: '#DDD6CA',
          
          // Deep High-Contrast Text Tones
          noir: '#1A1815',
          charcoal: '#33302B',
          muted: '#666057',
          
          // Refined Champagne Gold Accents
          gold: {
            DEFAULT: '#B89047',
            light: '#C5A059',
            dark: '#8C6B26',
            shimmer: '#F0E2C8',
            glow: 'rgba(184, 144, 71, 0.15)',
          },

          // Muted Accent Tones
          emerald: '#1E3D2F',
          peacock: '#0D4D5C',
          rust: '#A8521A',
          lilac: '#8A699C',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['Montserrat', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C5A059 0%, #B89047 50%, #8C6B26 100%)',
        'soft-glow': 'radial-gradient(circle, rgba(184,144,71,0.08) 0%, rgba(250,248,245,0) 70%)',
      },
      boxShadow: {
        'luxury': '0 4px 20px -2px rgba(26, 24, 21, 0.05), 0 2px 6px -1px rgba(26, 24, 21, 0.03)',
        'luxury-hover': '0 12px 30px -4px rgba(26, 24, 21, 0.1), 0 4px 10px -2px rgba(26, 24, 21, 0.05)',
        'gold-pill': '0 2px 10px rgba(184, 144, 71, 0.2)',
      }
    },
  },
  plugins: [],
}
