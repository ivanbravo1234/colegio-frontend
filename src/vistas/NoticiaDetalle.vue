<template>
  <div class="bg-white text-[#1e2a3e] py-8 pb-20">
    <div class="max-w-[900px] mx-auto px-6 max-[480px]:px-4">

      <!-- Migas de pan -->
      <nav class="flex items-center gap-[0.4rem] text-[0.85rem] text-[#94a3b8] mb-6 flex-wrap">
        <router-link to="/" class="text-[#b7791f] no-underline transition-colors duration-200 hover:text-[#1e2a3e]">Inicio</router-link>
        <span aria-hidden="true">›</span>
        <router-link to="/noticias" class="text-[#b7791f] no-underline transition-colors duration-200 hover:text-[#1e2a3e]">Noticias</router-link>
        <span aria-hidden="true">›</span>
        <span class="text-[#1e2a3e] font-semibold">Detalle</span>
      </nav>

      <article v-if="noticia">
        <!-- Cabecera -->
        <header class="mb-6">
          <span
            class="inline-block text-[0.7rem] font-extrabold tracking-[1.5px] py-[0.35rem] px-[0.8rem] rounded-sm text-[#1e2a3e] mb-3"
            :class="{
              'bg-[#fbc02d]': noticia.categoria === 'INSTITUCIONAL',
              'bg-[#38bdf8]': noticia.categoria === 'ACADÉMICO',
              'bg-[#a3e635]': noticia.categoria === 'ACTIVIDADES',
              'bg-[#fb923c]': noticia.categoria === 'DEPORTES',
            }"
          >
            {{ noticia.categoria }}
          </span>
          <h1 class="text-[2.4rem] max-[600px]:text-[1.7rem] font-black text-[#1e2a3e] m-0 mb-4 leading-[1.15] tracking-tight">
            {{ noticia.titulo }}
          </h1>
          <div class="flex gap-5 text-[#4a6177] text-[0.85rem] flex-wrap">
            <span class="inline-flex items-center gap-[0.4rem]">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"/>
              </svg>
              {{ noticia.fecha }}
            </span>
            <span class="inline-flex items-center gap-[0.4rem]">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              {{ noticia.autor }}
            </span>
          </div>
        </header>

        <!-- Imagen -->
        <div
          class="w-full bg-[#1a2f3a] rounded-[14px] mb-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
          style="aspect-ratio: 16/8; background-size: cover; background-position: center"
          :style="{ backgroundImage: `url(${noticia.imagen})` }"
          role="img"
          :aria-label="noticia.titulo"
        ></div>

        <!-- Contenido -->
        <div class="text-[1rem] leading-[1.8] text-[#2c3f4f]">
          <p class="mb-5">{{ noticia.excerpt }}</p>
          <p class="mb-5">
            Este es el contenido de la noticia en su versión extendida. En una implementación completa, este artículo se cargaría dinámicamente desde un servicio backend o un CMS, permitiendo a la institución educativa publicar novedades, eventos, comunicados y logros de manera periódica.
          </p>
          <p class="mb-5">
            La I.E. Santa Rosa reafirma su compromiso con la transparencia y la comunicación activa con toda la comunidad educativa, manteniendo informados a estudiantes, padres de familia y público en general sobre las actividades que fortalecen nuestra formación integral.
          </p>
          <blockquote class="bg-[#fef9e3] border-l-4 border-[#fbc02d] py-4 px-[1.4rem] my-6 italic text-[#1e2a3e] rounded-r-lg font-semibold">
            "Educar es dejar una huella en el corazón de cada estudiante, sembrando valores que perdurarán para toda la vida."
          </blockquote>
          <p class="mb-5">
            Para más información o consultas, puede acercarse a la dirección del colegio en horario de atención, o escribirnos a través de la sección de
            <router-link to="/contacto" class="text-[#b7791f] no-underline font-bold hover:underline">Contacto</router-link>.
          </p>
        </div>

        <!-- Acciones -->
        <div class="flex justify-between items-center mt-10 pt-6 border-t border-[#eef2f6] flex-wrap gap-4 max-[600px]:flex-col max-[600px]:items-stretch">
          <router-link
            to="/noticias"
            class="inline-flex items-center gap-[0.375rem] px-5 py-[0.7rem] text-[0.9rem] font-bold rounded-lg bg-[#f1f5f9] text-[#1e2a3e] no-underline hover:bg-[#fbc02d] transition-all duration-200"
          >
            <span aria-hidden="true">←</span> Volver a noticias
          </router-link>
          <div class="flex items-center gap-2 text-[#4a6177] text-[0.85rem] max-[600px]:justify-center">
            <span>Compartir:</span>
            <button class="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#e2e8f0] bg-white text-[#1e2a3e] text-[0.7rem] font-bold hover:bg-[#fbc02d] hover:border-[#fbc02d] transition-all duration-200 cursor-pointer" aria-label="Compartir en Facebook">FB</button>
            <button class="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#e2e8f0] bg-white text-[#1e2a3e] text-[0.7rem] font-bold hover:bg-[#fbc02d] hover:border-[#fbc02d] transition-all duration-200 cursor-pointer" aria-label="Compartir en Twitter">TW</button>
            <button class="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#e2e8f0] bg-white text-[#1e2a3e] text-[0.7rem] font-bold hover:bg-[#fbc02d] hover:border-[#fbc02d] transition-all duration-200 cursor-pointer" aria-label="Compartir por WhatsApp">WA</button>
          </div>
        </div>
      </article>

      <!-- No encontrada -->
      <div v-else class="text-center py-16 px-4 text-[#4a6177]">
        <h2 class="text-[1.6rem] font-extrabold text-[#1e2a3e] m-0 mb-2">Noticia no encontrada</h2>
        <p class="mb-6">La noticia que buscas no existe o fue removida.</p>
        <router-link
          to="/noticias"
          class="inline-flex items-center gap-[0.375rem] px-5 py-[0.7rem] text-[0.9rem] font-bold rounded-lg bg-[#f1f5f9] text-[#1e2a3e] no-underline hover:bg-[#fbc02d] transition-all duration-200"
        >
          Volver a noticias
        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const todasLasNoticias = [
  { id: 1, titulo: 'Inauguración del Año Escolar 2026', excerpt: 'Damos la bienvenida a toda nuestra comunidad educativa en este nuevo ciclo lleno de retos y aprendizajes. Una ceremonia emotiva marcó el inicio de las clases…', categoria: 'INSTITUCIONAL', fecha: '15 Mar, 2026', autor: 'Dirección', imagen: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=600&fit=crop&q=80' },
  { id: 2, titulo: 'Logros destacados en las Olimpiadas Nacionales', excerpt: 'Nuestros estudiantes obtuvieron los primeros puestos en el concurso regional de matemáticas y ciencias, llevando en alto el nombre de la institución…', categoria: 'ACADÉMICO', fecha: '08 May, 2026', autor: 'Coord. Académica', imagen: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop&q=80' },
  { id: 3, titulo: 'Taller de Innovación Tecnológica para Docentes', excerpt: 'Se realizó con éxito el primer seminario de herramientas digitales aplicadas a la educación, dirigido a nuestros docentes de todas las áreas…', categoria: 'ACTIVIDADES', fecha: '22 Abr, 2026', autor: 'Capacitación', imagen: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop&q=80' },
]

const noticia = computed(() =>
  todasLasNoticias.find((n) => n.id === Number(route.params.id))
)
</script>
