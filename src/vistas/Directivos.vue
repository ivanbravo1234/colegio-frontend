<template>
  <div class="bg-white text-[#1e2a3e] pb-24 max-md:pb-16">

    <PageHero
      badge="NUESTRO LIDERAZGO"
      title="Equipo Directivo"
      description="Comprometidos con la excelencia académica y la formación integral, nuestro equipo directivo lidera con visión y valores."
      :breadcrumb="[{ label: 'Nuestro Colegio' }, { label: 'Directivos' }]"
    />

    <div class="max-w-[1200px] mx-auto px-6 pt-14 max-md:pt-10">

      <!-- Directora general -->
      <section v-reveal class="grid grid-cols-[280px_1fr] max-[800px]:grid-cols-1 gap-8 bg-[#f8fafc] rounded-xl border border-[#eef2f6] p-8 max-md:p-6 mb-14 max-md:mb-10 items-center">
        <div class="rounded-xl overflow-hidden bg-[#eef2f6] max-[800px]:max-w-[240px] max-[800px]:mx-auto w-full aspect-square">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&q=80"
            alt="Dra. Rosa María Castro"
            loading="lazy"
            class="w-full h-full object-cover block"
          />
        </div>
        <div class="flex flex-col gap-2">
          <span class="inline-block self-start bg-[#fbc02d] text-[#1e2a3e] text-[0.68rem] font-bold tracking-[1.8px] py-[0.3rem] px-[0.8rem] rounded-sm mb-1">DIRECTORA GENERAL</span>
          <h2 class="text-[1.7rem] max-md:text-[1.4rem] font-semibold text-[#0a3144] m-0">Dra. Rosa María Castro</h2>
          <p class="text-[#fbc02d] text-[0.82rem] font-semibold m-0 mb-2">Directora General</p>
          <blockquote class="border-l-4 border-[#fbc02d] bg-white pl-4 pr-3 py-3 m-0 mb-3 rounded-r-lg text-[#2c3f4f] text-[0.9rem] leading-[1.65] italic">
            Bienvenidos a la I.E. Santa Rosa. Nuestra misión es formar líderes con valores sólidos y competencias globales. Cada decisión está centrada en el bienestar y crecimiento de nuestros estudiantes.
          </blockquote>
          <a
            href="mailto:direccion.general@iesantarosa.edu.pe"
            class="inline-flex items-center gap-2 self-start bg-[#fef9e3] text-[#0a3144] text-[0.85rem] font-semibold px-4 py-2 rounded-lg hover:bg-[#fbc02d] transition-colors duration-200 no-underline"
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            direccion.general@iesantarosa.edu.pe
          </a>
        </div>
      </section>

      <!-- Subdirección -->
      <section>
        <div v-reveal class="mb-10 max-md:mb-8">
          <span class="inline-block bg-[#0a3144] text-[#fbc02d] font-bold text-[0.7rem] tracking-[2px] py-[0.4rem] px-[0.9rem] mb-5 rounded-sm">CUERPO DE SUBDIRECCIÓN</span>
          <h2 class="text-[2rem] max-md:text-[1.6rem] font-semibold text-[#0a3144] m-0">Subdirectores</h2>
        </div>

        <div class="grid grid-cols-3 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 gap-6 max-md:gap-4">
          <article
            v-for="(sub, i) in subdirectores"
            :key="sub.nombre"
            v-reveal="i * 100"
            class="bg-white rounded-xl overflow-hidden border border-[#eef2f6] shadow-[0_4px_14px_rgba(0,0,0,0.04)] flex flex-col hover:-translate-y-1 transition-transform duration-200 group"
          >
            <div class="w-full overflow-hidden bg-[#eef2f6]" style="aspect-ratio: 4/5">
              <img :src="sub.foto" :alt="sub.nombre" loading="lazy" class="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div class="p-5 flex flex-col gap-1 flex-1">
              <p class="text-[0.68rem] font-bold text-[#fbc02d] tracking-[1.5px] uppercase m-0 mb-1">{{ sub.cargo }}</p>
              <h3 class="text-[1rem] font-semibold text-[#0a3144] m-0 mb-2">{{ sub.nombre }}</h3>
              <p class="text-[#4a6177] text-[0.85rem] leading-[1.5] m-0 flex-1">{{ sub.descripcion }}</p>
            </div>
          </article>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import PageHero from '../components/PageHero.vue'
import { useSeo } from '../composables/useSeo'

useSeo({
  title: 'Directivos',
  description: 'Conoce al equipo directivo de la I.E. Santa Rosa, líderes comprometidos con la excelencia educativa e institucional en Tarapoto, San Martín.',
  path: '/directivos',
})

const subdirectores = [
  {
    nombre: 'Mgtr. Juan Carlos Valdivia',
    cargo: 'Subdirección Académica',
    descripcion: 'Responsable de la innovación pedagógica y el cumplimiento de los estándares curriculares de excelencia.',
    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=80',
  },
  {
    nombre: 'Lic. Ana Lucía Beltrán',
    cargo: 'Subdirección Administrativa',
    descripcion: 'Lidera la gestión de recursos y la optimización de procesos internos para el soporte institucional.',
    foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&q=80',
  },
  {
    nombre: 'Dr. Pedro Morales',
    cargo: 'Subdirección de Convivencia',
    descripcion: 'Encargado del desarrollo integral de los alumnos, promoviendo valores éticos y convivencia escolar.',
    foto: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=500&fit=crop&q=80',
  },
]
</script>
