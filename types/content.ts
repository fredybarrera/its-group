// Tipos del contenido del sitio. Centralizar aquí facilita una futura
// versión en inglés (mismas estructuras, distintos textos).

export interface NavLink {
  label: string
  to: string
}

export interface SiteContact {
  email: string
  phone: string
  phoneHref: string
  whatsapp: string
  whatsappHref: string
  addressLine: string
  city: string
  region: string
  country: string
  mapsQuery: string
}

export interface SiteInfo {
  name: string
  legalName: string
  tagline: string
  description: string
  foundedYear: number
  contact: SiteContact
  social: { label: string; href: string }[]
}

export interface Metric {
  value: string
  label: string
}

/** Nombres de iconos de lucide-vue-next usados en la UI. */
export type IconName = string

export interface ServiceFeature {
  title: string
  description: string
}

export interface ServiceUseCase {
  industry: string
  description: string
}

export interface Service {
  slug: string
  icon: IconName
  category: string
  title: string
  shortDescription: string
  /** Descripción larga para la página individual. */
  longDescription: string
  benefits: ServiceFeature[]
  useCases: ServiceUseCase[]
  technologies: string[]
  /** Palabra clave SEO principal del servicio. */
  keyword: string
  /** URL de demo interactiva, si existe. */
  demoUrl?: string
}

export interface CaseStudy {
  slug: string
  title: string
  client: string
  industry: string
  serviceSlug: string
  summary: string
  problem: string
  solution: string
  result: string
  metrics: Metric[]
  image: string
  imageAlt: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  photo: string
}
