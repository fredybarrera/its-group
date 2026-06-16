<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import type { Service } from '~/types/content'

defineProps<{ service: Service }>()
</script>

<template>
  <NuxtLink :to="`/servicios/${service.slug}`" class="card group flex flex-col">
    <span
      class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white"
    >
      <ServiceIcon :name="service.icon" class="h-6 w-6" />
    </span>
    <h3 class="mt-5 text-lg font-bold text-navy">{{ service.category }}</h3>
    <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
      {{ service.shortDescription }}
    </p>
    <span
      class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors group-hover:text-accent-600"
    >
      Ver servicio
      <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </span>
  </NuxtLink>
</template>
