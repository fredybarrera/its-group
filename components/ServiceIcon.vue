<script setup lang="ts">
import {
  Boxes,
  CarFront,
  ChartNoAxesCombined,
  Cloud,
  Factory,
  GraduationCap,
  Headset,
  MapPinned,
  Square,
} from 'lucide-vue-next'
import type { FunctionalComponent } from 'vue'

// Íconos de los servicios por nombre (definido en data/services.ts). Se importan
// uno a uno: `import * as icons` enviaba la biblioteca completa (~500 KB) a cada página.
// Al agregar un servicio con un ícono nuevo, sumarlo aquí.
const iconMap: Record<string, FunctionalComponent> = {
  Boxes,
  CarFront,
  ChartNoAxesCombined,
  Cloud,
  Factory,
  GraduationCap,
  Headset,
  MapPinned,
}

const props = defineProps<{ name: string; class?: string }>()

const iconComponent = computed<FunctionalComponent>(() => iconMap[props.name] ?? Square)
</script>

<template>
  <component :is="iconComponent" :class="props.class" aria-hidden="true" />
</template>
