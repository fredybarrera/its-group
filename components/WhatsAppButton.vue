<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next'
import { site } from '~/data/site'

const message = encodeURIComponent(
  `Hola, visité el sitio web de ${site.name} y me gustaría más información sobre sus servicios.`,
)
const href = `${site.contact.whatsappHref}?text=${message}`
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Escríbenos por WhatsApp"
    class="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
  >
    <MessageCircle class="h-6 w-6" />
    <span class="hidden text-sm font-semibold sm:inline">WhatsApp</span>
  </a>
</template>
