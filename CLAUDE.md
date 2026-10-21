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
- Especialistas en sistemas de información geográfica (GIS) con ArcGIS de Esri (no somos Partner oficial: no usar ese término)
- Especialistas en servicios cloud Microsoft Azure
- Experiencia multi-industria en software a medida

**Servicios (organizados en 8 categorías, definidas en `data/services.ts`):**
1. Sistemas de Gestión — ERP, control de activos, control de bodega
2. Soluciones Industriales — control y seguimiento, reportes en terreno
3. Tecnología GIS / ArcGIS — mapas interactivos, análisis espacial, dashboards
4. Aplicaciones Educativas — gestión de cursos, clases, evaluaciones, asistencia
5. Cloud & Infraestructura — asesoría e implementación de Azure
6. Consultoría TI — asesoría informática general, auditoría, soporte
7. Control de Acceso Vehicular — gestión de estacionamientos (producto ParkOS)
8. Analítica de Datos — integración de fuentes, indicadores, tableros e informes

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
- **Fuentes:** `@nuxt/fonts` (Inter y Sora servidas desde el propio sitio). Fijado en 0.11.x: la 0.12+
  depende de `@nuxt/kit` 4 (Nuxt 4). No vuelvas a enlazar la hoja de Google Fonts: bloquea el render.
- **Iconos:** lucide-vue-next, importando cada ícono por nombre. Nunca `import * as icons`: envía la
  biblioteca completa (~500 KB) a cada página. Los íconos de servicios se registran en el mapa de
  `components/ServiceIcon.vue`; si un servicio usa un ícono nuevo, agrégalo ahí.
- **Calidad:** ESLint + Prettier configurados desde el inicio
- **Gestor de paquetes:** npm
- **Despliegue objetivo:** Azure Static Web Apps con GitHub Actions (preset `azure-swa` de Nitro)

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

- `/` — Inicio (hero, especialidades, servicios resumidos, casos de éxito, CTA; métricas y testimonios ocultos)
- `/servicios` — Índice de servicios
- `/servicios/[slug]` — Página individual por servicio (8 en total)
- `/portafolio` — Casos de éxito filtrables (Problema → Solución → Resultado)
- `/nosotros` — Empresa, especialidades, valores, metodología (equipo oculto)
- `/blog` y `/blog/[slug]` — Centro de conocimiento
- `/contacto` — Formulario inteligente + agendar reunión + WhatsApp

URLs siempre semánticas y en español (ej. `/servicios/gis-arcgis`).

---

## Portafolio y datos reales

- Los casos viven en `data/portfolio.ts`. Los reales van primero (los tres primeros se destacan en
  la portada); los de ejemplo quedan marcados con `⚠️` hasta reemplazarlos.
- No nombres a un cliente sin su autorización: usa el rubro ("Empresa constructora"). No inventes
  resultados ni cifras: solo las que se pueden verificar en el propio sistema o sus datos.
- Las capturas de sistemas de clientes se publican anonimizadas: pixela nombres de personas, montos,
  nombres o códigos de sitios y coordenadas.
- Demo protegida con contraseña: `liveUrlRequiresAccess` (caso) o `demoRequiresAccess` (servicio)
  cambian el botón por "Solicitar acceso a la demo", que abre `/contacto` con el formulario prellenado.
- Imágenes: `cover` en 1200×630 (SVG o WebP). Toda portada raster lleva una variante de 800 px con el
  sufijo `-800` (`parkos.webp` → `parkos-800.webp`), que `coverSrcset()` usa en el `srcset` de las
  tarjetas. `ogImage` va en PNG 1200×630 bajo `public/og/`, porque las redes sociales no muestran SVG. Mantén cada PNG bajo ~300 KB para que WhatsApp genere la vista previa.
  `public/og-image.svg` es la fuente editable de `public/og/og-image.png`; regenera el PNG si cambia.
- Métricas, testimonios y equipo están ocultos hasta tener datos reales: `sectionVisibility` en
  `data/site.ts`.

---

## SEO y rendimiento (obligatorio)

- Metadatos por página con `useSeo()` (`composables/useSeo.ts`): `title`, `description`, canonical y
  Open Graph. La plantilla de `app.vue` agrega " | IT Solutions Group" solo si el total queda en ≤ 60
  caracteres; si no, el título va sin sufijo para que Google no lo corte.
