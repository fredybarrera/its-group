<script setup lang="ts">
import * as icons from 'lucide-vue-next'
import type { FunctionalComponent } from 'vue'

// Renderiza un icono de lucide a partir de su nombre (definido en los datos).
const props = defineProps<{ name: string; class?: string }>()

const iconComponent = computed<FunctionalComponent>(
  () => (icons as Record<string, FunctionalComponent>)[props.name] ?? icons.Square,
)
</script>

<template>
  <component :is="iconComponent" :class="props.class" aria-hidden="true" />
</template>
