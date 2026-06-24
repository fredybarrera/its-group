<script setup lang="ts">
import { ArrowRight, CalendarCheck } from 'lucide-vue-next'

withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
  }>(),
  {
    title: '¿Tienes un proyecto en mente?',
    subtitle:
      'Cuéntanos tu desafío. Devolvemos una propuesta clara en 48 horas, sin compromiso.',
  },
)
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="relative overflow-hidden rounded-2xl bg-navy">

        <!-- Isolíneas topográficas — coherencia con la firma visual del Hero -->
        <div class="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true">
          <svg class="h-full w-full" viewBox="0 0 900 300" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <path d="M-50,150 C100,80 250,200 400,130 S650,50 800,120 S950,180 1050,100" stroke="#10b981" stroke-width="1" fill="none" />
            <path d="M-50,180 C80,110 230,230 380,160 S630,80 780,150 S930,210 1050,130" stroke="#10b981" stroke-width="1" fill="none" />
            <path d="M-50,210 C60,140 210,260 360,190 S610,110 760,180 S910,240 1050,160" stroke="#10b981" stroke-width="0.6" fill="none" />
            <path d="M-50,120 C120,50 270,170 420,100 S670,20 820,90 S970,150 1050,70" stroke="#10b981" stroke-width="0.6" fill="none" />
            <circle cx="400" cy="130" r="3" fill="#f59e0b" opacity="0.4" />
            <circle cx="400" cy="130" r="9" stroke="#f59e0b" stroke-width="0.5" fill="none" opacity="0.25" />
          </svg>
        </div>

        <!-- Layout asimétrico: texto izquierda / acciones derecha -->
        <div class="relative grid gap-8 px-8 py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:px-14">
          <div>
            <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-600">
              // siguiente paso
            </span>
            <h2 class="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
              {{ title }}
            </h2>
            <p class="mt-3 max-w-lg text-slate-400">{{ subtitle }}</p>
          </div>

          <div class="flex shrink-0 flex-col gap-3">
            <NuxtLink
              to="/contacto"
              class="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-900/40 transition-all hover:bg-brand-500"
            >
              Pide tu cotización
              <ArrowRight class="h-4 w-4" />
            </NuxtLink>
            <NuxtLink
              to="/contacto#agendar"
              class="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-7 py-3.5 text-sm font-semibold text-slate-300 transition-all hover:border-white/30 hover:text-white"
            >
              <CalendarCheck class="h-4 w-4 text-accent-400" />
              Agendar reunión
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
