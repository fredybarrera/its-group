<script setup lang="ts">
import { site } from '~/data/site'
import { services } from '~/data/services'

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

// Metadatos por defecto y datos estructurados de la organización (Schema.org).
// Sobre ~60 caracteres Google corta el título: en esos casos se omite el sufijo de marca.
const MAX_TITLE = 60

useHead({
  titleTemplate: (title) => {
    if (!title) return `${site.name} — ${site.tagline}`
    const full = `${title} | ${site.name}`
    return full.length <= MAX_TITLE ? full : title
  },
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        // ProfessionalService es un subtipo de LocalBusiness: habilita la búsqueda local.
        '@type': ['Organization', 'ProfessionalService'],
        '@id': organizationId(siteUrl),
        name: site.name,
        legalName: site.legalName,
        url: siteUrl,
        logo: absoluteUrl(siteUrl, '/logo.png'),
        image: absoluteUrl(siteUrl, '/og/og-image.png'),
        description: site.description,
        foundingDate: String(site.foundedYear),
        email: site.contact.email,
        telephone: site.contact.phone,
        address: {
          '@type': 'PostalAddress',
          ...(site.contact.addressLine ? { streetAddress: site.contact.addressLine } : {}),
          addressLocality: site.contact.city,
          addressRegion: site.contact.region,
          addressCountry: 'CL',
        },
        areaServed: { '@type': 'Country', name: 'Chile' },
        knowsAbout: services.map((s) => s.title),
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: site.contact.hours.days,
          opens: site.contact.hours.opens,
          closes: site.contact.hours.closes,
        },
        sameAs: site.social.map((s) => s.href),
      }),
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
