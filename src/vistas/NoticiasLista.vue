<template>
  <div class="bg-white text-[#1e2a3e] pb-24 max-md:pb-16">

    <PageHero
      badge="COMUNIDAD ESCOLAR"
      title="Noticias"
      description="Logros, eventos y novedades de nuestra institución. Transparencia y cercanía con cada familia de la comunidad santarrosina."
      :breadcrumb="[{ label: 'Noticias' }]"
    />

    <div class="max-w-[1200px] mx-auto px-6 max-[480px]:px-4 pt-10">

      <!-- Filtros de categoría -->
      <div class="flex flex-wrap gap-2 items-center mb-10">
        <button
          v-for="cat in categorias"
          :key="cat"
          @click="categoriaSeleccionada = cat"
          class="px-[1rem] py-[0.48rem] text-[0.73rem] font-bold tracking-[0.8px] rounded-lg border transition-all duration-200 cursor-pointer font-[inherit]"
          :class="categoriaSeleccionada === cat
            ? 'bg-[#0a3144] border-[#0a3144] text-[#fbc02d]'
            : 'bg-white border-[#e2e8f0] text-[#4a6177] hover:border-[#0a3144] hover:text-[#0a3144]'"
        >{{ cat }}</button>

        <span class="ml-auto text-[0.78rem] text-[#94a3b8] font-medium">
          {{ noticiasFiltradas.length }} artículo{{ noticiasFiltradas.length !== 1 ? 's' : '' }}
        </span>
      </div>

      <!-- Sin resultados -->
      <div v-if="noticiasFiltradas.length === 0" class="py-16 px-8 bg-[#f8fafc] border border-[#eef2f6] rounded-xl text-center">
        <p class="text-[0.7rem] font-bold tracking-[2px] uppercase text-[#fbc02d] m-0 mb-2">Sin resultados</p>
        <p class="text-[#4a6177] text-[0.95rem] m-0">No hay noticias en esta categoría por el momento.</p>
      </div>

      <template v-else>

        <!-- ── Artículo destacado ── -->
        <article
          v-reveal
          class="group relative rounded-2xl overflow-hidden mb-10 cursor-pointer shadow-[0_8px_32px_rgba(10,49,68,0.12)] hover:shadow-[0_16px_48px_rgba(10,49,68,0.18)] transition-shadow duration-300"
          @click="$router.push({ name: 'NoticiaDetalle', params: { id: noticiasFiltradas[0].id } })"
        >
          <!-- Imagen de fondo -->
          <div
            class="w-full bg-[#0a3144]"
            style="aspect-ratio: 21/9; min-height: 260px"
            :style="imagenFondo(noticiasFiltradas[0].imagen)"
          ></div>

          <!-- Overlay con contenido -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#071520]/95 via-[#071520]/40 to-transparent flex flex-col justify-end p-8 max-[600px]:p-5">
            <div class="flex items-center gap-3 mb-3 flex-wrap">
              <span
                class="text-[0.63rem] font-extrabold tracking-[1.5px] py-[0.3rem] px-[0.75rem] rounded-sm text-[#1e2a3e]"
                :class="categoryBg(noticiasFiltradas[0].categoria)"
              >{{ noticiasFiltradas[0].categoria }}</span>
              <span class="text-white/50 text-[0.72rem]">Artículo destacado</span>
            </div>

            <h2 class="text-white text-[1.9rem] max-[700px]:text-[1.45rem] max-[480px]:text-[1.2rem] font-semibold m-0 mb-2 leading-[1.2] tracking-tight max-w-[780px]">
              {{ noticiasFiltradas[0].titulo }}
            </h2>
            <p class="text-white/65 text-[0.9rem] m-0 mb-5 leading-relaxed max-w-[620px] max-[560px]:hidden line-clamp-2">
              {{ noticiasFiltradas[0].excerpt }}
            </p>

            <div class="flex items-center gap-5 flex-wrap">
              <span class="text-white/45 text-[0.72rem] inline-flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"/>
                </svg>
                {{ noticiasFiltradas[0].fecha }}
              </span>
              <span class="text-white/45 text-[0.72rem] inline-flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                {{ noticiasFiltradas[0].autor }}
              </span>
              <span class="ml-auto inline-flex items-center gap-2 text-[#fbc02d] text-[0.82rem] font-semibold group-hover:gap-3 transition-all duration-200">
                Leer artículo <span>→</span>
              </span>
            </div>
          </div>
        </article>

        <!-- ── Grid de artículos ── -->
        <div v-if="noticiasFiltradas.length > 1" class="grid grid-cols-3 max-[900px]:grid-cols-2 max-[540px]:grid-cols-1 gap-6">
          <article
            v-for="(noticia, i) in noticiasFiltradas.slice(1)"
            :key="noticia.id"
            v-reveal="i * 60"
            class="group bg-white rounded-xl overflow-hidden border border-[#eef2f6] shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-[#fbc02d] hover:shadow-[0_10px_28px_rgba(0,0,0,0.09)] cursor-pointer"
            @click="$router.push({ name: 'NoticiaDetalle', params: { id: noticia.id } })"
          >
            <!-- Imagen -->
            <div
              class="relative w-full overflow-hidden bg-[#0a3144]"
              style="aspect-ratio: 16/10"
              :style="imagenFondo(noticia.imagen)"
            >
              <span
                class="absolute top-3 left-3 text-[0.6rem] font-extrabold tracking-[1.2px] py-[0.28rem] px-[0.65rem] rounded-sm text-[#1e2a3e]"
                :class="categoryBg(noticia.categoria)"
              >{{ noticia.categoria }}</span>
            </div>

            <!-- Contenido -->
            <div class="p-5 flex flex-col flex-1">
              <p class="flex gap-3 text-[0.7rem] text-[#94a3b8] m-0 mb-3 flex-wrap">
                <span class="inline-flex items-center gap-1">
                  <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" aria-hidden="true">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"/>
                  </svg>
                  {{ noticia.fecha }}
                </span>
                <span class="inline-flex items-center gap-1">
                  <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" aria-hidden="true">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  {{ noticia.autor }}
                </span>
              </p>

              <h3 class="text-[0.98rem] font-semibold text-[#1e2a3e] m-0 mb-2 leading-[1.35] tracking-tight">{{ noticia.titulo }}</h3>

              <p class="text-[#4a6177] text-[0.84rem] leading-[1.55] m-0 flex-1 mb-4 line-clamp-3">{{ noticia.excerpt }}</p>

              <router-link
                :to="{ name: 'NoticiaDetalle', params: { id: noticia.id } }"
                class="inline-flex items-center gap-1.5 text-[#b7791f] no-underline text-[0.74rem] font-semibold pt-3 border-t border-[#f1f5f9] transition-all duration-200 hover:text-[#0a3144] hover:gap-2.5 group-hover:border-[#fbc02d]/40"
                @click.stop
              >
                Leer artículo <span>→</span>
              </router-link>
            </div>
          </article>
        </div>

      </template>

      <!-- Cargar más -->
      <div v-if="noticiasFiltradas.length > 1" class="flex justify-center mt-12">
        <button class="inline-flex items-center gap-2 px-8 py-[0.8rem] text-[0.85rem] font-semibold rounded-lg bg-white border border-[#e2e8f0] text-[#1e2a3e] hover:bg-[#0a3144] hover:text-[#fbc02d] hover:border-[#0a3144] transition-all duration-200 cursor-pointer font-[inherit]">
          Cargar más noticias
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PageHero from '../components/PageHero.vue'
import { useSeo } from '../composables/useSeo'

