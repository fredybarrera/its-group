<script setup lang="ts">
import { BadgeCheck } from 'lucide-vue-next'

withDefaults(defineProps<{ dark?: boolean }>(), { dark: false })

// Certificaciones y alianzas clave de la empresa.
const certifications = [
  { name: 'Esri Partner', detail: 'Partner oficial ArcGIS Chile' },
  { name: 'Microsoft Azure', detail: 'Especialistas en servicios cloud' },
  { name: 'Software a medida', detail: 'Experiencia multi-industria' },
]
</script>

<template>
  <div
    class="grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-3"
    :class="dark ? 'border-white/10 bg-white/10' : 'border-slate-200 bg-slate-200'"
  >
    <div
      v-for="cert in certifications"
      :key="cert.name"
      class="flex items-center gap-3 px-5 py-4"
      :class="dark ? 'bg-navy' : 'bg-white'"
    >
      <BadgeCheck class="h-7 w-7 shrink-0 text-accent-500" />
      <div>
        <p class="font-bold leading-tight" :class="dark ? 'text-white' : 'text-navy'">
          {{ cert.name }}
        </p>
        <p class="text-xs" :class="dark ? 'text-slate-400' : 'text-slate-500'">
          {{ cert.detail }}
        </p>
      </div>
    </div>
  </div>
</template>
