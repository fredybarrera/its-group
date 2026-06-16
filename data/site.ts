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
    phone: '+56 2 2345 6789', // ⚠️ ejemplo
    phoneHref: 'tel:+56223456789',
    whatsapp: '+56 9 1234 5678', // ⚠️ ejemplo
    whatsappHref: 'https://wa.me/56912345678',
    addressLine: 'Av. Apoquindo 4501, Oficina 1203', // ⚠️ ejemplo
    city: 'Las Condes, Santiago',
    region: 'Región Metropolitana',
    country: 'Chile',
    mapsQuery: 'Av. Apoquindo 4501, Las Condes, Santiago, Chile',
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
