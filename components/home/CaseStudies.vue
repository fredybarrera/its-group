<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { featuredCaseStudies } from '~/data/portfolio'
</script>

<template>
  <section class="section bg-white">
    <div class="container">
      <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow="Casos de éxito"
          title="Resultados que hablan por nosotros"
          subtitle="Proyectos reales donde la tecnología generó impacto medible."
        />
        <NuxtLink
          to="/portafolio"
          class="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-accent-600 sm:inline-flex"
        >
          Ver portafolio
          <ArrowRight class="h-4 w-4" />
        </NuxtLink>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(item, i) in featuredCaseStudies" :key="item.slug" v-reveal="i * 80">
          <CaseStudyCard :case-study="item" />
        </div>
      </div>
    </div>
  </section>
</template>
