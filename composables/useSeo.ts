import { site } from '~/data/site'

interface SeoOptions {
  title: string
  description: string
  /** Ruta relativa, ej. '/servicios'. Por defecto la ruta actual. */
  path?: string
  /** URL absoluta o relativa de la imagen Open Graph. */
  image?: string
  type?: 'website' | 'article'
}

/**
 * Centraliza los metadatos SEO de cada página: title, description,
 * canonical y Open Graph / Twitter Card.
 */
export function useSeo(options: SeoOptions) {
  const config = useRuntimeConfig()
  const route = useRoute()
  const siteUrl = config.public.siteUrl.replace(/\/$/, '')
  const path = options.path ?? route.path
  const canonical = `${siteUrl}${path === '/' ? '' : path}`
  const image = options.image
    ? options.image.startsWith('http')
      ? options.image
      : `${siteUrl}${options.image}`
    : `${siteUrl}/og-image.svg`

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: `${options.title} | ${site.name}`,
    ogDescription: options.description,
    ogType: options.type ?? 'website',
    ogUrl: canonical,
    ogImage: image,
    ogSiteName: site.name,
    ogLocale: 'es_CL',
    twitterCard: 'summary_large_image',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: image,
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }],
  })
}
