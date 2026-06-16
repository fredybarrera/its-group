<script setup lang="ts">
import { Menu, X, ArrowRight } from 'lucide-vue-next'
import { mainNav } from '~/data/site'

const route = useRoute()
const mobileOpen = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

// Cierra el menú móvil al cambiar de ruta.
watch(
  () => route.fullPath,
  () => (mobileOpen.value = false),
)

function isActive(to: string) {
  return to === '/' ? route.path === '/' : route.path.startsWith(to)
}
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b transition-colors duration-300"
    :class="
      scrolled
        ? 'border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75'
        : 'border-transparent bg-white'
    "
  >
    <div class="container flex h-16 items-center justify-between gap-4 lg:h-20">
      <NuxtLink to="/" aria-label="Ir al inicio" class="shrink-0">
        <AppLogo />
      </NuxtLink>

      <!-- Navegación de escritorio -->
      <nav class="hidden items-center gap-1 lg:flex" aria-label="Principal">
        <NuxtLink
          v-for="link in mainNav"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          :class="
            isActive(link.to)
              ? 'text-brand-700'
              : 'text-slate-600 hover:bg-slate-50 hover:text-navy'
          "
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-3 lg:flex">
        <NuxtLink to="/contacto" class="btn-primary !px-5 !py-2.5 text-sm">
          Cotiza tu proyecto
          <ArrowRight class="h-4 w-4" />
        </NuxtLink>
      </div>

      <!-- Botón menú móvil -->
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-lg p-2 text-navy lg:hidden"
        :aria-expanded="mobileOpen"
        aria-label="Abrir menú"
        @click="mobileOpen = !mobileOpen"
      >
        <component :is="mobileOpen ? X : Menu" class="h-6 w-6" />
      </button>
    </div>

    <!-- Menú móvil -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="mobileOpen" class="border-t border-slate-200 bg-white lg:hidden">
        <nav class="container flex flex-col gap-1 py-4" aria-label="Móvil">
          <NuxtLink
            v-for="link in mainNav"
            :key="link.to"
            :to="link.to"
            class="rounded-lg px-3 py-3 text-base font-medium transition-colors"
            :class="
              isActive(link.to) ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-50'
            "
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/contacto" class="btn-primary mt-2">
            Cotiza tu proyecto
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>
