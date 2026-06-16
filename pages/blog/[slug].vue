<script setup lang="ts">
import { Clock, ArrowLeft, CalendarDays } from 'lucide-vue-next'
import { site } from '~/data/site'

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
  author: string
}

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl.replace(/\/$/, '')

useSeo({
  title: article.title,
  description: article.description,
  path: path.value,
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
        author: { '@type': 'Organization', name: article.author ?? site.name },
        publisher: { '@type': 'Organization', name: site.name, url: siteUrl },
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

        <div
          class="mt-6 aspect-[21/9] w-full rounded-2xl bg-gradient-to-br"
          :class="article.image"
          role="img"
          :aria-label="article.title"
        />

        <div class="article-content mt-10">
          <ContentRenderer :value="doc" />
        </div>

        <div class="mt-12 border-t border-slate-100 pt-6">
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-accent-600"
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
