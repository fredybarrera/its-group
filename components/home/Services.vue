<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { services } from '~/data/services'
</script>

<template>
  <section class="section bg-slate-50">
    <div class="container">
      <SectionHeading
        eyebrow="Qué hacemos"
        title="Soluciones para cada desafío tecnológico"
        subtitle="Seis líneas de servicio para cubrir desde la gestión interna hasta la inteligencia territorial y la nube."
      />

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(service, i) in services" :key="service.slug" v-reveal="i * 60">
          <ServiceCard :service="service" />
        </div>
      </div>

      <div class="mt-10 text-center">
        <NuxtLink to="/servicios" class="btn-outline">
          Ver todos los servicios
          <ArrowRight class="h-4 w-4" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
