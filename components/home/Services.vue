<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { services } from '~/data/services'

// Coordenadas decorativas — referencia cartográfica GIS para cada servicio
// (ficticias, son pura firma visual coherente con el mundo Esri/ArcGIS)
const coords = [
  'N 33°27\'', 'S 33°29\'', 'E 70°38\'',
  'W 70°41\'', 'N 33°31\'', 'S 33°24\'',
]
</script>

<template>
  <!--
    Layout "tabla de coordenadas": cada servicio tiene una coordenada tipográfica
    como etiqueta decorativa. La estructura convierte el grid en metáfora cartográfica,
    coherente con el diferenciador GIS/Esri de la empresa.
  -->
  <section class="section bg-white">
    <div class="container">

      <!-- Encabezado de sección — alineado a la izquierda, no centrado -->
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-600">
            // servicios
          </span>
          <h2 class="font-display mt-3 text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Seis líneas.<br />
            <span class="text-slate-400">Un solo equipo.</span>
          </h2>
        </div>
        <p class="max-w-sm text-slate-500 lg:text-right">
          Desde la gestión interna hasta inteligencia territorial y nube — cubrimos el ciclo
          tecnológico completo de tu organización.
        </p>
      </div>

      <!-- Grid con borde coordinado — la firma visual de esta sección -->
      <div class="mt-12 grid gap-px border border-slate-100 bg-slate-100 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="(service, i) in services"
          :key="service.slug"
          :to="`/servicios/${service.slug}`"
          class="group relative flex flex-col gap-4 bg-white px-6 py-8 transition-colors duration-200 hover:bg-slate-50"
        >
          <!-- Coordenada tipográfica — nod al mundo GIS -->
          <span class="font-mono text-[9px] uppercase tracking-widest text-slate-300 transition-colors group-hover:text-brand-400">
            {{ coords[i] }}
          </span>

          <!-- Ícono del servicio -->
          <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
            <ServiceIcon :name="service.icon" class="h-5 w-5" />
          </div>

          <!-- Contenido -->
          <div class="flex flex-1 flex-col">
            <p class="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              {{ service.category }}
            </p>
            <h3 class="font-display mt-1.5 text-lg font-bold text-navy group-hover:text-brand-700">
              {{ service.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-500">
              {{ service.shortDescription }}
            </p>
          </div>

          <!-- Flecha de acción -->
          <div class="flex items-center gap-1.5 text-xs font-semibold text-brand-600 opacity-0 transition-all group-hover:opacity-100">
            Ver servicio
            <ArrowRight class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>

          <!-- Línea de acento verde en hover — aparece desde abajo -->
          <span
            class="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brand-500 transition-transform duration-300 group-hover:scale-x-100"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>

      <!-- CTA inferior -->
      <div class="mt-10 flex items-center justify-between border-t border-slate-100 pt-8">
        <p class="text-sm text-slate-400">
          ¿No encuentras lo que buscas? Hablemos.
        </p>
        <NuxtLink to="/servicios" class="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
          Ver todos los servicios
          <ArrowRight class="h-4 w-4" />
        </NuxtLink>
      </div>

    </div>
  </section>
</template>
