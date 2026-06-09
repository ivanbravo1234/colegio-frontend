<template>
  <!-- Backdrop mobile -->
  <Transition name="fade">
    <div v-if="mobileMenuOpen" class="mobile-backdrop" @click="closeMobileMenu" />
  </Transition>

  <header class="main-header" :class="{ scrolled: isScrolled }">
    <div class="header-container">
      <!-- Logo -->
      <router-link to="/" class="logo" @click="closeMobileMenu">
        <img src="../assets/Logo SR.png" alt="Logo I.E. Santa Rosa" class="logo-image" />
        <div class="logo-text">
          <span class="logo-name uppercase">I.E. Santa Rosa</span>
          <span class="logo-sub">Institución Educativa</span>
        </div>
      </router-link>

      <!-- Navegación -->
      <nav class="navbar" :class="{ 'nav-open': mobileMenuOpen }" aria-label="Navegación principal">
        <ul class="nav-menu">
          <li class="nav-item">
            <router-link to="/" class="nav-link" @click="closeMobileMenu">INICIO</router-link>
          </li>

          <!-- Dropdown Nuestro Colegio -->
          <li
            class="nav-item dropdown"
            :class="{ 'dropdown-open': dropdownOpen }"
            @mouseleave="scheduleClose"
          >
            <button
              class="nav-link dropdown-toggle"
              @click="toggleDropdown"
              @mouseenter="openDropdown"
              aria-haspopup="true"
              :aria-expanded="dropdownOpen"
            >
              NUESTRO COLEGIO
              <svg
                class="arrow"
                :class="{ rotate: dropdownOpen }"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="6 9 12 15 18 9"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <Transition name="dropdown-anim">
              <ul
                v-if="dropdownOpen"
                class="dropdown-menu"
                @mouseenter="cancelClose"
                @mouseleave="scheduleClose"
              >
                <li>
                  <router-link to="/mision-vision" class="dropdown-item" @click="closeAll">
                    Misión y Visión
                  </router-link>
                </li>
                <li>
                  <router-link to="/historia" class="dropdown-item" @click="closeAll">
                    Historia
                  </router-link>
                </li>
                <li>
                  <router-link to="/directivos" class="dropdown-item" @click="closeAll">
                    Directivos
                  </router-link>
                </li>
                <li>
                  <router-link to="/plana-docente" class="dropdown-item" @click="closeAll">
                    Plana Docente
                  </router-link>
                </li>
              </ul>
            </Transition>
          </li>

          <li class="nav-item">
            <router-link to="/reporte-asistencia" class="nav-link" @click="closeMobileMenu">
              REPORTE ASISTENCIA
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/noticias" class="nav-link" @click="closeMobileMenu">NOTICIAS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contacto" class="nav-link" @click="closeMobileMenu">CONTACTO</router-link>
          </li>
        </ul>
      </nav>

      <!-- Botón hamburguesa -->
      <button
        class="mobile-toggle"
        :class="{ 'is-active': mobileMenuOpen }"
        @click="toggleMobileMenu"
        :aria-label="mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
        :aria-expanded="mobileMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- LÍNEA AMARILLA -->
    <div class="yellow-line"></div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const dropdownOpen = ref(false)
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)
let closeTimer = null

const openDropdown = () => {
  if (closeTimer) clearTimeout(closeTimer)
  dropdownOpen.value = true
}

const scheduleClose = () => {
  closeTimer = setTimeout(() => {
    dropdownOpen.value = false
  }, 150)
}

const cancelClose = () => {
  if (closeTimer) clearTimeout(closeTimer)
}

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const closeAll = () => {
  dropdownOpen.value = false
  mobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) dropdownOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

watch(() => route.path, closeAll)

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
/* ----- BASE HEADER ----- */
.main-header {
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.07);
  transition: box-shadow 0.3s ease;
}

