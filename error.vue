<script setup lang="ts">
import { Home, ArrowLeft } from 'lucide-vue-next'
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error?.statusCode === 404)

useHead({ title: is404.value ? 'Página no encontrada' : 'Error' })
</script>

<template>
  <div class="flex min-h-screen flex-col bg-navy">
    <div class="container flex flex-1 flex-col items-center justify-center py-20 text-center">
      <p class="font-display text-7xl font-extrabold text-accent-400 sm:text-8xl">
        {{ error.statusCode }}
      </p>
      <h1 class="mt-4 text-2xl font-bold text-white sm:text-3xl">
        {{ is404 ? 'Página no encontrada' : 'Algo salió mal' }}
      </h1>
      <p class="mt-3 max-w-md text-slate-300">
        {{
          is404
            ? 'La página que buscas no existe o fue movida. Vuelve al inicio para seguir navegando.'
            : 'Ocurrió un error inesperado. Intenta nuevamente en unos momentos.'
        }}
      </p>
      <div class="mt-8 flex flex-col gap-3 sm:flex-row">
        <button type="button" class="btn-accent" @click="clearError({ redirect: '/' })">
          <Home class="h-5 w-5" />
          Ir al inicio
        </button>
        <NuxtLink
          to="/contacto"
          class="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
        >
          <ArrowLeft class="h-5 w-5" />
          Contáctanos
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
