<script setup lang="ts">
import { ArrowRight, CalendarCheck, CheckCircle2 } from 'lucide-vue-next'

const highlights = [
  'Partner oficial de Esri Chile (ArcGIS)',
  'Especialistas en Microsoft Azure',
  'Software a medida multi-industria',
]
</script>

<template>
  <section class="relative overflow-hidden bg-navy">
    <!-- Fondo decorativo -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl"
      />
      <div class="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl" />
      <div
        class="absolute inset-0 opacity-[0.07]"
        style="
          background-image: linear-gradient(#fff 1px, transparent 1px),
            linear-gradient(90deg, #fff 1px, transparent 1px);
          background-size: 48px 48px;
        "
      />
    </div>

    <div class="container relative py-20 lg:py-28">
      <div class="mx-auto max-w-3xl text-center">
        <span
          class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-accent-300"
        >
          Desarrollo de software a medida · Chile
        </span>
        <h1 class="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Tecnología a la medida que
          <span class="bg-gradient-to-r from-accent-400 to-brand-300 bg-clip-text text-transparent">
            impulsa tu negocio
          </span>
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          Diseñamos, desarrollamos e implementamos soluciones de software, GIS/ArcGIS y nube Azure
          para empresas, municipios e instituciones educativas que buscan resultados concretos.
        </p>

        <div class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

        <ul class="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <li
            v-for="item in highlights"
            :key="item"
            class="inline-flex items-center gap-2 text-sm text-slate-300"
          >
            <CheckCircle2 class="h-4 w-4 text-accent-400" />
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
