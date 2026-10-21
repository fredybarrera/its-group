import type { RouteLocationRaw } from 'vue-router'

/** Ruta al formulario de contacto con la solicitud de acceso a la demo de un servicio. */
export function demoAccessRoute(serviceSlug: string): RouteLocationRaw {
  return { path: '/contacto', query: { servicio: serviceSlug, demo: '1' }, hash: '#formulario' }
}
