<template>
  <!-- Backdrop mobile -->
  <Transition name="fade">
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-0 bg-[rgba(10,49,68,0.45)] z-[999] backdrop-blur-[3px]"
      @click="closeMobileMenu"
    />
  </Transition>

  <header
    class="sticky top-0 z-[1000] bg-white transition-shadow duration-300"
    :class="isScrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : 'shadow-[0_1px_0_rgba(0,0,0,0.07)]'"
  >
    <div class="max-w-[1200px] mx-auto px-6 max-[480px]:px-4 py-3 flex items-center justify-between gap-4">

      <!-- Logo -->
      <router-link
        to="/"
        class="flex items-center gap-3 no-underline flex-shrink-0"
        @click="closeMobileMenu"
      >
        <img
          src="../assets/logo.png"
          alt="Logo I.E. Santa Rosa"
          class="h-[38px] min-[480px]:h-12 w-auto object-contain block"
        />
        <div class="flex flex-col leading-[1.2]">
          <span class="text-[1.05rem] min-[480px]:text-[1.15rem] font-bold text-[#0a3144] tracking-tight uppercase">
            I.E. Santa Rosa
          </span>
          <span class="text-[0.6rem] min-[480px]:text-[0.65rem] font-medium text-[#7a8a95] tracking-[0.8px] uppercase">
            Institución Educativa
          </span>
        </div>
      </router-link>

      <!-- Nav drawer (mobile) / horizontal menu (desktop) -->
      <nav
        class="flex flex-col justify-start fixed top-0 right-0 translate-x-full w-[78%] max-w-[320px] h-screen bg-white shadow-[-8px_0_40px_rgba(0,0,0,0.14)] transition-transform duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] z-[1000] overflow-y-auto nav:flex-row nav:static nav:flex-1 nav:justify-end nav:translate-x-0 nav:w-auto nav:max-w-none nav:h-auto nav:bg-transparent nav:shadow-none nav:transition-none nav:z-auto nav:overflow-visible"
        :class="{ '!translate-x-0': mobileMenuOpen }"
        aria-label="Navegación principal"
      >
        <!-- Mobile panel header -->
        <div class="flex items-center gap-3 px-6 pt-6 pb-5 border-b border-[#f0f2f4] nav:hidden">
          <img src="../assets/logo.png" alt="Logo" class="h-9 w-auto object-contain" />
          <div class="flex flex-col leading-[1.2]">
            <span class="text-sm font-bold text-[#0a3144] uppercase tracking-tight">I.E. Santa Rosa</span>
            <span class="text-[0.58rem] font-medium text-[#7a8a95] uppercase tracking-[0.7px]">Institución Educativa</span>
          </div>
        </div>

        <ul class="flex flex-col items-start w-full list-none m-0 px-4 py-3 gap-1 nav:flex-row nav:items-center nav:gap-1 nav:w-auto nav:p-0">

          <li class="w-full nav:w-auto">
            <router-link to="/" class="nav-link group" @click="closeMobileMenu">
              INICIO
              <span class="nav-underline group-hover:scale-x-100"></span>
            </router-link>
          </li>

          <!-- NUESTRO COLEGIO con dropdown -->
          <li class="relative w-full nav:w-auto" @mouseleave="scheduleClose">
            <button
              class="relative flex items-center justify-between w-full px-3 py-3 text-[0.875rem] font-semibold tracking-[0.4px] text-[#1e2a3e] rounded-lg transition-all duration-200 bg-transparent border-0 cursor-pointer font-[inherit] hover:text-[#fbc02d] hover:bg-[#fff8e5] nav:inline-flex nav:justify-start nav:w-auto nav:px-[0.65rem] nav:py-[0.45rem] nav:text-[0.78rem] nav:tracking-[0.5px] nav:hover:bg-[#fef9e3] nav:gap-1.5 group/dd"
              :class="dropdownOpen ? 'text-[#b7791f] bg-[#fff8e5]' : ''"
              @click="toggleDropdown"
              @mouseenter="openDropdown"
              aria-haspopup="true"
              :aria-expanded="dropdownOpen"
            >
              NUESTRO COLEGIO
              <svg
                class="w-[11px] h-[11px] flex-shrink-0 transition-transform duration-[250ms] opacity-70"
                :class="{ 'rotate-180': dropdownOpen }"
                viewBox="0 0 24 24" fill="none"
              >
                <polyline points="6 9 12 15 18 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span
                class="absolute left-[0.65rem] right-[0.65rem] bottom-[4px] h-[2px] bg-[#fbc02d] rounded-full origin-center transition-transform duration-[250ms] hidden nav:block"
                :class="dropdownOpen ? 'scale-x-100' : 'scale-x-0 group-hover/dd:scale-x-100'"
              ></span>
            </button>

            <Transition name="dropdown-anim">
              <div
                v-if="dropdownOpen"
                class="ml-3 static nav:absolute nav:top-[calc(100%+8px)] nav:left-0 nav:ml-0 nav:z-[102]"
                @mouseenter="cancelClose"
                @mouseleave="scheduleClose"
              >
                <!-- Mobile: lista simple sin fondo -->
                <ul class="list-none m-0 py-1 border-l-2 border-l-[#fbc02d] pl-1 nav:hidden">
                  <li v-for="(item, i) in dropdownItems" :key="i">
                    <router-link
                      :to="item.to"
                      class="dropdown-link flex items-center gap-3 px-3 py-2.5 text-[0.84rem] font-medium no-underline rounded-lg transition-all duration-150"
                      @click="closeAll"
                    >
                      <span class="w-[30px] h-[30px] rounded-[8px] flex items-center justify-center flex-shrink-0 bg-[#f4f6f8] text-[#4a6177] transition-colors duration-150 dropdown-icon">
                        <svg viewBox="0 0 24 24" width="16" height="16" v-html="item.icon"></svg>
                      </span>
                      {{ item.label }}
                    </router-link>
                  </li>
                </ul>

                <!-- Desktop: panel con header y descripciones -->
                <div class="hidden nav:block bg-white rounded-2xl min-w-[260px] overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06)] border border-black/[0.06]">
                  <!-- Header del panel -->
                  <div class="px-4 pt-4 pb-3 border-b border-[#f0f2f5]">
                    <p class="text-[0.6rem] font-bold tracking-[2.5px] text-[#9aabb7] uppercase m-0">Nuestro Colegio</p>
                  </div>
                  <!-- Items -->
                  <ul class="list-none m-0 p-2">
                    <li v-for="(item, i) in dropdownItems" :key="i">
                      <router-link
                        :to="item.to"
                        class="dropdown-link group/item flex items-center gap-3 px-3 py-2.5 rounded-xl no-underline transition-all duration-150"
                        @click="closeAll"
                      >
                        <span class="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 bg-[#f4f6f8] text-[#4a6177] transition-all duration-150 dropdown-icon">
                          <svg viewBox="0 0 24 24" width="17" height="17" v-html="item.icon"></svg>
                        </span>
                        <div class="flex flex-col min-w-0">
                          <span class="text-[0.84rem] font-semibold leading-none mb-[3px] text-[#1e2a3e] transition-colors duration-150 dropdown-label">{{ item.label }}</span>
                          <span class="text-[0.7rem] text-[#9aabb7] leading-none">{{ item.desc }}</span>
                        </div>
                      </router-link>
                    </li>
                  </ul>
                  <!-- Footer -->
                  <div class="px-4 py-3 border-t border-[#f0f2f5] bg-[#fafbfc]">
                    <router-link to="/" @click="closeAll" class="flex items-center gap-1.5 text-[0.72rem] font-semibold text-[#fbc02d] no-underline hover:text-[#d4a017] transition-colors duration-150">
                      Ver todo sobre nosotros
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </router-link>
                  </div>
                </div>
              </div>
            </Transition>
          </li>

          <li class="w-full nav:w-auto">
            <router-link to="/reporte-asistencia" class="nav-link group" @click="closeMobileMenu">
              REPORTE ASISTENCIA
              <span class="nav-underline group-hover:scale-x-100"></span>
            </router-link>
          </li>

          <li class="w-full nav:w-auto">
            <router-link to="/news" class="nav-link group" @click="closeMobileMenu">
              NOTICIAS
              <span class="nav-underline group-hover:scale-x-100"></span>
            </router-link>
          </li>

          <li class="w-full mt-2 pt-3 border-t border-[#f0f2f4] nav:w-auto nav:mt-0 nav:pt-0 nav:border-t-0">
            <router-link
              to="/contacto"
              class="contact-btn flex items-center justify-center gap-2 w-full px-5 py-3 text-[0.78rem] font-bold tracking-[0.5px] rounded-lg bg-[#fbc02d] text-[#0a3144] no-underline hover:bg-[#f5b81b] nav:inline-flex nav:w-auto nav:ml-3 nav:px-5 nav:py-2 nav:animate-contact-pulse"
              @click="closeMobileMenu"
            >
              <svg class="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,12 2,6"/>
              </svg>
              CONTACTO
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Hamburger -->
      <button
        class="flex items-center justify-center w-9 h-9 -mr-1 rounded-lg hover:bg-[#f8f9fa] border-0 cursor-pointer z-[1100] flex-shrink-0 transition-colors duration-200 nav:hidden"
        @click="toggleMobileMenu"
        :aria-label="mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
        :aria-expanded="mobileMenuOpen"
      >
        <div class="flex flex-col justify-between w-5 h-[14px]">
          <span
            class="w-full h-[2px] bg-[#0a3144] rounded-full transition-[transform,opacity] duration-300 origin-center block"
            :class="mobileMenuOpen ? 'rotate-45 translate-x-[3px] translate-y-[8px]' : ''"
          ></span>
          <span
            class="w-full h-[2px] bg-[#0a3144] rounded-full transition-[transform,opacity] duration-300 origin-center block"
            :class="mobileMenuOpen ? 'opacity-0 scale-x-0' : ''"
          ></span>
          <span
            class="w-full h-[2px] bg-[#0a3144] rounded-full transition-[transform,opacity] duration-300 origin-center block"
            :class="mobileMenuOpen ? '-rotate-45 translate-x-[3px] -translate-y-[8px]' : ''"
          ></span>
        </div>
      </button>
    </div>

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

