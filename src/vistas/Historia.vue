<template>
  <div class="historia-page">
    <div class="container">
      <!-- Encabezado -->
      <header class="header-section">
        <div class="header-text">
          <span class="eyebrow">LEGADO INSTITUCIONAL</span>
          <h1 class="page-title">
            Nuestra
            <span class="title-outline">Historia</span>
          </h1>
        </div>
        <p class="page-description">
          Más de seis décadas forjando el futuro de la
          juventud santarrosina con excelencia, valores y
          compromiso social.
        </p>
      </header>

      <!-- Timeline -->
      <section class="timeline">
        <span class="timeline-line" aria-hidden="true"></span>

        <article
          v-for="(item, idx) in hitos"
          :key="item.anio"
          class="hito"
          :class="[idx % 2 === 0 ? 'hito--izq' : 'hito--der']"
        >
          <!-- Punto en la línea -->
          <span class="hito-punto" aria-hidden="true"></span>

          <!-- Texto -->
          <div class="hito-texto">
            <div class="hito-icono" aria-hidden="true">
              <span v-html="item.icono"></span>
            </div>
            <h2 class="hito-anio">{{ item.anio }}</h2>
            <h3 class="hito-titulo">{{ item.titulo }}</h3>
            <p class="hito-descripcion">{{ item.descripcion }}</p>
          </div>

          <!-- Imagen -->
          <div class="hito-imagen">
            <img :src="item.imagen" :alt="item.titulo" loading="lazy" @error="onImageError" />
            <span class="hito-tag">{{ item.tag }}</span>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script setup>
// Íconos inline para los hitos
const iconFundacion = `<svg viewBox="0 0 24 24" width="20" height="20" fill="#1e2a3e"><path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z"/></svg>`
const iconExpansion = `<svg viewBox="0 0 24 24" width="20" height="20" fill="#1e2a3e"><path d="M13 2L4.09 12.97l.01.01L4 13l9 9 9-9-9-9zm-1 6.5L17.5 14 13 18.5 8.5 14 12 8.5z"/></svg>`
const iconHoy = `<svg viewBox="0 0 24 24" width="20" height="20" fill="#1e2a3e"><path d="M12 2L9.19 8.62 2 9.24l5.45 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24l-7.19-.62L12 2z"/></svg>`

const hitos = [
  {
    anio: '1958',
    titulo: 'Fundación y Primeros Pasos',
    descripcion:
      'Nace bajo el amparo de la comunidad educativa, iniciando su labor docente en un modesto local. La visión era clara: brindar una educación de calidad basada en la disciplina y el honor.',
    imagen:
      'https://images.unsplash.com/photo-1568667256549-094345857637?w=700&h=480&fit=crop&q=80',
    tag: 'EL INICIO',
    icono: iconFundacion,
  },
  {
    anio: '1982',
    titulo: 'Expansión Infraestructural',
    descripcion:
      'Ante la creciente demanda, el colegio expande sus instalaciones, inaugurando nuevos pabellones, laboratorios de ciencias y el emblemático auditorio central, consolidándose como referente provincial.',
    imagen:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&h=480&fit=crop&q=80',
    tag: 'CRECIMIENTO',
    icono: iconExpansion,
  },
  {
    anio: 'Hoy',
    titulo: 'Liderazgo e Innovación',
    descripcion:
      'Actualmente, integramos tecnología de vanguardia en nuestras aulas. Seguimos liderando en competencias académicas y deportivas, manteniendo vivo el espíritu de excelencia que nos caracteriza.',
    imagen:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&h=480&fit=crop&q=80',
    tag: 'INNOVACIÓN',
    icono: iconHoy,
  },
]

// Fallback simple si la imagen no carga: la oculta y muestra el tag centrado
const onImageError = (e) => {
  e.target.style.opacity = '0.15'
}
</script>

<style scoped>
.historia-page {
  font-family: 'Inter', 'Segoe UI', sans-serif;
  background-color: #ffffff;
  color: #1e2a3e;
  padding: 3rem 0 5rem;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ============== ENCABEZADO ============== */
.header-section {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 2rem;
  align-items: end;
  margin-bottom: 4rem;
}

.eyebrow {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 2.5px;
  color: #4a6177;
  margin-bottom: 0.5rem;
}

.page-title {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 3.4rem;
  font-weight: 900;
  color: #1e2a3e;
  margin: 0;
  letter-spacing: -1px;
  line-height: 1;
}

.title-outline {
  display: block;
  font-size: 3.6rem;
  -webkit-text-stroke: 2px #1e2a3e;
  color: transparent;
  font-weight: 900;
  margin-top: 0.2rem;
}

.page-description {
  color: #4a6177;
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: right;
  margin: 0;
}

/* ============== TIMELINE ============== */
.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 1rem 0;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #fbc02d;
  transform: translateX(-50%);
}

.hito {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hito-punto {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  background-color: #fbc02d;
  border: 3px solid #1e2a3e;
  border-radius: 50%;
  z-index: 2;
}

/* Dirección del contenido */
.hito--izq .hito-texto { grid-column: 1; text-align: right; padding-right: 0.5rem; }
.hito--izq .hito-imagen { grid-column: 2; }

.hito--der .hito-imagen { grid-column: 1; }
.hito--der .hito-texto { grid-column: 2; text-align: left; padding-left: 0.5rem; }

.hito--izq .hito-icono { margin-left: auto; }
.hito--der .hito-icono { margin-right: auto; }

/* Texto del hito */
.hito-texto {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.hito-icono {
  width: 42px;
  height: 42px;
  background-color: #fbc02d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.4rem;
}

.hito-anio {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 2.6rem;
  font-weight: 900;
  color: #1e2a3e;
  margin: 0;
  letter-spacing: -0.5px;
  line-height: 1;
}

.hito-titulo {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  color: #b7791f;
  margin: 0 0 0.5rem;
  letter-spacing: 0.3px;
}

.hito-descripcion {
  color: #2c3f4f;
  font-size: 0.92rem;
  line-height: 1.6;
  margin: 0;
}

/* Imagen */
.hito-imagen {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background-color: #1e2a3e;
  aspect-ratio: 7 / 5;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.hito-imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hito-tag {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background-color: #fbc02d;
  color: #1e2a3e;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 1.2px;
  padding: 0.35rem 0.7rem;
  border-radius: 3px;
}

/* ============== RESPONSIVE ============== */
@media (max-width: 800px) {
  .header-section {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .page-description {
    text-align: left;
  }
  .page-title {
    font-size: 2.6rem;
  }
  .title-outline {
    font-size: 2.8rem;
  }
  /* En móvil: apilamos y la línea va a la izquierda */
  .timeline-line {
    left: 1rem;
    transform: none;
  }
  .hito {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    padding-left: 2.5rem;
  }
  .hito-punto {
    left: 1rem;
    top: 1.5rem;
    transform: translate(-50%, 0);
  }
  .hito--izq .hito-texto,
  .hito--der .hito-texto,
  .hito--izq .hito-imagen,
  .hito--der .hito-imagen {
    grid-column: 1;
    text-align: left;
    padding: 0;
  }
  .hito--izq .hito-icono,
  .hito--der .hito-icono {
    margin: 0;
  }
  .hito-anio {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  .page-title {
    font-size: 2rem;
  }
  .title-outline {
    font-size: 2.2rem;
  }
}
</style>
