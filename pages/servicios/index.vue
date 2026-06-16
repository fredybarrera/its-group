<script setup lang="ts">
import { services } from '~/data/services'

useSeo({
  title: 'Servicios de desarrollo de software y consultoría TI',
  description:
    'Sistemas de gestión, soluciones industriales, GIS/ArcGIS, aplicaciones educativas, cloud Azure y consultoría TI. Conoce nuestras seis líneas de servicio.',
  path: '/servicios',
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Servicios"
      title="Soluciones tecnológicas para cada desafío"
      subtitle="Combinamos desarrollo a medida, tecnología geoespacial y nube Azure para resolver problemas reales de negocio."
    />

    <section class="section bg-white">
      <div class="container">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(service, i) in services" :key="service.slug" v-reveal="i * 60">
            <ServiceCard :service="service" />
          </div>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
