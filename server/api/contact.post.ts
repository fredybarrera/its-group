// Server route del formulario de contacto.
// Con el preset `azure` de Nitro se despliega como Azure Function.
// Envía la solicitud por correo usando Resend (https://resend.com).
// Configurar las variables NUXT_RESEND_API_KEY / NUXT_CONTACT_TO_EMAIL /
// NUXT_CONTACT_FROM_EMAIL (ver .env.example). Sin clave configurada, valida
// pero no envía (útil en desarrollo).

interface ContactPayload {
  name?: string
  company?: string
  email?: string
  phone?: string
  service?: string
  message?: string
  // Honeypot anti-spam: debe llegar vacío.
  website?: string
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Escapa caracteres HTML para evitar inyección en el correo.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactPayload>(event)

  // Filtro anti-spam silencioso.
  if (body.website) {
    return { ok: true }
  }

  const errors: Record<string, string> = {}
  if (!body.name?.trim()) errors.name = 'El nombre es obligatorio.'
  if (!body.email?.trim() || !emailRegex.test(body.email)) errors.email = 'Email inválido.'
  if (!body.message?.trim()) errors.message = 'El mensaje es obligatorio.'

  if (Object.keys(errors).length) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Datos inválidos',
      data: { errors },
    })
  }

  const config = useRuntimeConfig(event)
  const apiKey = config.resendApiKey
  const to = config.contactToEmail || 'contacto@itsgroup.dev'
  const from = config.contactFromEmail

  const name = body.name!.trim()
  const emailFrom = body.email!.trim()
  const company = body.company?.trim() || '—'
  const phone = body.phone?.trim() || '—'
  const service = body.service?.trim() || 'No especificado'
  const message = body.message!.trim()

  // Sin clave configurada: no se envía (entorno de desarrollo).
  if (!apiKey) {
    return {
      ok: true,
      delivered: false,
      message: 'Gracias por contactarnos. Te responderemos a la brevedad.',
    }
  }

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#1e293b;max-width:600px">
      <h2 style="color:#0a2540">Nueva solicitud de contacto</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:6px 8px;font-weight:bold">Nombre</td><td style="padding:6px 8px">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:6px 8px;font-weight:bold">Empresa</td><td style="padding:6px 8px">${escapeHtml(company)}</td></tr>
        <tr><td style="padding:6px 8px;font-weight:bold">Email</td><td style="padding:6px 8px">${escapeHtml(emailFrom)}</td></tr>
        <tr><td style="padding:6px 8px;font-weight:bold">Teléfono</td><td style="padding:6px 8px">${escapeHtml(phone)}</td></tr>
        <tr><td style="padding:6px 8px;font-weight:bold">Servicio</td><td style="padding:6px 8px">${escapeHtml(service)}</td></tr>
      </table>
      <h3 style="color:#0a2540;margin-top:16px">Mensaje</h3>
      <p style="white-space:pre-wrap;background:#f1f5f9;padding:12px;border-radius:8px">${escapeHtml(message)}</p>
    </div>`

  const text = `Nueva solicitud de contacto

Nombre: ${name}
Empresa: ${company}
Email: ${emailFrom}
Teléfono: ${phone}
Servicio: ${service}

Mensaje:
${message}`

  try {
    await $fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: {
        from,
        to: [to],
        reply_to: emailFrom,
        subject: `Nueva solicitud de contacto — ${name}`,
        html,
        text,
      },
    })
  } catch {
    throw createError({
      statusCode: 502,
      statusMessage: 'No se pudo enviar el correo',
      data: { message: 'No se pudo enviar el mensaje. Inténtalo nuevamente o escríbenos por WhatsApp.' },
    })
  }

  return {
    ok: true,
    delivered: true,
    message: 'Gracias por contactarnos. Te responderemos a la brevedad.',
  }
})
