<script setup lang="ts">
import { AlertCircle, Lightbulb, TrendingUp, ArrowRight } from 'lucide-vue-next'
import { caseStudies, getCaseStudyBySlug } from '~/data/portfolio'
import { getServiceBySlug } from '~/data/services'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const caseStudy = computed(() => getCaseStudyBySlug(slug.value))

if (!caseStudy.value) {
  throw createError({ statusCode: 404, statusMessage: 'Caso no encontrado', fatal: true })
}

const current = caseStudy.value
const relatedService = computed(() => getServiceBySlug(current.serviceSlug))
const otherCases = caseStudies.filter((c) => c.slug !== current.slug).slice(0, 3)

useSeo({
  title: current.title,
  description: current.summary,
  path: `/portafolio/${current.slug}`,
  type: 'article',
})

const blocks = [
  { key: 'problem', label: 'Problema', icon: AlertCircle, text: current.problem, color: 'text-rose-600 bg-rose-50' },
  { key: 'solution', label: 'Solución', icon: Lightbulb, text: current.solution, color: 'text-brand-600 bg-brand-50' },
  { key: 'result', label: 'Resultado', icon: TrendingUp, text: current.result, color: 'text-emerald-600 bg-emerald-50' },
]
</script>

<template>
  <div v-if="caseStudy">
    <PageHero :eyebrow="current.industry" :title="current.title" :subtitle="current.summary">
      <template #breadcrumbs>
        <div class="mb-5">
          <Breadcrumbs
            light
            :items="[
              { label: 'Inicio', to: '/' },
              { label: 'Portafolio', to: '/portafolio' },
              { label: current.industry },
            ]"
          />
        </div>
      </template>
    </PageHero>

    <section class="section bg-white">
      <div class="container max-w-5xl">
        <!-- Imagen / placeholder de marca -->
        <div
          class="aspect-[21/9] w-full rounded-2xl bg-gradient-to-br"
          :class="current.image"
          role="img"
          :aria-label="current.imageAlt"
        />

        <!-- Métricas -->
        <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div
            v-for="metric in current.metrics"
            :key="metric.label"
            class="rounded-xl border border-slate-100 bg-slate-50 p-5 text-center"
          >
            <p class="text-3xl font-extrabold text-brand-600">{{ metric.value }}</p>
            <p class="mt-1 text-xs text-slate-500">{{ metric.label }}</p>
          </div>
        </div>

        <!-- Problema → Solución → Resultado -->
        <div class="mt-12 space-y-8">
          <div v-for="block in blocks" :key="block.key" v-reveal class="flex gap-5">
            <span
              class="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
              :class="block.color"
            >
              <component :is="block.icon" class="h-6 w-6" />
            </span>
            <div>
              <h2 class="text-xl font-bold text-navy">{{ block.label }}</h2>
              <p class="mt-2 leading-relaxed text-slate-600">{{ block.text }}</p>
            </div>
          </div>
        </div>

        <!-- Servicio relacionado -->
        <div
          v-if="relatedService"
          class="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:flex-row sm:items-center"
        >
          <div>
            <p class="text-sm text-slate-500">Servicio aplicado</p>
            <p class="text-lg font-bold text-navy">{{ relatedService.category }}</p>
          </div>
          <NuxtLink :to="`/servicios/${relatedService.slug}`" class="btn-outline">
            Conocer el servicio
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Otros casos -->
    <section class="section bg-slate-50">
      <div class="container">
        <SectionHeading align="left" eyebrow="Más proyectos" title="Otros casos de éxito" />
        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CaseStudyCard v-for="item in otherCases" :key="item.slug" :case-study="item" />
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
