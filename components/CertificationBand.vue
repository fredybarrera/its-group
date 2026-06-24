<script setup lang="ts">
import { ShieldCheck, Cloud, Globe2 } from 'lucide-vue-next'

withDefaults(defineProps<{ dark?: boolean }>(), { dark: false })

const certifications = [
  {
    icon: Globe2,
    name: 'Esri Partner',
    detail: 'Partner oficial ArcGIS Chile',
    tag: 'GIS',
    iconColor: 'text-brand-500',
    tagColor: 'bg-brand-50 text-brand-700',
    tagColorDark: 'bg-brand-500/10 text-brand-300',
  },
  {
    icon: Cloud,
    name: 'Microsoft Azure',
    detail: 'Especialistas en servicios cloud',
    tag: 'Cloud',
    iconColor: 'text-accent-500',
    tagColor: 'bg-accent-50 text-accent-700',
    tagColorDark: 'bg-accent-500/10 text-accent-300',
  },
  {
    icon: ShieldCheck,
    name: 'Software a medida',
    detail: 'Experiencia multi-industria',
    tag: 'Dev',
    iconColor: 'text-brand-500',
    tagColor: 'bg-brand-50 text-brand-700',
    tagColorDark: 'bg-brand-500/10 text-brand-300',
  },
]
</script>

<template>
  <div
    class="grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-3"
    :class="dark ? 'border-white/10 bg-white/10' : 'border-slate-100 bg-slate-100'"
  >
    <div
      v-for="cert in certifications"
      :key="cert.name"
      class="flex items-center gap-4 px-6 py-5"
      :class="dark ? 'bg-navy' : 'bg-white'"
    >
      <div
        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
        :class="dark ? 'bg-white/5' : 'bg-slate-50'"
      >
        <component :is="cert.icon" class="h-5 w-5" :class="cert.iconColor" />
      </div>
      <div class="min-w-0">
        <div class="flex items-center gap-2">
          <p class="font-semibold leading-tight" :class="dark ? 'text-white' : 'text-navy'">
            {{ cert.name }}
          </p>
          <span
            class="shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
            :class="dark ? cert.tagColorDark : cert.tagColor"
          >
            {{ cert.tag }}
          </span>
        </div>
        <p class="mt-0.5 text-xs" :class="dark ? 'text-slate-500' : 'text-slate-500'">
          {{ cert.detail }}
        </p>
      </div>
    </div>
  </div>
</template>
