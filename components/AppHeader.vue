<script setup lang="ts">
import { Menu, X, ArrowRight, Phone } from 'lucide-vue-next'
import { mainNav, site } from '~/data/site'

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

watch(
  () => route.fullPath,
  () => (mobileOpen.value = false),
)

function isActive(to: string) {
  return to === '/' ? route.path === '/' : route.path.startsWith(to)
}
</script>

<template>
  <div class="sticky top-0 z-50 w-full">

    <!-- Barra superior de acento — diferenciador visual clave vs. UPG -->
    <div class="bg-navy border-b border-brand-700/40">
      <div class="container flex h-9 items-center justify-between">
        <p class="text-xs text-slate-400">
          Partner oficial
          <span class="font-semibold text-brand-400">Esri Chile</span>
          · Especialistas
          <span class="font-semibold text-accent-400">Microsoft Azure</span>
        </p>
        <a
          :href="site.contact.phoneHref"
          class="hidden items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-white sm:flex"
        >
          <Phone class="h-3 w-3" />
          {{ site.contact.phone }}
        </a>
      </div>
    </div>

    <!-- Header principal -->
    <header
      class="w-full border-b transition-all duration-300"
      :class="
        scrolled
          ? 'border-slate-200 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80'
          : 'border-slate-100 bg-white'
      "
    >
      <div class="container flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <NuxtLink to="/" aria-label="Ir al inicio" class="shrink-0">
          <AppLogo />
        </NuxtLink>

        <!-- Navegación escritorio — con indicador verde activo en vez de texto azul -->
        <nav class="hidden items-center gap-0.5 lg:flex" aria-label="Principal">
          <NuxtLink
            v-for="link in mainNav"
            :key="link.to"
            :to="link.to"
            class="relative rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            :class="
              isActive(link.to)
                ? 'text-brand-700'
                : 'text-slate-600 hover:bg-slate-50 hover:text-navy'
            "
          >
            {{ link.label }}
            <!-- Indicador activo verde debajo del link -->
            <span
              v-if="isActive(link.to)"
              class="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-brand-500"
              aria-hidden="true"
            />
          </NuxtLink>
        </nav>

        <!-- CTA escritorio — estilo ámbar para contraste con resto del mercado -->
        <div class="hidden items-center gap-3 lg:flex">
          <NuxtLink
            to="/contacto"
            class="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md"
          >
            Cotiza tu proyecto
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </div>

        <!-- Botón menú móvil -->
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-lg p-2 text-navy transition-colors hover:bg-slate-100 lg:hidden"
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
        <div v-if="mobileOpen" class="border-t border-slate-100 bg-white lg:hidden">
          <nav class="container flex flex-col gap-1 py-4" aria-label="Móvil">
            <NuxtLink
              v-for="link in mainNav"
              :key="link.to"
              :to="link.to"
              class="rounded-lg px-3 py-3 text-base font-medium transition-colors"
              :class="
                isActive(link.to)
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-slate-700 hover:bg-slate-50'
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

  </div>
</template>