const dropdownItems = [
  {
    to: '/about',
    label: 'Quiénes Somos',
    desc:  'Identidad y presentación institucional',
    icon:  `<path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" fill="currentColor"/>`,
  },
  {
    to: '/mision-vision',
    label: 'Misión y Visión',
    desc:  'Nuestro propósito y proyección',
    icon:  `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" fill="currentColor" opacity=".9"/><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/>`,
  },
  {
    to: '/historia',
    label: 'Historia',
    desc:  '67 años de trayectoria',
    icon:  `<path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" fill="currentColor"/>`,
  },
  {
    to: '/directivos',
    label: 'Directivos',
    desc:  'Equipo de gestión institucional',
    icon:  `<path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" fill="currentColor"/>`,
  },
  {
    to: '/plana-docente',
    label: 'Plana Docente',
    desc:  'Nuestros maestros y educadores',
    icon:  `<path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z" fill="currentColor"/>`,
  },
]

const openDropdown    = () => { if (closeTimer) clearTimeout(closeTimer); dropdownOpen.value = true }
const scheduleClose   = () => { closeTimer = setTimeout(() => { dropdownOpen.value = false }, 150) }
const cancelClose     = () => { if (closeTimer) clearTimeout(closeTimer) }
const toggleDropdown  = () => { dropdownOpen.value = !dropdownOpen.value }
const closeMobileMenu = () => { mobileMenuOpen.value = false }
const closeAll        = () => { dropdownOpen.value = false; mobileMenuOpen.value = false }

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) dropdownOpen.value = false
}

