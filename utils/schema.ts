// Ayudas para los datos estructurados (Schema.org) de las páginas.

/** `@id` de la organización definida en `app.vue`; los demás esquemas la referencian por aquí. */
export function organizationId(siteUrl: string): string {
  return `${siteUrl.replace(/\/$/, '')}/#organization`
}

/** Convierte una ruta del sitio (`/og/x.png`) en URL absoluta; deja intactas las que ya lo son. */
export function absoluteUrl(siteUrl: string, path: string): string {
  return path.startsWith('http') ? path : `${siteUrl.replace(/\/$/, '')}${path}`
}
