<script setup lang="ts">
useSeo({
  title: 'Desarrollo de software a medida y consultoría TI en Chile',
  description:
    'IT Solutions Group: desarrollo de software a medida, soluciones GIS/ArcGIS, sistemas de gestión y asesoría Azure en Chile. Partner oficial de Esri y especialistas en Microsoft Azure.',
  path: '/',
})
</script>

<template>
  <div>
    <HomeHero />

    <!-- Banda de certificaciones / alianzas -->
    <section class="border-b border-slate-100 bg-white py-10">
      <div class="container">
        <p class="mb-5 text-center text-sm font-medium uppercase tracking-widest text-slate-400">
          Certificaciones y alianzas
        </p>
        <CertificationBand />
      </div>
    </section>

    <HomeMetrics />
    <HomeServices />
    <HomeCaseStudies />
    <HomeTestimonials />
    <CtaSection />
  </div>
</template>
