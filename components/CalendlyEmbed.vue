<script setup lang="ts">
// Embebe el widget inline de Calendly. El script y los estilos se cargan solo
// en el navegador. La URL se configura con NUXT_PUBLIC_CALENDLY_URL.
const props = withDefaults(defineProps<{ url: string; height?: number }>(), { height: 680 })

interface CalendlyGlobal {
  initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void
}

const container = ref<HTMLElement | null>(null)
const CSS_HREF = 'https://assets.calendly.com/assets/external/widget.css'
const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'

function getCalendly(): CalendlyGlobal | undefined {
  return (window as unknown as { Calendly?: CalendlyGlobal }).Calendly
}

function initWidget() {
  const calendly = getCalendly()
  if (calendly && container.value) {
    container.value.innerHTML = ''
    calendly.initInlineWidget({ url: props.url, parentElement: container.value })
  }
}

onMounted(() => {
  if (!props.url) return

  if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = CSS_HREF
    document.head.appendChild(link)
  }

  if (getCalendly()) {
    initWidget()
    return
  }

  const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`)
  if (existing) {
    existing.addEventListener('load', initWidget)
    return
  }

  const script = document.createElement('script')
  script.src = SCRIPT_SRC
  script.async = true
  script.addEventListener('load', initWidget)
  document.body.appendChild(script)
})
</script>

<template>
  <!-- Sin la clase `calendly-inline-widget`: el widget se inicializa manualmente
       con initInlineWidget para evitar el auto-scan (que exige data-url). -->
  <div
    ref="container"
    class="overflow-hidden rounded-2xl border border-slate-200"
    :style="{ minWidth: '320px', height: `${height}px` }"
  />
</template>
