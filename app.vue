<script setup lang="ts">
import { site } from '~/data/site'

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
        '@type': 'Organization',
        name: site.name,
        legalName: site.legalName,
        url: siteUrl,
        logo: `${siteUrl.replace(/\/$/, '')}/logo.png`,
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
