<script setup lang="ts">
import { sectionVisibility } from '~/data/site'

useSeo({
  title: 'Desarrollo de software a medida y consultoría TI en Chile',
  description:
    'Desarrollo de software a medida en Chile desde Talcahuano, Región del Biobío: sistemas de gestión, GIS con ArcGIS de Esri, analítica de datos y Azure.',
  path: '/',
})
</script>

<template>
  <div>
    <HomeHero />

    <!-- Banda de certificaciones / alianzas -->
    <section class="border-b border-slate-100 bg-white py-10">
      <div class="container">
        <p class="mb-5 text-center text-sm font-medium uppercase tracking-widest text-slate-500">
          Nuestras especialidades
        </p>
        <CertificationBand />
      </div>
    </section>

    <HomeMetrics v-if="sectionVisibility.metrics" />
    <HomeServices />
    <HomeCaseStudies />
    <HomeTestimonials v-if="sectionVisibility.testimonials" />
    <CtaSection />
  </div>
</template>
