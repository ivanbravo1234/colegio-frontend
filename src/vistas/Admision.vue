<template>
  <div class="bg-white text-[#1e2a3e] pb-24 max-md:pb-16">

    <PageHero
      badge="ADMISIÓN 2027"
      title="Proceso de Matrícula"
      description="Abre las puertas del futuro de tu hijo. Conoce los requisitos, el cronograma y descarga los formatos para el proceso de matrícula 2027."
      :breadcrumb="[{ label: 'Admisión 2027' }]"
    />

    <div class="max-w-[1200px] mx-auto px-6 max-[480px]:px-4 pt-12">

      <!-- ── Banner alerta estado ── -->
      <div v-reveal class="flex flex-wrap items-center gap-3 bg-[#fef3c7] border border-[#fbc02d] rounded-xl px-5 py-4 mb-10">
        <div class="w-10 h-10 rounded-xl bg-[#fbc02d] flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="#0a3144" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
        </div>
        <div class="flex-1 min-w-[200px]">
          <p class="text-[0.88rem] font-semibold text-[#0a3144] m-0 mb-0.5">Proceso de Matrícula 2027 — Inscripciones abiertas</p>
          <p class="text-[#92681a] text-[0.8rem] m-0">Período: <strong>01 de octubre – 30 de noviembre de 2026.</strong></p>
        </div>
        <a
          href="#formato"
          class="w-full max-[600px]:w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#0a3144] text-[#fbc02d] text-[0.75rem] font-bold px-4 py-2 rounded-lg no-underline hover:bg-[#0d3d57] transition-colors duration-200"
        >
          Descargar formato →
        </a>
      </div>

      <!-- ── Grid principal ── -->
      <div class="grid grid-cols-[1fr_340px] max-[860px]:grid-cols-1 gap-8 mb-14">

        <!-- Columna izquierda -->
        <div class="flex flex-col gap-8 max-[860px]:order-2">

          <!-- Requisitos -->
          <section v-reveal>
            <p class="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#fbc02d] m-0 mb-2">Documentación obligatoria</p>
            <h2 class="text-[1.5rem] font-semibold text-[#0a3144] m-0 mb-6">Requisitos de matrícula</h2>

            <div class="grid grid-cols-2 max-[560px]:grid-cols-1 gap-3">
              <div
                v-for="(req, i) in requisitos"
                :key="i"
                class="flex items-start gap-3 bg-[#f8fafc] border border-[#eef2f6] rounded-xl p-4 hover:border-[#fbc02d] transition-all duration-200"
              >
                <div class="w-8 h-8 rounded-[8px] bg-[#fbc02d] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="text-[#0a3144] font-bold text-[0.78rem]">{{ i + 1 }}</span>
                </div>
                <div>
                  <p class="text-[0.88rem] font-semibold text-[#1e2a3e] m-0 mb-0.5">{{ req.titulo }}</p>
                  <p class="text-[#4a6177] text-[0.78rem] leading-[1.5] m-0">{{ req.detalle }}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Cronograma -->
          <section v-reveal>
            <p class="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#fbc02d] m-0 mb-2">Calendario oficial</p>
            <h2 class="text-[1.5rem] font-semibold text-[#0a3144] m-0 mb-6">Cronograma 2027</h2>

            <div class="relative flex flex-col gap-0">
              <!-- Línea vertical -->
              <div class="absolute left-[19px] top-5 bottom-5 w-[2px] bg-[#eef2f6]"></div>

              <div
                v-for="(etapa, i) in cronograma"
                :key="i"
                class="relative flex gap-5 pb-6 last:pb-0"
              >
                <!-- Dot -->
                <div
                  class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 border-2"
                  :class="etapa.activa
                    ? 'bg-[#fbc02d] border-[#fbc02d]'
                    : 'bg-white border-[#eef2f6]'"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" :fill="etapa.activa ? '#0a3144' : '#94a3b8'" v-html="etapa.icono"></svg>
                </div>

                <div class="flex-1 pt-1.5 pb-2">
                  <div class="flex items-center gap-2 flex-wrap mb-1">
                    <h3 class="text-[0.92rem] font-semibold text-[#0a3144] m-0">{{ etapa.titulo }}</h3>
                    <span
                      class="text-[0.62rem] font-bold tracking-[0.8px] px-2 py-[0.2rem] rounded-full"
                      :class="etapa.activa ? 'bg-[#fbc02d] text-[#0a3144]' : 'bg-[#f1f5f9] text-[#64748b]'"
                    >{{ etapa.activa ? 'EN CURSO' : etapa.estado }}</span>
                  </div>
                  <p class="text-[0.78rem] font-semibold text-[#4a6177] m-0 mb-1">{{ etapa.fecha }}</p>
                  <p class="text-[#4a6177] text-[0.82rem] leading-[1.55] m-0">{{ etapa.descripcion }}</p>
                </div>
              </div>
            </div>
          </section>

        </div>

        <!-- Columna derecha: Sidebar -->
        <div class="grid grid-cols-1 max-[860px]:grid-cols-[1fr_1fr] max-[560px]:grid-cols-1 gap-4 self-start max-[860px]:order-1">

          <!-- Descarga de formato -->
          <div id="formato" v-reveal class="bg-[#0a3144] rounded-xl p-6 max-[860px]:col-span-2 max-[560px]:col-span-1">
            <p class="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#fbc02d] m-0 mb-1">Descarga gratuita</p>
            <h3 class="text-[1.1rem] font-semibold text-white m-0 mb-2">Formato de Matrícula</h3>
            <p class="text-white/60 text-[0.82rem] leading-[1.6] m-0 mb-5">
              Descarga, completa e imprime el formulario oficial de matrícula. Preséntalo junto a los demás requisitos en secretaría.
            </p>

            <div class="flex max-[860px]:flex-row max-[560px]:flex-col flex-col gap-2">
              <a
                href="/formatos/ficha-matricula-2027.pdf"
                download
                class="flex items-center justify-center gap-2 w-full py-[0.8rem] text-[0.84rem] font-bold rounded-lg bg-[#fbc02d] text-[#0a3144] no-underline hover:bg-[#f5b81b] hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(251,192,45,0.35)] transition-all duration-200"
                @click.prevent="descargarFormato('pdf')"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                Descargar PDF
              </a>
              <a
                href="/formatos/ficha-matricula-2027.docx"
                download
                class="flex items-center justify-center gap-2 w-full py-[0.8rem] text-[0.84rem] font-semibold rounded-lg bg-white/10 text-white no-underline hover:bg-white/20 transition-all duration-200"
                @click.prevent="descargarFormato('docx')"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/>
                </svg>
                Descargar Word
              </a>
            </div>

            <p class="text-white/35 text-[0.7rem] text-center mt-4 m-0">Formato oficial — actualizado octubre 2026</p>
          </div>

          <!-- Info de contacto rápido -->
          <div v-reveal class="bg-[#f8fafc] border border-[#eef2f6] rounded-xl p-5">
            <p class="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#fbc02d] m-0 mb-3">¿Tienes dudas?</p>
            <div class="flex flex-col gap-3">
              <a href="https://wa.me/51953128645" target="_blank" rel="noopener"
                class="flex items-center gap-3 text-[0.85rem] text-[#1e2a3e] no-underline font-semibold hover:text-[#25d366] transition-colors duration-200">
                <span class="w-8 h-8 rounded-[8px] bg-[#d1fae5] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="#16a34a">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </span>
                +51 953 128 645
              </a>
              <a href="mailto:contacto@iesantarosa.edu.pe"
                class="flex items-center gap-3 text-[0.85rem] text-[#1e2a3e] no-underline font-semibold hover:text-[#b7791f] transition-colors duration-200">
                <span class="w-8 h-8 rounded-[8px] bg-[#fef3c7] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="#b7791f">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </span>
                contacto@iesantarosa.edu.pe
              </a>
              <div class="flex items-start gap-3 text-[0.85rem] text-[#4a6177]">
                <span class="w-8 h-8 rounded-[8px] bg-[#eef2f6] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="#4a6177">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </span>
                <span>Secretaría: Lun – Vie<br/>08:00 – 13:00 / 15:00 – 17:00</span>
              </div>
            </div>
          </div>

          <!-- Costos -->
          <div v-reveal class="bg-[#f8fafc] border border-[#eef2f6] rounded-xl p-5">
            <p class="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#fbc02d] m-0 mb-3">Información de costos</p>
            <div class="flex flex-col gap-2">
              <div v-for="costo in costos" :key="costo.concepto" class="flex justify-between items-center py-2 border-b border-[#eef2f6] last:border-b-0">
                <span class="text-[0.84rem] text-[#4a6177]">{{ costo.concepto }}</span>
                <span class="text-[0.84rem] font-semibold text-[#0a3144]">{{ costo.monto }}</span>
              </div>
            </div>
            <p class="text-[#94a3b8] text-[0.7rem] mt-3 m-0">* Institución educativa pública — sin costo de pensión mensual.</p>
          </div>

        </div>
      </div>

      <!-- ── Preguntas frecuentes ── -->
      <section v-reveal class="border-t border-[#eef2f6] pt-12 max-md:pt-8">
        <div class="text-center mb-10">
          <p class="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#fbc02d] m-0 mb-2">Resuelve tus dudas</p>
          <h2 class="text-[1.8rem] max-md:text-[1.5rem] font-semibold text-[#0a3144] m-0">Preguntas frecuentes</h2>
        </div>

        <div class="max-w-[760px] mx-auto flex flex-col gap-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="border border-[#eef2f6] rounded-xl overflow-hidden"
          >
            <button
              class="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-[#f8fafc] hover:bg-[#f1f5f9] transition-colors duration-200 cursor-pointer border-0 font-[inherit]"
              :class="faqAbierta === i ? 'bg-[#fff8e5] hover:bg-[#fff8e5]' : ''"
              @click="faqAbierta = faqAbierta === i ? null : i"
            >
              <span class="text-[0.9rem] font-semibold text-[#0a3144]">{{ faq.pregunta }}</span>
              <svg
                class="w-4 h-4 flex-shrink-0 text-[#fbc02d] transition-transform duration-200"
                :class="faqAbierta === i ? 'rotate-180' : ''"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <div v-if="faqAbierta === i" class="px-5 py-4 border-t border-[#eef2f6]">
              <p class="text-[#4a6177] text-[0.87rem] leading-[1.65] m-0">{{ faq.respuesta }}</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageHero from '../components/PageHero.vue'
import { useAlert } from '../composables/useAlert'
import { useSeo } from '../composables/useSeo'

useSeo({
  title: 'Admisión 2027',
  description: 'Proceso de matrícula 2027 de la I.E. Santa Rosa — Tarapoto. Consulta requisitos, cronograma y descarga los formatos para la inscripción de tu hijo.',
  path: '/admision',
})

const { mostrarAlerta } = useAlert()

const faqAbierta = ref(null)

const requisitos = [
  { titulo: 'DNI del estudiante',           detalle: 'Original y copia legible del Documento Nacional de Identidad.' },
  { titulo: 'Libreta de notas',             detalle: 'Libreta o constancia de notas del año escolar vigente (2026).' },
  { titulo: 'Partida de nacimiento',         detalle: 'Original o copia certificada por la RENIEC.' },
  { titulo: 'DNI del padre/madre/tutor',    detalle: 'Documento del apoderado legal o responsable del menor.' },
  { titulo: 'Certificado de estudios',      detalle: 'Expedido por la institución de procedencia, debidamente firmado.' },
  { titulo: '2 fotos tamaño carnet',        detalle: 'Fondo blanco, actualizadas (no mayor a 3 meses).' },
  { titulo: 'Ficha de matrícula llenada',   detalle: 'Formulario oficial descargable desde esta página, completo y con firma.' },
  { titulo: 'Constancia de SIAGIE',         detalle: 'Generada desde la plataforma del MINEDU por la institución de origen.' },
]

const cronograma = [
  {
    titulo: 'Publicación de vacantes',
    fecha: '01 de octubre de 2026',
    descripcion: 'Se publica el número de vacantes disponibles por grado en secretaría y en la página web institucional.',
    icono: `<path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/>`,
    activa: false,
    estado: 'PRÓXIMO',
  },
  {
    titulo: 'Inscripción y entrega de documentos',
    fecha: '01 – 30 de octubre de 2026',
    descripcion: 'Los apoderados entregan la documentación completa en secretaría de la institución dentro del horario establecido.',
    icono: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/>`,
    activa: true,
    estado: 'EN CURSO',
  },
  {
    titulo: 'Evaluación de expedientes',
    fecha: '01 – 15 de noviembre de 2026',
    descripcion: 'La comisión de admisión revisa y verifica la documentación presentada por los postulantes.',
    icono: `<path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>`,
    activa: false,
    estado: 'PENDIENTE',
  },
  {
    titulo: 'Publicación de resultados',
    fecha: '20 de noviembre de 2026',
    descripcion: 'Se publican las listas de estudiantes admitidos en el panel institucional y en la página web.',
    icono: `<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>`,
    activa: false,
    estado: 'PENDIENTE',
  },
  {
    titulo: 'Matrícula oficial',
    fecha: '01 – 31 de enero de 2027',
    descripcion: 'Los admitidos formalizan la matrícula en secretaría. Es obligatorio presentarse en el plazo indicado.',
    icono: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>`,
    activa: false,
    estado: 'PENDIENTE',
  },
]

const costos = [
  { concepto: 'Derecho de inscripción',  monto: 'S/ 0.00' },
  { concepto: 'Pensión mensual',         monto: 'S/ 0.00' },
  { concepto: 'Materiales educativos',   monto: 'Según lista MINEDU' },
  { concepto: 'APAFA (voluntario)',       monto: 'A convenir' },
]

const faqs = [
  {
    pregunta: '¿Cuántas vacantes hay disponibles por grado?',
    respuesta: 'El número de vacantes varía según el grado. Se publican oficialmente el 01 de octubre de 2026 en secretaría y en nuestra página web. Te recomendamos verificarlo con anticipación.',
  },
  {
    pregunta: '¿Puede postular un estudiante de otra región?',
    respuesta: 'Sí. Los estudiantes provenientes de otras regiones pueden postular presentando la misma documentación. En caso de certificados de estudios de otras regiones, deben estar debidamente legalizados.',
  },
  {
    pregunta: '¿Qué pasa si no entrego todos los documentos a tiempo?',
    respuesta: 'El expediente incompleto no será considerado válido. Se otorga un plazo de subsanación de 5 días hábiles desde la fecha de entrega. Pasado ese plazo, se pierde la postulación.',
  },
  {
    pregunta: '¿El colegio cobra algún costo de admisión?',
    respuesta: 'No. Al ser una institución educativa pública, el proceso de inscripción y matrícula no tiene costo. Los únicos pagos opcionales son los relacionados a la APAFA.',
  },
  {
    pregunta: '¿Puedo matricular a mi hijo si viene de un colegio privado?',
    respuesta: 'Sí, siempre que presente la documentación completa requerida, incluyendo el certificado de estudios de la institución privada de procedencia.',
  },
]

const descargarFormato = (tipo) => {
  mostrarAlerta({
    tipo: 'info',
    titulo: `Formato ${tipo.toUpperCase()} no disponible aún`,
    mensaje: 'El formato de matrícula estará disponible a partir del 01 de octubre de 2026. Para más información contáctanos al +51 953 128 645.',
    duracion: 7000,
  })
}
</script>
