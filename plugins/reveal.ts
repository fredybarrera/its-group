// Directiva `v-reveal`: anima sutilmente los elementos al entrar en viewport.
// Uso: <div v-reveal> o <div v-reveal="150"> (retardo en ms).
// Se registra de forma universal (SSR + cliente); la animación solo corre
// en el navegador. `getSSRProps` evita errores durante el prerender.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement, binding) {
      if (!import.meta.client) return

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduceMotion) return

      const delay = typeof binding.value === 'number' ? binding.value : 0
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
              observer.unobserve(el)
            }
          })
        },
        { threshold: 0.12 },
      )

      observer.observe(el)
    },
  })
})
