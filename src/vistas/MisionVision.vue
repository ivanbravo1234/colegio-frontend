<template>
  <div class="mision-vision-page">
    <!-- Hero con título -->
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">Misión &amp; Visión</h1>
        <p class="hero-subtitle">Nuestra identidad y compromiso con la excelencia educativa.</p>
      </div>
      <span class="hero-watermark" aria-hidden="true">SR</span>
    </section>

    <!-- Tarjetas de Misión y Visión -->
    <section class="container cards-section">
      <div class="cards-grid">
        <!-- Tarjeta Misión -->
        <article class="mv-card">
          <div class="mv-card-head">
            <div class="mv-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#1e2a3e">
                <path d="M12 2.5c-3 0-5.5 2.5-5.5 5.5 0 1.6.7 3 1.8 4l-1.8 8h11l-1.8-8c1.1-1 1.8-2.4 1.8-4 0-3-2.5-5.5-5.5-5.5zm-2.5 14l1.1-5h2.8l1.1 5h-5zM12 9.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
              </svg>
            </div>
            <h2 class="mv-title">Misión Institucional</h2>
          </div>
          <p class="mv-text">
            Lograr que todas y todos los estudiantes de la IE Santa Rosa Tarapoto culminen
            la Educación Básica Regular en el nivel Secundaria, afiancen los aprendizajes
            establecidos en el Currículo Nacional y alcancen su desarrollo integral en
            espacios seguros, inclusivos y con una convivencia escolar democrática,
            respetando la diversidad cultural de nuestra región San Martín.
          </p>
          <div class="mv-underline" aria-hidden="true"></div>
        </article>

        <!-- Tarjeta Visión -->
        <article class="mv-card">
          <div class="mv-card-head">
            <div class="mv-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#1e2a3e">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
              </svg>
            </div>
            <h2 class="mv-title">Visión</h2>
          </div>
          <p class="mv-text">
            Al 2028, ser una institución líder en la región, reconocida por su excelencia
            académica y formación en valores, donde nuestros egresados sean ciudadanos
            capaces de enfrentar los desafíos del siglo XXI, con conciencia ambiental y
            compromiso social, contribuyendo al desarrollo de su comunidad.
          </p>
          <div class="mv-underline" aria-hidden="true"></div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
// Página estática de Misión & Visión
</script>

<style scoped>
.mision-vision-page {
  font-family: 'Inter', 'Segoe UI', sans-serif;
  background-color: #ffffff;
  color: #1e2a3e;
  padding-bottom: 4rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ============== HERO ============== */
.hero {
  position: relative;
  text-align: center;
  padding: 4rem 1.5rem 3rem;
  background: linear-gradient(180deg, #fef9e3 0%, #ffffff 100%);
  overflow: hidden;
}

.hero-title {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 3.6rem;
  font-weight: 900;
  color: #1e2a3e;
  margin: 0 0 0.8rem;
  letter-spacing: -1px;
  line-height: 1.05;
}

.hero-subtitle {
  color: #4a6177;
  font-size: 1.05rem;
  margin: 0;
}

.hero-watermark {
  position: absolute;
  bottom: -1.2rem;
  right: 4%;
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 11rem;
  font-weight: 900;
  color: rgba(251, 192, 45, 0.08);
  letter-spacing: -8px;
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

/* ============== TARJETAS ============== */
.cards-section {
  padding-top: 3rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.mv-card {
  position: relative;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #eef2f6;
  border-left: 6px solid #fbc02d;
  padding: 2rem 2rem 2.5rem;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s, box-shadow 0.2s;
}

.mv-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
}

.mv-card-head {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.2rem;
}

.mv-icon {
  width: 44px;
  height: 44px;
  background-color: #fbc02d;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.mv-title {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 900;
  color: #1e2a3e;
  margin: 0;
}

.mv-text {
  color: #2c3f4f;
  font-size: 0.97rem;
  line-height: 1.7;
  margin: 0 0 1.2rem;
  text-align: justify;
}

.mv-underline {
  width: 50px;
  height: 3px;
  background-color: #fbc02d;
  border-radius: 3px;
}

/* ============== RESPONSIVE ============== */
@media (max-width: 900px) {
  .hero-title {
    font-size: 2.6rem;
  }
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 2.5rem 1rem 2rem;
  }
  .hero-title {
    font-size: 2rem;
  }
  .mv-card {
    padding: 1.5rem;
  }
  .hero-watermark {
    font-size: 7rem;
  }
}
</style>
