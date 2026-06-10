<template>
  <div class="bg-white text-[#1e2a3e] pb-24 max-md:pb-16">

    <PageHero
      badge="LEGADO INSTITUCIONAL"
      title="Nuestra Historia"
      description="Más de seis décadas forjando el futuro de la juventud santarrosina con excelencia, valores y compromiso social."
      :breadcrumb="[{ label: 'Nuestro Colegio' }, { label: 'Historia' }]"
    />

    <div class="max-w-[1100px] mx-auto px-6 pt-14 max-md:pt-10">
      <div class="timeline">

        <article
          v-for="(hito, idx) in hitos"
          :key="hito.anio"
          v-reveal="idx * 80"
          class="hito"
          :class="idx % 2 === 0 ? 'hito--izq' : 'hito--der'"
        >
          <span class="hito-punto" aria-hidden="true"></span>

          <!-- Texto -->
          <div class="hito-texto">
            <div class="w-10 h-10 rounded-lg bg-[#fbc02d] flex items-center justify-center mb-4 flex-shrink-0" :class="idx % 2 === 0 ? 'ml-auto' : ''">
              <span v-html="hito.icono"></span>
            </div>
            <p class="text-[#fbc02d] text-[0.68rem] font-bold tracking-[2px] uppercase m-0 mb-1">{{ hito.tag }}</p>
            <h2 class="text-[2.4rem] max-md:text-[1.8rem] font-semibold text-[#0a3144] m-0 mb-1 leading-none">{{ hito.anio }}</h2>
            <h3 class="text-[1rem] font-semibold text-[#1e2a3e] m-0 mb-3">{{ hito.titulo }}</h3>
            <p class="text-[#4a6177] text-[0.9rem] leading-[1.65] m-0">{{ hito.descripcion }}</p>
          </div>

          <!-- Imagen -->
          <div class="hito-imagen">
            <img :src="hito.imagen" :alt="hito.titulo" loading="lazy" class="w-full h-full object-cover block" @error="e => e.target.style.opacity = '0.15'" />
            <span class="absolute bottom-3 left-3 bg-[#fbc02d] text-[#1e2a3e] text-[0.65rem] font-bold tracking-[1.2px] py-[0.3rem] px-[0.7rem] rounded-sm">{{ hito.tag }}</span>
          </div>
        </article>

      </div>
    </div>
  </div>
</template>

<script setup>
import PageHero from '../components/PageHero.vue'
import { useSeo } from '../composables/useSeo'

useSeo({
  title: 'Historia',
  description: 'Conoce la historia de la I.E. Santa Rosa, institución con más de seis décadas de trayectoria educativa en Tarapoto, San Martín, Perú.',
  path: '/historia',
})

const iconFundacion = `<svg viewBox="0 0 24 24" width="20" height="20" fill="#1e2a3e"><path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z"/></svg>`
const iconExpansion = `<svg viewBox="0 0 24 24" width="20" height="20" fill="#1e2a3e"><path d="M13 2L4.09 12.97l.01.01L4 13l9 9 9-9-9-9zm-1 6.5L17.5 14 13 18.5 8.5 14 12 8.5z"/></svg>`
const iconHoy       = `<svg viewBox="0 0 24 24" width="20" height="20" fill="#1e2a3e"><path d="M12 2L9.19 8.62 2 9.24l5.45 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24l-7.19-.62L12 2z"/></svg>`

const hitos = [
  {
    anio: '1959',
    titulo: 'Fundación y Primeros Pasos',
    descripcion: 'Nace bajo el amparo de la comunidad educativa, iniciando su labor docente en un modesto local. La visión era clara: brindar una educación de calidad basada en la disciplina y el honor.',
    imagen: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=700&h=480&fit=crop&q=80',
    tag: 'EL INICIO',
    icono: iconFundacion,
  },
  {
    anio: '1982',
    titulo: 'Expansión Infraestructural',
    descripcion: 'Ante la creciente demanda, el colegio expande sus instalaciones, inaugurando nuevos pabellones, laboratorios de ciencias y el emblemático auditorio central, consolidándose como referente provincial.',
    imagen: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&h=480&fit=crop&q=80',
    tag: 'CRECIMIENTO',
    icono: iconExpansion,
  },
  {
    anio: 'Hoy',
    titulo: 'Liderazgo e Innovación',
    descripcion: 'Actualmente, integramos tecnología de vanguardia en nuestras aulas. Seguimos liderando en competencias académicas y deportivas, manteniendo vivo el espíritu de excelencia que nos caracteriza desde 1959.',
    imagen: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&h=480&fit=crop&q=80',
    tag: 'INNOVACIÓN',
    icono: iconHoy,
  },
]
</script>

<style scoped>
.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 1rem 0 2rem;
}

.timeline::before {
  content: '';
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
  border: 3px solid #0a3144;
  border-radius: 50%;
  z-index: 2;
}

.hito--izq .hito-texto { grid-column: 1; text-align: right; }
.hito--izq .hito-imagen { grid-column: 2; }
.hito--der .hito-imagen { grid-column: 1; }
.hito--der .hito-texto  { grid-column: 2; text-align: left; }

.hito-imagen {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background-color: #1e2a3e;
  aspect-ratio: 7 / 5;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

@media (max-width: 700px) {
  .timeline::before { left: 1.2rem; transform: none; }
  .hito { grid-template-columns: 1fr; gap: 1.2rem; padding-left: 3rem; }
  .hito-punto { left: 1.2rem; top: 1.4rem; transform: translate(-50%, 0); }
  .hito--izq .hito-texto,
  .hito--der .hito-texto  { grid-column: 1; text-align: left; }
  .hito--izq .hito-imagen,
  .hito--der .hito-imagen { grid-column: 1; }
  .hito--izq .hito-texto .ml-auto { margin-left: 0; }
}
</style>
