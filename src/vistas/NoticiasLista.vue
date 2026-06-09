<template>
  <div class="noticias-page">
    <div class="container">
      <!-- Encabezado -->
      <header class="header-section">
        <span class="eyebrow">ÚLTIMAS NOTICIAS</span>
        <h1 class="page-title">Mantente informado</h1>
        <p class="page-description">
          Conoce las novedades, logros y eventos más relevantes de nuestra
          comunidad educativa. Transparencia y cercanía con cada familia.
        </p>
      </header>

      <!-- Filtro por categoría -->
      <div class="filtros">
        <button
          v-for="cat in categorias"
          :key="cat"
          @click="categoriaSeleccionada = cat"
          class="filtro-chip"
          :class="{ 'filtro-chip--activo': categoriaSeleccionada === cat }"
        >
          {{ cat }}
        </button>
        <a href="#" class="archivo-link">
          Ver archivo completo
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <!-- Grid de noticias -->
      <div class="noticias-grid">
        <article
          v-for="noticia in noticiasFiltradas"
          :key="noticia.id"
          class="noticia-card"
        >
          <div class="noticia-imagen" :style="imagenFondo(noticia.imagen)">
            <span class="noticia-tag" :class="`tag-${noticia.categoria.toLowerCase()}`">
              {{ noticia.categoria }}
            </span>
          </div>
          <div class="noticia-body">
            <p class="noticia-meta">
              <span class="noticia-fecha">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"/>
                </svg>
                {{ noticia.fecha }}
              </span>
              <span class="noticia-autor">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                {{ noticia.autor }}
              </span>
            </p>
            <h3 class="noticia-titulo">{{ noticia.titulo }}</h3>
            <p class="noticia-excerpt">{{ noticia.excerpt }}</p>
            <router-link
              :to="{ name: 'NoticiaDetalle', params: { id: noticia.id } }"
              class="noticia-link"
            >
              Leer artículo completo
              <span aria-hidden="true">→</span>
            </router-link>
          </div>
        </article>
      </div>

      <!-- Mensaje si no hay resultados -->
      <div v-if="noticiasFiltradas.length === 0" class="sin-resultados">
        No hay noticias en esta categoría por el momento.
      </div>

      <!-- Botón "Cargar más" -->
      <div v-if="noticiasFiltradas.length > 0" class="cargar-mas-contenedor">
        <button class="btn-cargar-mas">Cargar más noticias</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categorias = ['TODAS', 'INSTITUCIONAL', 'ACADÉMICO', 'ACTIVIDADES', 'DEPORTES']
const categoriaSeleccionada = ref('TODAS')

