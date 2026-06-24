<script setup lang="ts">
import { site } from '~/data/site'

withDefaults(defineProps<{ light?: boolean }>(), { light: false })
</script>

<template>
  <span class="inline-flex items-center gap-2.5">
    <!-- Ícono: terminal prompt >_ -->
    <svg
      class="h-9 w-9 shrink-0"
      viewBox="0 0 52 52"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Fondo navy redondeado -->
      <rect width="52" height="52" rx="11" fill="#0D1B2A" />
      <!-- Chevron › en esmeralda -->
      <path
        d="M 14 18 L 26 26 L 14 34"
        stroke="#10b981"
        stroke-width="3.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <!-- Cursor block ámbar -->
      <rect x="30" y="20" width="10" height="13" rx="2.5" fill="#f59e0b" />
    </svg>

    <!-- Wordmark -->
    <span class="flex flex-col leading-none">
      <span
        class="font-display text-[1.1rem] font-bold tracking-tight"
        :class="light ? 'text-white' : 'text-navy'"
      >
        IT Solutions
      </span>
      <span
        class="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em]"
        :class="light ? 'text-brand-400' : 'text-brand-600'"
      >
        Group
      </span>
    </span>

    <span class="sr-only">{{ site.name }}</span>
  </span>
</template>
