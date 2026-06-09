<template>
  <div class="bg-white text-[#1e2a3e] py-12 pb-20">
    <div class="max-w-[1200px] mx-auto px-6 max-[480px]:px-4">

      <!-- Encabezado -->
      <header class="text-center mb-10">
        <span class="inline-block bg-[#fbc02d] text-[#1e2a3e] text-[0.7rem] font-extrabold tracking-[2px] py-[0.4rem] px-[0.9rem] rounded-sm mb-3">ÚLTIMAS NOTICIAS</span>
        <h1 class="relative inline-block text-[2.8rem] max-md:text-[2.2rem] max-[600px]:text-[1.9rem] font-black text-[#1e2a3e] m-0 mb-3 tracking-tight after:block after:w-[70px] after:h-1 after:bg-[#fbc02d] after:rounded-full after:mx-auto after:mt-2">
          Mantente informado
        </h1>
        <p class="text-[#4a6177] max-w-[700px] mx-auto text-[0.95rem] leading-relaxed mt-2">
          Conoce las novedades, logros y eventos más relevantes de nuestra comunidad educativa. Transparencia y cercanía con cada familia.
        </p>
      </header>

      <!-- Filtros -->
      <div class="relative flex flex-wrap gap-[0.6rem] items-center justify-center mb-10 max-[600px]:flex-col max-[600px]:items-stretch">
        <button
          v-for="cat in categorias"
          :key="cat"
          @click="categoriaSeleccionada = cat"
          class="px-[1.1rem] py-[0.55rem] text-[0.78rem] font-bold tracking-[0.8px] rounded-lg border transition-all duration-200 cursor-pointer font-[inherit]"
          :class="categoriaSeleccionada === cat
            ? 'bg-[#1e2a3e] border-[#1e2a3e] text-[#fbc02d]'
            : 'bg-[#f1f5f9] border-[#e2e8f0] text-[#4a6177] hover:border-[#fbc02d] hover:text-[#1e2a3e]'"
        >
          {{ cat }}
        </button>
        <a
          href="#"
          class="absolute right-0 top-1/2 -translate-y-1/2 max-[900px]:static max-[900px]:transform-none max-[900px]:ml-auto max-[600px]:text-center max-[600px]:ml-0 max-[600px]:justify-center inline-flex items-center gap-[0.3rem] text-[#b7791f] no-underline text-[0.85rem] font-bold transition-all duration-200 hover:text-[#8a5a00] hover:gap-[0.5rem]"
        >
          Ver archivo completo <span>→</span>
        </a>
      </div>

      <!-- Grid de noticias -->
      <div class="grid grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[1.8rem]">
        <article
          v-for="noticia in noticiasFiltradas"
          :key="noticia.id"
          class="bg-white rounded-[14px] overflow-hidden border border-[#eef2f6] shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-[#fbc02d] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
        >
          <div
            class="relative w-full bg-[#1a2f3a] flex items-start p-3"
            style="aspect-ratio: 16/10"
            :style="imagenFondo(noticia.imagen)"
          >
            <span
              class="relative z-10 text-[0.65rem] font-extrabold tracking-[1.2px] py-[0.3rem] px-[0.7rem] rounded-sm text-[#1e2a3e]"
              :class="{
                'bg-[#fbc02d]': noticia.categoria === 'INSTITUCIONAL',
                'bg-[#38bdf8]': noticia.categoria === 'ACADÉMICO',
                'bg-[#a3e635]': noticia.categoria === 'ACTIVIDADES',
                'bg-[#fb923c]': noticia.categoria === 'DEPORTES',
              }"
            >
              {{ noticia.categoria }}
            </span>
          </div>

          <div class="p-5 flex flex-col gap-[0.4rem] flex-1">
            <p class="flex gap-4 text-[0.72rem] text-[#94a3b8] m-0 mb-1 flex-wrap">
              <span class="inline-flex items-center gap-[0.3rem]">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"/>
                </svg>
                {{ noticia.fecha }}
              </span>
              <span class="inline-flex items-center gap-[0.3rem]">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                {{ noticia.autor }}
              </span>
            </p>
            <h3 class="text-[1.05rem] font-extrabold text-[#1e2a3e] m-0 leading-[1.35] tracking-tight">{{ noticia.titulo }}</h3>
            <p class="text-[#4a6177] text-[0.86rem] leading-[1.55] m-0 flex-1 mb-3">{{ noticia.excerpt }}</p>
            <router-link
              :to="{ name: 'NoticiaDetalle', params: { id: noticia.id } }"
              class="inline-flex items-center gap-[0.3rem] text-[#b7791f] no-underline text-[0.78rem] font-extrabold tracking-[0.5px] pt-[0.6rem] border-t border-[#eef2f6] transition-all duration-200 hover:text-[#1e2a3e] hover:gap-[0.5rem]"
            >
              Leer artículo completo <span>→</span>
            </router-link>
          </div>
        </article>
      </div>

      <!-- Sin resultados -->
      <div v-if="noticiasFiltradas.length === 0" class="text-center py-12 px-4 bg-[#f9fafc] rounded-[14px] border-2 border-dashed border-[#e2e8f0] text-[#4a6177]">
        No hay noticias en esta categoría por el momento.
      </div>

      <!-- Cargar más -->
      <div v-if="noticiasFiltradas.length > 0" class="flex justify-center mt-10">
        <button class="inline-flex items-center gap-2 px-8 py-[0.85rem] text-[0.88rem] font-bold tracking-[0.5px] rounded-lg bg-[#1e2a3e] text-white border-0 hover:bg-[#0a3144] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(10,49,68,0.25)] transition-all duration-200 cursor-pointer font-[inherit]">
          Cargar más noticias
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categorias = ['TODAS', 'INSTITUCIONAL', 'ACADÉMICO', 'ACTIVIDADES', 'DEPORTES']
const categoriaSeleccionada = ref('TODAS')

