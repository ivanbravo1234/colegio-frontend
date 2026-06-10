<template>
  <div class="bg-white text-[#1e2a3e] pb-24 max-md:pb-16">

    <PageHero
      badge="NUESTRA INSTITUCIÓN"
      title="Quiénes Somos"
      description="Más de seis décadas formando personas íntegras, comprometidas con su comunidad y preparadas para los desafíos del siglo XXI."
      :breadcrumb="[{ label: 'Nosotros' }]"
    />

    <div class="max-w-[1200px] mx-auto px-6 max-[480px]:px-4">

      <!-- ── Presentación principal ── -->
      <section class="grid grid-cols-2 max-[800px]:grid-cols-1 gap-14 max-md:gap-10 pt-14 pb-16 border-b border-[#eef2f6]">

        <div v-reveal>
          <p class="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#fbc02d] m-0 mb-2">Identidad institucional</p>
          <h2 class="text-[2rem] max-md:text-[1.6rem] font-semibold text-[#0a3144] m-0 mb-5 leading-[1.2]">
            Una institución con raíces<br class="max-md:hidden"/> sólidas y visión de futuro
          </h2>
          <p class="text-[#4a6177] text-[0.95rem] leading-[1.75] m-0 mb-4">
            La Institución Educativa <strong class="text-[#1e2a3e] font-semibold">Santa Rosa</strong> es un centro educativo público
            de gestión directa ubicado en el corazón de Tarapoto, San Martín. Desde nuestra fundación en 1959,
            hemos acompañado generaciones de familias en la formación académica, moral y ciudadana de sus hijos.
          </p>
          <p class="text-[#4a6177] text-[0.95rem] leading-[1.75] m-0 mb-6">
            Somos una institución de <strong class="text-[#1e2a3e] font-semibold">nivel secundaria</strong>,
            brindando una formación integral y de calidad a jóvenes de 1° a 5° año,
            respondiendo a los estándares del Ministerio de Educación del Perú.
          </p>
          <div class="flex gap-3 flex-wrap">
            <router-link
              to="/admision"
              class="inline-flex items-center gap-2 px-5 py-[0.75rem] text-[0.82rem] font-semibold rounded-lg bg-[#fbc02d] text-[#0a3144] no-underline hover:bg-[#f5b81b] hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(251,192,45,0.4)] transition-all duration-200"
            >
              Proceso de Admisión <span>→</span>
            </router-link>
            <router-link
              to="/contacto"
              class="inline-flex items-center gap-2 px-5 py-[0.75rem] text-[0.82rem] font-semibold rounded-lg bg-white border border-[#e2e8f0] text-[#1e2a3e] no-underline hover:border-[#0a3144] hover:text-[#0a3144] hover:-translate-y-px transition-all duration-200"
            >
              Contáctanos
            </router-link>
          </div>
        </div>

        <!-- Datos clave -->
        <div v-reveal class="grid grid-cols-2 gap-4 content-start">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="bg-[#f8fafc] border border-[#eef2f6] rounded-xl p-5 flex flex-col gap-1 hover:border-[#fbc02d] hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition-all duration-200"
          >
            <span class="text-[2rem] font-bold text-[#0a3144] leading-[1]">{{ stat.valor }}</span>
            <span class="text-[0.75rem] font-semibold text-[#fbc02d] uppercase tracking-[1px]">{{ stat.label }}</span>
            <span class="text-[0.78rem] text-[#4a6177] leading-[1.4]">{{ stat.desc }}</span>
          </div>
        </div>

      </section>

      <!-- ── Pilares institucionales ── -->
      <section class="py-16 border-b border-[#eef2f6]">
        <div v-reveal class="text-center mb-10">
          <p class="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#fbc02d] m-0 mb-2">Lo que nos define</p>
          <h2 class="text-[1.8rem] max-md:text-[1.5rem] font-semibold text-[#0a3144] m-0 mb-3">Nuestros pilares</h2>
          <p class="text-[#4a6177] text-[0.92rem] m-0 max-w-[500px] mx-auto">
            Tres principios que guían cada decisión pedagógica y cada relación dentro de nuestra comunidad.
          </p>
        </div>

        <div class="grid grid-cols-3 max-[700px]:grid-cols-1 gap-6">
          <div
            v-for="(pilar, i) in pilares"
            :key="pilar.titulo"
            v-reveal="i * 80"
            class="relative bg-[#0a3144] rounded-xl p-7 overflow-hidden group"
          >
            <div class="absolute top-0 right-0 w-24 h-24 rounded-bl-[60px] opacity-[0.07]" :style="{ backgroundColor: pilar.color }"></div>
            <div
              class="w-11 h-11 rounded-[12px] flex items-center justify-center mb-4"
              :style="{ backgroundColor: pilar.color + '25' }"
            >
              <span v-html="pilar.icono"></span>
            </div>
            <h3 class="text-[1.1rem] font-semibold text-white m-0 mb-2">{{ pilar.titulo }}</h3>
            <p class="text-white/60 text-[0.87rem] leading-[1.65] m-0">{{ pilar.descripcion }}</p>
            <div class="mt-5 h-[2px] w-10 rounded-full" :style="{ backgroundColor: pilar.color }"></div>
          </div>
        </div>
      </section>

      <!-- ── ¿Por qué elegirnos? ── -->
      <section class="py-16 border-b border-[#eef2f6]">
        <div class="grid grid-cols-2 max-[800px]:grid-cols-1 gap-14 max-md:gap-10 items-center">

          <div v-reveal>
            <p class="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#fbc02d] m-0 mb-2">Nuestras fortalezas</p>
            <h2 class="text-[1.8rem] max-md:text-[1.5rem] font-semibold text-[#0a3144] m-0 mb-6 leading-[1.2]">
              ¿Por qué elegir la<br class="max-md:hidden"/> I.E. Santa Rosa?
            </h2>
            <ul class="list-none p-0 m-0 flex flex-col gap-4">
              <li
                v-for="(item, i) in fortalezas"
                :key="i"
                class="flex items-start gap-4"
              >
                <div class="w-9 h-9 rounded-[10px] bg-[#fef3c7] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span v-html="item.icono"></span>
                </div>
                <div>
                  <p class="text-[0.92rem] font-semibold text-[#1e2a3e] m-0 mb-0.5">{{ item.titulo }}</p>
                  <p class="text-[#4a6177] text-[0.84rem] leading-[1.55] m-0">{{ item.desc }}</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Imagen / tarjeta decorativa -->
          <div v-reveal class="relative">
            <div class="rounded-2xl overflow-hidden bg-[#0a3144]" style="aspect-ratio: 4/3">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop&q=80"
                alt="Estudiantes I.E. Santa Rosa"
                class="w-full h-full object-cover opacity-75"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0a3144]/80 via-transparent to-transparent flex items-end p-6">
                <p class="text-white font-semibold text-[1rem] leading-[1.35] m-0">
                  "Formando líderes con valores<br/>para la sociedad de hoy."
                </p>
              </div>
            </div>
            <!-- Badge flotante -->
            <div class="absolute -top-4 -right-4 max-[500px]:-top-2 max-[500px]:-right-2 bg-[#fbc02d] rounded-xl px-4 py-3 shadow-[0_8px_20px_rgba(251,192,45,0.35)]">
              <p class="text-[#0a3144] font-bold text-[1.3rem] leading-[1] m-0">+65</p>
              <p class="text-[#0a3144]/70 text-[0.62rem] font-semibold uppercase tracking-[1px] m-0">años</p>
            </div>
          </div>

        </div>
      </section>

      <!-- ── CTA: Otras secciones ── -->
      <section v-reveal class="py-16">
        <div class="text-center mb-8">
          <p class="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#fbc02d] m-0 mb-2">Conoce más</p>
          <h2 class="text-[1.8rem] max-md:text-[1.5rem] font-semibold text-[#0a3144] m-0 mb-3">Explora nuestra institución</h2>
          <p class="text-[#4a6177] text-[0.92rem] m-0">Descubre todo lo que tenemos para ti y tu familia.</p>
        </div>

        <div class="grid grid-cols-3 max-[700px]:grid-cols-1 gap-4">
          <router-link
            v-for="(link, i) in enlaces"
            :key="link.ruta"
            :to="link.ruta"
            v-reveal="i * 60"
            class="flex items-center gap-4 p-5 bg-[#f8fafc] border border-[#eef2f6] rounded-xl no-underline group hover:border-[#fbc02d] hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition-all duration-200"
          >
            <div class="w-10 h-10 rounded-[12px] bg-[#fbc02d] flex items-center justify-center flex-shrink-0">
              <span v-html="link.icono"></span>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-[0.92rem] font-semibold text-[#0a3144] m-0 mb-0.5 group-hover:text-[#b7791f] transition-colors duration-200">{{ link.label }}</p>
              <p class="text-[#94a3b8] text-[0.76rem] m-0">{{ link.desc }}</p>
            </div>
            <span class="text-[#fbc02d] group-hover:translate-x-1 transition-transform duration-200">→</span>
          </router-link>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import PageHero from '../components/PageHero.vue'
import { useSeo } from '../composables/useSeo'

useSeo({
  title: 'Nosotros',
  description: 'Conoce la historia, misión y los pilares que hacen de la I.E. Santa Rosa una institución educativa de referencia en Tarapoto desde 1959.',
  path: '/about',
})

const stats = [
  { valor: '1959', label: 'Año de fundación',   desc: 'Más de seis décadas de historia educativa en Tarapoto.' },
  { valor: '1 200+', label: 'Estudiantes',       desc: 'Familias que confían en nosotros cada año escolar.' },
  { valor: '80+',  label: 'Docentes',            desc: 'Maestros comprometidos y en constante capacitación.' },
  { valor: '5',    label: 'Grados de secundaria', desc: 'De 1° a 5° año con formación integral y de calidad.' },
]


const pilares = [
  {
    titulo: 'Disciplina',
    color: '#fbc02d',
    descripcion: 'Cultivamos el orden, la perseverancia y el cumplimiento del deber como fundamentos del carácter, dentro y fuera del aula.',
    icono: '<svg viewBox="0 0 24 24" width="20" height="20" fill="#fbc02d"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>',
  },
  {
    titulo: 'Trabajo',
    color: '#38bdf8',
    descripcion: 'Valoramos el esfuerzo constante, la dedicación y la cultura del trabajo como el camino más honesto hacia el éxito personal y colectivo.',
    icono: '<svg viewBox="0 0 24 24" width="20" height="20" fill="#38bdf8"><path d="M20 6h-2.18c.07-.44.18-.88.18-1.36C18 2.53 15.96.5 13.5.5S9 2.53 9 4.64c0 .48.11.92.18 1.36H7c-1.11 0-1.99.89-1.99 2L5 19c0 1.11.89 2 2 2h11c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6.5-4c1.38 0 2.5 1.12 2.5 2.5S14.88 7 13.5 7 11 5.88 11 4.5 12.12 2 13.5 2zM13 13l-2-2-1 1 3 3 5-5-1-1-4 4z"/></svg>',
  },
  {
    titulo: 'Dignidad',
    color: '#a3e635',
    descripcion: 'Formamos personas que se reconocen a sí mismas con valor, respetan a los demás y actúan con integridad en toda circunstancia.',
    icono: '<svg viewBox="0 0 24 24" width="20" height="20" fill="#65a30d"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
  },
]

const fortalezas = [
  {
    titulo: 'Plana docente capacitada',
    desc: 'Nuestros maestros participan en programas de actualización pedagógica permanente, aplicando metodologías innovadoras en el aula.',
    icono: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#b7791f"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',
  },
  {
    titulo: 'Infraestructura moderna',
    desc: 'Aulas equipadas, laboratorio de cómputo, biblioteca, losas deportivas y espacios verdes que favorecen el aprendizaje integral.',
    icono: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#b7791f"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
  },
  {
    titulo: 'Actividades extracurriculares',
    desc: 'Arte, deportes, ciencias, teatro y talleres de liderazgo que potencian los talentos únicos de cada estudiante.',
    icono: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#b7791f"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>',
  },
  {
    titulo: 'Logros académicos destacados',
    desc: 'Medallas en olimpiadas regionales y nacionales de matemática, ciencias y comunicación avalan el nivel académico de nuestros estudiantes.',
    icono: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#b7791f"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V18H9v2h6v-2h-2v-2.1a5.01 5.01 0 0 0 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm9 5c0 1.65-1.35 3-3 3s-3-1.35-3-3V5h6v8zm5-5c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>',
  },
  {
    titulo: 'Comunidad y familia',
    desc: 'Fomentamos una relación activa entre la escuela y los padres de familia, porque la educación es un proyecto compartido.',
    icono: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#b7791f"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>',
  },
]

const enlaces = [
  {
    ruta: '/mision-vision',
    label: 'Misión y Visión',
    desc: 'Nuestros propósitos institucionales',
    icono: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#0a3144"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>',
  },
  {
    ruta: '/historia',
    label: 'Historia',
    desc: '65 años de legado educativo',
    icono: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#0a3144"><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>',
  },
  {
    ruta: '/directivos',
    label: 'Directivos',
    desc: 'Equipo de liderazgo institucional',
    icono: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#0a3144"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',
  },
  {
    ruta: '/plana-docente',
    label: 'Plana Docente',
    desc: 'Nuestros maestros y especialistas',
    icono: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#0a3144"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>',
  },
  {
    ruta: '/news',
    label: 'Noticias',
    desc: 'Logros y eventos de la institución',
    icono: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#0a3144"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/></svg>',
  },
  {
    ruta: '/admision',
    label: 'Admisión 2027',
    desc: 'Proceso de matrícula e ingreso',
    icono: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#0a3144"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>',
  },
]
</script>