const noticias = ref([
  {
    id: 1,
    titulo: 'Inauguración del Año Escolar 2026',
    excerpt:
      'Damos la bienvenida a toda nuestra comunidad educativa en este nuevo ciclo lleno de retos y aprendizajes. Una ceremonia emotiva marcó el inicio de las clases…',
    categoria: 'INSTITUCIONAL',
    fecha: '15 Mar, 2026',
    autor: 'Dirección',
    imagen:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&h=450&fit=crop&q=80',
  },
  {
    id: 2,
    titulo: 'Logros destacados en las Olimpiadas Nacionales',
    excerpt:
      'Nuestros estudiantes obtuvieron los primeros puestos en el concurso regional de matemáticas y ciencias, llevando en alto el nombre de la institución…',
    categoria: 'ACADÉMICO',
    fecha: '08 May, 2026',
    autor: 'Coord. Académica',
    imagen:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&h=450&fit=crop&q=80',
  },
  {
    id: 3,
    titulo: 'Taller de Innovación Tecnológica para Docentes',
    excerpt:
      'Se realizó con éxito el primer seminario de herramientas digitales aplicadas a la educación, dirigido a nuestros docentes de todas las áreas…',
    categoria: 'ACTIVIDADES',
    fecha: '22 Abr, 2026',
    autor: 'Capacitación',
    imagen:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&h=450&fit=crop&q=80',
  },
  {
    id: 4,
    titulo: 'Campeonato Inter-escolar de Atletismo 2026',
    excerpt:
      'Nuestra delegación deportiva obtuvo el segundo lugar a nivel provincial, destacando en pruebas de velocidad y salto largo…',
    categoria: 'DEPORTES',
    fecha: '12 May, 2026',
    autor: 'Dept. Educación Física',
    imagen:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&h=450&fit=crop&q=80',
  },
  {
    id: 5,
    titulo: 'Feria de Ciencias: Proyectos de los estudiantes de 4° y 5°',
    excerpt:
      'Más de 30 proyectos fueron presentados por nuestros estudiantes, mostrando su creatividad y aplicación práctica de la metodología científica…',
    categoria: 'ACADÉMICO',
    fecha: '03 May, 2026',
    autor: 'Coord. Académica',
    imagen:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=700&h=450&fit=crop&q=80',
  },
  {
    id: 6,
    titulo: 'Reunión informativa para padres de familia',
    excerpt:
      'El pasado sábado se llevó a cabo la reunión general de padres de familia, donde se presentaron los avances académicos del primer bimestre…',
    categoria: 'INSTITUCIONAL',
    fecha: '18 Abr, 2026',
    autor: 'Dirección',
    imagen:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=700&h=450&fit=crop&q=80',
  },
  {
    id: 7,
    titulo: 'Festival de Arte y Cultura 2026',
    excerpt:
      'Una jornada llena de color y tradición. Nuestros estudiantes de todas las edades mostraron su talento en música, danza y artes plásticas…',
    categoria: 'ACTIVIDADES',
    fecha: '28 May, 2026',
    autor: 'Dept. Arte',
    imagen:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&h=450&fit=crop&q=80',
  },
  {
    id: 8,
    titulo: 'Selección de fútbol clasifica a la etapa regional',
    excerpt:
      'Tras una emocionante final, nuestra selección de fútbol sub-17 venció 2-1 y se clasifica para la etapa regional de los juegos deportivos…',
    categoria: 'DEPORTES',
    fecha: '06 Jun, 2026',
    autor: 'Dept. Educación Física',
    imagen:
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=700&h=450&fit=crop&q=80',
  },
  {
    id: 9,
    titulo: 'Charla: Ciberbullying y uso seguro de redes sociales',
    excerpt:
      'Especialistas brindaron una charla a estudiantes del nivel secundaria sobre los riesgos del ciberacoso y el uso responsable de la tecnología…',
    categoria: 'ACTIVIDADES',
    fecha: '20 May, 2026',
    autor: 'Tutoría',
    imagen:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=450&fit=crop&q=80',
  },
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

<style scoped>
.noticias-page {
  font-family: 'Inter', 'Segoe UI', sans-serif;
  background-color: #ffffff;
  color: #1e2a3e;
  padding: 3rem 0 5rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ============== ENCABEZADO ============== */
.header-section {
  text-align: center;
  margin-bottom: 2.5rem;
}

.eyebrow {
  display: inline-block;
  background-color: #fbc02d;
  color: #1e2a3e;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 2px;
  padding: 0.4rem 0.9rem;
  border-radius: 2px;
  margin-bottom: 0.8rem;
}

.page-title {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 2.8rem;
  font-weight: 900;
  color: #1e2a3e;
  margin: 0 0 0.7rem;
  letter-spacing: -0.5px;
  position: relative;
  display: inline-block;
}

.page-title::after {
  content: '';
  display: block;
  width: 70px;
  height: 4px;
  background-color: #fbc02d;
  margin: 0.6rem auto 0;
  border-radius: 3px;
}

.page-description {
  color: #4a6177;
  max-width: 700px;
  margin: 0.5rem auto 0;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* ============== FILTROS ============== */
.filtros {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  position: relative;
}

.filtro-chip {
  background-color: #f1f5f9;
  color: #4a6177;
  border: 1px solid #e2e8f0;
  padding: 0.55rem 1.1rem;
  border-radius: 30px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.filtro-chip:hover {
  border-color: #fbc02d;
  color: #1e2a3e;
}

.filtro-chip--activo {
  background-color: #1e2a3e;
  color: #fbc02d;
  border-color: #1e2a3e;
}

.archivo-link {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #b7791f;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  transition: gap 0.2s, color 0.2s;
}

.archivo-link:hover {
  color: #8a5a00;
  gap: 0.5rem;
}

/* ============== GRID ============== */
.noticias-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;
}

.noticia-card {
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #eef2f6;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  display: flex;
  flex-direction: column;
}

.noticia-card:hover {
  transform: translateY(-4px);
  border-color: #fbc02d;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.noticia-imagen {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  background-color: #1a2f3a;
  display: flex;
  align-items: flex-start;
  padding: 0.8rem;
}

.noticia-tag {
  position: relative;
  z-index: 1;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 1.2px;
  padding: 0.3rem 0.7rem;
  border-radius: 2px;
  color: #1e2a3e;
  background-color: #fbc02d;
}

.noticia-tag.tag-institucional { background-color: #fbc02d; color: #1e2a3e; }
.noticia-tag.tag-académico    { background-color: #38bdf8; color: #1e2a3e; }
.noticia-tag.tag-actividades  { background-color: #a3e635; color: #1e2a3e; }
.noticia-tag.tag-deportes     { background-color: #fb923c; color: #1e2a3e; }

.noticia-body {
  padding: 1.2rem 1.3rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
}

.noticia-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.72rem;
  color: #94a3b8;
  margin: 0 0 0.3rem;
  flex-wrap: wrap;
}

.noticia-meta span {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.noticia-titulo {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  color: #1e2a3e;
  margin: 0;
  line-height: 1.35;
  letter-spacing: -0.2px;
}

.noticia-excerpt {
  color: #4a6177;
  font-size: 0.86rem;
  line-height: 1.55;
  margin: 0 0 0.8rem;
  flex: 1;
}

.noticia-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: #b7791f;
  text-decoration: none;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  padding-top: 0.6rem;
  border-top: 1px solid #eef2f6;
  transition: color 0.2s, gap 0.2s;
}

.noticia-link:hover {
  color: #1e2a3e;
  gap: 0.5rem;
}

/* ============== SIN RESULTADOS ============== */
.sin-resultados {
  text-align: center;
  padding: 3rem 1rem;
  background-color: #f9fafc;
  border-radius: 14px;
  color: #4a6177;
  border: 2px dashed #e2e8f0;
}

/* ============== CARGAR MÁS ============== */
.cargar-mas-contenedor {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
}

.btn-cargar-mas {
  background-color: #1e2a3e;
  color: #fff;
  border: none;
  padding: 0.85rem 2rem;
  border-radius: 30px;
  font-weight: 700;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
  letter-spacing: 0.5px;
}

.btn-cargar-mas:hover {
  background-color: #0a3144;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(10, 49, 68, 0.25);
}

/* ============== RESPONSIVE ============== */
@media (max-width: 900px) {
  .noticias-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .archivo-link {
    position: static;
    transform: none;
    margin-left: auto;
  }
  .page-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 600px) {
  .noticias-grid {
    grid-template-columns: 1fr;
  }
  .filtros {
    flex-direction: column;
    align-items: stretch;
  }
  .filtro-chip {
    text-align: center;
  }
  .archivo-link {
    text-align: center;
    margin: 0;
    justify-content: center;
  }
  .page-title {
    font-size: 1.9rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
}
</style>
