<template>
  <div class="noticia-detalle-page">
    <div class="container">
      <!-- Migas de pan -->
      <nav class="breadcrumbs">
        <router-link to="/">Inicio</router-link>
        <span aria-hidden="true">›</span>
        <router-link to="/noticias">Noticias</router-link>
        <span aria-hidden="true">›</span>
        <span class="actual">Detalle</span>
      </nav>

      <article v-if="noticia" class="noticia-articulo">
        <header class="articulo-head">
          <span class="articulo-tag" :class="`tag-${noticia.categoria.toLowerCase()}`">
            {{ noticia.categoria }}
          </span>
          <h1 class="articulo-titulo">{{ noticia.titulo }}</h1>
          <div class="articulo-meta">
            <span class="meta-item">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"/>
              </svg>
              {{ noticia.fecha }}
            </span>
            <span class="meta-item">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              {{ noticia.autor }}
            </span>
          </div>
        </header>

        <div
          class="articulo-imagen"
          :style="{ backgroundImage: `url(${noticia.imagen})` }"
          role="img"
          :aria-label="noticia.titulo"
        ></div>

        <div class="articulo-contenido">
          <p>
            {{ noticia.excerpt }}
          </p>
          <p>
            Este es el contenido de la noticia en su versión extendida. En una
            implementación completa, este artículo se cargaría dinámicamente desde
            un servicio backend o un CMS, permitiendo a la institución educativa
            publicar novedades, eventos, comunicados y logros de manera
            periódica.
          </p>
          <p>
            La I.E. Santa Rosa reafirma su compromiso con la transparencia y la
            comunicación activa con toda la comunidad educativa, manteniendo
            informados a estudiantes, padres de familia y público en general
            sobre las actividades que fortalecen nuestra formación integral.
          </p>
          <blockquote>
            "Educar es dejar una huella en el corazón de cada estudiante, sembrando
            valores que perdurarán para toda la vida."
          </blockquote>
          <p>
            Para más información o consultas, puede acercarse a la dirección del
            colegio en horario de atención, o escribirnos a través de la sección
            de <router-link to="/contacto">Contacto</router-link>.
          </p>
        </div>

        <div class="articulo-acciones">
          <router-link to="/noticias" class="btn-volver">
            <span aria-hidden="true">←</span>
            Volver a noticias
          </router-link>
          <div class="compartir">
            <span>Compartir:</span>
            <button class="share-btn" aria-label="Compartir en Facebook">FB</button>
            <button class="share-btn" aria-label="Compartir en Twitter">TW</button>
            <button class="share-btn" aria-label="Compartir por WhatsApp">WA</button>
          </div>
        </div>
      </article>

      <div v-else class="no-encontrada">
        <h2>Noticia no encontrada</h2>
        <p>La noticia que buscas no existe o fue removida.</p>
        <router-link to="/noticias" class="btn-volver">Volver a noticias</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Mock de noticias (en producción vendría de una API)
const todasLasNoticias = [
  {
    id: 1,
    titulo: 'Inauguración del Año Escolar 2026',
    excerpt:
      'Damos la bienvenida a toda nuestra comunidad educativa en este nuevo ciclo lleno de retos y aprendizajes. Una ceremonia emotiva marcó el inicio de las clases…',
    categoria: 'INSTITUCIONAL',
    fecha: '15 Mar, 2026',
    autor: 'Dirección',
    imagen:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=600&fit=crop&q=80',
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
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop&q=80',
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
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop&q=80',
  },
]

const noticia = computed(() =>
  todasLasNoticias.find((n) => n.id === Number(route.params.id))
)
</script>

<style scoped>
.noticia-detalle-page {
  font-family: 'Inter', 'Segoe UI', sans-serif;
  background-color: #ffffff;
  color: #1e2a3e;
  padding: 2rem 0 5rem;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: #94a3b8;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.breadcrumbs a {
  color: #b7791f;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumbs a:hover {
  color: #1e2a3e;
}

.breadcrumbs .actual {
  color: #1e2a3e;
  font-weight: 600;
}

.noticia-articulo {
  background: #ffffff;
}

.articulo-head {
  margin-bottom: 1.5rem;
}

.articulo-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  padding: 0.35rem 0.8rem;
  border-radius: 2px;
  color: #1e2a3e;
  background-color: #fbc02d;
  margin-bottom: 0.8rem;
}

.tag-institucional { background-color: #fbc02d; }
.tag-académico { background-color: #38bdf8; }
.tag-actividades { background-color: #a3e635; }
.tag-deportes { background-color: #fb923c; }

.articulo-titulo {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 2.4rem;
  font-weight: 900;
  color: #1e2a3e;
  margin: 0 0 1rem;
  line-height: 1.15;
  letter-spacing: -0.5px;
}

.articulo-meta {
  display: flex;
  gap: 1.2rem;
  color: #4a6177;
  font-size: 0.85rem;
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.articulo-imagen {
  width: 100%;
  aspect-ratio: 16 / 8;
  background-size: cover;
  background-position: center;
  background-color: #1a2f3a;
  border-radius: 14px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.articulo-contenido {
  font-size: 1rem;
  line-height: 1.8;
  color: #2c3f4f;
}

.articulo-contenido p {
  margin: 0 0 1.2rem;
}

.articulo-contenido blockquote {
  background-color: #fef9e3;
  border-left: 4px solid #fbc02d;
  padding: 1rem 1.4rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: #1e2a3e;
  border-radius: 0 8px 8px 0;
  font-weight: 600;
}

.articulo-contenido a {
  color: #b7791f;
  text-decoration: none;
  font-weight: 700;
}

.articulo-contenido a:hover {
  text-decoration: underline;
}

.articulo-acciones {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eef2f6;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn-volver {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #1e2a3e;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.7rem 1.2rem;
  background-color: #f1f5f9;
  border-radius: 10px;
  transition: background-color 0.2s, color 0.2s;
}

.btn-volver:hover {
  background-color: #fbc02d;
  color: #1e2a3e;
}

.compartir {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4a6177;
  font-size: 0.85rem;
}

.share-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #e2e8f0;
  background-color: #ffffff;
  color: #1e2a3e;
  font-size: 0.7rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s;
}

.share-btn:hover {
  background-color: #fbc02d;
  border-color: #fbc02d;
}

.no-encontrada {
  text-align: center;
  padding: 4rem 1rem;
  color: #4a6177;
}

.no-encontrada h2 {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 1.6rem;
  color: #1e2a3e;
  margin: 0 0 0.6rem;
}

.no-encontrada p {
  margin: 0 0 1.5rem;
}

@media (max-width: 600px) {
  .articulo-titulo {
    font-size: 1.7rem;
  }
  .articulo-acciones {
    flex-direction: column;
    align-items: stretch;
  }
  .compartir {
    justify-content: center;
  }
}
</style>
