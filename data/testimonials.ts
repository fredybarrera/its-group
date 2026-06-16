import type { Testimonial } from '~/types/content'

// ⚠️ CONTENIDO DE EJEMPLO — testimonios ilustrativos.
export const testimonials: Testimonial[] = [
  {
    quote:
      'IT Solutions Group entendió nuestra operación antes de proponer tecnología. El sistema de gestión que desarrollaron se adaptó a cómo trabajamos, no al revés.',
    author: 'Gerente de Operaciones', // ⚠️ ejemplo
    role: 'Gerencia de Operaciones',
    company: 'Distribuidora nacional',
  },
  {
    quote:
      'Su experiencia como Partner de Esri fue clave. La plataforma ArcGIS nos dio una visión del territorio que antes no teníamos y agilizó la atención ciudadana.',
    author: 'Director de Planificación', // ⚠️ ejemplo
    role: 'Dirección de Planificación',
    company: 'Municipio Región Metropolitana',
  },
  {
    quote:
      'La migración a Azure fue impecable y hoy nuestra plataforma escala sin sobresaltos. El soporte posterior ha sido igual de profesional.',
    author: 'CTO', // ⚠️ ejemplo
    role: 'Dirección de Tecnología',
    company: 'Empresa de software',
  },
]
