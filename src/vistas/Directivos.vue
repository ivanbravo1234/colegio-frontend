<template>
  <div class="directivos-page">
    <div class="container">
      <!-- Encabezado -->
      <header class="header-section">
        <h1 class="page-title">Nuestro Equipo Directivo</h1>
        <p class="page-description">
          Comprometidos con la excelencia académica y la formación integral, nuestro
          equipo directivo lidera con visión y valores para guiar a la Institución
          Educativa Santa Rosa hacia un futuro de éxito y trascendencia educativa.
        </p>
      </header>

      <!-- Directora General -->
      <section class="directora-card">
        <div class="directora-foto">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&q=80"
            alt="Dra. Rosa Maria Castro"
            loading="lazy"
          />
        </div>
        <div class="directora-info">
          <span class="cargo-tag">DIRECTORA GENERAL</span>
          <h2 class="directora-nombre">Dra. Rosa María Castro</h2>
          <p class="directora-rol">Directora General</p>

          <blockquote class="directora-cita">
            <span class="cita-icon" aria-hidden="true">"</span>
            ¡Bienvenidos a la Institución Educativa Santa Rosa! Nuestra misión es
            formar líderes con valores sólidos y competencias globales. Cada decisión
            que tomamos está centrada en el bienestar y el crecimiento de nuestros
            estudiantes, asegurando un entorno donde el talento florezca y el
            carácter se fortalezca.
          </blockquote>

          <a
            href="mailto:direccion.general@iesantarosa.edu.pe"
            class="directora-email"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            direccion.general@iesantarosa.edu.pe
          </a>
        </div>
      </section>

      <!-- Cuerpo de Subdirección -->
      <section class="subdireccion-section">
        <h2 class="subdireccion-titulo">Cuerpo de Subdirección</h2>
        <div class="subdireccion-underline" aria-hidden="true"></div>

        <div class="subdirectores-grid">
          <article v-for="sub in subdirectores" :key="sub.nombre" class="sub-card">
            <div class="sub-foto">
              <img :src="sub.foto" :alt="sub.nombre" loading="lazy" />
            </div>
            <h3 class="sub-nombre">{{ sub.nombre }}</h3>
            <p class="sub-cargo">{{ sub.cargo }}</p>
            <p class="sub-descripcion">{{ sub.descripcion }}</p>
            <a href="#" class="sub-link">
              VER PERFIL
              <span aria-hidden="true">→</span>
            </a>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const subdirectores = [
  {
    nombre: 'Mgtr. Juan Carlos Valdivia',
    cargo: 'SUBDIRECCIÓN ACADÉMICA',
    descripcion:
      'Responsable de la innovación pedagógica y el cumplimiento de los estándares curriculares de excelencia.',
    foto:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=80',
  },
  {
    nombre: 'Lic. Ana Lucía Beltrán',
    cargo: 'SUBDIRECCIÓN ADMINISTRATIVA',
    descripcion:
      'Lidera la gestión de recursos y la optimización de procesos internos para el soporte institucional.',
    foto:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&q=80',
  },
  {
    nombre: 'Dr. Pedro Morales',
    cargo: 'SUBDIRECCIÓN DE CONVIVENCIA',
    descripcion:
      'Encargado del desarrollo integral de los alumnos, promoviendo valores éticos y convivencia escolar.',
    foto:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=500&fit=crop&q=80',
  },
]
</script>

<style scoped>
.directivos-page {
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
  margin-bottom: 2.5rem;
}

.page-title {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 2.4rem;
  font-weight: 900;
  color: #1e2a3e;
  margin: 0 0 0.6rem;
  letter-spacing: -0.5px;
}

.page-description {
  color: #4a6177;
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0;
}

/* ============== DIRECTORA ============== */
.directora-card {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  background: #f9fafc;
  border-radius: 16px;
  padding: 1.8rem;
  border: 1px solid #eef2f6;
  margin-bottom: 3.5rem;
  align-items: center;
}

.directora-foto {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  overflow: hidden;
  background-color: #eef2f6;
}

.directora-foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.directora-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.cargo-tag {
  display: inline-block;
  background-color: #fbc02d;
  color: #1e2a3e;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  padding: 0.3rem 0.7rem;
  border-radius: 3px;
  width: fit-content;
  margin-bottom: 0.4rem;
}

.directora-nombre {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 1.6rem;
  font-weight: 900;
  color: #1e2a3e;
  margin: 0;
  letter-spacing: -0.3px;
}

.directora-rol {
  color: #b7791f;
  font-size: 0.85rem;
  font-weight: 700;
  margin: 0 0 0.8rem;
}

.directora-cita {
  position: relative;
  background-color: #ffffff;
  border-left: 4px solid #fbc02d;
  padding: 1rem 1.2rem;
  margin: 0 0 1rem;
  color: #2c3f4f;
  font-size: 0.9rem;
  line-height: 1.6;
  font-style: italic;
  border-radius: 0 8px 8px 0;
}

.cita-icon {
  color: #fbc02d;
  font-size: 2rem;
  font-weight: 900;
  line-height: 0;
  vertical-align: -8px;
  margin-right: 0.2rem;
}

.directora-email {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #1e2a3e;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.5rem 0.8rem;
  background-color: #fef9e3;
  border-radius: 8px;
  width: fit-content;
  transition: background-color 0.2s, color 0.2s;
}

.directora-email:hover {
  background-color: #fbc02d;
  color: #1e2a3e;
}

/* ============== SUBDIRECCIÓN ============== */
.subdireccion-section {
  margin-top: 2rem;
}

.subdireccion-titulo {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 1.6rem;
  font-weight: 900;
  color: #1e2a3e;
  text-align: center;
  margin: 0 0 0.5rem;
}

.subdireccion-underline {
  width: 60px;
  height: 3px;
  background-color: #fbc02d;
  margin: 0 auto 2.5rem;
  border-radius: 3px;
}

.subdirectores-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;
}

.sub-card {
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #eef2f6;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}

.sub-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
}

.sub-foto {
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background-color: #eef2f6;
}

.sub-foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.sub-card:hover .sub-foto img {
  transform: scale(1.04);
}

.sub-nombre {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  color: #1e2a3e;
  margin: 1rem 1.2rem 0.2rem;
  letter-spacing: -0.2px;
}

.sub-cargo {
  font-size: 0.7rem;
  font-weight: 800;
  color: #b7791f;
  letter-spacing: 1.2px;
  margin: 0 1.2rem 0.6rem;
  text-transform: uppercase;
}

.sub-descripcion {
  color: #4a6177;
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0 1.2rem 1rem;
  flex: 1;
}

.sub-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: #1e2a3e;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1px;
  padding: 0.7rem 1.2rem;
  border-top: 1px solid #eef2f6;
  transition: color 0.2s, background-color 0.2s;
}

.sub-link:hover {
  color: #b7791f;
  background-color: #fef9e3;
}

/* ============== RESPONSIVE ============== */
@media (max-width: 900px) {
  .subdirectores-grid {
    grid-template-columns: 1fr 1fr;
  }
  .directora-card {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .directora-foto {
    max-width: 260px;
    margin: 0 auto;
  }
}

@media (max-width: 600px) {
  .page-title {
    font-size: 1.8rem;
  }
  .subdirectores-grid {
    grid-template-columns: 1fr;
  }
  .directora-nombre {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  .directora-card {
    padding: 1.2rem;
  }
}
</style>
