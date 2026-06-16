import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

// Paleta corporativa IT Solutions Group — "Azul profundo + Cian".
// Tokens centralizados: usar siempre estas clases (brand-*, accent-*, navy, ink)
// en lugar de hex sueltos para mantener consistencia de marca.
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        // Azul primario corporativo (CTA, enlaces, acentos sólidos)
        brand: {
          50: '#eef5fd',
          100: '#d8e6fa',
          200: '#b9d2f5',
          300: '#8ab4ec',
          400: '#548fdf',
          500: '#2f6fd0',
          600: '#1e5fbf',
          700: '#1b4d9c',
          800: '#1b417f',
          900: '#1a3a6a',
          950: '#0a2540',
        },
        // Cian tecnológico (acentos, detalles, estados hover secundarios)
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        navy: '#0a2540',
        ink: '#1e293b',
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        display: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
      },
    },
  },
}
