<script setup lang="ts">
// Layout principal: cabecera, contenido y pie comunes a todo el sitio.
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
    <WhatsAppButton />
  </div>
</template>
