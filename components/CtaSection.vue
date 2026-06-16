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
      'Conversemos sobre tu desafío. Te entregamos una propuesta clara, sin compromiso, con foco en resultados de negocio.',
  },
)
</script>

<template>
  <section class="section">
    <div class="container">
      <div
        class="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 text-center sm:px-12 lg:py-20"
      >
        <!-- Decoración sutil -->
        <div
          class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          class="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl"
          aria-hidden="true"
        />
        <div class="relative mx-auto max-w-2xl">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">{{ title }}</h2>
          <p class="mt-4 text-lg text-slate-300">{{ subtitle }}</p>
          <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <NuxtLink to="/contacto" class="btn-accent w-full sm:w-auto">
              Cotiza tu proyecto
              <ArrowRight class="h-5 w-5" />
            </NuxtLink>
            <NuxtLink
              to="/contacto#agendar"
              class="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              <CalendarCheck class="h-5 w-5" />
              Agenda una reunión
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
