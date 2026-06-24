<script setup lang="ts">
import type { NuxtError } from '#app'
import { site } from '~/data/site'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error?.statusCode === 404)

const heading = computed(() => (is404.value ? 'Página no encontrada' : 'Algo salió mal'))
const description = computed(() =>
  is404.value
    ? 'La página que buscas no existe o fue movida. Te invitamos a volver al inicio o explorar nuestros servicios.'
    : 'Ocurrió un error inesperado. Por favor, intenta nuevamente en unos momentos.',
)

useHead({
  title: heading.value,
  meta: [{ name: 'robots', content: 'noindex' }],
})

function handleError() {
  return clearError({ redirect: '/' })
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
    <p class="text-sm font-semibold uppercase tracking-widest text-slate-500">
      Error {{ error?.statusCode ?? 500 }}
    </p>
    <h1 class="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
      {{ heading }}
    </h1>
    <p class="mt-4 max-w-xl text-base text-slate-600">
      {{ description }}
    </p>

    <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
        @click="handleError"
      >
        Volver al inicio
      </button>
      <NuxtLink
        to="/contacto"
        class="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
      >
        Contactar a {{ site.name }}
      </NuxtLink>
    </div>
  </div>
</template>
