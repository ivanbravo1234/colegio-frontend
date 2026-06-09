<template>
  <main class="home-page">
    <!-- SECCIÓN HERO -->
    <section class="hero" :style="{ backgroundImage: `url(${heroBgImage})` }">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-badge">EXCELENCIA EDUCATIVA</span>
        <h1 class="hero-title">Forjando líderes con valores</h1>
        <p class="hero-description">
          En la I.E. Santa Rosa, educamos para el mañana hoy, integrando fe, ciencia y disciplina en cada paso.
        </p>
        <div class="hero-buttons">
          <button class="btn btn-primary">CONÓCENOS</button>
          <button class="btn btn-outline">ADMISIÓN 2027</button>
        </div>
      </div>
    </section>

    <!-- SECCIÓN VALORES -->
    <section class="valores">
      <div class="container">
        <div class="valores-header">
          <span class="section-label">NUESTRA ESENCIA</span>
          <h2 class="section-title">Nuestros Valores</h2>
          <p class="section-subtitle">
            La base de nuestra formación integral se sustenta en tres pilares fundamentales que guían a cada estudiante hacia la realización personal y profesional.
          </p>
        </div>

        <div class="valores-grid">
          <div class="valor-card valor-card--yellow">
            <div class="valor-icon">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L7 9.9V13h2V9.6l1.8-.7"/>
              </svg>
            </div>
            <h3>Trabajo</h3>
            <p>Fomentamos la cultura del esfuerzo y la perseverancia como el único camino hacia la excelencia y el cumplimiento de metas personales.</p>
          </div>

          <div class="valor-card valor-card--dark">
            <div class="valor-icon">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
            </div>
            <h3>Disciplina</h3>
            <p>Promovemos el orden, el respeto por las normas y el autocontrol como herramientas vitales para la convivencia armónica y el éxito académico.</p>
          </div>

          <div class="valor-card valor-card--light">
            <div class="valor-icon">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <h3>Dignidad</h3>
            <p>Cultivamos el respeto propio y hacia los demás, valorando la integridad humana como el tesoro más preciado de nuestra comunidad.</p>
          </div>
        </div>

        <div class="watermark" aria-hidden="true">SR</div>
      </div>
    </section>

    <!-- SECCIÓN CONVENIOS -->
    <section class="convenios">
      <div class="container">
        <span class="section-label section-label--dark">ALIANZAS ESTRATÉGICAS</span>
        <h2 class="section-title section-title--center">Convenios Institucionales</h2>
        <div class="convenios-grid">
          <div class="convenio-card">
            <div class="convenio-image convenio-image--macmillan" aria-label="Macmillan Education">
              <span class="convenio-logo-text">M</span>
            </div>
            <p class="convenio-name">MACMILLAN EDUCATION</p>
          </div>
          <div class="convenio-card">
            <div class="convenio-image convenio-image--google" aria-label="Google Workspace">
              <span class="convenio-logo-text">G</span>
            </div>
            <p class="convenio-name">GOOGLE WORKSPACE</p>
          </div>
          <div class="convenio-card">
            <div class="convenio-image convenio-image--bnice" aria-label="B-Nice Academy">
              <span class="convenio-logo-text">B</span>
            </div>
            <p class="convenio-name">B-NICE ACADEMY</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN NOTICIAS -->
    <section class="noticias">
      <div class="container">
        <div class="noticias-header">
          <div>
            <span class="section-label">ACTUALIDAD</span>
            <h2 class="section-title section-title--light">Últimas Noticias</h2>
          </div>
          <a href="#" class="ver-todas">Ver todas <span class="arrow">→</span></a>
        </div>

        <div class="noticias-grid">
          <article class="noticia-card">
            <div class="noticia-image" :style="noticiaImg(0)">
              <span class="noticia-tag">INSTITUCIONAL</span>
            </div>
            <div class="noticia-body">
              <h3>Inauguración del Año Escolar 2026</h3>
              <p>Damos la bienvenida a toda nuestra comunidad educativa en este nuevo ciclo lleno de retos y aprendizajes...</p>
              <a href="#" class="leer-mas">Leer más <span class="arrow">›</span></a>
            </div>
          </article>

          <article class="noticia-card">
            <div class="noticia-image" :style="noticiaImg(1)">
              <span class="noticia-tag">ACADÉMICO</span>
            </div>
            <div class="noticia-body">
              <h3>Logros destacados en las Olimpiadas</h3>
              <p>Nuestros estudiantes obtuvieron los primeros puestos en el concurso regional de matemáticas y ciencias...</p>
              <a href="#" class="leer-mas">Leer más <span class="arrow">›</span></a>
            </div>
          </article>

          <article class="noticia-card">
            <div class="noticia-image" :style="noticiaImg(2)">
              <span class="noticia-tag">ACTIVIDADES</span>
            </div>
            <div class="noticia-body">
              <h3>Taller de Innovación Tecnológica</h3>
              <p>Se realizó con éxito el primer seminario de herramientas digitales aplicadas a la educación para padres...</p>
              <a href="#" class="leer-mas">Leer más <span class="arrow">›</span></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import heroImg from '@/assets/PortadaSRWEB.png'
