<script setup lang="ts">
import { Mail, MapPin, MessageCircle, CalendarCheck, Clock } from 'lucide-vue-next'
import { site } from '~/data/site'

useSeo({
  title: 'Contacto — Cotiza tu proyecto',
  description:
    'Conversemos sobre tu proyecto de software, GIS/ArcGIS o nube Azure. Solicita una cotización, agenda una reunión o escríbenos por WhatsApp.',
  path: '/contacto',
})

const whatsappHref = `${site.contact.whatsappHref}?text=${encodeURIComponent(
  `Hola, visité el sitio web de ${site.name} y me gustaría más información sobre sus servicios.`,
)}`

const mapSrc = `https://maps.google.com/maps?q=-36.7208,-73.1177&z=14&output=embed`

const contactItems = [
  { icon: Mail, label: 'Email', value: site.contact.email, href: `mailto:${site.contact.email}` },
  { icon: MessageCircle, label: 'WhatsApp', value: site.contact.whatsapp, href: whatsappHref },
]

const calendlyUrl = useRuntimeConfig().public.calendlyUrl
</script>

<template>
  <div>
    <PageHero
      eyebrow="Contacto"
      title="Conversemos sobre tu proyecto"
      subtitle="Cuéntanos qué necesitas y te entregamos una propuesta clara, sin compromiso. Respondemos en menos de 24 horas hábiles."
    />

    <section class="section bg-white">
      <div class="container grid gap-10 lg:grid-cols-5">
        <!-- Formulario -->
        <div class="lg:col-span-3">
          <ContactForm />
        </div>

        <!-- Información de contacto -->
        <div class="space-y-6 lg:col-span-2">
          <div class="rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <h2 class="text-lg font-bold text-navy">Datos de contacto</h2>
            <ul class="mt-4 space-y-4">
              <li v-for="item in contactItems" :key="item.label" class="flex items-start gap-3">
                <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <component :is="item.icon" class="h-5 w-5" />
                </span>
                <div>
                  <p class="text-xs uppercase tracking-wider text-slate-400">{{ item.label }}</p>
                  <a :href="item.href" class="font-medium text-navy hover:text-brand-600">
                    {{ item.value }}
                  </a>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <MapPin class="h-5 w-5" />
                </span>
                <div>
                  <p class="text-xs uppercase tracking-wider text-slate-400">Ubicación</p>
                  <p class="font-medium text-navy">{{ site.contact.addressLine }}</p>
                  <p class="text-sm text-slate-600">
                    {{ site.contact.city }}, {{ site.contact.country }}
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Clock class="h-5 w-5" />
                </span>
                <div>
                  <p class="text-xs uppercase tracking-wider text-slate-400">Horario</p>
                  <p class="font-medium text-navy">Lun a Vie · 9:00 – 18:00</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Agendar reunión -->
          <div class="rounded-2xl border border-brand-100 bg-brand-50 p-6">
            <div class="flex items-center gap-2 text-brand-700">
              <CalendarCheck class="h-5 w-5" />
              <h2 class="text-lg font-bold">Agenda una reunión</h2>
            </div>
            <p class="mt-2 text-sm text-slate-600">
              Reserva una videollamada de 30 minutos con nuestro equipo para revisar tu proyecto.
            </p>
            <a href="#agendar" class="btn-primary mt-4 w-full">
              <CalendarCheck class="h-5 w-5" />
              Ver disponibilidad
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de agendamiento (Calendly) -->
    <section id="agendar" class="section scroll-mt-24 bg-slate-50">
      <div class="container">
        <SectionHeading
          eyebrow="Agendamiento"
          title="Reserva una reunión"
          subtitle="Elige el día y la hora que mejor te acomoden. Te enviaremos la invitación con el enlace de la videollamada."
        />
        <div class="mx-auto mt-10 max-w-3xl">
          <CalendlyEmbed v-if="calendlyUrl" :url="calendlyUrl" />
          <div
            v-else
            class="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center"
          >
            <CalendarCheck class="mx-auto h-10 w-10 text-brand-400" />
            <p class="mt-4 font-semibold text-navy">Agendamiento en configuración</p>
            <p class="mx-auto mt-2 max-w-md text-sm text-slate-500">
              Mientras habilitamos el calendario, escríbenos por WhatsApp o correo y coordinamos la
              reunión.
            </p>
            <div class="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <a :href="whatsappHref" target="_blank" rel="noopener noreferrer" class="btn-primary">
                <MessageCircle class="h-5 w-5" />
                Escribir por WhatsApp
              </a>
              <a :href="`mailto:${site.contact.email}`" class="btn-outline">
                <Mail class="h-5 w-5" />
                Enviar correo
              </a>
            </div>
            <p class="mt-4 text-xs text-slate-400">
              ⚠️ Configura tu enlace en la variable NUXT_PUBLIC_CALENDLY_URL.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mapa -->
    <section class="bg-slate-50 pb-16">
      <div class="container">
        <div class="overflow-hidden rounded-2xl border border-slate-200">
          <iframe
            :src="mapSrc"
            title="Ubicación de IT Solutions Group en el mapa"
            width="100%"
            height="420"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </div>
</template>
