<template>
  <main class="text-[#1e2a3e] bg-white">

    <!-- HERO -->
    <section class="relative flex flex-col bg-[#0a0a0a] overflow-hidden" style="min-height: 88vh">

      <!-- Slides de fondo — crossfade automático -->
      <div
        v-for="(img, i) in heroImages"
        :key="i"
        class="absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-[1800ms] ease-in-out"
        :class="i === currentSlide ? 'opacity-100' : 'opacity-0'"
        :style="{ backgroundImage: `url(${img})`, backgroundPosition: 'center 30%' }"
      ></div>

      <!-- Overlays negros -->
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>

      <!-- Contenido — texto cambia con cada slide -->
      <div class="relative z-10 flex-1 flex items-center">
        <div class="w-full max-w-[1200px] mx-auto px-8 sm:px-10 py-16 sm:py-20">
          <Transition name="hero-text" mode="out-in">
            <div :key="currentSlide">

              <!-- Eyebrow -->
              <div class="flex items-center gap-3 mb-6">
                <div class="w-7 h-[2px] bg-[#fbc02d] flex-shrink-0"></div>
                <span class="text-[#fbc02d] font-medium text-[0.66rem] sm:text-[0.7rem] tracking-[3px] uppercase leading-none">
                  {{ heroSlides[currentSlide].eyebrow }}
                </span>
              </div>

              <!-- Título -->
              <h1 class="font-bold text-white m-0 mb-5 leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
                  style="font-size: clamp(1.85rem, 5vw, 3.6rem); max-width: 600px">
                {{ heroSlides[currentSlide].title }}
                <span class="block text-[#fbc02d]">{{ heroSlides[currentSlide].subtitle }}</span>
              </h1>

              <!-- Separador -->
              <div class="w-10 h-[2px] bg-[#fbc02d]/60 mb-5"></div>

              <!-- Descripción -->
              <p class="font-normal text-white/85 m-0 mb-9 leading-[1.8] drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]"
                 style="font-size: clamp(0.88rem, 1.6vw, 1rem); max-width: 440px">
                {{ heroSlides[currentSlide].desc }}
              </p>

              <!-- Botones -->
              <div class="flex flex-wrap gap-3">
                <router-link to="/about" class="px-6 py-[0.78rem] text-[0.78rem] font-semibold tracking-[0.8px] rounded-lg bg-[#fbc02d] text-[#0a3144] hover:bg-[#ffd54f] transition-colors duration-300 no-underline">
                  CONÓCENOS
                </router-link>
                <router-link to="/admision" class="px-6 py-[0.78rem] text-[0.78rem] font-semibold tracking-[0.8px] rounded-lg bg-white/10 text-white border border-white/30 hover:bg-white/20 hover:border-white/50 transition-colors duration-300 no-underline">
                  ADMISIÓN 2027
                </router-link>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Barra de estadísticas -->
      <div class="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-[6px]">
        <div class="max-w-[1200px] mx-auto px-8 sm:px-10 py-4 sm:py-5">
          <div class="grid grid-cols-3 divide-x divide-white/10">
            <div v-for="stat in stats" :key="stat.label" class="flex flex-col items-center gap-1 px-2 py-1">
              <span class="font-bold text-[#fbc02d] leading-none text-[1.5rem] sm:text-[1.65rem]">{{ stat.value }}</span>
              <span class="font-medium text-white/70 uppercase text-center leading-tight text-[0.58rem] sm:text-[0.62rem]" style="letter-spacing: 1.2px">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VALORES -->
    <section class="relative bg-white overflow-hidden">
      <div class="max-w-[1200px] mx-auto px-6 py-24 max-md:py-16 relative">

        <div v-reveal class="mb-14 max-md:mb-10 relative z-10">
          <span class="inline-block bg-[#fbc02d] text-[#1e2a3e] font-bold text-[0.7rem] tracking-[2px] py-[0.4rem] px-[0.9rem] mb-5 rounded-sm">NUESTRA ESENCIA</span>
          <h2 class="text-[2.8rem] max-md:text-[2rem] max-[480px]:text-[1.7rem] font-bold text-[#0a3144] m-0 mb-3 leading-[1.1]">Nuestros Valores</h2>
          <p class="text-[#4a6177] m-0 text-[1rem] leading-relaxed max-w-[560px]">
            Tres pilares fundamentales que guían a cada estudiante hacia la realización personal y profesional.
          </p>
        </div>

        <div class="grid grid-cols-3 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 gap-8 max-md:gap-5 relative z-10">
          <!-- Disciplina -->
          <div v-reveal class="p-8 max-md:p-6 rounded-xl bg-[#0a3144] text-white flex flex-col">
            <div class="w-11 h-11 rounded-[10px] flex items-center justify-center mb-6 bg-[#fbc02d] text-[#0a3144] flex-shrink-0">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
            </div>
            <h3 class="text-[1.5rem] font-semibold m-0 mb-3">Disciplina</h3>
            <p class="m-0 text-[0.88rem] leading-[1.65] opacity-80">Promovemos el orden, el respeto por las normas y el autocontrol como herramientas vitales para la convivencia armónica y el éxito académico.</p>
          </div>

          <!-- Trabajo -->
          <div v-reveal="100" class="p-8 max-md:p-6 rounded-xl bg-[#fbc02d] text-[#1e2a3e] flex flex-col">
            <div class="w-11 h-11 rounded-[10px] flex items-center justify-center mb-6 bg-[#1e2a3e] text-[#fbc02d] flex-shrink-0">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L7 9.9V13h2V9.6l1.8-.7"/>
              </svg>
            </div>
            <h3 class="text-[1.5rem] font-semibold m-0 mb-3">Trabajo</h3>
            <p class="m-0 text-[0.88rem] leading-[1.65] opacity-80">Fomentamos la cultura del esfuerzo y la perseverancia como el único camino hacia la excelencia y el cumplimiento de metas personales.</p>
          </div>

          <!-- Dignidad -->
          <div v-reveal="200" class="p-8 max-md:p-6 rounded-xl bg-white text-[#1e2a3e] border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col max-[900px]:col-span-2 max-[560px]:col-span-1">
            <div class="w-11 h-11 rounded-[10px] flex items-center justify-center mb-6 bg-[#0a3144] text-[#fbc02d] flex-shrink-0">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <h3 class="text-[1.5rem] font-semibold m-0 mb-3">Dignidad</h3>
            <p class="m-0 text-[0.88rem] leading-[1.65] opacity-80">Cultivamos el respeto propio y hacia los demás, valorando la integridad humana como el tesoro más preciado de nuestra comunidad.</p>
          </div>
        </div>

        <!-- Marca de agua -->
        <div
          class="absolute top-[30%] right-[2%] text-[11rem] font-bold text-[rgba(251,192,45,0.10)] leading-none pointer-events-none select-none z-0 max-[900px]:hidden"
          style="letter-spacing: -8px"
          aria-hidden="true"
        >SR</div>
      </div>
    </section>

    <!-- CONVENIOS -->
    <section class="bg-[#f8fafc]">
      <div class="max-w-[1200px] mx-auto px-6 py-24 max-md:py-16">

        <div v-reveal class="text-center mb-14 max-md:mb-10">
          <span class="inline-block bg-[#0a3144] text-[#fbc02d] font-bold text-[0.7rem] tracking-[2px] py-[0.4rem] px-[0.9rem] mb-5 rounded-sm">ALIANZAS ESTRATÉGICAS</span>
          <h2 class="text-[2.4rem] max-md:text-[1.8rem] max-[480px]:text-[1.6rem] font-semibold text-[#0a3144] m-0 mb-3 leading-[1.1]">Convenios Institucionales</h2>
          <p class="text-[#4a6177] m-0 text-[1rem] leading-relaxed max-w-[500px] mx-auto">
            Alianzas con instituciones de referencia que enriquecen la formación de nuestros estudiantes.
          </p>
        </div>

        <div class="grid grid-cols-3 max-[700px]:grid-cols-1 gap-6 max-md:gap-4">
          <!-- Macmillan -->
          <div v-reveal class="flex flex-col items-center text-center p-8 max-md:p-6 rounded-xl bg-white border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-200 group">
            <div class="w-16 h-16 flex items-center justify-center rounded-lg bg-[#1e2a3e] text-[#f5b81b] mb-5 shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-transform duration-200 group-hover:scale-105 flex-shrink-0">
              <span class="text-[2rem] font-bold leading-none">M</span>
            </div>
            <h3 class="text-[1rem] font-semibold text-[#0a3144] m-0 mb-2">Macmillan Education</h3>
            <p class="text-[0.82rem] text-[#4a6177] leading-relaxed m-0">Programa de inglés certificado con metodología internacional para todos los niveles.</p>
          </div>

          <!-- Google -->
          <div v-reveal="100" class="flex flex-col items-center text-center p-8 max-md:p-6 rounded-xl bg-white border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-200 group">
            <div class="w-16 h-16 flex items-center justify-center rounded-lg bg-white text-[#4285f4] border border-[#e8eef8] mb-5 shadow-[0_4px_12px_rgba(66,133,244,0.12)] transition-transform duration-200 group-hover:scale-105 flex-shrink-0">
              <span class="text-[2rem] font-bold leading-none">G</span>
            </div>
            <h3 class="text-[1rem] font-semibold text-[#0a3144] m-0 mb-2">Google Workspace</h3>
            <p class="text-[0.82rem] text-[#4a6177] leading-relaxed m-0">Herramientas digitales para la educación que potencian la colaboración y la productividad.</p>
          </div>

          <!-- B-Nice -->
          <div v-reveal="200" class="flex flex-col items-center text-center p-8 max-md:p-6 rounded-xl bg-white border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-200 group">
            <div class="w-16 h-16 flex items-center justify-center rounded-lg bg-[#f5b81b] text-[#1e2a3e] mb-5 shadow-[0_4px_12px_rgba(245,184,27,0.2)] transition-transform duration-200 group-hover:scale-105 flex-shrink-0">
              <span class="text-[2rem] font-bold leading-none">B</span>
            </div>
            <h3 class="text-[1rem] font-semibold text-[#0a3144] m-0 mb-2">B-Nice Academy</h3>
            <p class="text-[0.82rem] text-[#4a6177] leading-relaxed m-0">Formación en valores y habilidades blandas para el desarrollo integral del estudiante.</p>
          </div>
        </div>

        <div v-reveal class="flex justify-center mt-10">
          <router-link to="/agreements" class="inline-flex items-center gap-2 px-6 py-[0.78rem] text-[0.82rem] font-semibold tracking-[0.5px] rounded-lg border border-[#d1dce6] text-[#0a3144] bg-white hover:bg-[#0a3144] hover:text-white hover:border-[#0a3144] transition-all duration-200 no-underline">
            Ver todos los convenios
            <span class="text-[1rem] leading-none">→</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- NOTICIAS -->
    <section class="bg-[#0a3144]">
      <div class="max-w-[1200px] mx-auto px-6 py-24 max-md:py-16">

        <div v-reveal class="flex justify-between items-end mb-14 max-md:mb-10 flex-wrap gap-4 max-md:flex-col max-md:items-start">
          <div>
            <span class="inline-block bg-[#fbc02d] text-[#1e2a3e] font-bold text-[0.7rem] tracking-[2px] py-[0.4rem] px-[0.9rem] mb-5 rounded-sm">ACTUALIDAD</span>
            <h2 class="text-[2.4rem] max-md:text-[1.8rem] max-[480px]:text-[1.6rem] font-semibold text-white m-0 mb-2 leading-[1.1]">Últimas Noticias</h2>
            <p class="text-white/60 m-0 text-[0.92rem] leading-relaxed">Lo más reciente de nuestra comunidad educativa.</p>
          </div>
          <router-link to="/news" class="flex items-center gap-2 text-[#fbc02d] no-underline text-[0.88rem] font-semibold transition-all duration-200 hover:gap-3 flex-shrink-0">
            Ver todas <span>→</span>
          </router-link>
        </div>

        <div class="grid grid-cols-3 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 gap-6 max-md:gap-4">
          <article
            v-for="(noticia, i) in noticias"
            :key="noticia.titulo"
            v-reveal="i * 100"
            class="bg-[#06263a] rounded-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1"
          >
            <div
              class="h-[200px] flex items-start justify-start p-3"
              :style="noticiaImg(noticia.imagen)"
            >
              <span class="bg-[#fbc02d] text-[#1e2a3e] text-[0.65rem] font-bold tracking-[1.2px] py-[0.3rem] px-[0.7rem] rounded-sm">
                {{ noticia.categoria }}
              </span>
            </div>
            <div class="p-5 flex flex-col flex-1">
              <span class="text-white/40 text-[0.72rem] font-medium tracking-[0.5px] mb-3">{{ noticia.fecha }}</span>
              <h3 class="text-[1rem] font-semibold text-white m-0 mb-3 leading-[1.35] flex-1">
                {{ noticia.titulo }}
              </h3>
              <p class="text-[0.82rem] text-[#b6c2cc] leading-relaxed m-0 mb-4">
                {{ noticia.resumen }}
              </p>
              <router-link :to="`/news/${noticia.id}`" class="inline-flex items-center gap-1 text-[#fbc02d] no-underline text-[0.8rem] font-semibold hover:gap-2 transition-all duration-200">
                Leer más <span class="text-[0.9rem]">›</span>
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import heroImg from '@/assets/PortadaSRWEB.png'
import { useSeo } from '../composables/useSeo'

