<script setup lang="ts">
import { ArrowRight, Check, Building2, Cpu, MonitorPlay } from 'lucide-vue-next'
import { services, getServiceBySlug } from '~/data/services'
import { site } from '~/data/site'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const service = computed(() => getServiceBySlug(slug.value))

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: 'Servicio no encontrado', fatal: true })
}

const current = service.value
const otherServices = services.filter((s) => s.slug !== current.slug).slice(0, 3)

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl.replace(/\/$/, '')

useSeo({
  title: `${current.title} | ${current.keyword}`,
  description: current.shortDescription,
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
        provider: {
          '@type': 'Organization',
          name: site.name,
          url: siteUrl,
        },
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
        <a
          v-if="current.demoUrl"
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
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
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
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
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
                <Cpu class="h-3.5 w-3.5 text-brand-600" />
                {{ tech }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Otros servicios -->
    <section class="section bg-white">
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
