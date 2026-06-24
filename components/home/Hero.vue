<script setup lang="ts">
import { ArrowRight, CalendarCheck, MapPin, Cloud, Code2, GraduationCap } from 'lucide-vue-next'

const highlights = [
  { icon: MapPin,         label: 'Partner oficial Esri Chile (ArcGIS)', color: 'text-brand-400' },
  { icon: Cloud,          label: 'Especialistas Microsoft Azure',        color: 'text-accent-400' },
  { icon: Code2,          label: 'Software a medida multi-industria',    color: 'text-brand-300' },
  { icon: GraduationCap, label: 'Aplicaciones educativas',              color: 'text-accent-300' },
]

const stats = [
  { value: '+10', label: 'años de experiencia' },
  { value: '+80', label: 'proyectos entregados' },
  { value: '+40', label: 'clientes activos' },
]
</script>

<template>
  <section class="relative overflow-hidden bg-navy">

    <!--
      FIRMA VISUAL: textura de isolíneas topográficas — referencia directa a GIS/cartografía.
      SVG generado con curvas orgánicas que evocan un mapa de elevación.
      Reemplaza los blur-orbs genéricos que usan el 90% de competidores.
    -->
    <div class="pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true">
      <svg
        class="h-full w-full"
        viewBox="0 0 1200 700"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Isolíneas topográficas — curvas de nivel que evocan mapas GIS -->
        <path d="M-100,350 C100,200 300,500 500,320 S800,150 1000,280 S1200,400 1400,300" stroke="#10b981" stroke-width="1" fill="none" />
        <path d="M-100,400 C80,260 280,560 480,370 S780,200 980,330 S1180,450 1400,350" stroke="#10b981" stroke-width="1" fill="none" />
        <path d="M-100,450 C60,310 260,610 460,420 S760,250 960,380 S1160,500 1400,400" stroke="#10b981" stroke-width="1" fill="none" />
        <path d="M-100,300 C120,150 320,450 520,270 S820,100 1020,230 S1220,350 1400,250" stroke="#10b981" stroke-width="0.7" fill="none" />
        <path d="M-100,500 C40,360 240,660 440,470 S740,300 940,430 S1140,550 1400,450" stroke="#10b981" stroke-width="0.7" fill="none" />
        <path d="M-100,250 C140,100 340,400 540,220 S840,50 1040,180 S1240,300 1400,200" stroke="#10b981" stroke-width="0.5" fill="none" />
        <path d="M-100,550 C20,410 220,710 420,520 S720,350 920,480 S1120,600 1400,500" stroke="#10b981" stroke-width="0.5" fill="none" />
        <!-- Puntos de referencia cartográfica -->
        <circle cx="320" cy="350" r="3" fill="#10b981" opacity="0.5" />
        <circle cx="320" cy="350" r="8" stroke="#10b981" stroke-width="0.5" fill="none" opacity="0.3" />
        <circle cx="750" cy="240" r="3" fill="#f59e0b" opacity="0.4" />
        <circle cx="750" cy="240" r="8" stroke="#f59e0b" stroke-width="0.5" fill="none" opacity="0.2" />
        <circle cx="980" cy="420" r="2" fill="#10b981" opacity="0.3" />
      </svg>
    </div>

    <!-- Degradado sutil de profundidad desde la derecha -->
    <div
      class="pointer-events-none absolute inset-0"
      aria-hidden="true"
      style="background: radial-gradient(ellipse 60% 80% at 80% 50%, rgba(5,150,105,0.08) 0%, transparent 70%);"
    />

    <div class="container relative">
      <div class="grid min-h-[90vh] items-center gap-12 py-20 lg:grid-cols-[1fr_400px] lg:gap-20 lg:py-0">

        <!-- ── Columna izquierda: copy ── -->
        <div>

          <!-- Coordenada tipográfica — nod directo al mundo GIS -->
          <div class="mb-6 flex items-center gap-3">
            <span class="font-mono text-xs tracking-widest text-brand-500/70">33°27′S 70°40′O</span>
            <span class="h-px flex-1 bg-brand-800/50 max-w-[60px]" />
            <span class="text-xs font-medium text-slate-500">Santiago, Chile</span>
          </div>

          <!-- Título con Sora — el display face caracterísico -->
          <h1 class="font-display text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
            Software que
            <br />
            <span class="relative">
              <span class="text-brand-400">transforma</span>
              <span
                class="absolute -bottom-1 left-0 h-[2px] w-full bg-brand-600/50 rounded-full"
                aria-hidden="true"
              />
            </span>
            <br />
            <span class="text-slate-300">operaciones reales.</span>
          </h1>

          <p class="mt-7 max-w-lg text-[1.0625rem] leading-relaxed text-slate-400">
            GIS/ArcGIS, sistemas de gestión, aplicaciones educativas y nube Azure.
            Desarrollamos tecnología a medida para empresas, municipios e instituciones
            que necesitan resultados concretos — no promesas genéricas.
          </p>

          <!-- CTAs — copy activo y específico -->
          <div class="mt-9 flex flex-wrap gap-3">
            <NuxtLink
              to="/contacto"
              class="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-900/30 transition-all hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-900/40"
            >
              Pide tu cotización
              <ArrowRight class="h-4 w-4" />
            </NuxtLink>
            <NuxtLink
              to="/portafolio"
              class="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-slate-300 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
            >
              Ver proyectos
            </NuxtLink>
          </div>

          <!-- Métricas — sin decoración, solo datos -->
          <div class="mt-12 flex flex-wrap gap-10 border-t border-white/8 pt-8">
            <div v-for="stat in stats" :key="stat.value">
              <p class="font-display text-3xl font-bold text-brand-400">{{ stat.value }}</p>
              <p class="mt-0.5 text-sm text-slate-500">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <!-- ── Columna derecha: panel de especialidades ── -->
        <div class="hidden lg:block">
          <!-- Marco con borde topográfico superior -->
          <div class="relative rounded-2xl border border-white/10 bg-white/[0.03] p-px">
            <div class="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />

            <div class="rounded-2xl p-6">
              <p class="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                // especialidades
              </p>

              <div class="space-y-2.5">
                <div
                  v-for="item in highlights"
                  :key="item.label"
                  class="group flex items-center gap-3.5 rounded-xl border border-white/[0.06] bg-white/[0.04] px-4 py-3.5 transition-all duration-200 hover:border-brand-500/25 hover:bg-brand-500/[0.08]"
                >
                  <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <component :is="item.icon" class="h-4 w-4" :class="item.color" />
                  </div>
                  <span class="text-sm font-medium text-slate-300 group-hover:text-white">
                    {{ item.label }}
                  </span>
                </div>
              </div>

              <!-- Separador -->
              <div class="my-5 border-t border-white/[0.06]" />

              <!-- Badge Esri con estilo de certificación -->
              <div class="rounded-xl bg-accent-500/[0.08] px-4 py-3.5 border border-accent-500/20">
                <div class="flex items-start gap-3">
                  <span class="mt-0.5 text-base">🏅</span>
                  <div>
                    <p class="text-xs font-semibold text-accent-400">Partner Oficial</p>
                    <p class="mt-0.5 text-xs text-slate-400">
                      Esri Chile · tecnología ArcGIS certificada
                    </p>
                  </div>
                </div>
              </div>

              <!-- Agendar reunión — CTA secundario discreto -->
              <NuxtLink
                to="/contacto#agendar"
                class="mt-4 flex items-center justify-center gap-2 rounded-xl border border-white/[0.06] px-4 py-3 text-xs font-medium text-slate-500 transition-colors hover:text-slate-300"
              >
                <CalendarCheck class="h-3.5 w-3.5" />
                Agendar reunión sin costo
              </NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>
