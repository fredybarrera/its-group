import type { CaseStudy } from '~/types/content'

// ⚠️ CONTENIDO DE EJEMPLO — casos de éxito ilustrativos.
// El campo `image` define el degradado del placeholder de marca;
// reemplazar por imágenes reales (<NuxtImg>) cuando estén disponibles.
export const caseStudies: CaseStudy[] = [
  // Proyecto real — producto propio en producción.
  {
    slug: 'congreso-visible',
    title: 'Congreso Visible: datos oficiales del Congreso en un solo lugar',
    client: 'Producto propio de IT Solutions Group',
    industry: 'Sector Público',
    serviceSlug: 'analitica-de-datos',
    summary:
      'Plataforma pública que centraliza, normaliza e historiza la actividad parlamentaria de Chile, con cada dato trazable hasta su fuente oficial.',
    problem:
      'La información sobre diputados y senadores está repartida entre la Cámara, el Senado, la BCN y el SERVEL, en formatos distintos y difíciles de comparar. Saber cómo votó un parlamentario, su asistencia o sus gastos exigía revisar varios sitios a mano.',
    solution:
      'Construimos un pipeline de ingesta en .NET que recolecta, conserva y normaliza los datos de las cuatro fuentes oficiales, sobre PostgreSQL y una API ASP.NET Core desplegadas en Microsoft Azure con infraestructura como código. El sitio en Nuxt permite buscar parlamentarios, revisar votaciones y proyectos de ley, comparar indicadores y encontrar a los representantes de cada comuna.',
    result:
      'Cualquier persona puede consultar y comparar la actividad del Congreso con indicadores objetivos y neutrales —sin rankings ni juicios políticos— y verificar cada cifra en su fuente original.',
    metrics: [
      { value: '4', label: 'Fuentes oficiales integradas' },
      { value: '2', label: 'Cámaras homologadas' },
      { value: '100%', label: 'Datos trazables a su fuente' },
    ],
    image: 'from-navy to-accent-500',
    imageAlt: 'Logotipo de Congreso Visible: datos oficiales del Congreso Nacional de Chile',
    cover: '/portafolio/congreso-visible.png',
    ogImage: '/og/portafolio/congreso-visible.png',
    liveUrl: 'https://congresovisible.cl',
    technologies: ['Nuxt', 'ASP.NET Core', 'PostgreSQL', 'Azure Container Apps', 'Azure Static Web Apps', 'Bicep'],
  },
  // Proyecto real — producto propio, demo funcional.
  {
    slug: 'parkos-gestion-estacionamientos',
    title: 'ParkOS: gestión y control de acceso para estacionamientos',
    client: 'Producto propio de IT Solutions Group',
    industry: 'Estacionamientos',
    serviceSlug: 'control-acceso-estacionamiento',
    summary:
      'Plataforma para operar estacionamientos desde un solo panel: ingresos y salidas, ocupación de plazas, tarifas, abonados y reportes.',
    problem:
      'Muchos estacionamientos todavía registran patentes en papel o planillas, calculan cobros a mano y no saben cuántas plazas tienen libres sin recorrer el recinto. Eso genera filas, errores de cuadre y poca información para decidir.',
    solution:
      'Diseñamos ParkOS, una plataforma web que registra cada vehículo con su patente, hora de entrada y forma de ingreso (manual, lectura de patente o ticket con código de barras), calcula el cobro según la tarifa y muestra el mapa de ocupación en tiempo real. Se ofrece en dos planes: Gestión, para la operación diaria, y Control, que suma barrera automática, lectura de patentes (LPR), sensores de ocupación y reportes avanzados.',
    result:
      'La demo funcional permite recorrer la operación completa —del ingreso al cobro y al reporte— y cambiar de plan en vivo para ver qué agrega cada nivel, antes de adaptar la solución al recinto de cada cliente.',
    metrics: [
      { value: '3', label: 'Formas de ingreso: manual, LPR y ticket' },
      { value: '2', label: 'Planes: Gestión y Control' },
    ],
    image: 'from-navy to-brand-600',
    imageAlt:
      'Pantalla de operación en vivo de ParkOS con patentes, hora de entrada y tiempo transcurrido de cada vehículo',
    cover: '/portafolio/parkos.webp',
    ogImage: '/og/portafolio/parkos-gestion-estacionamientos.png',
    liveUrl: 'https://its-parkos.vercel.app/',
    liveUrlRequiresAccess: true,
    technologies: ['Nuxt', 'TypeScript', 'Pinia', 'Tailwind CSS', 'Vercel'],
  },
  // Proyecto real — cliente del rubro construcción (nombre omitido hasta tener autorización).
  {
    slug: 'control-bodega-constructora',
    title: 'Control de bodega para empresa constructora',
    client: 'Empresa constructora', // ⚠️ nombrar al cliente solo con su autorización
    industry: 'Construcción',
    serviceSlug: 'sistemas-de-gestion',
    summary:
      'Sistema web para controlar materiales en bodega: ingresos, reservas, salidas y recepción en obra, con un panel de indicadores para la gestión.',
    problem:
      'La constructora necesitaba saber qué materiales tenía disponibles, cuáles estaban comprometidos para una obra y qué salidas seguían sin confirmar en destino. Con registros dispersos era difícil valorizar la bodega y detectar a tiempo los pendientes.',
    solution:
      'Desarrollamos un sistema de gestión de bodega a medida que registra cada movimiento de material —ingreso, reserva, liberación, salida y recepción— por planta y empresa, con usuarios y permisos por rol, exportación a Excel y documentos en PDF. Un panel inicial resume la valorización de la bodega, el stock comprometido, los materiales bajo su stock mínimo y las salidas pendientes de recepción. La plataforma corre en Microsoft Azure, a donde la migramos desde AWS con infraestructura como código.',
    result:
      'El equipo ve el estado de la bodega en una sola pantalla y sigue cada salida hasta su recepción, con trazabilidad completa de los movimientos de cada material.',
    metrics: [
      { value: '5', label: 'Tipos de movimiento con trazabilidad' },
    ],
    image: 'from-brand-800 to-brand-500',
    imageAlt:
      'Panel de resumen de bodega con valorización, materiales activos, stock comprometido, pendientes de recepción y movimientos de los últimos 30 días',
    cover: '/portafolio/control-bodega.webp',
    ogImage: '/og/portafolio/control-bodega-constructora.png',
    technologies: ['ASP.NET Core', 'SQL Server', 'Entity Framework Core', 'Azure Container Apps', 'Bicep', 'GitHub Actions'],
  },
  // Proyecto real — cliente de mantenimiento de infraestructura de telecomunicaciones.
  {
    slug: 'reportes-mantenimiento-torres-telecom',
    title: 'Reportes de mantenimiento en terreno para torres de telecomunicaciones',
    client: 'Empresa de mantenimiento de infraestructura de telecomunicaciones', // ⚠️ nombrar al cliente solo con su autorización
    industry: 'Telecomunicaciones',
    serviceSlug: 'soluciones-industriales',
    summary:
      'Plataforma web para planificar, ejecutar y aprobar inspecciones técnicas de sitios en terreno, con fotos, coordenadas GPS y reportes en PDF.',
    problem:
      'Las cuadrillas inspeccionaban sitios con formularios distintos según el tipo de visita y las fotos se ordenaban después, a mano. Consolidar cada informe técnico y revisarlo antes de entregarlo tomaba tiempo y dejaba espacio a errores.',
    solution:
      'Desarrollamos una plataforma de reportes en terreno organizada por programas de mantenimiento y sitios. El técnico registra la visita desde el lugar, captura su ubicación en el mapa, completa la pauta correspondiente y adjunta fotos que se suben y optimizan automáticamente. Cada inspección pasa por un flujo de revisión y aprobación por jefatura de grupo, y genera su informe en PDF: inspección preventiva, verticalidad, torque, tensión de retenidas, puesta a tierra, sistema de ascenso, inventario de equipos y reportes correctivos, entre otros.',
    result:
      'Los informes técnicos salen estandarizados y listos para entregar desde el mismo sistema, con fotos, ubicación y trazabilidad de quién hizo y aprobó cada cambio.',
    metrics: [
      { value: '10', label: 'Tipos de informe técnico en PDF' },
    ],
    image: 'from-accent-700 to-brand-600',
    imageAlt:
      'Formulario de reporte de mantenimiento con selección de sitio, tipo de visita, captura de coordenadas sobre un mapa y checklist de inspección preventiva aprobado',
    cover: '/portafolio/reportes-terreno-telecom.webp',
    ogImage: '/og/portafolio/reportes-mantenimiento-torres-telecom.png',
    technologies: ['ASP.NET Core', 'SQL Server', 'QuestPDF', 'Leaflet', 'Azure Blob Storage', 'Azure Container Apps', 'Bicep'],
  },
  // Proyecto real — producto propio, MVP funcional sin publicar.
  {
    slug: 'football-intelligence-chile',
    title: 'Football Intelligence Chile: análisis de rendimiento para el fútbol profesional',
    client: 'Producto propio de IT Solutions Group',
    industry: 'Deportes',
    serviceSlug: 'analitica-de-datos',
    summary:
      'Plataforma de inteligencia deportiva para cuerpos técnicos, analistas y scouts de la Primera División de Chile: partidos, jugadores, rivales y tendencias en un solo lugar.',
    problem:
      'Los cuerpos técnicos y departamentos de análisis trabajan con datos repartidos entre planillas, proveedores y video. Preparar un partido, estudiar a un rival o comparar jugadores exige juntar y limpiar información a mano, y muchas veces sin saber cuán representativa es la muestra.',
    solution:
      'Desarrollamos una plataforma web que sincroniza los datos de la Primera División con un proveedor de estadísticas y los organiza en módulos de análisis: panel del club, tendencias de la temporada, centro de partido, perfil y comparación de jugadores, scouting de rivales con conclusiones automáticas, preparación de partido con informe imprimible y listas de seguimiento. Cada organización ve solo sus datos, con acceso por roles mediante un proveedor de identidad (OIDC) y la sesión resguardada en el servidor.',
    result:
      'El cuerpo técnico pasa del dato suelto a decisiones respaldadas: cada indicador muestra su muestra y sus ausencias, y los informes quedan versionados con su autor para volver a ellos.',
    metrics: [
      { value: '16', label: 'Clubes de Primera División sincronizados' },
      { value: '8', label: 'Módulos de análisis' },
    ],
    image: 'from-navy to-brand-600',
    imageAlt:
      'Panel de indicadores del período con puntos, goles, remates, posesión y precisión por partido frente a los rivales, y la secuencia de los últimos cinco partidos con su marcador',
    cover: '/portafolio/football-intelligence-chile.webp',
    ogImage: '/og/portafolio/football-intelligence-chile.png',
    technologies: ['Nuxt', 'ASP.NET Core', 'PostgreSQL', 'Entity Framework Core', 'OIDC', 'API-Football'],
  },
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
    metrics: [], // ⚠️ agregar cifras reales cuando estén disponibles
    image: 'from-brand-700 to-accent-500',
    imageAlt: 'Mapa interactivo de catastro municipal sobre tecnología ArcGIS',
    cover: '/portafolio/catastro-municipal-gis.svg', // ilustración de referencia, reemplazable por captura real
    ogImage: '/og/portafolio/catastro-municipal-gis.png',
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
    metrics: [], // ⚠️ agregar cifras reales cuando estén disponibles
    image: 'from-accent-700 to-brand-600',
    imageAlt: 'Aplicación móvil de inspecciones en terreno con mapa y formulario',
    cover: '/portafolio/app-terreno-inspecciones.svg', // ilustración de referencia, reemplazable por captura real
    ogImage: '/og/portafolio/app-terreno-inspecciones.png',
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
    metrics: [], // ⚠️ agregar cifras reales cuando estén disponibles
    image: 'from-brand-600 to-accent-400',
    imageAlt: 'Plataforma de gestión académica con cursos y asistencia',
    cover: '/portafolio/plataforma-academica-colegio.svg', // ilustración de referencia, reemplazable por captura real
    ogImage: '/og/portafolio/plataforma-academica-colegio.png',
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
    metrics: [], // ⚠️ agregar cifras reales cuando estén disponibles
    image: 'from-navy to-accent-600',
    imageAlt: 'Arquitectura de nube escalable en Microsoft Azure',
    cover: '/portafolio/migracion-azure-saas.svg', // ilustración de referencia, reemplazable por captura real
    ogImage: '/og/portafolio/migracion-azure-saas.png',
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

export const featuredCaseStudies = caseStudies.slice(0, 3)
