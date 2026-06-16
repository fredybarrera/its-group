<script setup lang="ts">
import { testimonials } from '~/data/testimonials'
</script>

<template>
  <section class="section bg-slate-50">
    <div class="container">
      <SectionHeading
        eyebrow="Testimonios"
        title="La confianza de quienes ya trabajaron con nosotros"
      />
      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <div v-for="(item, i) in testimonials" :key="item.author" v-reveal="i * 80">
          <TestimonialCard :testimonial="item" />
        </div>
      </div>
    </div>
  </section>
</template>