const heroBgImage = heroImg

// Imágenes de fondo para las tarjetas de noticias (Unsplash)
const noticiaImagenes = [
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop&q=80', // alumnos en aula
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&q=80', // olimpiadas/estudio
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&q=80', // tecnología
]
const noticiaImg = (i) => ({
  backgroundImage: `linear-gradient(rgba(10, 49, 68, 0.55), rgba(10, 49, 68, 0.55)), url(${noticiaImagenes[i]})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})
</script>

<style scoped>
/* ----- ESTILOS GENERALES ----- */
.home-page {
  font-family: 'Inter', sans-serif;
  color: #1e2a3e;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  position: relative;
}

/* ----- HERO ----- */
.hero {
  position: relative;
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center 35%;
  background-repeat: no-repeat;
  background-color: #1f2f3e;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(10, 49, 68, 0.85) 0%, rgba(10, 49, 68, 0.55) 50%, rgba(10, 49, 68, 0.25) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  padding: 0 1.5rem;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-badge {
  display: inline-block;
  background-color: #fbc02d;
  color: #1e2a3e;
  font-weight: 800;
  padding: 0.45rem 1rem;
  font-size: 0.75rem;
  letter-spacing: 2px;
  margin-bottom: 1.2rem;
  width: fit-content;
  border-radius: 2px;
}

.hero-title {
  font-size: 3.4rem;
  font-weight: 800;
  color: white;
  margin: 0 0 1rem;
  line-height: 1.05;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.3);
  max-width: 550px;
}

.hero-description {
  font-size: 1.05rem;
  color: #f0f0f0;
  margin: 0 0 1.8rem;
  line-height: 1.5;
  max-width: 480px;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}

.hero-buttons {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.btn {
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  padding: 0.85rem 1.6rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1.5px solid transparent;
}

.btn-primary {
  background-color: #fbc02d;
  color: #1e2a3e;
  border-color: #fbc02d;
}
.btn-primary:hover {
  background-color: #f5b81b;
  border-color: #f5b81b;
}

.btn-outline {
  background-color: transparent;
  color: white;
  border-color: white;
}
.btn-outline:hover {
  background-color: white;
  color: #1e2a3e;
}

/* ----- ETIQUETAS Y TÍTULOS ----- */
.section-label {
  display: inline-block;
  background-color: #fbc02d;
  color: #1e2a3e;
  font-weight: 800;
  font-size: 0.7rem;
  letter-spacing: 2px;
  padding: 0.4rem 0.9rem;
  margin-bottom: 1rem;
  border-radius: 2px;
}

.section-label--dark {
  background-color: #0a3144;
  color: #fbc02d;
}

.section-title {
  font-family: 'Public Sans', sans-serif;
  font-size: 2.4rem;
  font-weight: 800;
  color: #0a3144;
  margin: 0 0 0.5rem;
  line-height: 1.1;
}

.section-title--center {
  text-align: center;
}

.section-title--light {
  color: white;
}

.section-subtitle {
  color: #4a6177;
  margin: 0 0 2.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 620px;
}

/* ----- VALORES ----- */
.valores {
  position: relative;
  background: #fff;
  overflow: hidden;
}

.valores-header {
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 2;
}

.valores-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  position: relative;
  z-index: 2;
}

.valor-card {
  padding: 1.8rem 1.5rem;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}

.valor-card h3 {
  font-family: 'Public Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  margin: 0 0 0.7rem;
  color: inherit;
}

.valor-card p {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.55;
  color: inherit;
  opacity: 0.9;
}

.valor-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  background-color: #1e2a3e;
  color: #fbc02d;
}

.valor-card--yellow {
  background-color: #fbc02d;
  color: #1e2a3e;
}
.valor-card--yellow .valor-icon {
  background-color: #1e2a3e;
  color: #fbc02d;
}

.valor-card--dark {
  background-color: #0a3144;
  color: white;
}
.valor-card--dark .valor-icon {
  background-color: #fbc02d;
  color: #0a3144;
}

.valor-card--light {
  background-color: #ffffff;
  color: #1e2a3e;
  border: 1px solid #eef2f6;
  box-shadow: 0 4px 14px rgba(0,0,0,0.04);
}
.valor-card--light .valor-icon {
  background-color: #0a3144;
  color: #fbc02d;
}

.watermark {
  position: absolute;
  top: 30%;
  right: 2%;
  font-family: 'Public Sans', sans-serif;
  font-size: 11rem;
  font-weight: 900;
  color: rgba(251, 192, 45, 0.10);
  letter-spacing: -8px;
  line-height: 1;
  pointer-events: none;
  user-select: none;
  z-index: 1;
}

/* ----- CONVENIOS ----- */
.convenios {
  background-color: #fff;
  padding-bottom: 4rem;
}

.convenios-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 2.5rem;
  justify-items: center;
}

.convenio-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s ease;
}
.convenio-card:hover {
  transform: translateY(-3px);
}

.convenio-image {
  width: 80px;
  height: 80px;
  background-color: #f4f5f7;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.95;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;
}

.convenio-card:hover .convenio-image {
  transform: scale(1.05);
}

.convenio-image--macmillan {
  background-color: #1e2a3e;
  color: #f5b81b;
}
.convenio-image--google {
  background-color: #ffffff;
  border: 1px solid #eef2f6;
  color: #4285f4;
}
.convenio-image--bnice {
  background-color: #f5b81b;
  color: #1e2a3e;
}

.convenio-logo-text {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 2.4rem;
  font-weight: 900;
  line-height: 1;
}

.convenio-name {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #4a6177;
  text-align: center;
  margin: 0;
}

/* ----- NOTICIAS ----- */
.noticias {
  background-color: #0a3144;
  padding: 0;
}

.noticias-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.ver-todas {
  color: #fbc02d;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: gap 0.2s;
}
.ver-todas:hover {
  gap: 0.7rem;
}
.ver-todas .arrow {
  font-size: 1rem;
}

.noticias-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.noticia-card {
  background-color: #06263a;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
}
.noticia-card:hover {
  transform: translateY(-4px);
}

.noticia-image {
  height: 180px;
  background-color: #1a2f3a;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.8rem;
  position: relative;
}

.noticia-tag {
  background-color: #fbc02d;
  color: #1e2a3e;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 1.2px;
  padding: 0.3rem 0.7rem;
  border-radius: 2px;
  position: relative;
  z-index: 2;
}

.noticia-body {
  padding: 1.2rem 1.3rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  flex: 1;
}

.noticia-body h3 {
  font-family: 'Public Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: white;
  margin: 0;
  line-height: 1.3;
}

.noticia-body p {
  font-size: 0.82rem;
  color: #b6c2cc;
  line-height: 1.5;
  margin: 0;
  flex: 1;
}

.leer-mas {
  color: #fbc02d;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.4rem;
}
.leer-mas:hover {
  text-decoration: underline;
}
.leer-mas .arrow {
  font-size: 0.9rem;
}

/* ----- RESPONSIVE ----- */
@media (max-width: 992px) {
  .valores-grid,
  .convenios-grid,
  .noticias-grid {
    grid-template-columns: 1fr;
  }
  .watermark {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  .hero-description {
    font-size: 1rem;
  }
  .section-title {
    font-size: 1.8rem;
  }
  .container {
    padding: 3rem 1rem;
  }
  .noticias-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
