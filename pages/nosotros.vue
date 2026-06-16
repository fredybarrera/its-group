<script setup lang="ts">
import { Target, Eye, Heart } from 'lucide-vue-next'
import { site, metrics } from '~/data/site'
import { team, methodology } from '~/data/team'

useSeo({
  title: 'Nosotros — Por qué elegirnos',
  description:
    'Conoce a IT Solutions Group: empresa chilena de desarrollo de software, Partner oficial de Esri y especialistas en Azure. Nuestra historia, equipo y metodología.',
  path: '/nosotros',
})

const values = [
  {
    icon: Target,
    title: 'Foco en resultados',
    description: 'No entregamos software, entregamos soluciones a problemas de negocio concretos.',
  },
  {
    icon: Eye,
    title: 'Cercanía y transparencia',
    description: 'Comunicación clara en cada etapa, sin letra chica ni sorpresas.',
  },
  {
    icon: Heart,
    title: 'Compromiso de largo plazo',
    description: 'Buscamos ser tu socio tecnológico, no un proveedor de una sola vez.',
  },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Nosotros"
      title="Tu socio tecnológico en Chile"
      :subtitle="`Desde ${site.foundedYear} ayudamos a empresas, municipios e instituciones educativas a transformar su operación con software a medida, tecnología geoespacial y nube.`"
    />

    <!-- Historia -->
    <section class="section bg-white">
      <div class="container grid items-center gap-12 lg:grid-cols-2">
        <div v-reveal>
          <SectionHeading
            align="left"
            eyebrow="Quiénes somos"
            title="Tecnología con propósito de negocio"
          />
          <div class="mt-6 space-y-4 leading-relaxed text-slate-600">
            <p>
              IT Solutions Group nació para acortar la distancia entre la tecnología y los
              resultados de negocio. Somos un equipo chileno de desarrolladores, consultores y
              especialistas geoespaciales que combina experiencia técnica con un entendimiento real
              de cómo operan las organizaciones.
            </p>
            <p>
              Como <strong class="text-navy">Partner oficial de Esri Chile</strong> y especialistas
              en <strong class="text-navy">Microsoft Azure</strong>, integramos software a medida,
              inteligencia territorial y nube para resolver desafíos que otros consideran complejos.
            </p>
          </div>
        </div>
        <div v-reveal="120" class="grid grid-cols-2 gap-4">
          <div
            v-for="metric in metrics"
            :key="metric.label"
            class="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center"
          >
            <p class="text-3xl font-extrabold text-brand-600">{{ metric.value }}</p>
            <p class="mt-1 text-sm text-slate-600">{{ metric.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certificaciones -->
    <section class="bg-slate-50 py-14">
      <div class="container">
        <p class="mb-5 text-center text-sm font-medium uppercase tracking-widest text-slate-400">
          Certificaciones y alianzas
        </p>
        <CertificationBand />
      </div>
    </section>

    <!-- Valores -->
    <section class="section bg-white">
      <div class="container">
        <SectionHeading eyebrow="Nuestros valores" title="Cómo trabajamos" />
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <div v-for="value in values" :key="value.title" v-reveal class="card text-center">
            <span class="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <component :is="value.icon" class="h-6 w-6" />
            </span>
            <h3 class="mt-4 text-lg font-bold text-navy">{{ value.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Metodología -->
    <section class="section bg-slate-50">
      <div class="container">
        <SectionHeading eyebrow="Metodología" title="Un proceso claro de principio a fin" />
        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(phase, i) in methodology"
            :key="phase.step"
            v-reveal="i * 70"
            class="relative rounded-2xl border border-slate-100 bg-white p-6"
          >
            <span class="font-display text-4xl font-extrabold text-brand-100">{{ phase.step }}</span>
            <h3 class="mt-2 text-lg font-bold text-navy">{{ phase.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ phase.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipo -->
    <section class="section bg-white">
      <div class="container">
        <SectionHeading
          eyebrow="Equipo"
          title="Profesionales detrás de cada proyecto"
          subtitle="Un equipo multidisciplinario que combina desarrollo, consultoría y especialización geoespacial."
        />
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="member in team" :key="member.name" v-reveal class="text-center">
            <div
              class="mx-auto aspect-square w-full max-w-[220px] rounded-2xl bg-gradient-to-br"
              :class="member.photo"
              role="img"
              :aria-label="`Foto de ${member.name}`"
            />
            <h3 class="mt-4 font-bold text-navy">{{ member.name }}</h3>
            <p class="text-sm font-medium text-brand-600">{{ member.role }}</p>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ member.bio }}</p>
          </div>
        </div>
        <p class="mt-6 text-center text-xs text-slate-400">
          ⚠️ Perfiles y fotos de ejemplo — reemplazar por el equipo real.
        </p>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