useSeo({
  description: 'I.E. Santa Rosa, Tarapoto — institución educativa con más de seis décadas formando estudiantes con valores, excelencia académica y compromiso con el futuro de San Martín.',
  path: '/',
})

// ── Hero carousel ─────────────────────────────────────────────────────────
const heroImages = [
  heroImg,
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1600&h=900&fit=crop&q=80',
]

const heroSlides = [
  {
    eyebrow: 'Educación Secundaria',
    title:    'Forjando líderes',
    subtitle: 'con valores',
    desc:     'Educamos con vocación y compromiso, formando personas íntegras preparadas para transformar su entorno con fe, ciencia y disciplina.',
  },
  {
    eyebrow: 'Excelencia Académica',
    title:    'Aprendizaje que',
    subtitle: 'transforma vidas',
    desc:     'Metodologías innovadoras y docentes comprometidos garantizan una educación de calidad que prepara a nuestros estudiantes para el futuro.',
  },
  {
    eyebrow: 'Comunidad & Familia',
    title:    'Unidos por',
    subtitle: 'la educación',
    desc:     'Construimos una comunidad educativa sólida donde familias, docentes y estudiantes trabajan juntos hacia un mismo propósito: el éxito de cada alumno.',
  },
  {
    eyebrow: 'Infraestructura Moderna',
    title:    'Espacios pensados',
    subtitle: 'para crecer',
    desc:     'Contamos con instalaciones modernas y equipadas para brindar el mejor ambiente de aprendizaje y desarrollo integral a nuestra comunidad.',
  },
]

