import type { TeamMember } from '~/types/content'

// ⚠️ CONTENIDO DE EJEMPLO — perfiles ilustrativos.
// El campo `photo` define el degradado del avatar placeholder.
export const team: TeamMember[] = [
  {
    name: 'Dirección General', // ⚠️ ejemplo
    role: 'CEO & Fundador',
    bio: 'Lidera la estrategia de la empresa con foco en generar valor de negocio a través de la tecnología.',
    photo: 'from-brand-600 to-accent-500',
  },
  {
    name: 'Dirección Técnica', // ⚠️ ejemplo
    role: 'CTO',
    bio: 'Responsable de la arquitectura de soluciones, calidad de software y adopción de Microsoft Azure.',
    photo: 'from-brand-700 to-brand-400',
  },
  {
    name: 'Líder GIS', // ⚠️ ejemplo
    role: 'Especialista ArcGIS',
    bio: 'Conduce los proyectos geoespaciales como referente Esri, desde el análisis hasta el dashboard final.',
    photo: 'from-accent-600 to-brand-500',
  },
  {
    name: 'Jefatura de Proyectos', // ⚠️ ejemplo
    role: 'Project Manager',
    bio: 'Asegura entregas a tiempo y dentro de alcance, con comunicación clara hacia el cliente.',
    photo: 'from-navy to-accent-500',
  },
]

// ⚠️ CONTENIDO DE EJEMPLO — metodología de trabajo.
export const methodology = [
  {
    step: '01',
    title: 'Descubrimiento',
    description:
      'Entendemos tu negocio, tus procesos y tus objetivos antes de proponer cualquier tecnología.',
  },
  {
    step: '02',
    title: 'Diseño y propuesta',
    description:
      'Definimos el alcance, la arquitectura y un plan claro, con hitos y resultados esperados.',
  },
  {
    step: '03',
    title: 'Desarrollo iterativo',
    description:
      'Construimos en ciclos cortos con entregas frecuentes para validar y ajustar sobre la marcha.',
  },
  {
    step: '04',
    title: 'Despliegue y soporte',
    description:
      'Implementamos en la nube, capacitamos a tu equipo y acompañamos con soporte continuo.',
  },
]
