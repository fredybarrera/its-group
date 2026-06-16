<script setup lang="ts">
import { site } from '~/data/site'

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

// Metadatos por defecto y datos estructurados de la organización (Schema.org).
useHead({
  titleTemplate: (title) => (title ? `${title} | ${site.name}` : `${site.name} — ${site.tagline}`),
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: site.name,
        legalName: site.legalName,
        url: siteUrl,
        description: site.description,
        foundingDate: String(site.foundedYear),
        email: site.contact.email,
        telephone: site.contact.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.contact.addressLine,
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
