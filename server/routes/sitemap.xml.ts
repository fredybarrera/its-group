import { serverQueryContent } from '#content/server'
import { services } from '~/data/services'
import { caseStudies } from '~/data/portfolio'

// Genera sitemap.xml. Se incluye en nitro.prerender.routes para
// producirse como archivo estático en el build (Azure SWA).
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const base = config.public.siteUrl.replace(/\/$/, '')

  const staticRoutes = ['/', '/servicios', '/portafolio', '/nosotros', '/blog', '/contacto']
  const serviceRoutes = services.map((s) => `/servicios/${s.slug}`)
  const caseRoutes = caseStudies.map((c) => `/portafolio/${c.slug}`)

  // Artículos del blog desde @nuxt/content.
  let blogRoutes: string[] = []
  try {
    const docs = await serverQueryContent(event, 'blog').only(['_path']).find()
    blogRoutes = docs.map((d: { _path?: string }) => d._path ?? '').filter(Boolean)
  } catch {
    blogRoutes = []
  }

  const urls = [...staticRoutes, ...serviceRoutes, ...caseRoutes, ...blogRoutes]
  const today = new Date().toISOString().split('T')[0]

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) =>
      `  <url>\n    <loc>${base}${url === '/' ? '' : url}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`,
  )
  .join('\n')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  return body
})
