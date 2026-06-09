<template>
  <footer class="footer">
    <!-- Línea amarilla superior -->
    <div class="footer__yellow-line"></div>

    <div class="footer__container">
      <!-- Columna 1: Información institucional -->
      <div class="footer__column footer__brand">
        <div class="footer__logo">
          <img src="../assets/Logo SR.png" alt="Logo I.E. Santa Rosa" class="footer__logo-img" />
          <h3 class="footer__title">I.E. Santa Rosa</h3>
        </div>
        <p class="footer__description">
          Liderando la formación académica y humana en nuestra comunidad por más de 50 años.
          Comprometidos con el desarrollo integral del estudiante.
        </p>
      </div>

      <!-- Columna 2: Enlaces de institución (router-links) -->
      <div class="footer__column">
        <h4 class="footer__subtitle">INSTITUCIÓN</h4>
        <ul class="footer__links">
          <li><router-link to="/" class="footer__link">Inicio</router-link></li>
          <li><router-link to="/mision-vision" class="footer__link">Misión y Visión</router-link></li>
          <li><router-link to="/historia" class="footer__link">Historia</router-link></li>
          <li><router-link to="/directivos" class="footer__link">Directivos</router-link></li>
          <li><router-link to="/plana-docente" class="footer__link">Plana Docente</router-link></li>
          <li><router-link to="/reporte-asistencia" class="footer__link">Reporte Asistencia</router-link></li>
          <li><router-link to="/noticias" class="footer__link">Noticias</router-link></li>
          <li><router-link to="/contacto" class="footer__link">Contacto</router-link></li>
        </ul>
      </div>

      <!-- Columna 3: Contacto directo -->
      <div class="footer__column">
        <h4 class="footer__subtitle">CONTACTO DIRECTO</h4>
        <ul class="footer__contact-list">
          <li>
            <span class="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
              </svg>
            </span>
            Jr. Progreso 114, Tarapoto, Perú
          </li>
          <li>
            <span class="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
            </span>
            +51 (042) 522393
          </li>
          <li>
            <span class="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </span>
            <a href="mailto:santarosa@gmail.com" class="footer__link footer__link--inline">
              santarosa@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <!-- Columna 4: Redes sociales -->
      <div class="footer__column">
        <h4 class="footer__subtitle">REDES SOCIALES</h4>
        <div class="footer__social">
          <a
            href="https://www.facebook.com/profile.php?id=100049569977380"
            target="_blank"
            rel="noopener noreferrer"
            class="social-circle"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-circle"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-circle"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer__bottom">
      <p>© {{ new Date().getFullYear() }} INSTITUCIÓN EDUCATIVA SANTA ROSA. EXCELENCIA, TRABAJO Y DISCIPLINA.</p>
    </div>
  </footer>
</template>

<script setup>
// Footer component — fondo negro, enlaces internos como router-link
</script>

<style scoped>
.footer {
  background-color: #000000;
  color: #f0f0f0;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  width: 100%;
}

.footer__yellow-line {
  height: 4px;
  background-color: #f5b81b;
  width: 100%;
}

.footer__container {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.2fr 1fr;
  gap: 2.5rem;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
}

.footer__column {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.4rem;
}

.footer__logo-img {
  height: 36px;
  width: auto;
  object-fit: contain;
  background-color: #f5b81b;
  border-radius: 4px;
  padding: 4px;
}

.footer__title {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 900;
  margin: 0;
  color: #ffffff;
  letter-spacing: -0.3px;
}

.footer__description {
  font-size: 0.88rem;
  line-height: 1.6;
  color: #cfcfcf;
  margin: 0;
}

.footer__subtitle {
  font-size: 0.95rem;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
  color: #f5b81b;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.footer__links,
.footer__contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer__link {
  color: #e0e0e0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease, transform 0.15s;
  display: inline-block;
}

.footer__link:hover,
.footer__link.router-link-active {
  color: #f5b81b;
}

.footer__link:hover {
  transform: translateX(3px);
}

.footer__link--inline {
  color: #e0e0e0;
}

.footer__contact-list li {
  font-size: 0.9rem;
  color: #e0e0e0;
  line-height: 1.4;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-icon {
  color: #f5b81b;
  display: inline-flex;
  align-items: center;
}

.footer__social {
  display: flex;
  gap: 0.7rem;
}

.social-circle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.08);
  color: #f5b81b;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s, transform 0.2s, color 0.2s;
}

.social-circle:hover {
  background-color: #f5b81b;
  color: #000000;
  transform: translateY(-2px);
}

.footer__bottom {
  text-align: center;
  border-top: 1px solid rgba(245, 184, 27, 0.2);
  padding: 1.2rem 2rem;
  font-size: 0.8rem;
  color: #b0b0b0;
  letter-spacing: 0.5px;
}

.footer__bottom p {
  margin: 0;
}

/* ============== RESPONSIVE ============== */
@media (max-width: 900px) {
  .footer__container {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 600px) {
  .footer__container {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2.5rem 1.5rem 1.5rem;
  }
  .footer__column {
    text-align: center;
  }
  .footer__logo,
  .footer__contact-list li,
  .footer__social {
    justify-content: center;
  }
  .footer__subtitle {
    text-align: center;
  }
  .footer__link:hover {
    transform: translateX(0);
  }
}
</style>
