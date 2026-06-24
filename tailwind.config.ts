import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

// Paleta corporativa IT Solutions Group — "Esmeralda + Ámbar".
// Completamente distinta del azul/cyan estándar del mercado tech chileno.
// El verde esmeralda conecta con GIS/mapas (Esri); el ámbar transmite confianza y tecnología.
// Tokens centralizados: usar siempre estas clases (brand-*, accent-*, navy, ink).
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        // Verde esmeralda — color primario corporativo (CTA, enlaces, acentos sólidos)
        // Diferenciador clave: conecta visualmente con GIS/cartografía y naturaleza tecnológica
        brand: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        // Ámbar/oro — acento cálido para CTAs secundarios, badges, highlights
        accent: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        // Fondo oscuro: grafito azulado profundo (más neutro que el navy, más sofisticado)
        navy: '#0D1B2A',
        ink:  '#1e293b',
      },
      fontFamily: {
        // Inter: cuerpo, navegación, datos — legibilidad neutral
        sans:    ['Inter', ...defaultTheme.fontFamily.sans],
        // Sora: display face para h1/h2 — más técnica y característica, coherente con el mundo GIS
        display: ['Sora', 'Inter', ...defaultTheme.fontFamily.sans],
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
