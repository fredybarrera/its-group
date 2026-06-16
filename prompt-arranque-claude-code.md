```
Vas a construir un sitio web corporativo B2B para una empresa chilena de desarrollo
de software. Antes de empezar, lee estos dos archivos del proyecto:

  1. CLAUDE.md — convenciones, contexto de la empresa y reglas obligatorias.
  2. prompt-web-empresa-software.md — especificación completa de páginas, diseño y SEO.

═══════════════════════════════════════════════════════════
STACK TÉCNICO (usar exactamente este)
═══════════════════════════════════════════════════════════

- Nuxt 3 (framework de Vue con SSR/SSG, imprescindible para el SEO del sitio)
- Vue 3 con Composition API y <script setup lang="ts">
- TypeScript en modo estricto
- Tailwind CSS (módulo @nuxtjs/tailwindcss)
- Routing basado en archivos (pages/) nativo de Nuxt
- Pinia (@pinia/nuxt) SOLO si realmente se necesita estado compartido
- @nuxt/content para el blog (artículos en Markdown)
- @nuxt/image para optimización de imágenes
- Iconos con lucide-vue-next o nuxt-icon
- ESLint + Prettier configurados desde el inicio

No agregues dependencias fuera de esta lista sin proponerlo y justificarlo primero.

═══════════════════════════════════════════════════════════
DESPLIEGUE (Azure Static Web Apps + GitHub Actions)
═══════════════════════════════════════════════════════════

El sitio se desplegará en Azure Static Web Apps mediante GitHub Actions, con
despliegue continuo en cada push a la rama principal.

- Usa el preset `azure` de Nitro (Nuxt lo activa automáticamente al construir en
  el entorno de GitHub Actions). Nitro genera por sí mismo el archivo
  staticwebapp.config.json al construir con este preset.
- Configuración de rutas para el workflow de Azure:
    app_location:    "/"
    api_location:    ".output/server"
    output_location: ".output/public"
- Optimiza el sitio para máximo SEO y rendimiento: marca como prerenderizadas las
  páginas estáticas (Home, servicios, nosotros, blog) usando routeRules /
  nitro.prerender en nuxt.config, de modo que se sirvan como HTML estático.
- Si el formulario de contacto necesita backend, impleméntalo como server route de
  Nuxt (se desplegará como Azure Function automáticamente); de lo contrario, deja
  el envío preparado para un servicio externo.

REGLAS DE DESPLIEGUE (importante):
- Crea el archivo de workflow de GitHub Actions en
  .github/workflows/azure-static-web-apps.yml usando la acción
  Azure/static-web-apps-deploy@v1 con las rutas indicadas arriba.
- El token AZURE_STATIC_WEB_APPS_API_TOKEN debe referenciarse como secreto del
  repositorio: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}.
- NO incluyas tokens, claves ni credenciales en el código ni en el workflow.
  Yo crearé el recurso de Azure Static Web Apps y configuraré el secreto en GitHub.
- NO hagas push ni despliegues por tu cuenta. Solo deja los archivos listos.
- Incluye un README con los pasos para que yo cree el recurso en Azure, conecte el
  repo y configure el secreto.

═══════════════════════════════════════════════════════════
BUENAS PRÁCTICAS DE DESARROLLO (obligatorias)
═══════════════════════════════════════════════════════════

- Composition API siempre, con <script setup lang="ts">. Nada de Options API.
- Tipa props, emits y composables. Evita `any`.
- Extrae lógica reutilizable a composables (carpeta composables/, prefijo use...).
- Un componente por archivo, nombres en PascalCase, responsabilidad única.
- Componentes pequeños y enfocados; evita duplicación.
- Usa los layouts de Nuxt (layouts/) para header/footer comunes.
- SEO por página con useSeoMeta() / useHead(): title, description, Open Graph.
- HTML semántico y accesible: encabezados jerárquicos, alt en imágenes, foco y
  navegación por teclado, contraste suficiente.
- Imágenes siempre vía <NuxtImg> con alt descriptivo.
- Datos estructurados Schema.org (Organization, LocalBusiness, Service).
- Genera sitemap.xml y robots.txt.
- Centraliza textos visibles para facilitar una futura versión en inglés.
- Estructura de carpetas clara: pages/, components/ (por dominio), composables/,
  layouts/, assets/, public/, content/ (blog), types/.
- Mantén el proyecto compilable: corre `npm run lint` y `npm run build` antes de
  dar cualquier fase por terminada y corrige los errores.

═══════════════════════════════════════════════════════════
PLAN DE TRABAJO POR FASES
═══════════════════════════════════════════════════════════

Trabaja por fases. Al terminar cada una, deja el proyecto funcional y compilable,
y haz una pausa para que yo revise antes de seguir.

FASE 0 — Setup
  - Inicializa el proyecto Nuxt 3 con TypeScript.
  - Configura Tailwind, ESLint, Prettier y los módulos del stack.
  - Define los tokens de color/tipografía de la marca en la config de Tailwind.
  - Crea el layout base (header con navegación + footer) y el botón flotante de WhatsApp.

FASE 1 — Página de Inicio
  - Construye la Home completa según la especificación: hero con propuesta de valor
    y CTAs, banda de certificaciones (Esri Partner, Azure), métricas, resumen de las
    6 categorías de servicios, casos de éxito, testimonios y CTA final.

FASE 2 — Servicios
  - Página índice /servicios y una plantilla reutilizable para /servicios/[slug]
    con las 6 categorías (gestión, industrial, GIS/ArcGIS, educación, cloud/Azure,
    consultoría TI). Cada una con beneficios, casos de uso y CTA.

FASE 3 — Portafolio, Nosotros, Blog y Contacto
  - Portafolio filtrable (Problema → Solución → Resultado).
  - Nosotros (certificaciones, equipo, metodología).
  - Blog con @nuxt/content (listado + artículo individual).
  - Contacto con formulario inteligente por tipo de servicio + agendar reunión.

FASE 4 — SEO técnico y rendimiento
  - Metadatos por página, Schema.org, sitemap, robots, optimización de imágenes,
    revisión de accesibilidad y rendimiento.
  - Configura el prerenderizado de las páginas estáticas (routeRules / nitro.prerender).

FASE 5 — Despliegue (Azure Static Web Apps + GitHub Actions)
  - Configura el preset `azure` de Nitro y verifica el build local
    (NITRO_PRESET=azure npm run build → debe generar .output/public y .output/server).
  - Crea el workflow .github/workflows/azure-static-web-apps.yml con
    Azure/static-web-apps-deploy@v1 y las rutas app_location "/",
    api_location ".output/server", output_location ".output/public".
  - Referencia el token como secreto ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}.
  - Crea un README con los pasos para que yo cree el recurso en Azure, conecte el
    repositorio de GitHub y configure el secreto. NO despliegues tú.

═══════════════════════════════════════════════════════════
EMPECEMOS
═══════════════════════════════════════════════════════════

Comienza por la FASE 0. Primero muéstrame brevemente la estructura de carpetas
propuesta y la paleta/tipografía que usarás. Espera mi visto bueno antes de
ejecutar comandos o instalar dependencias.
```
