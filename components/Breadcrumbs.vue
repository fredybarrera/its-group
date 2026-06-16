<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'

interface Crumb {
  label: string
  to?: string
}

const props = defineProps<{ items: Crumb[]; light?: boolean }>()

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl.replace(/\/$/, '')

// Datos estructurados BreadcrumbList (Schema.org) para SEO.
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: props.items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.label,
          ...(item.to ? { item: `${siteUrl}${item.to}` } : {}),
        })),
      }),
    },
  ],
})
</script>

<template>
  <nav aria-label="Migas de pan">
    <ol class="flex flex-wrap items-center gap-1.5 text-sm">
      <li
        v-for="(item, i) in items"
        :key="i"
        class="flex items-center gap-1.5"
        :class="light ? 'text-slate-300' : 'text-slate-500'"
      >
        <NuxtLink
          v-if="item.to"
          :to="item.to"
          class="transition-colors"
          :class="light ? 'hover:text-accent-300' : 'hover:text-brand-600'"
        >
          {{ item.label }}
        </NuxtLink>
        <span v-else :class="light ? 'font-medium text-white' : 'font-medium text-navy'">
          {{ item.label }}
        </span>
        <ChevronRight v-if="i < items.length - 1" class="h-4 w-4 opacity-60" />
      </li>
    </ol>
  </nav>
</template>
