<template>
  <div class="bg-white text-[#1e2a3e] pb-24 max-md:pb-16">

    <template v-if="noticia">

      <!-- ── Hero imagen ── -->
      <div class="relative w-full bg-[#0a3144] overflow-hidden" style="aspect-ratio: 21/8; min-height: 280px; max-height: 520px">
        <div
          class="absolute inset-0"
          :style="{ backgroundImage: `url(${noticia.imagen})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
        ></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#071520]/95 via-[#071520]/45 to-[#071520]/10"></div>

        <!-- Breadcrumb sobre la imagen -->
        <div class="absolute top-6 left-0 right-0 max-w-[1200px] mx-auto px-6 max-[480px]:px-4">
          <nav class="flex items-center gap-1.5 text-[0.75rem] text-white/50 flex-wrap">
            <router-link to="/" class="hover:text-white/80 transition-colors no-underline text-white/50">Inicio</router-link>
            <span>/</span>
            <router-link to="/news" class="hover:text-white/80 transition-colors no-underline text-white/50">Noticias</router-link>
            <span>/</span>
            <span class="text-white/75 font-medium line-clamp-1">{{ noticia.titulo }}</span>
          </nav>
        </div>

        <!-- Contenido del hero -->
        <div class="absolute bottom-0 left-0 right-0 max-w-[1200px] mx-auto px-6 max-[480px]:px-4 pb-8 max-[600px]:pb-5">
          <span
            class="inline-block text-[0.63rem] font-extrabold tracking-[1.5px] py-[0.3rem] px-[0.75rem] rounded-sm text-[#1e2a3e] mb-4"
            :class="categoryBg(noticia.categoria)"
          >{{ noticia.categoria }}</span>

          <h1 class="text-white text-[2.2rem] max-[700px]:text-[1.6rem] max-[480px]:text-[1.25rem] font-semibold m-0 mb-4 leading-[1.2] tracking-tight max-w-[820px]">
            {{ noticia.titulo }}
          </h1>

          <div class="flex items-center gap-5 flex-wrap">
            <span class="text-white/50 text-[0.73rem] inline-flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"/>
              </svg>
              {{ noticia.fecha }}
            </span>
            <span class="text-white/50 text-[0.73rem] inline-flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              {{ noticia.autor }}
            </span>
          </div>
        </div>
      </div>

      <!-- ── Cuerpo del artículo ── -->
      <div class="max-w-[1200px] mx-auto px-6 max-[480px]:px-4">
        <div class="grid grid-cols-[1fr_280px] max-[860px]:grid-cols-1 gap-12 max-[860px]:gap-8 pt-10">

          <!-- Columna principal -->
          <div>
            <!-- Lead -->
            <p class="text-[1.05rem] leading-[1.85] text-[#2c3f4f] font-medium mb-6 border-l-4 border-[#fbc02d] pl-5">
              {{ noticia.excerpt }}
            </p>

            <!-- Cuerpo -->
            <div class="text-[0.96rem] leading-[1.85] text-[#374151] space-y-5">
              <p>
                La I.E. Santa Rosa celebró este evento con la participación activa de toda la comunidad educativa. Docentes, estudiantes y padres de familia se reunieron en un ambiente de entusiasmo y compromiso, reafirmando los valores que caracterizan a nuestra institución desde su fundación en 1959.
              </p>
              <p>
                Esta iniciativa forma parte del plan de mejora continua que viene implementando la dirección, orientado a fortalecer los vínculos entre todos los actores educativos y a elevar la calidad del servicio que ofrecemos a nuestros estudiantes y sus familias.
              </p>

              <blockquote class="bg-[#fef9e3] border-l-4 border-[#fbc02d] py-5 px-6 my-8 rounded-r-xl">
                <p class="text-[1rem] text-[#1e2a3e] font-semibold leading-[1.65] m-0 mb-2">
                  "Educar es dejar una huella en el corazón de cada estudiante, sembrando valores que perdurarán para toda la vida."
                </p>
                <cite class="text-[0.78rem] text-[#4a6177] font-medium not-italic">— Dirección I.E. Santa Rosa</cite>
              </blockquote>

              <p>
                En una implementación completa, este contenido se cargaría dinámicamente desde el sistema de gestión de la institución, permitiendo publicar novedades, comunicados oficiales, logros académicos y deportivos de manera periódica y transparente.
              </p>
              <p>
                Para más información o consultas, puede acercarse a la dirección en horario de atención o escribirnos a través de la sección de
                <router-link to="/contacto" class="text-[#b7791f] no-underline font-semibold hover:underline">Contacto</router-link>.
              </p>
            </div>

            <!-- Acciones -->
            <div class="flex items-center justify-between flex-wrap gap-4 mt-10 pt-6 border-t border-[#eef2f6]">
              <router-link
                to="/news"
                class="inline-flex items-center gap-2 px-5 py-[0.65rem] text-[0.85rem] font-semibold rounded-lg bg-[#f1f5f9] text-[#1e2a3e] no-underline hover:bg-[#0a3144] hover:text-[#fbc02d] transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
                Volver a noticias
              </router-link>

              <div class="flex items-center gap-2">
                <span class="text-[0.75rem] text-[#94a3b8] font-medium">Compartir</span>
                <!-- WhatsApp -->
                <a :href="`https://wa.me/?text=${encodeURIComponent(noticia.titulo + ' — ' + currentUrl)}`" target="_blank" rel="noopener"
                  class="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#e2e8f0] bg-white text-[#25d366] hover:bg-[#25d366] hover:border-[#25d366] hover:text-white transition-all duration-200"
                  aria-label="Compartir por WhatsApp">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
                <!-- Facebook -->
                <a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`" target="_blank" rel="noopener"
                  class="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#e2e8f0] bg-white text-[#1877f2] hover:bg-[#1877f2] hover:border-[#1877f2] hover:text-white transition-all duration-200"
                  aria-label="Compartir en Facebook">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <!-- X / Twitter -->
                <a :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(noticia.titulo)}&url=${encodeURIComponent(currentUrl)}`" target="_blank" rel="noopener"
                  class="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#e2e8f0] bg-white text-[#1e2a3e] hover:bg-[#1e2a3e] hover:border-[#1e2a3e] hover:text-white transition-all duration-200"
                  aria-label="Compartir en X">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="flex flex-col gap-6 max-[860px]:hidden">

            <!-- Meta del artículo -->
            <div class="bg-[#f8fafc] border border-[#eef2f6] rounded-xl p-5">
              <p class="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#4a6177] m-0 mb-4">Sobre este artículo</p>
              <ul class="list-none m-0 p-0 flex flex-col gap-4">
                <li class="flex flex-col gap-1">
                  <span class="text-[0.68rem] font-bold text-[#94a3b8] uppercase tracking-[1px]">Categoría</span>
                  <span
                    class="self-start text-[0.63rem] font-extrabold tracking-[1.2px] py-[0.28rem] px-[0.65rem] rounded-sm text-[#1e2a3e]"
                    :class="categoryBg(noticia.categoria)"
                  >{{ noticia.categoria }}</span>
                </li>
                <li class="flex flex-col gap-1">
                  <span class="text-[0.68rem] font-bold text-[#94a3b8] uppercase tracking-[1px]">Publicado</span>
                  <span class="text-[0.88rem] font-semibold text-[#1e2a3e]">{{ noticia.fecha }}</span>
                </li>
                <li class="flex flex-col gap-1">
                  <span class="text-[0.68rem] font-bold text-[#94a3b8] uppercase tracking-[1px]">Autor</span>
                  <span class="text-[0.88rem] font-semibold text-[#1e2a3e]">{{ noticia.autor }}</span>
                </li>
              </ul>
            </div>

            <!-- Otras noticias -->
            <div v-if="relacionadas.length">
              <p class="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#4a6177] m-0 mb-4">Más noticias</p>
              <div class="flex flex-col gap-3">
                <router-link
                  v-for="rel in relacionadas"
                  :key="rel.id"
                  :to="{ name: 'NoticiaDetalle', params: { id: rel.id } }"
                  class="group flex gap-3 items-start no-underline"
                >
                  <div
                    class="flex-shrink-0 w-16 h-14 rounded-lg bg-[#0a3144] overflow-hidden"
                    :style="{ backgroundImage: `url(${rel.imagen})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
                  ></div>
                  <div class="flex-1 min-w-0">
                    <p class="text-[0.65rem] text-[#94a3b8] m-0 mb-1">{{ rel.fecha }}</p>
                    <p class="text-[0.82rem] font-semibold text-[#1e2a3e] m-0 leading-[1.35] line-clamp-2 group-hover:text-[#b7791f] transition-colors duration-150">{{ rel.titulo }}</p>
                  </div>
                </router-link>
              </div>
            </div>

          </aside>
        </div>
      </div>

      <!-- ── Artículos relacionados (mobile + desktop) ── -->
      <div v-if="relacionadas.length" class="max-w-[1200px] mx-auto px-6 max-[480px]:px-4 mt-16 max-[860px]:mt-10">
        <div class="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <p class="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#fbc02d] m-0 mb-1">Seguir leyendo</p>
            <h2 class="text-[1.4rem] font-semibold text-[#0a3144] m-0">Más noticias</h2>
          </div>
          <router-link to="/news" class="text-[0.82rem] font-semibold text-[#b7791f] no-underline hover:text-[#0a3144] transition-colors duration-200 inline-flex items-center gap-1">
            Ver todas <span>→</span>
          </router-link>
        </div>

        <div class="grid grid-cols-3 max-[780px]:grid-cols-2 max-[480px]:grid-cols-1 gap-5">
          <article
            v-for="rel in relacionadas"
            :key="rel.id"
            class="group bg-white rounded-xl overflow-hidden border border-[#eef2f6] shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex flex-col hover:-translate-y-1 hover:border-[#fbc02d] hover:shadow-[0_10px_28px_rgba(0,0,0,0.09)] transition-all duration-200 cursor-pointer"
            @click="$router.push({ name: 'NoticiaDetalle', params: { id: rel.id } })"
          >
            <div
              class="relative w-full bg-[#0a3144]"
              style="aspect-ratio: 16/10"
              :style="{ backgroundImage: `url(${rel.imagen})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
            >
              <span class="absolute top-3 left-3 text-[0.6rem] font-extrabold tracking-[1.2px] py-[0.28rem] px-[0.65rem] rounded-sm text-[#1e2a3e]" :class="categoryBg(rel.categoria)">
                {{ rel.categoria }}
              </span>
            </div>
            <div class="p-4 flex flex-col flex-1">
              <p class="text-[0.68rem] text-[#94a3b8] m-0 mb-2">{{ rel.fecha }} · {{ rel.autor }}</p>
              <h3 class="text-[0.92rem] font-semibold text-[#1e2a3e] m-0 mb-2 leading-[1.35] line-clamp-2">{{ rel.titulo }}</h3>
              <p class="text-[#4a6177] text-[0.81rem] leading-[1.5] m-0 flex-1 line-clamp-2">{{ rel.excerpt }}</p>
            </div>
          </article>
        </div>
      </div>

    </template>

    <!-- ── No encontrada ── -->
    <div v-else class="max-w-[1200px] mx-auto px-6 max-[480px]:px-4 py-24 text-center">
      <p class="text-[0.7rem] font-bold tracking-[2px] uppercase text-[#fbc02d] m-0 mb-3">Error 404</p>
      <h2 class="text-[2rem] font-semibold text-[#0a3144] m-0 mb-3">Noticia no encontrada</h2>
      <p class="text-[#4a6177] mb-8 text-[0.95rem]">La noticia que buscas no existe o fue removida.</p>
      <router-link
        to="/news"
        class="inline-flex items-center gap-2 px-6 py-[0.75rem] text-[0.88rem] font-semibold rounded-lg bg-[#0a3144] text-[#fbc02d] no-underline hover:bg-[#fbc02d] hover:text-[#0a3144] transition-all duration-200"
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        Volver a noticias
      </router-link>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://www.iesantarosatarapoto.edu.pe'

