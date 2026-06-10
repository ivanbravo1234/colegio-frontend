<template>
  <footer class="bg-[#06192a] text-white">

    <!-- Accent line -->
    <div class="h-1 bg-[#fbc02d] w-full"></div>

    <!-- Main grid -->
    <div class="max-w-[1200px] mx-auto px-6 py-14 max-md:py-10 grid grid-cols-[1.5fr_1fr_1fr_1.1fr] max-[900px]:grid-cols-2 max-[540px]:grid-cols-1 gap-10 max-md:gap-8">

      <!-- Columna 1: Brand -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <img src="../assets/logo.png" alt="Logo I.E. Santa Rosa" class="h-9 w-auto object-contain flex-shrink-0" />
          <div class="flex flex-col leading-[1.2]">
            <span class="text-sm font-bold text-white uppercase tracking-tight">I.E. Santa Rosa</span>
            <span class="text-[0.58rem] font-medium text-white/45 uppercase tracking-[0.7px]">Institución Educativa</span>
          </div>
        </div>
        <p class="text-[0.85rem] leading-[1.7] text-white/55 m-0">
          Liderando la formación académica y humana en nuestra comunidad desde 1959, comprometidos con el desarrollo integral del estudiante.
        </p>
        <span class="self-start bg-[#fbc02d]/10 text-[#fbc02d] text-[0.62rem] font-bold tracking-[1.8px] py-[0.35rem] px-[0.8rem] rounded-sm">
          DISCIPLINA · TRABAJO · DIGNIDAD
        </span>
      </div>

      <!-- Columna 2: Institución -->
      <div class="flex flex-col gap-3">
        <h4 class="text-[0.68rem] font-semibold text-[#fbc02d] tracking-[2px] uppercase m-0 mb-1">Institución</h4>
        <ul class="list-none p-0 m-0 flex flex-col gap-[0.55rem]">
          <li><router-link to="/" class="footer-link">Inicio</router-link></li>
          <li><router-link to="/about" class="footer-link">Nosotros</router-link></li>
          <li><router-link to="/mision-vision" class="footer-link">Misión y Visión</router-link></li>
          <li><router-link to="/historia" class="footer-link">Historia</router-link></li>
          <li><router-link to="/directivos" class="footer-link">Directivos</router-link></li>
          <li><router-link to="/plana-docente" class="footer-link">Plana Docente</router-link></li>
        </ul>
      </div>

      <!-- Columna 3: Servicios -->
      <div class="flex flex-col gap-3">
        <h4 class="text-[0.68rem] font-semibold text-[#fbc02d] tracking-[2px] uppercase m-0 mb-1">Servicios</h4>
        <ul class="list-none p-0 m-0 flex flex-col gap-[0.55rem]">
          <li><router-link to="/news" class="footer-link">Noticias</router-link></li>
          <li><router-link to="/admision" class="footer-link">Admisión 2027</router-link></li>
          <li><router-link to="/agreements" class="footer-link">Convenios</router-link></li>
          <li><router-link to="/reporte-asistencia" class="footer-link">Reporte Asistencia</router-link></li>
          <li><router-link to="/contacto" class="footer-link">Contacto</router-link></li>
        </ul>
      </div>

      <!-- Columna 4: Contacto + Redes -->
      <div class="flex flex-col gap-4">
        <div>
          <h4 class="text-[0.68rem] font-semibold text-[#fbc02d] tracking-[2px] uppercase m-0 mb-3">Contacto directo</h4>
          <ul class="list-none p-0 m-0 flex flex-col gap-3">
            <li class="flex items-start gap-2.5 text-[0.84rem] text-white/60 leading-[1.5]">
              <svg class="mt-[1px] flex-shrink-0 text-[#fbc02d]" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
              </svg>
              Jr. Progreso 114, Tarapoto, Perú
            </li>
            <li class="flex items-center gap-2.5 text-[0.84rem] text-white/60">
              <svg class="flex-shrink-0 text-[#fbc02d]" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              +51 (042) 522393
            </li>
            <li class="flex items-center gap-2.5 text-[0.84rem]">
              <svg class="flex-shrink-0 text-[#fbc02d]" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <a href="mailto:santarosa@gmail.com" class="footer-link">santarosa@gmail.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-[0.68rem] font-semibold text-[#fbc02d] tracking-[2px] uppercase m-0 mb-3">Síguenos</h4>
          <div class="flex gap-2">
            <a href="https://www.facebook.com/profile.php?id=100049569977380" target="_blank" rel="noopener noreferrer"
               class="social-btn" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
               class="social-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a href="https://wa.me/51042522393" target="_blank" rel="noopener noreferrer"
               class="social-btn" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/[0.07] px-6 py-4">
      <div class="max-w-[1200px] mx-auto flex justify-between items-center gap-4 max-[540px]:flex-col max-[540px]:text-center">
        <p class="text-[0.75rem] text-white/35 m-0 tracking-[0.3px]">
          © {{ new Date().getFullYear() }} Institución Educativa Santa Rosa. Todos los derechos reservados.
        </p>
        <p class="text-[0.75rem] text-white/25 m-0">Tarapoto, San Martín — Perú</p>
      </div>
    </div>

  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer-link {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.875rem;
  display: inline-block;
  transition: color 0.2s, transform 0.15s;
}
.footer-link:hover,
.footer-link.router-link-active {
  color: #fbc02d;
}
.footer-link:hover {
  transform: translateX(3px);
}

.social-btn {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.07);
  color: #fbc02d;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s, transform 0.2s;
}
.social-btn:hover {
  background-color: #fbc02d;
  color: #0a3144;
  transform: translateY(-2px);
}
</style>
