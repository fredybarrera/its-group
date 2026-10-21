<script setup lang="ts">
import { ArrowRight, Check, Building2, Cpu, MonitorPlay } from 'lucide-vue-next'
import { services, getServiceBySlug } from '~/data/services'
import { caseStudies } from '~/data/portfolio'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const service = computed(() => getServiceBySlug(slug.value))

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: 'Servicio no encontrado', fatal: true })
}

const current = service.value
const otherServices = services.filter((s) => s.slug !== current.slug).slice(0, 3)
const relatedCases = caseStudies.filter((c) => c.serviceSlug === current.slug).slice(0, 3)

// Artículos que declaran este servicio en su frontmatter (`service: slug`).
const { data: relatedArticles } = await useAsyncData(`service-articles-${current.slug}`, () =>
  queryContent<{ _path: string; title: string }>('blog')
    .where({ service: current.slug })
    .only(['_path', 'title'])
    .find(),
)

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl.replace(/\/$/, '')

useSeo({
  title: current.seoTitle,
  description: current.seoDescription,
  path: `/servicios/${current.slug}`,
})

// Datos estructurados Service (Schema.org).
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: current.title,
        serviceType: current.category,
        description: current.longDescription,
        url: `${siteUrl}/servicios/${current.slug}`,
        provider: { '@id': organizationId(siteUrl) },
        areaServed: { '@type': 'Country', name: 'Chile' },
      }),
    },
  ],
})
</script>

<template>
  <div v-if="service">
    <PageHero :eyebrow="current.category" :title="current.title" :subtitle="current.longDescription">
      <template #breadcrumbs>
        <div class="mb-5">
          <Breadcrumbs
            light
            :items="[
              { label: 'Inicio', to: '/' },
              { label: 'Servicios', to: '/servicios' },
              { label: current.category },
            ]"
          />
        </div>
      </template>
      <template #actions>
        <NuxtLink to="/contacto" class="btn-accent">
          Cotiza este servicio
          <ArrowRight class="h-5 w-5" />
        </NuxtLink>
        <NuxtLink
          v-if="current.demoUrl && current.demoRequiresAccess"
          :to="demoAccessRoute(current.slug)"
          class="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
        >
          <MonitorPlay class="h-4 w-4" />
          Solicitar acceso a la demo
        </NuxtLink>
        <a
          v-else-if="current.demoUrl"
          :href="current.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
        >
          <MonitorPlay class="h-4 w-4" />
          Ver demo en vivo
        </a>
      </template>
    </PageHero>

    <!-- Beneficios -->
    <section class="section bg-white">
      <div class="container">
        <SectionHeading
          align="left"
          eyebrow="Beneficios"
          title="Qué ganas con esta solución"
        />
        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <div v-for="benefit in current.benefits" :key="benefit.title" v-reveal class="card">
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-700">
              <Check class="h-5 w-5" />
            </span>
            <h3 class="mt-4 text-lg font-bold text-navy">{{ benefit.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Casos de uso por industria + tecnologías -->
    <section class="section bg-slate-50">
      <div class="container grid gap-12 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <SectionHeading align="left" eyebrow="Casos de uso" title="Aplicaciones por industria" />
          <div class="mt-8 space-y-4">
            <div
              v-for="useCase in current.useCases"
              :key="useCase.industry"
              class="flex gap-4 rounded-xl border border-slate-100 bg-white p-5"
            >
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Building2 class="h-5 w-5" />
              </span>
              <div>
                <h3 class="font-bold text-navy">{{ useCase.industry }}</h3>
                <p class="mt-1 text-sm text-slate-600">{{ useCase.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading align="left" eyebrow="Stack" title="Tecnologías" />
          <div class="mt-8 rounded-2xl border border-slate-100 bg-white p-6">
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="tech in current.technologies"
                :key="tech"
                class="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
              >
                <Cpu class="h-3.5 w-3.5 text-brand-700" />
                {{ tech }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Enlaces internos: proyectos y artículos de este servicio -->
    <section v-if="relatedCases.length || relatedArticles?.length" class="section bg-white">
      <div class="container">
        <template v-if="relatedCases.length">
          <SectionHeading align="left" eyebrow="Portafolio" title="Proyectos con este servicio" />
          <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CaseStudyCard v-for="item in relatedCases" :key="item.slug" :case-study="item" />
          </div>
        </template>

        <div v-if="relatedArticles?.length" :class="{ 'mt-14': relatedCases.length }">
          <h2 class="text-xl font-bold text-navy">Del blog</h2>
          <ul class="mt-4 space-y-3">
            <li v-for="article in relatedArticles" :key="article._path">
              <NuxtLink
                :to="article._path"
                class="group inline-flex items-start gap-2 font-semibold text-brand-700 hover:text-accent-700"
              >
                <ArrowRight class="mt-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                {{ article.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Otros servicios -->
    <section class="section bg-slate-50">
      <div class="container">
        <SectionHeading align="left" eyebrow="Sigue explorando" title="Otros servicios" />
        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard v-for="s in otherServices" :key="s.slug" :service="s" />
        </div>
      </div>
    </section>

    <CtaSection :title="`¿Listo para avanzar con ${current.category.toLowerCase()}?`" />
  </div>
</template>
