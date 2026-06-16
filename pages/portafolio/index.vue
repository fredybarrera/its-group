<script setup lang="ts">
import { caseStudies } from '~/data/portfolio'
import { services } from '~/data/services'

useSeo({
  title: 'Portafolio de casos de éxito',
  description:
    'Casos de éxito de IT Solutions Group en GIS/ArcGIS, sistemas de gestión, soluciones en terreno, educación y cloud Azure. Problema, solución y resultado.',
  path: '/portafolio',
})

const industries = computed(() => ['Todas', ...new Set(caseStudies.map((c) => c.industry))])
const serviceOptions = computed(() => [
  { slug: 'todos', label: 'Todos' },
  ...services.map((s) => ({ slug: s.slug, label: s.category })),
])

const activeIndustry = ref('Todas')
const activeService = ref('todos')

const filtered = computed(() =>
  caseStudies.filter((c) => {
    const byIndustry = activeIndustry.value === 'Todas' || c.industry === activeIndustry.value
    const byService = activeService.value === 'todos' || c.serviceSlug === activeService.value
    return byIndustry && byService
  }),
)
</script>

<template>
  <div>
    <PageHero
      eyebrow="Portafolio"
      title="Casos de éxito con impacto medible"
      subtitle="Proyectos reales estructurados en problema, solución y resultado. Filtra por industria o tipo de servicio."
    />

    <section class="section bg-white">
      <div class="container">
        <!-- Filtros -->
        <div class="flex flex-col gap-5">
          <div>
            <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Industria
            </p>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="industry in industries"
                :key="industry"
                type="button"
                class="rounded-full border px-4 py-1.5 text-sm font-medium transition-colors"
                :class="
                  activeIndustry === industry
                    ? 'border-brand-600 bg-brand-600 text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-brand-300'
                "
                @click="activeIndustry = industry"
              >
                {{ industry }}
              </button>
            </div>
          </div>

          <div>
            <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Servicio
            </p>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="option in serviceOptions"
                :key="option.slug"
                type="button"
                class="rounded-full border px-4 py-1.5 text-sm font-medium transition-colors"
                :class="
                  activeService === option.slug
                    ? 'border-accent-600 bg-accent-600 text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-accent-300'
                "
                @click="activeService = option.slug"
              >
                {{ option.label }}
              </button>
            </div>
          </div>
        </div>

        <!-- Grilla -->
        <div v-if="filtered.length" class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CaseStudyCard v-for="item in filtered" :key="item.slug" :case-study="item" />
        </div>
        <p v-else class="mt-12 rounded-xl border border-dashed border-slate-200 p-10 text-center text-slate-500">
          No hay casos que coincidan con los filtros seleccionados.
        </p>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
