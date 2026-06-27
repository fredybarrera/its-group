import type { NavLink, SiteInfo, Metric } from '~/types/content'

// ⚠️ CONTENIDO DE EJEMPLO — reemplazar por datos reales de la empresa.
export const site: SiteInfo = {
  name: 'IT Solutions Group',
  legalName: 'IT Solutions Group SpA',
  tagline: 'Desarrollo de software a medida y consultoría tecnológica en Chile',
  description:
    'Empresa chilena de desarrollo de software a medida y consultoría TI. Partner oficial de Esri Chile (ArcGIS/GIS) y especialistas en Microsoft Azure.',
  foundedYear: 2014,
  contact: {
    email: 'contacto@itsgroup.dev', // ⚠️ verificar/ajustar buzón real
    phone: '+56 9 3177 8243',
    phoneHref: 'tel:+56931778243',
    whatsapp: '+56 9 3177 8243',
    whatsappHref: 'https://wa.me/56931778243',
    addressLine: 'Talcahuano',
    city: 'Bío Bío',
    region: 'Bío Bío',
    country: 'Chile',
    mapsQuery: 'Talcahuano, Bío Bío, Chile',
  },
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/itsolutionsgroup' }, // ⚠️ ejemplo
  ],
}

export const mainNav: NavLink[] = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Portafolio', to: '/portafolio' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contacto', to: '/contacto' },
]

// ⚠️ CONTENIDO DE EJEMPLO — métricas representativas del rubro.
export const metrics: Metric[] = [
  { value: '+120', label: 'Proyectos entregados' },
  { value: '+10', label: 'Años de experiencia' },
  { value: '+60', label: 'Clientes B2B y públicos' },
  { value: '99,9%', label: 'Disponibilidad en la nube' },
]