useSeo({
  title: 'Noticias',
  description: 'Últimas noticias y eventos de la I.E. Santa Rosa — Tarapoto. Mantente informado sobre la vida académica, logros y actividades institucionales.',
  path: '/news',
})

const categorias = ['TODAS', 'INSTITUCIONAL', 'ACADÉMICO', 'ACTIVIDADES', 'DEPORTES']
const categoriaSeleccionada = ref('TODAS')

const categoryBg = (cat) => ({
  'INSTITUCIONAL': 'bg-[#fbc02d]',
  'ACADÉMICO':     'bg-[#38bdf8]',
  'ACTIVIDADES':   'bg-[#a3e635]',
  'DEPORTES':      'bg-[#fb923c]',
}[cat] ?? 'bg-white')

const imagenFondo = (url) => ({
  backgroundImage: `url(${url})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

const noticias = ref([
  { id: 1, titulo: 'Inauguración del Año Escolar 2026', excerpt: 'Damos la bienvenida a toda nuestra comunidad educativa en este nuevo ciclo lleno de retos y aprendizajes. Una ceremonia emotiva marcó el inicio de las clases con la participación de autoridades, docentes y familias.', categoria: 'INSTITUCIONAL', fecha: '15 Mar, 2026', autor: 'Dirección', imagen: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&h=500&fit=crop&q=80' },
  { id: 2, titulo: 'Logros destacados en las Olimpiadas Nacionales', excerpt: 'Nuestros estudiantes obtuvieron los primeros puestos en el concurso regional de matemáticas y ciencias, llevando en alto el nombre de la institución ante colegios de toda la región.', categoria: 'ACADÉMICO', fecha: '08 May, 2026', autor: 'Coord. Académica', imagen: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&h=450&fit=crop&q=80' },
  { id: 3, titulo: 'Taller de Innovación Tecnológica para Docentes', excerpt: 'Se realizó con éxito el primer seminario de herramientas digitales aplicadas a la educación, dirigido a nuestros docentes de todas las áreas curriculares.', categoria: 'ACTIVIDADES', fecha: '22 Abr, 2026', autor: 'Capacitación', imagen: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&h=450&fit=crop&q=80' },
  { id: 4, titulo: 'Campeonato Inter-escolar de Atletismo 2026', excerpt: 'Nuestra delegación deportiva obtuvo el segundo lugar a nivel provincial, destacando en pruebas de velocidad y salto largo frente a más de 18 instituciones.', categoria: 'DEPORTES', fecha: '12 May, 2026', autor: 'Dept. Ed. Física', imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&h=450&fit=crop&q=80' },
  { id: 5, titulo: 'Feria de Ciencias: Proyectos de 4° y 5°', excerpt: 'Más de 30 proyectos fueron presentados por nuestros estudiantes, mostrando su creatividad y aplicación práctica de la metodología científica.', categoria: 'ACADÉMICO', fecha: '03 May, 2026', autor: 'Coord. Académica', imagen: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=700&h=450&fit=crop&q=80' },
  { id: 6, titulo: 'Reunión informativa para padres de familia', excerpt: 'El pasado sábado se llevó a cabo la reunión general de padres de familia, donde se presentaron los avances académicos del primer bimestre y metas del año.', categoria: 'INSTITUCIONAL', fecha: '18 Abr, 2026', autor: 'Dirección', imagen: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=700&h=450&fit=crop&q=80' },
  { id: 7, titulo: 'Festival de Arte y Cultura 2026', excerpt: 'Una jornada llena de color y tradición. Nuestros estudiantes de todas las edades mostraron su talento en música, danza y artes plásticas ante toda la comunidad.', categoria: 'ACTIVIDADES', fecha: '28 May, 2026', autor: 'Dept. Arte', imagen: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&h=450&fit=crop&q=80' },
  { id: 8, titulo: 'Selección de fútbol clasifica a etapa regional', excerpt: 'Tras una emocionante final, nuestra selección sub-17 venció 2-1 y se clasifica para la etapa regional de los juegos deportivos escolares nacionales.', categoria: 'DEPORTES', fecha: '06 Jun, 2026', autor: 'Dept. Ed. Física', imagen: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=700&h=450&fit=crop&q=80' },
  { id: 9, titulo: 'Charla: Ciberbullying y uso seguro de redes sociales', excerpt: 'Especialistas brindaron una charla a estudiantes del nivel secundaria sobre los riesgos del ciberacoso y el uso responsable de la tecnología e Internet.', categoria: 'ACTIVIDADES', fecha: '20 May, 2026', autor: 'Tutoría', imagen: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=450&fit=crop&q=80' },
])

const noticiasFiltradas = computed(() =>
  categoriaSeleccionada.value === 'TODAS'
    ? noticias.value
    : noticias.value.filter(n => n.categoria === categoriaSeleccionada.value)
)
</script>
