<script setup lang="ts">
import { Search, ArrowRight, Clock } from 'lucide-vue-next'

useSeo({
  title: 'Blog — Centro de conocimiento',
  description:
    'Artículos sobre GIS/ArcGIS, Microsoft Azure, sistemas de gestión y transformación digital para empresas e instituciones en Chile.',
  path: '/blog',
})

interface ArticlePreview {
  _path: string
  title: string
  description: string
  date: string
  category: string
  readTime: number
  image: string
}

const { data: articles } = await useAsyncData('blog-list', () =>
  queryContent<ArticlePreview>('blog')
    .only(['_path', 'title', 'description', 'date', 'category', 'readTime', 'image'])
    .sort({ date: -1 })
    .find(),
)

const search = ref('')
const activeCategory = ref('Todas')

const categories = computed(() => [
  'Todas',
  ...new Set((articles.value ?? []).map((a) => a.category)),
])

const filtered = computed(() =>
  (articles.value ?? []).filter((a) => {
    const matchesCategory = activeCategory.value === 'Todas' || a.category === activeCategory.value
    const q = search.value.trim().toLowerCase()
    const matchesSearch =
      !q || a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)
    return matchesCategory && matchesSearch
  }),
)

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div>
    <PageHero
      eyebrow="Blog"
      title="Centro de conocimiento"
      subtitle="Ideas, guías y buenas prácticas sobre tecnología geoespacial, nube y software de gestión."
    />

    <section class="section bg-white">
      <div class="container">
        <!-- Buscador + categorías -->
        <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div class="relative w-full max-w-md">
            <Search class="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              v-model="search"
              type="search"
              placeholder="Buscar artículos…"
              class="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            >
          </div>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="category in categories"
              :key="category"
              type="button"
              class="rounded-full border px-4 py-1.5 text-sm font-medium transition-colors"
              :class="
                activeCategory === category
                  ? 'border-brand-600 bg-brand-600 text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-brand-300'
              "
              @click="activeCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <!-- Listado -->
        <div v-if="filtered.length" class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="article in filtered"
            :key="article._path"
            :to="article._path"
            class="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              class="aspect-[16/9] bg-gradient-to-br"
              :class="article.image"
              role="img"
              :aria-label="article.title"
            />
            <div class="flex flex-1 flex-col p-6">
              <div class="flex items-center gap-3 text-xs text-slate-500">
                <span class="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">
                  {{ article.category }}
                </span>
                <span class="inline-flex items-center gap-1">
                  <Clock class="h-3.5 w-3.5" />
                  {{ article.readTime }} min
                </span>
              </div>
              <h2 class="mt-3 text-lg font-bold text-navy group-hover:text-brand-600">
                {{ article.title }}
              </h2>
              <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {{ article.description }}
              </p>
              <div class="mt-4 flex items-center justify-between">
                <time class="text-xs text-slate-400">{{ formatDate(article.date) }}</time>
                <span class="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  Leer
                  <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
        <p
          v-else
          class="mt-12 rounded-xl border border-dashed border-slate-200 p-10 text-center text-slate-500"
        >
          No se encontraron artículos para tu búsqueda.
        </p>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