- Cada servicio tiene `seoTitle` (≤ 45 caracteres, con la palabra clave integrada de forma natural) y
  `seoDescription` (120–160 caracteres). No repitas la palabra clave en el título.
- Datos estructurados Schema.org (Organization, LocalBusiness, Service).
- Imágenes optimizadas con `<NuxtImg>` (`@nuxt/image`) y `alt` descriptivo siempre.
- `sitemap.xml` (`server/routes/sitemap.xml.ts`, sin `<lastmod>`: la fecha del build no es real) y
  `robots.txt` apuntando a `https://www.itsgroup.dev`, el dominio canónico.
- URLs sin barra final: `trailingSlash: "never"` en `public/staticwebapp.config.json` redirige `/ruta/`.
- Mobile-first y totalmente responsive.
- Accesibilidad básica: contraste AA (ver Diseño), navegación por teclado, etiquetas semánticas.
  El nombre accesible de un enlace debe contener su texto visible.
- Search Console: propiedad de dominio `itsgroup.dev`, con el sitemap enviado. Tras un cambio de
  rendimiento, mide con Lighthouse en móvil sobre producción, no solo en local.

**Palabras clave a integrar naturalmente:** desarrollo de software a medida Chile,
consultoría ArcGIS Chile, soluciones GIS, sistemas de gestión empresarial,
asesoría Azure Chile, aplicaciones educativas, consultoría informática.

---

## Diseño

- Estética moderna, profesional y tecnológica. Evita verse como plantilla genérica.
- Paleta en `tailwind.config.ts`: `brand` (esmeralda, primario), `accent` (ámbar), `navy` (`#0D1B2A`,
  fondos oscuros) e `ink`. Mantén consistencia vía esos tokens.
- Contraste AA sobre fondo claro: texto o fondo de botón verde desde `brand-700` (el `brand-600` da
  3,8:1); rótulos ámbar en `accent-700`; el botón ámbar (`btn-accent`) lleva texto `navy`, no blanco;
  textos grises desde `slate-500`. Sobre `navy`, usa los tonos claros (`brand-400`, `slate-300/400`).
- Jerarquía tipográfica clara, espaciado generoso, contenido escaneable.
- Animaciones sutiles al hacer scroll y microinteracciones; sin sobrecargar.

---

## Despliegue (Azure Static Web Apps + GitHub Actions)

- El sitio se despliega en **Azure Static Web Apps** vía **GitHub Actions** (push a la rama principal).
- Preset `azure-swa` de Nitro (fijado en `nuxt.config.ts`). El workflow compila con `npm ci` y
  `npm run build` en **Node 20 / npm 10** y luego despliega lo generado:
  `app_location: ".output/public"`, `api_location: ".output/server"`, `output_location: ""`.
- `public/staticwebapp.config.json` se copia tal cual al build: ahí van `trailingSlash`, cabeceras y la
  caché de un año (`immutable`) para `/_nuxt/*` y `/_fonts/*`, que llevan hash en el nombre.
- Si cambias dependencias, regenera el lockfile con npm 10 (`npx npm@10 install ...`): uno generado con
  npm 11 hace fallar `npm ci` en el workflow.
- Cada pull request a `main` despliega una vista previa en Azure; producción cambia con el merge.
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
>
> Si el build se queda detenido en "Building Nuxt Nitro server" después del prerender, cierra los
> `nuxi dev` que sigan vivos y borra `.nuxt` y `.output` (ambos se regeneran).

---

## Flujo de trabajo esperado

- Trabaja por fases, no todo de una vez: (1) base + Home, (2) plantilla de servicio
  + las páginas de servicio, (3) portafolio/blog/contacto, (4) SEO técnico.
- Antes de cambios grandes, propón brevemente el plan y espera confirmación.
- Tras cada fase, deja el proyecto en estado funcional y compilable.

---

## Qué NO hacer

- No publiques ni despliegues nada por tu cuenta.
- No agregues claves, tokens ni credenciales al código.
- No instales dependencias pesadas sin justificar.
- No uses texto de relleno sin marcar; usa contenido de ejemplo realista y señalado.
