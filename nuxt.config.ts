// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/eslint',
  ],

  // Configuración en runtime. Las claves privadas (sin `public`) solo existen en
  // el servidor y se sobrescriben con variables de entorno NUXT_* (ver .env.example).
  runtimeConfig: {
    // Privadas (servidor): nunca se exponen al cliente.
    resendApiKey: '', // NUXT_RESEND_API_KEY
    contactToEmail: '', // NUXT_CONTACT_TO_EMAIL — destino del formulario
    contactFromEmail: 'IT Solutions Group <contacto@itsgroup.dev>', // NUXT_CONTACT_FROM_EMAIL — remitente verificado en Resend
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://itsgroup.dev',
      calendlyUrl:
        process.env.NUXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/fredy-barrera-a/30min',
    },
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'es-CL' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Sora:wght@600;700;800&display=swap',
        },
      ],
    },
  },

  // Prerenderizado de páginas estáticas para SEO y velocidad (Azure SWA).
  // El crawler sigue los enlaces internos para descubrir el resto de rutas.
  routeRules: {
    '/': { prerender: true },
    '/servicios': { prerender: true },
    '/servicios/**': { prerender: true },
    '/portafolio': { prerender: true },
    '/portafolio/**': { prerender: true },
    '/nosotros': { prerender: true },
    '/blog': { prerender: true },
    '/blog/**': { prerender: true },
  },

  nitro: {
    preset: 'azure',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml'],
      failOnError: true,
    },
  },

  content: {
    documentDriven: false,
    highlight: {
      theme: 'github-dark',
    },
  },

  image: {
    quality: 80,
    format: ['webp'],
  },

  eslint: {
    config: {
      stylistic: false,
    },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },
})
