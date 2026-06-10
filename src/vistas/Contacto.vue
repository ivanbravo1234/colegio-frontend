<template>
  <div class="bg-white text-[#1e2a3e] pb-24 max-md:pb-16">

    <PageHero
      badge="COMUNICACIÓN"
      title="Contacto"
      description="Estamos para escucharte. Escríbenos, llámanos o visítanos — respondemos a cada consulta con atención y compromiso."
      :breadcrumb="[{ label: 'Contacto' }]"
    />

    <div class="max-w-[1200px] mx-auto px-6 max-[480px]:px-4 pt-10">

      <!-- ── Grid principal ── -->
      <div class="grid grid-cols-[1fr_1.25fr] max-[860px]:grid-cols-1 gap-6 mb-14 max-md:mb-10">

        <!-- Columna izquierda: información -->
        <div class="flex flex-col gap-4">

          <!-- Ubicación -->
          <div v-reveal class="bg-[#f8fafc] border border-[#eef2f6] rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#fbc02d] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-9 h-9 rounded-[10px] bg-[#fbc02d] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="#1e2a3e" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                </svg>
              </div>
              <h3 class="text-[1rem] font-semibold text-[#0a3144] m-0">Ubicación Principal</h3>
            </div>
            <p class="text-[#4a6177] text-[0.9rem] leading-[1.6] m-0 mb-3">Jr. Progreso 114, Tarapoto — San Martín, Perú</p>
            <a
              href="https://maps.google.com/?q=Colegio+Santa+Rosa+Tarapoto"
              target="_blank" rel="noopener"
              class="inline-flex items-center gap-1.5 text-[#b7791f] no-underline text-[0.76rem] font-semibold tracking-[0.5px] hover:gap-2.5 hover:text-[#0a3144] transition-all duration-200"
            >
              Ver en Google Maps <span>→</span>
            </a>
          </div>

          <!-- Teléfonos + Horario -->
          <div v-reveal class="bg-[#f8fafc] border border-[#eef2f6] rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#fbc02d] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
            <div class="grid grid-cols-2 max-[480px]:grid-cols-1 gap-5">

              <!-- Teléfonos -->
              <div>
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-9 h-9 rounded-[10px] bg-[#fbc02d] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="#1e2a3e" aria-hidden="true">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                  </div>
                  <h3 class="text-[1rem] font-semibold text-[#0a3144] m-0">Teléfonos</h3>
                </div>
                <p class="text-[#4a6177] text-[0.88rem] m-0 mb-1">Central: (042) 456-7890</p>
                <p class="text-[#4a6177] text-[0.88rem] m-0">Admisión: (042) 456-7891</p>
              </div>

              <!-- Horario -->
              <div class="border-l border-[#eef2f6] pl-5 max-[480px]:border-l-0 max-[480px]:pl-0 max-[480px]:border-t max-[480px]:pt-4">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-9 h-9 rounded-[10px] bg-[#fbc02d] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="#1e2a3e" aria-hidden="true">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                  </div>
                  <h3 class="text-[1rem] font-semibold text-[#0a3144] m-0">Horario</h3>
                </div>
                <p class="text-[#4a6177] text-[0.88rem] m-0 mb-1">Lun – Vie: 08:00 – 16:00</p>
                <p class="text-[#4a6177] text-[0.88rem] m-0">Sábado: 09:00 – 12:00</p>
              </div>

            </div>
          </div>

          <!-- Correo electrónico -->
          <div v-reveal class="bg-[#f8fafc] border border-[#eef2f6] rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#fbc02d] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-9 h-9 rounded-[10px] bg-[#fbc02d] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="#1e2a3e" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 class="text-[1rem] font-semibold text-[#0a3144] m-0">Correo electrónico</h3>
            </div>
            <a href="mailto:contacto@iesantarosa.edu.pe" class="text-[#b7791f] text-[0.9rem] font-semibold no-underline hover:underline block mb-1">contacto@iesantarosa.edu.pe</a>
            <a href="mailto:direccion@iesantarosa.edu.pe" class="text-[#4a6177] text-[0.88rem] no-underline hover:text-[#b7791f] transition-colors duration-200 block">direccion@iesantarosa.edu.pe</a>
          </div>

          <!-- Redes sociales -->
          <div v-reveal class="bg-[#0a3144] rounded-xl p-5">
            <p class="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#fbc02d] m-0 mb-1">Comunidad digital</p>
            <h3 class="text-[1rem] font-semibold text-white m-0 mb-4">Síguenos en redes</h3>
            <div class="flex gap-3 flex-wrap">
              <a
                v-for="red in redes"
                :key="red.nombre"
                :href="red.url"
                target="_blank" rel="noopener noreferrer"
                :aria-label="red.nombre"
                class="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-[#fbc02d] hover:text-[#0a3144] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span v-html="red.icono"></span>
              </a>
            </div>
          </div>

        </div>

        <!-- Columna derecha: formulario -->
        <div v-reveal class="bg-[#f8fafc] border border-[#eef2f6] border-t-[3px] border-t-[#fbc02d] rounded-xl p-7 max-[480px]:p-5 self-start shadow-[0_4px_18px_rgba(0,0,0,0.05)]">

          <p class="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#fbc02d] m-0 mb-1">Formulario de contacto</p>
          <h2 class="text-[1.4rem] font-semibold text-[#0a3144] m-0 mb-6">Envíanos un mensaje</h2>

          <!-- Éxito -->
          <div v-if="mensajeEnviado" class="flex items-start gap-3 bg-[#d1fae5] border border-[#6ee7b7] rounded-xl px-4 py-4 mb-5">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#065f46" class="flex-shrink-0 mt-px" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <div>
              <p class="text-[#065f46] font-semibold text-[0.9rem] m-0 mb-0.5">¡Consulta enviada correctamente!</p>
              <p class="text-[#047857] text-[0.82rem] m-0">Nos pondremos en contacto contigo a la brevedad.</p>
            </div>
          </div>

          <form v-else @submit.prevent="enviarConsulta" novalidate class="flex flex-col gap-4">

            <!-- Nombre + Email -->
            <div class="grid grid-cols-2 max-[560px]:grid-cols-1 gap-4">
              <div class="flex flex-col gap-[0.4rem]">
                <label class="text-[0.7rem] font-semibold uppercase text-[#4a6177] tracking-[1px]">Nombre completo</label>
                <input
                  type="text" v-model="form.nombre" placeholder="Ej. Juan Pérez" required
                  class="w-full py-[0.7rem] px-4 rounded-xl text-[0.9rem] bg-white border border-[#e2e8f0] text-[#1e2a3e] outline-none font-[inherit] placeholder:text-[#94a3b8] transition-all duration-200 focus:border-[#fbc02d] focus:shadow-[0_0_0_3px_rgba(251,192,45,0.2)]"
                  :class="errores.nombre ? 'border-[#b91c1c] bg-[#fef2f2] focus:border-[#b91c1c] focus:shadow-[0_0_0_3px_rgba(185,28,28,0.12)]' : ''"
                />
                <span v-if="errores.nombre" class="text-[0.73rem] text-[#b91c1c] font-semibold">{{ errores.nombre }}</span>
              </div>
              <div class="flex flex-col gap-[0.4rem]">
                <label class="text-[0.7rem] font-semibold uppercase text-[#4a6177] tracking-[1px]">Correo electrónico</label>
                <input
                  type="email" v-model="form.email" placeholder="juan@ejemplo.com" required
                  class="w-full py-[0.7rem] px-4 rounded-xl text-[0.9rem] bg-white border border-[#e2e8f0] text-[#1e2a3e] outline-none font-[inherit] placeholder:text-[#94a3b8] transition-all duration-200 focus:border-[#fbc02d] focus:shadow-[0_0_0_3px_rgba(251,192,45,0.2)]"
                  :class="errores.email ? 'border-[#b91c1c] bg-[#fef2f2] focus:border-[#b91c1c] focus:shadow-[0_0_0_3px_rgba(185,28,28,0.12)]' : ''"
                />
                <span v-if="errores.email" class="text-[0.73rem] text-[#b91c1c] font-semibold">{{ errores.email }}</span>
              </div>
            </div>

            <!-- Asunto -->
            <div class="flex flex-col gap-[0.4rem]">
              <label class="text-[0.7rem] font-semibold uppercase text-[#4a6177] tracking-[1px]">Asunto de consulta</label>
              <div class="relative">
                <select
                  v-model="form.asunto" required
                  class="w-full py-[0.7rem] px-4 pr-10 rounded-xl text-[0.9rem] bg-white border border-[#e2e8f0] text-[#1e2a3e] outline-none font-[inherit] appearance-none cursor-pointer transition-all duration-200 focus:border-[#fbc02d] focus:shadow-[0_0_0_3px_rgba(251,192,45,0.2)]"
                  :class="errores.asunto ? 'border-[#b91c1c] bg-[#fef2f2]' : ''"
                >
                  <option value="" disabled>Seleccione un asunto…</option>
                  <option value="Información de Admisión">Información de Admisión</option>
                  <option value="Consulta académica">Consulta académica</option>
                  <option value="Sugerencias">Sugerencias</option>
                  <option value="Reclamos">Reclamos</option>
                  <option value="Otros">Otros</option>
                </select>
                <span class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#4a6177] text-[0.8rem]" aria-hidden="true">▾</span>
              </div>
              <span v-if="errores.asunto" class="text-[0.73rem] text-[#b91c1c] font-semibold">{{ errores.asunto }}</span>
            </div>

            <!-- Mensaje -->
            <div class="flex flex-col gap-[0.4rem]">
              <label class="text-[0.7rem] font-semibold uppercase text-[#4a6177] tracking-[1px]">Mensaje</label>
              <textarea
                v-model="form.mensaje" rows="5" required
                placeholder="Escribe tu consulta con el mayor detalle posible…"
                class="w-full py-[0.7rem] px-4 rounded-xl text-[0.9rem] bg-white border border-[#e2e8f0] text-[#1e2a3e] outline-none font-[inherit] placeholder:text-[#94a3b8] resize-y min-h-[110px] transition-all duration-200 focus:border-[#fbc02d] focus:shadow-[0_0_0_3px_rgba(251,192,45,0.2)]"
                :class="errores.mensaje ? 'border-[#b91c1c] bg-[#fef2f2]' : ''"
              ></textarea>
              <span v-if="errores.mensaje" class="text-[0.73rem] text-[#b91c1c] font-semibold">{{ errores.mensaje }}</span>
            </div>

            <button
              type="submit"
              class="w-full py-[0.85rem] text-[0.88rem] font-semibold rounded-lg bg-[#fbc02d] text-[#0a3144] border-0 cursor-pointer font-[inherit] hover:bg-[#f5b81b] hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(251,192,45,0.35)] transition-all duration-200 mt-1"
            >
              Enviar consulta
            </button>

          </form>
        </div>

      </div>

      <!-- ── Nuestra Sede ── -->
      <section v-reveal>
        <div class="flex items-end justify-between mb-6 flex-wrap gap-4">
          <div>
            <p class="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#fbc02d] m-0 mb-1">Encuéntranos</p>
            <h2 class="text-[1.8rem] max-md:text-[1.5rem] font-semibold text-[#0a3144] m-0 mb-1">Nuestra Sede</h2>
            <p class="text-[#4a6177] text-[0.92rem] m-0">Visítanos y conoce nuestras instalaciones modernas y seguras.</p>
          </div>
          <span class="inline-flex items-center gap-2 bg-[#fef3c7] border border-[#fbc02d] px-4 py-[0.5rem] rounded-full text-[0.75rem] font-bold tracking-[0.8px] text-[#1e2a3e] flex-shrink-0">
            <span class="w-6 h-6 bg-[#fbc02d] rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="#1e2a3e" aria-hidden="true">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
            </span>
            Vigilancia 24/7
          </span>
        </div>

        <div class="relative w-full rounded-2xl overflow-hidden bg-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.08)]" style="aspect-ratio: 16/6; min-height: 280px">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2438786355815!2d-76.3663192258493!3d-6.49077279350126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ba0bf6287606f7%3A0x8002d53a59daff54!2sColegio%20Santa%20Rosa!5e0!3m2!1ses!2spe!4v1780958980180!5m2!1ses!2spe"
            class="absolute inset-0 w-full h-full border-0 block"
            allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            title="Ubicación I.E. Santa Rosa"
          ></iframe>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageHero from '../components/PageHero.vue'
import { useSeo } from '../composables/useSeo'

useSeo({
  title: 'Contacto',
  description: 'Contáctate con la I.E. Santa Rosa — Jr. Progreso 114, Tarapoto. Teléfono: (042) 456-7890. Escríbenos o visítanos, estamos para atenderte.',
  path: '/contacto',
})

const form = ref({ nombre: '', email: '', asunto: '', mensaje: '' })
const errores = ref({})
const mensajeEnviado = ref(false)

const validar = () => {
  const e = {}
  if (!form.value.nombre.trim())  e.nombre  = 'Ingresa tu nombre completo.'
  if (!form.value.email.trim())   e.email   = 'Ingresa tu correo electrónico.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) e.email = 'El correo no es válido.'
  if (!form.value.asunto)         e.asunto  = 'Selecciona un asunto.'
  if (!form.value.mensaje.trim()) e.mensaje = 'Escribe tu mensaje.'
  errores.value = e
  return Object.keys(e).length === 0
}

const enviarConsulta = () => {
  if (!validar()) return

  const fecha = new Date().toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric' })
  const texto = [
    '━━━━━━━━━━━━━━━━━━━━━━',
    '📋 *CONSULTA - I.E. SANTA ROSA*',
    '━━━━━━━━━━━━━━━━━━━━━━',
    '',
    `📅 *Fecha:* ${fecha}`,
    `👤 *Nombre:* ${form.value.nombre}`,
    `📧 *Correo:* ${form.value.email}`,
    `📌 *Asunto:* ${form.value.asunto}`,
    '',
    `💬 *Mensaje:*`,
    form.value.mensaje,
    '',
    '━━━━━━━━━━━━━━━━━━━━━━',
  ].join('\n')

  window.open(`https://wa.me/51953128645?text=${encodeURIComponent(texto)}`, '_blank')

  mensajeEnviado.value = true
  form.value = { nombre: '', email: '', asunto: '', mensaje: '' }
  errores.value = {}
  setTimeout(() => { mensajeEnviado.value = false }, 6000)
}

const redes = [
  {
    nombre: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100049569977380',
    icono: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5 3.66 9.13 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.91h-2.33V22c4.78-.8 8.43-4.93 8.43-9.93z"/></svg>'
  },
  {
    nombre: 'TikTok',
    url: 'https://www.tiktok.com/',
    icono: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.93a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31z"/></svg>'
  },
  {
    nombre: 'YouTube',
    url: 'https://www.youtube.com/',
    icono: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M23 12s0-3.59-.46-5.31a2.78 2.78 0 0 0-1.96-1.96C18.86 4.27 12 4.27 12 4.27s-6.86 0-8.58.46a2.78 2.78 0 0 0-1.96 1.96C1 8.41 1 12 1 12s0 3.59.46 5.31a2.78 2.78 0 0 0 1.96 1.96c1.72.46 8.58.46 8.58.46s6.86 0 8.58-.46a2.78 2.78 0 0 0 1.96-1.96C23 15.59 23 12 23 12zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>'
  },
  {
    nombre: 'Instagram',
    url: 'https://www.instagram.com/',
    icono: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38a3.72 3.72 0 0 1-1.38.9c-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.85 5.85 0 0 0-2.13 1.39A5.85 5.85 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.39 2.13a5.85 5.85 0 0 0 2.13 1.39c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.85 5.85 0 0 0 2.13-1.39 5.85 5.85 0 0 0 1.39-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.85 5.85 0 0 0-1.39-2.13A5.85 5.85 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>'
  }
]
</script>
