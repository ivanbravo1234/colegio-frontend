<template>
  <header class="main-header">
    <div class="header-container">
      <!-- Logo -->
      <div class="logo">
        <img src="../assets/Logo SR.png" alt="Logo del colegio" class="logo-image" />
        <h1>I.E. Santa Rosa</h1>
      </div>

      <!-- Navegación -->
      <nav class="navbar" :class="{ 'nav-open': mobileMenuOpen }">
        <ul class="nav-menu">
          <li class="nav-item">
            <router-link to="/" class="nav-link">INICIO</router-link>
          </li>

          <!-- Dropdown Nuestro Colegio -->
          <li
            class="nav-item dropdown"
            :class="{ 'dropdown-open': dropdownOpen }"
            @mouseleave="closeDropdown"
          >
            <button
              class="nav-link dropdown-toggle"
              @click="toggleDropdown"
              @mouseenter="openDropdown"
              aria-haspopup="true"
              :aria-expanded="dropdownOpen"
            >
              NUESTRO COLEGIO
              <span class="arrow" :class="{ rotate: dropdownOpen }">▼</span>
            </button>
            <ul class="dropdown-menu" v-show="dropdownOpen" @mouseenter="cancelClose" @mouseleave="closeDropdown">
              <li><router-link to="/mision-vision" class="dropdown-item">Misión y Visión</router-link></li>
              <li><router-link to="/historia" class="dropdown-item">Historia</router-link></li>
              <li><router-link to="/directivos" class="dropdown-item">Directivos</router-link></li>
              <li><router-link to="/plana-docente" class="dropdown-item">Plana Docente</router-link></li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link to="/reporte-asistencia" class="nav-link">REPORTE ASISTENCIA</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/noticias" class="nav-link">NOTICIAS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contacto" class="nav-link">CONTACTO</router-link>
          </li>
        </ul>
      </nav>

      <!-- Botón hamburguesa -->
      <button class="mobile-toggle" @click="toggleMobileMenu" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- LÍNEA AMARILLA -->
    <div class="yellow-line"></div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const dropdownOpen = ref(false);
let timeoutId = null;
const mobileMenuOpen = ref(false);

const openDropdown = () => {
  if (timeoutId) clearTimeout(timeoutId);
  dropdownOpen.value = true;
};

const closeDropdown = () => {
  timeoutId = setTimeout(() => {
    dropdownOpen.value = false;
  }, 150);
};

const cancelClose = () => {
  if (timeoutId) clearTimeout(timeoutId);
};

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  if (mobileMenuOpen.value) dropdownOpen.value = false;
};
</script>

<style scoped>
/* ----- BASE HEADER ----- */
.main-header {
  background-color: white;
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.8rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* LOGO */
.logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.logo-image {
  height: 50px;
  width: auto;
  object-fit: contain;
  display: block;
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0a3144;
  margin: 0;
  letter-spacing: -0.3px;
}

/* Navegación */
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
  gap: 1.8rem;
  align-items: center;
}

.nav-item {
  position: relative;
}

/* Enlaces principales y botón dropdown */
.nav-link {
  position: relative;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  color: #1e2a3e;
  transition: color 0.2s ease;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  padding: 0.5rem 0;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

/* Indicador de hover/activo (raya amarilla) */
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 3px;
  background-color: #fbc02d;
  border-radius: 3px;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.25s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after,
.nav-link.router-link-exact-active::after,
.dropdown-open .nav-link::after {
  transform: scaleX(1);
}

/* HOVER: color amarillo CONÓCENOS */
.nav-link:hover {
  color: #fbc02d;
}

/* Flecha del dropdown */
.arrow {
  font-size: 0.7rem;
  transition: transform 0.2s;
  display: inline-block;
}

.arrow.rotate {
  transform: rotate(180deg);
}

/* Menú desplegable */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  list-style: none;
  margin: 0;
  padding: 0.6rem 0;
  min-width: 200px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  border: 1px solid #eef2f6;
  z-index: 102;
  animation: fadeIn 0.2s ease;
}

.dropdown-item {
  display: block;
  padding: 0.5rem 1.2rem;
  text-decoration: none;
  font-size: 0.85rem;
  color: #2c3f4f;
  transition: all 0.2s;
}

/* Hover en items del dropdown */
.dropdown-item:hover {
  background-color: #f5b81b;
  color: #1e2a3e; /* texto oscuro para contraste */
}

/* CORRECCIÓN: Enlace activo — color amarillo y subrayado permanente */
.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  color: #fbc02d !important;
  font-weight: 700;
}

/* Mantener hover amarillo en activos */
.nav-link.router-link-active:hover,
.nav-link.router-link-exact-active:hover {
  color: #fbc02d !important;
}

/* Cuando el dropdown está abierto, su link también muestra la raya */
.dropdown-open .nav-link {
  color: #fbc02d;
}

/* También para los items del dropdown si se quiere mantener coherencia */
.dropdown-item.router-link-active,
.dropdown-item.router-link-exact-active {
  color: #1e2a3e !important;
  font-weight: 600;
  background-color: #fef9e3;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* LÍNEA AMARILLA */
.yellow-line {
  height: 4px;
  background-color: #f5b81b;
  width: 100%;
}

/* RESPONSIVE */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1100;
}

.mobile-toggle span {
  width: 100%;
  height: 2.5px;
  background-color: #0a3144;
  border-radius: 2px;
  transition: all 0.2s;
}

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
    background: white;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
    padding: 5rem 1.5rem 2rem;
    justify-content: flex-start;
    z-index: 1000;
  }

  .navbar.nav-open {
    right: 0;
  }

  .nav-menu {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    width: 100%;
  }

  .nav-item {
    width: 100%;
  }

  .dropdown-menu {
    position: static;
    box-shadow: none;
    background: #f9fafc;
    padding-left: 1rem;
    margin-top: 0.3rem;
    border: none;
    width: 100%;
    animation: none;
  }

  .dropdown-toggle {
    justify-content: space-between;
    width: 100%;
  }

  .dropdown-item:hover {
    background-color: #f5b81b;
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 0.6rem 1rem;
  }
  .logo-image {
    height: 35px;
  }
  .logo h1 {
    font-size: 1.2rem;
  }
  .logo {
    gap: 0.5rem;
  }
}
</style>