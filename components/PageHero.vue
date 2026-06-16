<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    subtitle?: string
  }>(),
  { eyebrow: undefined, subtitle: undefined },
)
</script>

<template>
  <section class="relative overflow-hidden bg-navy">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-accent-500/15 blur-3xl" />
      <div class="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-brand-500/25 blur-3xl" />
    </div>
    <div class="container relative py-16 lg:py-20">
      <div class="max-w-3xl">
        <slot name="breadcrumbs" />
        <p v-if="eyebrow" class="eyebrow text-accent-300">{{ eyebrow }}</p>
        <h1 class="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
          {{ subtitle }}
        </p>
        <div v-if="$slots.actions" class="mt-8 flex flex-wrap gap-3">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </section>
</template>
