<script setup lang="ts">
import { metrics } from '~/data/site'
</script>

<template>
  <section class="border-b border-slate-100 bg-white py-12">
    <div class="container">
      <dl class="grid grid-cols-2 gap-8 lg:grid-cols-4">
        <div v-for="metric in metrics" :key="metric.label" v-reveal class="text-center">
          <dt class="sr-only">{{ metric.label }}</dt>
          <dd>
            <p class="text-4xl font-extrabold text-brand-600 lg:text-5xl">{{ metric.value }}</p>
            <p class="mt-2 text-sm font-medium text-slate-600">{{ metric.label }}</p>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
