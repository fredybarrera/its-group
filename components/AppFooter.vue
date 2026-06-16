<script setup lang="ts">
import { Mail, Phone, MapPin } from 'lucide-vue-next'
import { site, mainNav } from '~/data/site'
import { services } from '~/data/services'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-navy text-slate-300">
    <div class="container py-14 lg:py-16">
      <div class="grid gap-10 lg:grid-cols-4">
        <div class="lg:col-span-1">
          <AppLogo light />
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            {{ site.description }}
          </p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span class="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
              Esri Partner
            </span>
            <span class="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
              Microsoft Azure
            </span>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white">Servicios</h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li v-for="service in services" :key="service.slug">
              <NuxtLink
                :to="`/servicios/${service.slug}`"
                class="text-slate-400 transition-colors hover:text-accent-300"
              >
                {{ service.category }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white">Empresa</h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li v-for="link in mainNav" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="text-slate-400 transition-colors hover:text-accent-300"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white">Contacto</h3>
          <ul class="mt-4 space-y-3 text-sm">
            <li class="flex items-start gap-3">
              <Mail class="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <a :href="`mailto:${site.contact.email}`" class="hover:text-accent-300">
                {{ site.contact.email }}
              </a>
            </li>
            <li class="flex items-start gap-3">
              <Phone class="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <a :href="site.contact.phoneHref" class="hover:text-accent-300">
                {{ site.contact.phone }}
              </a>
            </li>
            <li class="flex items-start gap-3">
              <MapPin class="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <span>
                {{ site.contact.addressLine }}<br >
                {{ site.contact.city }}, {{ site.contact.country }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row"
      >
        <p>© {{ year }} {{ site.legalName }}. Todos los derechos reservados.</p>
        <p>Desarrollo de software a medida y consultoría TI en Chile.</p>
      </div>
    </div>
  </footer>
</template>
