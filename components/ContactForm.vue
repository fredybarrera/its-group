<script setup lang="ts">
import { Send, CheckCircle2, Loader2 } from 'lucide-vue-next'
import { services } from '~/data/services'

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
  website: string // honeypot
}

const form = reactive<FormState>({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  website: '',
})

const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const errors = ref<Record<string, string>>({})
const serverMessage = ref('')

async function onSubmit() {
  status.value = 'sending'
  errors.value = {}
  serverMessage.value = ''

  try {
    const res = await $fetch<{ ok: boolean; message?: string }>('/api/contact', {
      method: 'POST',
      body: { ...form },
    })
    status.value = 'success'
    serverMessage.value = res.message ?? 'Solicitud enviada correctamente.'
  } catch (err: unknown) {
    const e = err as { data?: { data?: { errors?: Record<string, string> } } }
    if (e?.data?.data?.errors) {
      errors.value = e.data.data.errors
      status.value = 'idle'
    } else {
      status.value = 'error'
      serverMessage.value = 'Ocurrió un error al enviar. Inténtalo nuevamente o escríbenos por WhatsApp.'
    }
  }
}
</script>

<template>
  <div class="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
    <div
      v-if="status === 'success'"
      class="flex flex-col items-center gap-3 py-10 text-center"
    >
      <CheckCircle2 class="h-14 w-14 text-emerald-500" />
      <h3 class="text-xl font-bold text-navy">¡Mensaje enviado!</h3>
      <p class="max-w-sm text-slate-600">{{ serverMessage }}</p>
    </div>

    <form v-else class="space-y-5" novalidate @submit.prevent="onSubmit">
      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label for="name" class="mb-1.5 block text-sm font-medium text-navy">
            Nombre <span class="text-rose-500">*</span>
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            autocomplete="name"
            class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            :class="{ 'border-rose-400': errors.name }"
          >
          <p v-if="errors.name" class="mt-1 text-xs text-rose-500">{{ errors.name }}</p>
        </div>
        <div>
          <label for="company" class="mb-1.5 block text-sm font-medium text-navy">Empresa</label>
          <input
            id="company"
            v-model="form.company"
            type="text"
            autocomplete="organization"
            class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          >
        </div>
      </div>

      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label for="email" class="mb-1.5 block text-sm font-medium text-navy">
            Email <span class="text-rose-500">*</span>
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            autocomplete="email"
            class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            :class="{ 'border-rose-400': errors.email }"
          >
          <p v-if="errors.email" class="mt-1 text-xs text-rose-500">{{ errors.email }}</p>
        </div>
        <div>
          <label for="phone" class="mb-1.5 block text-sm font-medium text-navy">Teléfono</label>
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            autocomplete="tel"
            class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          >
        </div>
      </div>

      <div>
        <label for="service" class="mb-1.5 block text-sm font-medium text-navy">
          Servicio de interés
        </label>
        <select
          id="service"
          v-model="form.service"
          class="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        >
          <option value="">Selecciona una opción</option>
          <option v-for="service in services" :key="service.slug" :value="service.category">
            {{ service.category }}
          </option>
          <option value="Otro">Otro / No estoy seguro</option>
        </select>
      </div>

      <div>
        <label for="message" class="mb-1.5 block text-sm font-medium text-navy">
          Cuéntanos sobre tu proyecto <span class="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          :class="{ 'border-rose-400': errors.message }"
        />
        <p v-if="errors.message" class="mt-1 text-xs text-rose-500">{{ errors.message }}</p>
      </div>

      <!-- Honeypot anti-spam (oculto para usuarios) -->
      <input
        v-model="form.website"
        type="text"
        name="website"
        tabindex="-1"
        autocomplete="off"
        class="hidden"
        aria-hidden="true"
      >

      <p v-if="status === 'error'" class="text-sm text-rose-500">{{ serverMessage }}</p>

      <button type="submit" class="btn-primary w-full" :disabled="status === 'sending'">
        <Loader2 v-if="status === 'sending'" class="h-5 w-5 animate-spin" />
        <Send v-else class="h-5 w-5" />
        {{ status === 'sending' ? 'Enviando…' : 'Enviar solicitud' }}
      </button>

      <p class="text-center text-xs text-slate-400">
        Al enviar aceptas ser contactado por nuestro equipo comercial.
      </p>
    </form>
  </div>
</template>
