<script setup lang="ts">
import { Clock, ArrowLeft, ArrowRight, CalendarDays } from 'lucide-vue-next'
import { site } from '~/data/site'
import { getServiceBySlug } from '~/data/services'
import { caseStudies } from '~/data/portfolio'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const path = computed(() => `/blog/${slug.value}`)

const { data: doc } = await useAsyncData(`blog-${slug.value}`, () =>
  queryContent(path.value).findOne(),
)

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artículo no encontrado', fatal: true })
}

const article = doc.value as typeof doc.value & {
  title: string
  description: string
  date: string
  category: string
  readTime: number
  image: string
  cover?: string
  imageAlt?: string
  ogImage?: string
  /** Slug del servicio relacionado, para enlazarlo desde el artículo. */
  service?: string
  /** Fecha de la última revisión del contenido (AAAA-MM-DD). */
  updated?: string
  author: string
}

const relatedService = article.service ? getServiceBySlug(article.service) : undefined
const relatedCases = relatedService
  ? caseStudies.filter((c) => c.serviceSlug === relatedService.slug).slice(0, 2)
  : []

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl.replace(/\/$/, '')

useSeo({
  title: article.title,
  description: article.description,
  path: path.value,
  image: article.ogImage,
  type: 'article',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        dateModified: article.updated ?? article.date,
        ...(article.ogImage ? { image: absoluteUrl(siteUrl, article.ogImage) } : {}),
        inLanguage: 'es-CL',
        author: { '@type': 'Organization', name: article.author ?? site.name },
        publisher: { '@id': organizationId(siteUrl) },
        mainEntityOfPage: `${siteUrl}${path.value}`,
      }),
    },
  ],
})

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
</script>

<template>
  <article v-if="doc">
    <PageHero :eyebrow="article.category" :title="article.title">
      <template #breadcrumbs>
        <div class="mb-5">
          <Breadcrumbs
            light
            :items="[
              { label: 'Inicio', to: '/' },
              { label: 'Blog', to: '/blog' },
              { label: article.category },
            ]"
          />
        </div>
      </template>
    </PageHero>

    <div class="section bg-white">
      <div class="container max-w-3xl">
        <div class="flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span class="inline-flex items-center gap-1.5">
            <CalendarDays class="h-4 w-4" />
            {{ formatDate(article.date) }}
          </span>
          <span class="inline-flex items-center gap-1.5">
            <Clock class="h-4 w-4" />
            {{ article.readTime }} min de lectura
          </span>
          <span>·</span>
          <span>{{ article.author }}</span>
        </div>

        <NuxtImg
          v-if="article.cover"
          :src="article.cover"
          :alt="article.imageAlt ?? article.title"
          class="mt-6 aspect-[1200/630] w-full rounded-2xl object-cover"
        />
        <div
          v-else
          class="mt-6 aspect-[21/9] w-full rounded-2xl bg-gradient-to-br"
          :class="article.image"
          role="img"
          :aria-label="article.title"
        />

        <div class="article-content mt-10">
          <ContentRenderer :value="doc" />
        </div>

        <!-- Enlaces internos: servicio y casos relacionados -->
        <aside v-if="relatedService" class="mt-12 space-y-8" aria-label="Contenido relacionado">
          <NuxtLink
            :to="`/servicios/${relatedService.slug}`"
            class="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-colors hover:border-brand-200"
          >
            <span class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <ServiceIcon :name="relatedService.icon" class="h-5 w-5" />
            </span>
            <span class="flex-1">
              <span class="block text-sm text-slate-500">Servicio relacionado</span>
              <span class="block font-bold text-navy group-hover:text-brand-700">{{ relatedService.title }}</span>
            </span>
            <ArrowRight class="h-5 w-5 text-brand-700 transition-transform group-hover:translate-x-1" />
          </NuxtLink>

          <div v-if="relatedCases.length">
            <h2 class="text-xl font-bold text-navy">Proyectos relacionados</h2>
            <div class="mt-5 grid gap-6 sm:grid-cols-2">
              <CaseStudyCard v-for="item in relatedCases" :key="item.slug" :case-study="item" />
            </div>
          </div>
        </aside>

        <div class="mt-12 border-t border-slate-100 pt-6">
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-accent-700"
          >
            <ArrowLeft class="h-4 w-4" />
            Volver al blog
          </NuxtLink>
        </div>
      </div>
    </div>

    <CtaSection />
  </article>
</template>
