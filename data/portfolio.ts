import type { CaseStudy } from '~/types/content'

// ⚠️ CONTENIDO DE EJEMPLO — casos de éxito ilustrativos.
// El campo `image` define el degradado del placeholder de marca;
// reemplazar por imágenes reales (<NuxtImg>) cuando estén disponibles.
export const caseStudies: CaseStudy[] = [
  {
    slug: 'catastro-municipal-gis',
    title: 'Plataforma de catastro municipal georreferenciada',
    client: 'Municipio de la Región Metropolitana', // ⚠️ ejemplo
    industry: 'Sector Público',
    serviceSlug: 'gis-arcgis',
    summary:
      'Modernización del catastro municipal con ArcGIS para una gestión territorial más ágil y transparente.',
    problem:
      'El municipio gestionaba su catastro en planos físicos y planillas desconectadas, lo que dificultaba responder consultas ciudadanas y planificar el territorio.',
    solution:
      'Implementamos una plataforma sobre ArcGIS Enterprise con mapas interactivos, capas catastrales y un visor de atención ciudadana, integrada a los sistemas internos.',
    result:
      'Se redujo drásticamente el tiempo de respuesta a consultas territoriales y se habilitó la toma de decisiones de planificación basada en datos espaciales confiables.',
    metrics: [
      { value: '-70%', label: 'Tiempo de respuesta a consultas' },
      { value: '100%', label: 'Catastro digitalizado' },
    ],
    image: 'from-brand-700 to-accent-500',
    imageAlt: 'Mapa interactivo de catastro municipal sobre tecnología ArcGIS',
  },
  {
    slug: 'erp-control-bodega-retail',
    title: 'ERP con control de bodega para distribuidora',
    client: 'Distribuidora nacional', // ⚠️ ejemplo
    industry: 'Retail y Distribución',
    serviceSlug: 'sistemas-de-gestion',
    summary:
      'Sistema de gestión a medida que unificó inventario, compras y despacho en una sola plataforma.',
    problem:
      'La empresa operaba con múltiples planillas y un sistema heredado que no reflejaba el stock real, generando quiebres y errores de despacho.',
    solution:
      'Desarrollamos un ERP modular con control de bodega en tiempo real, picking guiado y reposición automática, desplegado en Microsoft Azure.',
    result:
      'Mejoró la exactitud de inventario y se redujeron los quiebres de stock, con información confiable para la gerencia.',
    metrics: [
      { value: '+98%', label: 'Exactitud de inventario' },
      { value: '-45%', label: 'Quiebres de stock' },
    ],
    image: 'from-brand-800 to-brand-500',
    imageAlt: 'Tablero de control de bodega e inventario de un sistema ERP',
  },
  {
    slug: 'app-terreno-inspecciones',
    title: 'App de inspecciones en terreno con modo offline',
    client: 'Empresa de utilities', // ⚠️ ejemplo
    industry: 'Energía y Utilities',
    serviceSlug: 'soluciones-industriales',
    summary:
      'Aplicación móvil para inspección de activos con captura georreferenciada y sincronización offline.',
    problem:
      'Las inspecciones se registraban en papel y se digitaban después, con pérdida de información y demoras de días en la consolidación.',
    solution:
      'Creamos una PWA con formularios digitales, registro fotográfico, geolocalización y funcionamiento offline que sincroniza al recuperar señal.',
    result:
      'La información de terreno quedó disponible casi en tiempo real, eliminando la doble digitación y los errores asociados.',
    metrics: [
      { value: '-90%', label: 'Tiempo de consolidación' },
      { value: '0', label: 'Doble digitación' },
    ],
    image: 'from-accent-700 to-brand-600',
    imageAlt: 'Aplicación móvil de inspecciones en terreno con mapa y formulario',
  },
  {
    slug: 'plataforma-academica-colegio',
    title: 'Plataforma académica para red de colegios',
    client: 'Red educativa', // ⚠️ ejemplo
    industry: 'Educación',
    serviceSlug: 'aplicaciones-educativas',
    summary:
      'Libro de clases digital, asistencia y comunicación con apoderados en una plataforma única.',
    problem:
      'Cada establecimiento usaba herramientas distintas, dificultando la consolidación académica y la comunicación con las familias.',
    solution:
      'Implementamos una plataforma educativa con gestión de cursos, evaluaciones, asistencia y portal de apoderados, alojada en Azure.',
    result:
      'Se estandarizó la gestión académica en toda la red y mejoró la comunicación con la comunidad escolar.',
    metrics: [
      { value: '+5.000', label: 'Estudiantes gestionados' },
      { value: '1', label: 'Plataforma unificada' },
    ],
    image: 'from-brand-600 to-accent-400',
    imageAlt: 'Plataforma de gestión académica con cursos y asistencia',
  },
  {
    slug: 'migracion-azure-saas',
    title: 'Migración a Azure de plataforma SaaS',
    client: 'Empresa de software', // ⚠️ ejemplo
    industry: 'Tecnología',
    serviceSlug: 'cloud-infraestructura',
    summary:
      'Migración de infraestructura on-premise a una arquitectura cloud-native escalable en Azure.',
    problem:
      'La plataforma sufría caídas en horas peak y los costos de infraestructura eran difíciles de controlar.',
    solution:
      'Rediseñamos la arquitectura con contenedores, autoescalado y despliegue continuo en Azure DevOps, optimizando el gasto.',
    result:
      'La plataforma escala según demanda con alta disponibilidad y los costos de infraestructura se hicieron predecibles.',
    metrics: [
      { value: '99,9%', label: 'Disponibilidad' },
      { value: '-30%', label: 'Costo de infraestructura' },
    ],
    image: 'from-navy to-accent-600',
    imageAlt: 'Arquitectura de nube escalable en Microsoft Azure',
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

export const featuredCaseStudies = caseStudies.slice(0, 3)
