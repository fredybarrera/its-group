<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
import type { Testimonial } from '~/types/content'

defineProps<{ testimonial: Testimonial }>()
</script>

<template>
  <figure class="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
    <Quote class="h-8 w-8 text-accent-400" />
    <blockquote class="mt-4 flex-1 text-slate-700">
      <p class="leading-relaxed">“{{ testimonial.quote }}”</p>
    </blockquote>
    <figcaption class="mt-6 border-t border-slate-100 pt-4">
      <p class="font-semibold text-navy">{{ testimonial.author }}</p>
      <p class="text-sm text-slate-500">{{ testimonial.role }} · {{ testimonial.company }}</p>
    </figcaption>
  </figure>
</template>
