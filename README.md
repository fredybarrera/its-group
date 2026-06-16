# IT Solutions Group — Sitio web corporativo

Sitio web B2B de IT Solutions Group, empresa chilena de desarrollo de software a
medida y consultoría TI. Construido con **Nuxt 3** y optimizado para SEO y para
despliegue en **Azure Static Web Apps**.

## Stack

- [Nuxt 3](https://nuxt.com) (Vue 3, SSR/SSG) + TypeScript estricto
- Tailwind CSS (`@nuxtjs/tailwindcss`)
- `@nuxt/content` (blog en Markdown), `@nuxt/image`, `@nuxt/eslint`
- Iconos con `lucide-vue-next`
- ESLint + Prettier

## Requisitos

- Node.js 20 LTS o superior y npm.

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo (http://localhost:3000)
npm run build      # build de producción
npm run preview    # previsualizar el build
npm run lint       # linter
npm run lint:fix   # linter con autofix

# Build con el preset de Azure (genera .output/public y .output/server)
# (en CI se activa solo vía la variable NITRO_PRESET=azure)
```

## Estructura

```
assets/css/        Estilos base y clases de componentes (Tailwind)
components/         Componentes reutilizables (header, footer, tarjetas, formulario…)
  home/            Secciones específicas de la Home
composables/        useSeo() — metadatos SEO centralizados
content/blog/       Artículos del blog en Markdown (@nuxt/content)
data/               ⚠️ CONTENIDO EDITABLE: textos centralizados (ver abajo)
layouts/            Layout principal
pages/              Rutas (file-based)
plugins/            Directiva v-reveal (animación al hacer scroll)
public/             Estáticos: favicon, og-image, robots.txt, staticwebapp.config.json
server/             API del formulario (/api/contact) y /sitemap.xml
types/              Tipos del contenido
```

## Dónde editar el contenido

Todo el texto está centralizado (preparado para una futura versión en inglés). El
contenido de ejemplo está marcado con `⚠️` para facilitar su reemplazo:

- `data/site.ts` — nombre, datos de contacto, WhatsApp, dirección, navegación, métricas.
- `data/services.ts` — las 6 categorías de servicios y su detalle.
- `data/portfolio.ts` — casos de éxito (Problema → Solución → Resultado).
- `data/testimonials.ts` — testimonios.
- `data/team.ts` — equipo y metodología.
- `content/blog/*.md` — artículos del blog.

Las imágenes hoy usan **placeholders de marca** (degradados). Reemplázalas por
imágenes reales usando `<NuxtImg>` (`@nuxt/image`) con `alt` descriptivo.

## SEO

- Metadatos por página vía `useSeo()` (title, description, canonical, Open Graph).
- Datos estructurados Schema.org: Organization (global), Service, BreadcrumbList, Article.
- `sitemap.xml` (generado en `server/routes/sitemap.xml.ts`) y `robots.txt`.
- Páginas estáticas prerenderizadas (`routeRules` en `nuxt.config.ts`).

Ajusta la URL pública en producción con la variable `NUXT_PUBLIC_SITE_URL`
(ver `.env.example`).

## Variables de entorno

Copia `.env.example` a `.env` para desarrollo. En producción (Azure SWA) configúralas
como **Application settings** del recurso (Configuration → Application settings).

| Variable | Uso |
|---|---|
| `NUXT_PUBLIC_SITE_URL` | URL pública (canonical, OG, sitemap). Producción: `https://itsgroup.dev` |
| `NUXT_PUBLIC_CALENDLY_URL` | Enlace de tu evento de Calendly (embebe el widget en `/contacto#agendar`) |
| `NUXT_RESEND_API_KEY` | Clave de API de Resend para enviar el formulario (privada) |
| `NUXT_CONTACT_TO_EMAIL` | Correo que recibe las solicitudes del formulario |
| `NUXT_CONTACT_FROM_EMAIL` | Remitente; debe pertenecer a un dominio verificado en Resend |

### Formulario de contacto (Resend)

El endpoint `POST /api/contact` valida los datos y envía el correo vía
[Resend](https://resend.com) (sin dependencias npm adicionales, usa `$fetch`).
Para activarlo:

1. Crea una cuenta en Resend y **verifica el dominio `itsgroup.dev`** agregando
   los registros DNS que indica Resend en tu panel de **Squarespace**.
2. Genera una API key y configúrala como `NUXT_RESEND_API_KEY`.
3. Define `NUXT_CONTACT_TO_EMAIL` (destino) y `NUXT_CONTACT_FROM_EMAIL` (remitente
   del dominio verificado).

Sin clave configurada el formulario valida y responde con éxito pero **no envía**
(modo desarrollo). Incluye honeypot anti-spam y validación en servidor.

### Agendamiento (Calendly)

La sección "Agenda una reunión" (`/contacto#agendar`) embebe Calendly cuando
`NUXT_PUBLIC_CALENDLY_URL` está configurada. Sin esa variable muestra un fallback
con botones de WhatsApp y correo. Pega tu enlace (ej.
`https://calendly.com/itsgroup/30min`).

## Despliegue (Azure Static Web Apps)

El workflow `.github/workflows/azure-static-web-apps.yml` construye y despliega en
cada push a `main`.

1. Crea el recurso de Azure Static Web Apps.
2. Agrega el secreto del repositorio `AZURE_STATIC_WEB_APPS_API_TOKEN`.
3. Configura las variables de entorno (Resend, Calendly, site URL) como
   **Application settings** del recurso (ver tabla arriba).
4. Apunta el dominio `itsgroup.dev` (comprado en Squarespace) al recurso de Azure
   SWA siguiendo *Custom domains* (registros DNS en Squarespace).
5. Haz push a `main`.

Rutas del workflow: `app_location: "/"`, `api_location: ".output/server"`,
`output_location: ".output/public"`. El formulario de contacto se despliega como
Azure Function (`/api/contact`).

> **Pendiente de tu parte:** crear las cuentas de Resend y Calendly, verificar el
> dominio en Resend (DNS en Squarespace) y cargar las variables de entorno. El
> código del formulario (Resend) y del agendamiento (Calendly) ya está implementado.
