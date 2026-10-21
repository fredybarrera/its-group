<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import type { CaseStudy } from '~/types/content'

defineProps<{ caseStudy: CaseStudy }>()
</script>

<template>
  <NuxtLink
    :to="`/portafolio/${caseStudy.slug}`"
    class="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <!-- Placeholder de marca cuando el caso no tiene imagen real -->
    <div
      class="relative aspect-[1200/630] overflow-hidden bg-gradient-to-br"
      :class="caseStudy.image"
      :role="caseStudy.cover ? undefined : 'img'"
      :aria-label="caseStudy.cover ? undefined : caseStudy.imageAlt"
    >
      <NuxtImg
        v-if="caseStudy.cover"
        :src="caseStudy.cover"
        :srcset="coverSrcset(caseStudy.cover)"
        sizes="100vw md:50vw lg:380px"
        width="1200"
        height="630"
        :alt="caseStudy.imageAlt"
        class="h-full w-full object-cover"
        loading="lazy"
      />
      <span
        class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy"
      >
        {{ caseStudy.industry }}
      </span>
    </div>
    <div class="flex flex-1 flex-col p-6">
      <h3 class="text-lg font-bold text-navy">{{ caseStudy.title }}</h3>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{{ caseStudy.summary }}</p>
      <div v-if="caseStudy.metrics.length" class="mt-5 flex items-center gap-5">
        <div v-for="metric in caseStudy.metrics" :key="metric.label">
          <p class="text-xl font-extrabold text-brand-700">{{ metric.value }}</p>
          <p class="text-xs text-slate-500">{{ metric.label }}</p>
        </div>
      </div>
      <span
        class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition-colors group-hover:text-accent-700"
      >
        Ver caso de éxito
        <ArrowUpRight class="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </div>
  </NuxtLink>
</template>