const handleScroll = () => { isScrolled.value = window.scrollY > 10 }

watch(() => route.path, closeAll)
onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
/* ── Nav link base (mobile) ── */
.nav-link {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: #1e2a3e;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: color 0.2s, background-color 0.2s;
}

.nav-link:hover {
  color: #fbc02d;
  background-color: #fff8e5;
}

.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  color: #b7791f;
  font-weight: 700;
  background-color: #fff8e5;
}

/* ── Underline indicator (visible only on desktop) ── */
.nav-underline {
  display: none;
  position: absolute;
  left: 0.65rem;
  right: 0.65rem;
  bottom: 4px;
  height: 2px;
  background-color: #fbc02d;
  border-radius: 9999px;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.25s;
}

/* ── Dropdown links ── */
.dropdown-link {
  color: #4a5568;
}

.dropdown-link:hover {
  background-color: #f8f9fb;
}

.dropdown-link:hover .dropdown-icon {
  background-color: #fff0cc;
  color: #b7791f;
}

.dropdown-link:hover .dropdown-label {
  color: #0a3144;
}

.dropdown-link.router-link-active,
.dropdown-link.router-link-exact-active {
  background-color: #fff8e5;
}

.dropdown-link.router-link-active .dropdown-icon,
.dropdown-link.router-link-exact-active .dropdown-icon {
  background-color: #fbc02d;
  color: #0a3144;
}

.dropdown-link.router-link-active .dropdown-label,
.dropdown-link.router-link-exact-active .dropdown-label {
  color: #b7791f;
  font-weight: 700;
}

/* ── Desktop overrides (800px = nav breakpoint) ── */
@media (min-width: 800px) {
  .nav-link {
    display: inline-flex;
    width: auto;
    padding: 0.45rem 0.65rem;
    font-size: 0.78rem;
    letter-spacing: 0.5px;
  }

  .nav-link:hover {
    background-color: #fef9e3;
  }

  .nav-link.router-link-active,
  .nav-link.router-link-exact-active {
    background-color: transparent;
    color: #b7791f;
  }

  .nav-underline {
    display: block;
  }

  .nav-link.router-link-active .nav-underline,
  .nav-link.router-link-exact-active .nav-underline {
    transform: scaleX(1);
  }

  .dropdown-link:hover {
    background-color: #f8f9fb;
  }

  .contact-btn {
    transition: background-color 0.35s ease, color 0.35s ease;
  }

  .contact-btn:hover {
    animation-play-state: paused;
    background-color: #0a3144;
    color: #fbc02d;
  }

  .contact-btn.router-link-active,
  .contact-btn.router-link-exact-active {
    background-color: #0a3144;
    color: #fbc02d;
    animation: none;
  }
}

/* ── Vue transitions ── */
.dropdown-anim-enter-active { transition: opacity 0.18s ease, transform 0.18s ease; }
.dropdown-anim-leave-active { transition: opacity 0.12s ease, transform 0.12s ease; }
.dropdown-anim-enter-from,
.dropdown-anim-leave-to     { opacity: 0; transform: translateY(-6px); }

.fade-enter-active,
.fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from,
.fade-leave-to     { opacity: 0; }
</style>