.main-header.scrolled {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.8rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

/* ----- LOGO ----- */
.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-image {
  height: 50px;
  width: auto;
  object-fit: contain;
  display: block;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.logo-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #0a3144;
  letter-spacing: -0.2px;
}

.logo-sub {
  font-size: 0.67rem;
  font-weight: 500;
  color: #7a8a95;
  letter-spacing: 0.6px;
  text-transform: uppercase;
}

/* ----- NAVBAR ----- */
.navbar {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.25rem;
  align-items: center;
}

.nav-item {
  position: relative;
}

/* ----- NAV LINKS ----- */
.nav-link {
  position: relative;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 0.55px;
  color: #1e2a3e;
  transition: color 0.2s ease;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  padding: 0.5rem 0.65rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  border-radius: 6px;
  white-space: nowrap;
}

/* Indicador amarillo inferior */
.nav-link::after {
  content: '';
  position: absolute;
  left: 0.65rem;
  right: 0.65rem;
  bottom: 3px;
  height: 2px;
  background-color: #fbc02d;
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.25s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after,
.nav-link.router-link-exact-active::after,
.dropdown-open .dropdown-toggle::after {
  transform: scaleX(1);
}

.nav-link:hover,
.dropdown-open .dropdown-toggle {
  color: #fbc02d;
}

.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  color: #fbc02d;
  font-weight: 700;
}

/* ----- FLECHA SVG ----- */
.arrow {
  width: 12px;
  height: 12px;
  transition: transform 0.25s ease;
  flex-shrink: 0;
}

.arrow.rotate {
  transform: rotate(180deg);
}

/* ----- DROPDOWN MENU ----- */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  background: #ffffff;
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
  min-width: 215px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-top: 3px solid #fbc02d;
  z-index: 102;
}

.dropdown-item {
  display: block;
  padding: 0.6rem 1.25rem;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  color: #2c3f4f;
  transition: background-color 0.15s ease, color 0.15s ease, padding-left 0.18s ease;
}

.dropdown-item:hover {
  background-color: #fffbf0;
  color: #0a3144;
  padding-left: 1.55rem;
}

.dropdown-item.router-link-active,
.dropdown-item.router-link-exact-active {
  background-color: #fef3c7;
  color: #795900;
  font-weight: 600;
}

/* ----- TRANSICIÓN DROPDOWN ----- */
.dropdown-anim-enter-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.dropdown-anim-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.dropdown-anim-enter-from,
.dropdown-anim-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ----- LÍNEA AMARILLA ----- */
.yellow-line {
  height: 4px;
  background-color: #f5b81b;
}

/* ----- BACKDROP MOBILE ----- */
.mobile-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(10, 49, 68, 0.4);
  z-index: 999;
  backdrop-filter: blur(2px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ----- BOTÓN HAMBURGUESA ----- */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1100;
  flex-shrink: 0;
}

.mobile-toggle span {
  width: 100%;
  height: 2px;
  background-color: #0a3144;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
  display: block;
}

/* Hamburguesa → X */
.mobile-toggle.is-active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 6px);
}
.mobile-toggle.is-active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.mobile-toggle.is-active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -6px);
}

/* ----- RESPONSIVE ----- */
@media (max-width: 800px) {
  .mobile-toggle {
    display: flex;
  }

  .navbar {
    position: fixed;
    top: 0;
    right: -100%;
    width: 75%;
    max-width: 320px;
    height: 100vh;
    background: #ffffff;
    box-shadow: -6px 0 32px rgba(0, 0, 0, 0.12);
    transition: right 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 5rem 1.5rem 2rem;
    justify-content: flex-start;
    z-index: 1000;
    overflow-y: auto;
  }

  .navbar.nav-open {
    right: 0;
  }

  .nav-menu {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    width: 100%;
  }

  .nav-item {
    width: 100%;
    border-bottom: 1px solid #f0f2f4;
  }

  .nav-item:last-child {
    border-bottom: none;
  }

  .nav-link {
    padding: 0.85rem 0.25rem;
    font-size: 0.875rem;
    letter-spacing: 0.6px;
    width: 100%;
    border-radius: 0;
    color: #1e2a3e;
  }

  .nav-link::after {
    display: none;
  }

  .nav-link:hover,
  .nav-link.router-link-active,
  .nav-link.router-link-exact-active {
    color: #fbc02d;
    background: none;
  }

  .dropdown-toggle {
    justify-content: space-between;
    width: 100%;
  }

  /* Dropdown dentro del panel mobile */
  .dropdown-menu {
    position: static;
    transform: none;
    box-shadow: none;
    background: transparent;
    padding: 0 0 0.5rem 0;
    border: none;
    border-top: none;
    border-left: 3px solid #fbc02d;
    border-radius: 0;
    margin-left: 0.5rem;
    min-width: unset;
    width: calc(100% - 0.5rem);
  }

  .dropdown-item {
    padding: 0.55rem 1rem;
    font-size: 0.84rem;
    color: #4a5568;
  }

  .dropdown-item:hover {
    padding-left: 1.3rem;
    background: transparent;
    color: #fbc02d;
  }

  /* Transición simplificada en mobile */
  .dropdown-anim-enter-from,
  .dropdown-anim-leave-to {
    opacity: 0;
    transform: none;
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 0.65rem 1rem;
  }

  .logo-image {
    height: 38px;
  }

  .logo-name {
    font-size: 1.05rem;
  }

  .logo-sub {
    font-size: 0.6rem;
  }
}
</style>
