<template>
  <div class="contacto-page">
    <div class="container">
      <!-- Encabezado -->
      <div class="header-section">
        <span class="page-eyebrow">COMUNICACIÓN</span>
        <h1 class="page-title">
          Estamos para
          <span class="highlight">escucharte.</span>
        </h1>
      </div>

      <!-- Grid: Información de contacto + Formulario -->
      <div class="contacto-grid">
        <!-- Columna izquierda -->
        <div class="info-contacto">
          <!-- Ubicación Principal -->
          <div class="info-card">
            <div class="info-card-head">
              <div class="icon-circle icon-circle--yellow">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#1e2a3e" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                </svg>
              </div>
              <h3>Ubicación Principal</h3>
            </div>
            <p class="info-text">Jr. Progreso 114,<br />Tarapoto, Perú</p>
          </div>

          <!-- Teléfonos + Horario (mismo card, dos columnas) -->
          <div class="info-card info-card--split">
            <div class="split-item">
              <div class="info-card-head">
                <div class="icon-circle icon-circle--yellow">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#1e2a3e" aria-hidden="true">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </div>
                <h3>Teléfonos</h3>
              </div>
              <p class="info-text">Central: (01) 456-7890</p>
              <p class="info-text">Admisión: (01) 456-7891</p>
            </div>
            <div class="split-item">
              <div class="info-card-head">
                <div class="icon-circle icon-circle--yellow">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#1e2a3e" aria-hidden="true">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <h3>Horario</h3>
              </div>
              <p class="info-text">Lun - Vie: 08:00 - 16:00</p>
              <p class="info-text">Sáb: 09:00 - 12:00</p>
            </div>
          </div>

          <!-- Síguenos en Redes -->
          <div class="redes-card">
            <h3>Síguenos en Redes</h3>
            <div class="redes-icons">
              <a
                v-for="red in redes"
                :key="red.nombre"
                :href="red.url"
                target="_blank"
                rel="noopener noreferrer"
                class="red-icon"
                :aria-label="red.nombre"
              >
                <span v-html="red.icono"></span>
              </a>
            </div>
          </div>
        </div>

        <!-- Columna derecha: formulario de contacto -->
        <div class="formulario-contacto">
          <h3>Envíanos un <span class="text-yellow">Mensaje</span></h3>
          <form @submit.prevent="enviarConsulta">
            <div class="fila-doble">
              <div class="campo">
                <label>NOMBRE COMPLETO</label>
                <input type="text" v-model="form.nombre" placeholder="Ej. Juan Pérez" required />
              </div>
              <div class="campo">
                <label>CORREO ELECTRÓNICO</label>
                <input type="email" v-model="form.email" placeholder="juan@ejemplo.com" required />
              </div>
            </div>
            <div class="campo">
              <label>ASUNTO DE CONSULTA</label>
              <div class="select-wrap">
                <select v-model="form.asunto" required>
                  <option value="" disabled>Información de Admisión</option>
                  <option value="Información de Admisión">Información de Admisión</option>
                  <option value="Sugerencias">Sugerencias</option>
                  <option value="Reclamos">Reclamos</option>
                  <option value="Otros">Otros</option>
                </select>
                <span class="select-arrow" aria-hidden="true">▾</span>
              </div>
            </div>
            <div class="campo">
              <label>MENSAJE</label>
              <textarea
                v-model="form.mensaje"
                rows="5"
                placeholder="Escribe tu consulta detalladamente aquí..."
                required
              ></textarea>
            </div>
            <button type="submit" class="btn-enviar">ENVIAR CONSULTA</button>
          </form>
          <p v-if="mensajeEnviado" class="mensaje-exito">✅ ¡Consulta enviada! Nos pondremos en contacto pronto.</p>
        </div>
      </div>

      <!-- Sección Nuestra Sede -->
      <section class="sede-section">
        <div class="sede-head">
          <div>
            <h2 class="sede-title">Nuestra <span class="text-yellow">Sede</span></h2>
            <p class="sede-sub">Visítanos y conoce nuestras instalaciones modernas y seguras.</p>
          </div>
          <div class="vigilancia-badge">
            <div class="vigilancia-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#1e2a3e">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
            </div>
            <span>VIGILANCIA 24/7</span>
          </div>
        </div>

        <div class="mapa-sede">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2438786355815!2d-76.3663192258493!3d-6.49077279350126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ba0bf6287606f7%3A0x8002d53a59daff54!2sColegio%20Santa%20Rosa!5e0!3m2!1ses!2spe!4v1780958980180!5m2!1ses!2spe"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Ubicación I.E. Santa Rosa"
          ></iframe>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  nombre: '',
  email: '',
  asunto: '',
  mensaje: ''
})

const mensajeEnviado = ref(false)

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

const enviarConsulta = () => {
  console.log('Datos enviados:', form.value)
  mensajeEnviado.value = true
  form.value = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  }
  setTimeout(() => {
    mensajeEnviado.value = false
  }, 5000)
}
</script>

<style scoped>
.contacto-page {
  font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
  background-color: #ffffff;
  padding: 2.5rem 0 4rem;
  color: #1e2a3e;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ============== ENCABEZADO ============== */
.header-section {
  margin-bottom: 2.5rem;
}

.page-eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 2.5px;
  color: #4a6177;
  margin-bottom: 0.5rem;
}

.page-title {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.05;
  color: #1e2a3e;
  margin: 0;
  letter-spacing: -1px;
}