const route = useRoute()
const currentUrl = computed(() => window.location.href)

const categoryBg = (cat) => ({
  'INSTITUCIONAL': 'bg-[#fbc02d]',
  'ACADÉMICO':     'bg-[#38bdf8]',
  'ACTIVIDADES':   'bg-[#a3e635]',
  'DEPORTES':      'bg-[#fb923c]',
}[cat] ?? 'bg-white')

const todasLasNoticias = [
  { id: 1, titulo: 'Inauguración del Año Escolar 2026', excerpt: 'Damos la bienvenida a toda nuestra comunidad educativa en este nuevo ciclo lleno de retos y aprendizajes. Una ceremonia emotiva marcó el inicio de las clases con la participación de autoridades, docentes y familias.', categoria: 'INSTITUCIONAL', fecha: '15 Mar, 2026', autor: 'Dirección', imagen: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=600&fit=crop&q=80' },
  { id: 2, titulo: 'Logros destacados en las Olimpiadas Nacionales', excerpt: 'Nuestros estudiantes obtuvieron los primeros puestos en el concurso regional de matemáticas y ciencias, llevando en alto el nombre de la institución ante colegios de toda la región.', categoria: 'ACADÉMICO', fecha: '08 May, 2026', autor: 'Coord. Académica', imagen: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop&q=80' },
  { id: 3, titulo: 'Taller de Innovación Tecnológica para Docentes', excerpt: 'Se realizó con éxito el primer seminario de herramientas digitales aplicadas a la educación, dirigido a nuestros docentes de todas las áreas curriculares.', categoria: 'ACTIVIDADES', fecha: '22 Abr, 2026', autor: 'Capacitación', imagen: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop&q=80' },
  { id: 4, titulo: 'Campeonato Inter-escolar de Atletismo 2026', excerpt: 'Nuestra delegación deportiva obtuvo el segundo lugar a nivel provincial, destacando en pruebas de velocidad y salto largo frente a más de 18 instituciones.', categoria: 'DEPORTES', fecha: '12 May, 2026', autor: 'Dept. Ed. Física', imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop&q=80' },
  { id: 5, titulo: 'Feria de Ciencias: Proyectos de 4° y 5°', excerpt: 'Más de 30 proyectos fueron presentados por nuestros estudiantes, mostrando su creatividad y aplicación práctica de la metodología científica.', categoria: 'ACADÉMICO', fecha: '03 May, 2026', autor: 'Coord. Académica', imagen: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=600&fit=crop&q=80' },
  { id: 6, titulo: 'Reunión informativa para padres de familia', excerpt: 'El pasado sábado se llevó a cabo la reunión general de padres de familia, donde se presentaron los avances académicos del primer bimestre y las metas del año.', categoria: 'INSTITUCIONAL', fecha: '18 Abr, 2026', autor: 'Dirección', imagen: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&h=600&fit=crop&q=80' },
  { id: 7, titulo: 'Festival de Arte y Cultura 2026', excerpt: 'Una jornada llena de color y tradición. Nuestros estudiantes de todas las edades mostraron su talento en música, danza y artes plásticas ante toda la comunidad.', categoria: 'ACTIVIDADES', fecha: '28 May, 2026', autor: 'Dept. Arte', imagen: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=600&fit=crop&q=80' },
  { id: 8, titulo: 'Selección de fútbol clasifica a etapa regional', excerpt: 'Tras una emocionante final, nuestra selección sub-17 venció 2-1 y se clasifica para la etapa regional de los juegos deportivos escolares nacionales.', categoria: 'DEPORTES', fecha: '06 Jun, 2026', autor: 'Dept. Ed. Física', imagen: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&h=600&fit=crop&q=80' },
  { id: 9, titulo: 'Charla: Ciberbullying y uso seguro de redes sociales', excerpt: 'Especialistas brindaron una charla a estudiantes del nivel secundaria sobre los riesgos del ciberacoso y el uso responsable de la tecnología e Internet.', categoria: 'ACTIVIDADES', fecha: '20 May, 2026', autor: 'Tutoría', imagen: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&q=80' },
]

const noticia = computed(() =>
  todasLasNoticias.find(n => n.id === Number(route.params.id))
)

useHead(computed(() => ({
  title: noticia.value
    ? `${noticia.value.titulo} | I.E. Santa Rosa — Tarapoto`
    : 'Noticia | I.E. Santa Rosa — Tarapoto',
  meta: noticia.value ? [
    { name: 'description', content: noticia.value.excerpt },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: noticia.value.titulo },
    { property: 'og:description', content: noticia.value.excerpt },
    { property: 'og:image', content: noticia.value.imagen },
    { property: 'og:url', content: `${SITE_URL}/news/${noticia.value.id}` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: noticia.value.titulo },
    { name: 'twitter:description', content: noticia.value.excerpt },
    { name: 'twitter:image', content: noticia.value.imagen },
  ] : [],
  link: noticia.value ? [
    { rel: 'canonical', href: `${SITE_URL}/news/${noticia.value.id}` },
  ] : [],
})))

const relacionadas = computed(() => {
  if (!noticia.value) return []
  return todasLasNoticias
    .filter(n => n.id !== noticia.value.id)
    .slice(0, 3)
})
</script>