const currentSlide = ref(0)
let slideTimer = null

onMounted(() => {
  slideTimer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % heroImages.length
  }, 5500)
})
onUnmounted(() => clearInterval(slideTimer))

// ── Stats ─────────────────────────────────────────────────────────────────
const stats = [
  { value: '67+',  label: 'Años' },
  { value: '1300+', label: 'Estudiantes'       },
  { value: '60+',  label: 'Docentes'          },
]

// ── Noticias ──────────────────────────────────────────────────────────────
const noticias = [
  {
    id: 1,
    categoria: 'INSTITUCIONAL',
    titulo: 'Inauguración del Año Escolar 2026',
    fecha: '15 Mar 2026',
    resumen: 'Damos la bienvenida a toda nuestra comunidad educativa en este nuevo ciclo lleno de retos y aprendizajes.',
    imagen: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop&q=80',
  },
  {
    id: 2,
    categoria: 'ACADÉMICO',
    titulo: 'Logros destacados en las Olimpiadas',
    fecha: '8 Mar 2026',
    resumen: 'Nuestros estudiantes obtuvieron los primeros puestos en el concurso regional de matemáticas y ciencias.',
    imagen: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&q=80',
  },
  {
    id: 3,
    categoria: 'ACTIVIDADES',
    titulo: 'Taller de Innovación Tecnológica',
    fecha: '2 Mar 2026',
    resumen: 'Se realizó con éxito el primer seminario de herramientas digitales aplicadas a la educación para padres.',
    imagen: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&q=80',
  },
]

const noticiaImg = (url) => ({
  backgroundImage: `linear-gradient(rgba(10,49,68,0.55), rgba(10,49,68,0.55)), url(${url})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})
</script>

<style scoped>
/* ── Transición de texto del hero al cambiar slide ── */
.hero-text-enter-active {
  transition: opacity 0.55s ease, transform 0.55s ease;
}
.hero-text-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.hero-text-enter-from {
  opacity: 0;
  transform: translateY(14px);
}
.hero-text-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