.page-title .highlight {
  display: inline-block;
  background-color: #fbc02d;
  color: #1e2a3e;
  padding: 0.05em 0.35em 0.1em;
  border-radius: 4px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

/* ============== GRID ============== */
.contacto-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.info-contacto {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* ============== TARJETAS DE INFORMACIÓN ============== */
.info-card {
  background: #f9fafc;
  border-radius: 16px;
  padding: 1.4rem 1.5rem;
  border: 1px solid #eef2f6;
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
}

.info-card:hover {
  transform: translateY(-2px);
  border-color: #f6c101;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
}

.info-card-head {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.6rem;
}

.info-card h3 {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  color: #1e2a3e;
  margin: 0;
}

.icon-circle {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-circle--yellow {
  background-color: #fbc02d;
}

.info-text {
  color: #4a6177;
  font-size: 0.9rem;
  line-height: 1.55;
  margin: 0 0 0.15rem;
}

.map-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.5rem;
  color: #b7791f;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.78rem;
  letter-spacing: 1px;
  transition: gap 0.2s, color 0.2s;
}

.map-link:hover {
  color: #8a5a00;
  gap: 0.7rem;
}

.map-link .arrow {
  font-size: 0.95rem;
  transition: transform 0.2s;
}

.map-link:hover .arrow {
  transform: translateX(2px);
}

/* Tarjeta doble: teléfonos + horario */
.info-card--split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.split-item .info-card-head {
  margin-bottom: 0.5rem;
}

.split-item + .split-item {
  border-left: 1px solid #eef2f6;
  padding-left: 1.5rem;
}

/* ============== TARJETA REDES ============== */
.redes-card {
  background-color: #fbc02d;
  border-radius: 16px;
  padding: 1.4rem 1.5rem;
  color: #1e2a3e;
}

.redes-card h3 {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  margin: 0 0 0.9rem;
  color: #1e2a3e;
}

.redes-icons {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
}

.red-icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #1e2a3e;
  color: #fbc02d;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.2s, background-color 0.2s;
}

.red-icon:hover {
  transform: translateY(-2px);
  background-color: #0a3144;
}

/* ============== FORMULARIO ============== */
.formulario-contacto {
  background: #f9fafc;
  border-radius: 16px;
  padding: 1.8rem 1.8rem 2rem;
  border: 1px solid #eef2f6;
  border-top: 4px solid #fbc02d;
  align-self: start;
}

.formulario-contacto h3 {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  color: #1e2a3e;
  margin: 0 0 1.4rem;
  letter-spacing: -0.5px;
}

.text-yellow {
  color: #b7791f;
}

.fila-doble {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.campo {
  margin-bottom: 1rem;
}

.campo label {
  display: block;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #4a6177;
  margin-bottom: 0.35rem;
  letter-spacing: 0.8px;
}

.campo input,
.campo select,
.campo textarea {
  width: 100%;
  padding: 0.7rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 0.9rem;
  background-color: #f1f5f9;
  color: #1e2a3e;
  font-family: inherit;
  transition: all 0.2s;
  box-sizing: border-box;
}

.campo input::placeholder,
.campo textarea::placeholder {
  color: #94a3b8;
}

.campo input:focus,
.campo select:focus,
.campo textarea:focus {
  border-color: #fbc02d;
  background-color: #fff;
  outline: none;
  box-shadow: 0 0 0 3px rgba(251, 192, 45, 0.2);
}

.campo textarea {
  resize: vertical;
  min-height: 110px;
}

.select-wrap {
  position: relative;
}

.select-wrap select {
  appearance: none;
  -webkit-appearance: none;
  padding-right: 2.2rem;
  cursor: pointer;
}

.select-arrow {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #4a6177;
  font-size: 0.85rem;
}

.btn-enviar {
  background-color: #fbc02d;
  border: none;
  padding: 0.9rem 1.5rem;
  border-radius: 40px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #1e2a3e;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  font-size: 0.85rem;
  margin-top: 0.4rem;
}

.btn-enviar:hover {
  background-color: #f5b81b;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(245, 184, 27, 0.3);
}

.mensaje-exito {
  margin-top: 1rem;
  padding: 0.8rem;
  background: #d1fae5;
  color: #065f46;
  border-radius: 12px;
  text-align: center;
  font-size: 0.9rem;
}

/* ============== SECCIÓN NUESTRA SEDE ============== */
.sede-section {
  margin-top: 2rem;
}

.sede-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.sede-title {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 2.2rem;
  font-weight: 900;
  color: #1e2a3e;
  margin: 0 0 0.3rem;
  letter-spacing: -0.5px;
}

.sede-sub {
  color: #4a6177;
  font-size: 0.95rem;
  margin: 0;
}

.vigilancia-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background-color: #fef3c7;
  border: 1px solid #f6c101;
  padding: 0.55rem 1rem;
  border-radius: 40px;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #1e2a3e;
}

.vigilancia-icon {
  width: 26px;
  height: 26px;
  background-color: #fbc02d;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.mapa-sede {
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background-color: #eef2f6;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  /* Mantiene la proporción 4:3 del iframe de Google Maps */
  aspect-ratio: 4 / 3;
}

.mapa-sede iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

/* ============== RESPONSIVE ============== */
@media (max-width: 900px) {
  .contacto-grid {
    grid-template-columns: 1fr;
  }
  .page-title {
    font-size: 2.4rem;
  }
  .sede-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 600px) {
  .info-card--split {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .split-item + .split-item {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid #eef2f6;
    padding-top: 1rem;
  }
  .fila-doble {
    grid-template-columns: 1fr;
  }
  .page-title {
    font-size: 1.9rem;
  }
  .mapa-sede {
    aspect-ratio: 3 / 2;
  }
  .sede-head {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  .formulario-contacto {
    padding: 1.4rem;
  }
}
</style>
