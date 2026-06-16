import type { Service } from '~/types/content'

// ⚠️ CONTENIDO DE EJEMPLO — textos comerciales realistas del rubro,
// listos para revisión y reemplazo por el equipo de marketing.
export const services: Service[] = [
  {
    slug: 'sistemas-de-gestion',
    icon: 'Boxes',
    category: 'Sistemas de Gestión',
    title: 'Sistemas de Gestión Empresarial',
    shortDescription:
      'ERP, control de activos y control de bodega a la medida de tus procesos, no al revés.',
    longDescription:
      'Diseñamos e implementamos sistemas de gestión empresarial que se adaptan a la forma real de operar de tu empresa. Desde un ERP modular hasta soluciones específicas de control de activos y administración de bodega, centralizamos tu información para que tomes mejores decisiones con datos confiables y en tiempo real.',
    benefits: [
      {
        title: 'Procesos unificados',
        description:
          'Centraliza compras, inventario, finanzas y operaciones en una sola plataforma, eliminando planillas dispersas.',
      },
      {
        title: 'Trazabilidad total',
        description:
          'Conoce el estado y la ubicación de cada activo y producto en cualquier momento, con historial completo.',
      },
      {
        title: 'Decisiones con datos',
        description:
          'Reportes y tableros que transforman tus operaciones en indicadores claros para la gerencia.',
      },
    ],
    useCases: [
      {
        industry: 'Retail y distribución',
        description:
          'Control de bodega multinivel con gestión de stock, picking y reposición automática.',
      },
      {
        industry: 'Manufactura',
        description: 'Gestión de activos productivos, mantenimiento preventivo y costos por orden.',
      },
      {
        industry: 'Servicios',
        description: 'ERP modular para facturación, proyectos y control financiero integrado.',
      },
    ],
    technologies: ['.NET', 'Node.js', 'Vue / Nuxt', 'SQL Server', 'PostgreSQL', 'Microsoft Azure'],
    keyword: 'sistemas de gestión empresarial',
  },
  {
    slug: 'soluciones-industriales',
    icon: 'Factory',
    category: 'Soluciones Industriales',
    title: 'Soluciones Industriales y de Terreno',
    shortDescription:
      'Control, seguimiento y reportes en terreno para operaciones que ocurren fuera de la oficina.',
    longDescription:
      'Llevamos la digitalización al lugar donde realmente sucede el trabajo. Desarrollamos aplicaciones de control y seguimiento operacional y reportería en terreno que funcionan incluso con conectividad limitada, conectando a los equipos de campo con la administración en tiempo real.',
    benefits: [
      {
        title: 'Datos desde el terreno',
        description:
          'Captura de información en faena con formularios digitales, fotos y geolocalización, sin papel.',
      },
      {
        title: 'Operación con o sin red',
        description:
          'Funcionalidad offline que sincroniza automáticamente cuando se recupera la conexión.',
      },
      {
        title: 'Visibilidad en tiempo real',
        description: 'Tableros de control que reflejan el avance y los incidentes apenas ocurren.',
      },
    ],
    useCases: [
      {
        industry: 'Construcción y obras',
        description: 'Reportes diarios de avance, checklists de seguridad y control de cuadrillas.',
      },
      {
        industry: 'Energía y utilities',
        description: 'Inspección de activos en terreno con registro fotográfico y georreferencia.',
      },
      {
        industry: 'Agroindustria',
        description: 'Seguimiento de labores de campo, cosecha y trazabilidad de lotes.',
      },
    ],
    technologies: ['PWA', 'React Native', 'Vue / Nuxt', 'SQLite offline', 'Azure', 'ArcGIS'],
    keyword: 'soluciones industriales y reportes en terreno',
  },
  {
    slug: 'gis-arcgis',
    icon: 'MapPinned',
    category: 'Tecnología GIS / ArcGIS',
    title: 'Tecnología GIS y ArcGIS',
    shortDescription:
      'Mapas interactivos, análisis espacial y dashboards geográficos como Partner oficial de Esri Chile.',
    longDescription:
      'Como Partner oficial de Esri Chile, ayudamos a organizaciones a tomar decisiones basadas en la ubicación. Implementamos plataformas ArcGIS, desarrollamos mapas interactivos, análisis espacial avanzado y dashboards geográficos que convierten datos territoriales en información accionable.',
    benefits: [
      {
        title: 'Inteligencia territorial',
        description:
          'Visualiza patrones, riesgos y oportunidades que solo se hacen evidentes sobre un mapa.',
      },
      {
        title: 'Plataforma Esri completa',
        description:
          'Implementación y soporte de ArcGIS Online, ArcGIS Enterprise y aplicaciones a medida.',
      },
      {
        title: 'Dashboards para decidir',
        description:
          'Tableros geográficos que combinan mapas, indicadores y datos operacionales en vivo.',
      },
    ],
    useCases: [
      {
        industry: 'Municipios y gobierno',
        description:
          'Catastro, ordenamiento territorial y atención ciudadana georreferenciada.',
      },
      {
        industry: 'Utilities y telecom',
        description: 'Gestión de redes, activos distribuidos y planificación de cobertura.',
      },
      {
        industry: 'Recursos naturales',
        description: 'Análisis ambiental, monitoreo de territorio y evaluación de riesgos.',
      },
    ],
    technologies: ['ArcGIS Online', 'ArcGIS Enterprise', 'ArcGIS API for JavaScript', 'Esri', 'Azure'],
    keyword: 'consultoría ArcGIS Chile y soluciones GIS',
  },
  {
    slug: 'aplicaciones-educativas',
    icon: 'GraduationCap',
    category: 'Aplicaciones Educativas',
    title: 'Aplicaciones Educativas',
    shortDescription:
      'Plataformas de gestión de cursos, clases, evaluaciones y asistencia para instituciones educativas.',
    longDescription:
      'Construimos plataformas educativas que simplifican la gestión académica y mejoran la experiencia de docentes, estudiantes y apoderados. Gestión de cursos y clases, evaluaciones en línea, control de asistencia y reportería académica, todo integrado y accesible desde cualquier dispositivo.',
    benefits: [
      {
        title: 'Gestión académica integral',
        description:
          'Cursos, horarios, calificaciones y asistencia administrados desde un único lugar.',
      },
      {
        title: 'Experiencia para toda la comunidad',
        description: 'Portales diferenciados para docentes, estudiantes y apoderados.',
      },
      {
        title: 'Reportería educativa',
        description: 'Indicadores de rendimiento y asistencia para la toma de decisiones académicas.',
      },
    ],
    useCases: [
      {
        industry: 'Colegios y liceos',
        description: 'Libro de clases digital, asistencia y comunicación con apoderados.',
      },
      {
        industry: 'Educación superior',
        description: 'Gestión de mallas, inscripción de asignaturas y evaluaciones en línea.',
      },
      {
        industry: 'Capacitación corporativa',
        description: 'Plataformas de cursos internos con seguimiento de avance y certificación.',
      },
    ],
    technologies: ['Vue / Nuxt', 'Node.js', '.NET', 'PostgreSQL', 'Azure', 'Power BI'],
    keyword: 'aplicaciones educativas y plataforma de gestión de cursos',
  },
  {
    slug: 'cloud-infraestructura',
    icon: 'Cloud',
    category: 'Cloud & Infraestructura',
    title: 'Cloud e Infraestructura Azure',
    shortDescription:
      'Asesoría e implementación de Microsoft Azure: migración, arquitectura y optimización de costos.',
    longDescription:
      'Como especialistas en Microsoft Azure, acompañamos a tu organización en su adopción de la nube: desde la estrategia y la migración hasta la arquitectura segura, escalable y optimizada en costos. Diseñamos infraestructura confiable que crece con tu negocio.',
    benefits: [
      {
        title: 'Migración sin sobresaltos',
        description:
          'Planificamos y ejecutamos la migración a Azure minimizando el impacto en tu operación.',
      },
      {
        title: 'Arquitectura segura y escalable',
        description: 'Diseños con buenas prácticas de seguridad, alta disponibilidad y respaldo.',
      },
      {
        title: 'Optimización de costos',
        description: 'Dimensionamos y gobernamos tus recursos para pagar solo por lo que usas.',
      },
    ],
    useCases: [
      {
        industry: 'Empresas en crecimiento',
        description: 'Migración de servidores on-premise a infraestructura escalable en Azure.',
      },
      {
        industry: 'Sector público',
        description: 'Plataformas digitales con alta disponibilidad y cumplimiento normativo.',
      },
      {
        industry: 'Software / SaaS',
        description: 'Arquitecturas cloud-native, contenedores y despliegue continuo.',
      },
    ],
    technologies: ['Microsoft Azure', 'Azure DevOps', 'Docker', 'Kubernetes', 'Terraform'],
    keyword: 'asesoría e implementación Azure Chile',
  },
  {
    slug: 'consultoria-ti',
    icon: 'Headset',
    category: 'Consultoría TI',
    title: 'Consultoría TI y Soporte',
    shortDescription:
      'Asesoría informática general, auditoría tecnológica y soporte para que la tecnología impulse tu negocio.',
    longDescription:
      'Te acompañamos como socio tecnológico de largo plazo. Realizamos asesoría informática general, auditorías de sistemas y seguridad, y entregamos soporte continuo para que tu infraestructura y tus aplicaciones funcionen de forma confiable y alineadas con los objetivos del negocio.',
    benefits: [
      {
        title: 'Diagnóstico claro',
        description:
          'Auditoría de sistemas, procesos y seguridad con recomendaciones priorizadas y accionables.',
      },
      {
        title: 'Hoja de ruta tecnológica',
        description: 'Definimos junto a ti la estrategia TI alineada con tus objetivos de negocio.',
      },
      {
        title: 'Soporte confiable',
        description: 'Mesa de ayuda y soporte continuo con acuerdos de nivel de servicio (SLA).',
      },
    ],
    useCases: [
      {
        industry: 'Pymes y empresas medianas',
        description: 'Externalización de la gestión TI y soporte a usuarios.',
      },
      {
        industry: 'Organizaciones reguladas',
        description: 'Auditoría de seguridad y cumplimiento de buenas prácticas.',
      },
      {
        industry: 'Transformación digital',
        description: 'Acompañamiento estratégico para modernizar procesos y sistemas.',
      },
    ],
    technologies: ['Microsoft 365', 'Azure', 'ITIL', 'Ciberseguridad', 'Power Platform'],
    keyword: 'consultoría informática y TI en Chile',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}
