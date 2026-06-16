# CLAUDE.md

Este archivo define el contexto y las convenciones del proyecto. Léelo al inicio
de cada sesión y respeta estas reglas en todo el código que generes.

---

## Sobre el proyecto

Sitio web corporativo B2B para IT Solutions Group, una empresa chilena de
desarrollo de software y consultoría tecnológica.

**Objetivo del sitio:** generar confianza y captar clientes B2B (gerentes de TI,
jefes de operaciones, directores, municipios, instituciones educativas). La
conversión principal es **solicitar cotización** o **agendar una reunión**.

**Diferenciadores que deben destacar siempre:**
- Partner oficial de Esri Chile (tecnología ArcGIS / GIS)
- Especialistas en servicios cloud Microsoft Azure
- Experiencia multi-industria en software a medida

**Servicios (organizados en 6 categorías):**
1. Sistemas de Gestión — ERP, control de activos, control de bodega
2. Soluciones Industriales — control y seguimiento, reportes en terreno
3. Tecnología GIS / ArcGIS — mapas interactivos, análisis espacial, dashboards
4. Aplicaciones Educativas — gestión de cursos, clases, evaluaciones, asistencia
5. Cloud & Infraestructura — asesoría e implementación de Azure
6. Consultoría TI — asesoría informática general, auditoría, soporte

---

## Stack técnico

- **Framework:** Nuxt 3 (Vue 3 con SSR/SSG, necesario para el SEO del sitio)
- **Lenguaje:** TypeScript (modo estricto)
- **API de componentes:** Composition API con `<script setup lang="ts">` (nunca Options API)
- **Estilos:** Tailwind CSS (`@nuxtjs/tailwindcss`)
- **Ruteo:** basado en archivos (`pages/`), nativo de Nuxt
- **Estado:** Pinia (`@pinia/nuxt`) solo si se necesita estado compartido
- **Blog:** `@nuxt/content` (artículos en Markdown)
- **Imágenes:** `@nuxt/image` (`<NuxtImg>`)
- **Iconos:** lucide-vue-next o nuxt-icon
- **Calidad:** ESLint + Prettier configurados desde el inicio
- **Gestor de paquetes:** npm
- **Despliegue objetivo:** Azure Static Web Apps con GitHub Actions (preset `azure` de Nitro)

> No agregues dependencias fuera de esta lista sin proponerlo y justificarlo primero.
> Prioriza soluciones nativas de Nuxt/Vue.

---

## Convenciones de código

- TypeScript estricto: tipa props y funciones, evita `any`.
- Componentes funcionales con nombres en PascalCase, archivos coherentes con el componente.
- Un componente por archivo. Componentes reutilizables en `components/`.
- Estilos solo con clases utilitarias de Tailwind; evita CSS suelto salvo casos justificados.
- Mantén los componentes pequeños y enfocados; extrae lógica repetida.
- Comenta solo lo no obvio; el código debe ser autoexplicativo.
- Nada de `console.log` en el código final.

---

## Idioma y contenido

- **Todo el texto visible para el usuario va en español (Chile).**
- Estructura el proyecto pensando en una futura versión en inglés (textos centralizados, no hardcodeados de forma dispersa).
- Tono de los textos: profesional, claro, orientado a beneficios del cliente. Evita jerga técnica innecesaria en las páginas comerciales.
- Usa contenido de ejemplo realista y coherente con el rubro (no "Lorem ipsum"); márcalo claramente para que sea fácil de reemplazar.

---

## Estructura de páginas

- `/` — Inicio (hero, propuesta de valor, certificaciones, servicios resumidos, casos de éxito, testimonios, CTA)
- `/servicios` — Índice de servicios
- `/servicios/[slug]` — Página individual por servicio (6 en total)
- `/portafolio` — Casos de éxito filtrables (Problema → Solución → Resultado)
- `/nosotros` — Empresa, certificaciones, equipo, metodología
- `/blog` y `/blog/[slug]` — Centro de conocimiento
- `/contacto` — Formulario inteligente + agendar reunión + WhatsApp

URLs siempre semánticas y en español (ej. `/servicios/gis-arcgis`).

---

## SEO y rendimiento (obligatorio)

- Metadatos por página con `useSeoMeta()` / `useHead()` de Nuxt: `title`, `description`, Open Graph.
- Datos estructurados Schema.org (Organization, LocalBusiness, Service).
- Imágenes optimizadas con `<NuxtImg>` (`@nuxt/image`) y `alt` descriptivo siempre.
- `sitemap.xml` y `robots.txt`.
- Mobile-first y totalmente responsive.
- Accesibilidad básica: contraste suficiente, navegación por teclado, etiquetas semánticas.

**Palabras clave a integrar naturalmente:** desarrollo de software a medida Chile,
consultoría ArcGIS Chile, soluciones GIS, sistemas de gestión empresarial,
asesoría Azure Chile, aplicaciones educativas, consultoría informática.

---

## Diseño

- Estética moderna, profesional y tecnológica. Evita verse como plantilla genérica.
- Paleta: [DEFINIR COLORES DE MARCA / HEX]. Mantén consistencia vía tokens de Tailwind.
- Jerarquía tipográfica clara, espaciado generoso, contenido escaneable.
- Animaciones sutiles al hacer scroll y microinteracciones; sin sobrecargar.

---

## Despliegue (Azure Static Web Apps + GitHub Actions)

- El sitio se despliega en **Azure Static Web Apps** vía **GitHub Actions** (push a la rama principal).
- Usa el preset `azure` de Nitro (Nuxt lo activa solo en el entorno de GitHub Actions). Nitro genera `staticwebapp.config.json` automáticamente con este preset.
- Rutas del workflow: `app_location: "/"`, `api_location: ".output/server"`, `output_location: ".output/public"`.
- Workflow en `.github/workflows/azure-static-web-apps.yml` con la acción `Azure/static-web-apps-deploy@v1`.
- El token va como secreto del repo: `${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}`. **Nunca** en el código.
- Prerenderiza las páginas estáticas (`routeRules` / `nitro.prerender`) para SEO y velocidad.
- Las server routes de Nuxt se despliegan como Azure Functions; úsalas solo si hace falta backend (p. ej. el formulario).

> El recurso de Azure y la configuración del secreto los hace la persona, no tú. No hagas push ni despliegues por tu cuenta.

---

## Comandos del proyecto

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo
npm run build      # build de producción
npm run lint       # linter

# Build con el preset de Azure (genera .output/public y .output/server)
NITRO_PRESET=azure npm run build

# Previsualizar el build como en Azure SWA (requiere Azure Functions Core Tools)
npx @azure/static-web-apps-cli start .output/public --api-location .output/server
```

> Antes de dar una tarea por terminada, ejecuta `npm run build` y `npm run lint`
> y corrige cualquier error.

---

## Flujo de trabajo esperado

- Trabaja por fases, no todo de una vez: (1) base + Home, (2) plantilla de servicio
  + las 6 páginas, (3) portafolio/blog/contacto, (4) SEO técnico.
- Antes de cambios grandes, propón brevemente el plan y espera confirmación.
- Tras cada fase, deja el proyecto en estado funcional y compilable.

---

## Qué NO hacer

- No publiques ni despliegues nada por tu cuenta.
- No agregues claves, tokens ni credenciales al código.
- No instales dependencias pesadas sin justificar.
- No uses texto de relleno sin marcar; usa contenido de ejemplo realista y señalado.