const noticias = ref([
  { id: 1, titulo: 'Inauguración del Año Escolar 2026', excerpt: 'Damos la bienvenida a toda nuestra comunidad educativa en este nuevo ciclo lleno de retos y aprendizajes. Una ceremonia emotiva marcó el inicio de las clases…', categoria: 'INSTITUCIONAL', fecha: '15 Mar, 2026', autor: 'Dirección', imagen: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&h=450&fit=crop&q=80' },
  { id: 2, titulo: 'Logros destacados en las Olimpiadas Nacionales', excerpt: 'Nuestros estudiantes obtuvieron los primeros puestos en el concurso regional de matemáticas y ciencias, llevando en alto el nombre de la institución…', categoria: 'ACADÉMICO', fecha: '08 May, 2026', autor: 'Coord. Académica', imagen: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&h=450&fit=crop&q=80' },
  { id: 3, titulo: 'Taller de Innovación Tecnológica para Docentes', excerpt: 'Se realizó con éxito el primer seminario de herramientas digitales aplicadas a la educación, dirigido a nuestros docentes de todas las áreas…', categoria: 'ACTIVIDADES', fecha: '22 Abr, 2026', autor: 'Capacitación', imagen: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&h=450&fit=crop&q=80' },
  { id: 4, titulo: 'Campeonato Inter-escolar de Atletismo 2026', excerpt: 'Nuestra delegación deportiva obtuvo el segundo lugar a nivel provincial, destacando en pruebas de velocidad y salto largo…', categoria: 'DEPORTES', fecha: '12 May, 2026', autor: 'Dept. Educación Física', imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&h=450&fit=crop&q=80' },
  { id: 5, titulo: 'Feria de Ciencias: Proyectos de los estudiantes de 4° y 5°', excerpt: 'Más de 30 proyectos fueron presentados por nuestros estudiantes, mostrando su creatividad y aplicación práctica de la metodología científica…', categoria: 'ACADÉMICO', fecha: '03 May, 2026', autor: 'Coord. Académica', imagen: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=700&h=450&fit=crop&q=80' },
  { id: 6, titulo: 'Reunión informativa para padres de familia', excerpt: 'El pasado sábado se llevó a cabo la reunión general de padres de familia, donde se presentaron los avances académicos del primer bimestre…', categoria: 'INSTITUCIONAL', fecha: '18 Abr, 2026', autor: 'Dirección', imagen: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=700&h=450&fit=crop&q=80' },
  { id: 7, titulo: 'Festival de Arte y Cultura 2026', excerpt: 'Una jornada llena de color y tradición. Nuestros estudiantes de todas las edades mostraron su talento en música, danza y artes plásticas…', categoria: 'ACTIVIDADES', fecha: '28 May, 2026', autor: 'Dept. Arte', imagen: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&h=450&fit=crop&q=80' },
  { id: 8, titulo: 'Selección de fútbol clasifica a la etapa regional', excerpt: 'Tras una emocionante final, nuestra selección de fútbol sub-17 venció 2-1 y se clasifica para la etapa regional de los juegos deportivos…', categoria: 'DEPORTES', fecha: '06 Jun, 2026', autor: 'Dept. Educación Física', imagen: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=700&h=450&fit=crop&q=80' },
  { id: 9, titulo: 'Charla: Ciberbullying y uso seguro de redes sociales', excerpt: 'Especialistas brindaron una charla a estudiantes del nivel secundaria sobre los riesgos del ciberacoso y el uso responsable de la tecnología…', categoria: 'ACTIVIDADES', fecha: '20 May, 2026', autor: 'Tutoría', imagen: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=450&fit=crop&q=80' },
])

const noticiasFiltradas = computed(() => {
  if (categoriaSeleccionada.value === 'TODAS') return noticias.value
  return noticias.value.filter((n) => n.categoria === categoriaSeleccionada.value)
})

const imagenFondo = (url) => ({
  backgroundImage: `linear-gradient(rgba(10, 49, 68, 0.25), rgba(10, 49, 68, 0.5)), url(${url})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})
</script>
