<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    subtitle?: string
    align?: 'left' | 'center'
    light?: boolean
  }>(),
  { eyebrow: undefined, subtitle: undefined, align: 'center', light: false },
)
</script>

<template>
  <div
    class="max-w-2xl"
    :class="align === 'center' ? 'mx-auto text-center' : 'text-left'"
  >
    <p v-if="eyebrow" class="eyebrow justify-start" :class="{ 'justify-center': align === 'center' }">
      {{ eyebrow }}
    </p>
    <h2
      class="mt-3 text-3xl font-extrabold sm:text-4xl"
      :class="light ? 'text-white' : 'text-navy'"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="mt-4 text-lg leading-relaxed"
      :class="light ? 'text-slate-300' : 'text-slate-600'"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
