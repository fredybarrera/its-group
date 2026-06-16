<script setup lang="ts">
import { site } from '~/data/site'

withDefaults(defineProps<{ light?: boolean }>(), { light: false })
</script>

<template>
  <span class="inline-flex items-center gap-2.5">
    <svg
      class="h-9 w-9 shrink-0"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1e5fbf" />
          <stop offset="1" stop-color="#06b6d4" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#logo-g)" />
      <path
        d="M20 18h24M32 18v28M22 46h20"
        stroke="#fff"
        stroke-width="5"
        stroke-linecap="round"
      />
    </svg>
    <span class="flex flex-col leading-none">
      <span
        class="font-display text-lg font-extrabold tracking-tight"
        :class="light ? 'text-white' : 'text-navy'"
        >IT Solutions</span
      >
      <span
        class="text-xs font-semibold uppercase tracking-[0.2em]"
        :class="light ? 'text-accent-300' : 'text-accent-600'"
        >Group</span
      >
    </span>
    <span class="sr-only">{{ site.name }}</span>
  </span>
</template>
