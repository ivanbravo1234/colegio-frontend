<template>
  <div class="bg-white text-[#1e2a3e] pb-24 max-md:pb-16">

    <PageHero
      badge="NUESTRO PROPÓSITO"
      title="Misión y Visión"
      description="Nuestra identidad y el compromiso que nos guía hacia la excelencia educativa de la región San Martín."
      :breadcrumb="[{ label: 'Nuestro Colegio' }, { label: 'Misión y Visión' }]"
    />

    <div class="max-w-[1200px] mx-auto px-6 pt-14 max-md:pt-10">

      <div class="grid grid-cols-2 max-[800px]:grid-cols-1 gap-8 max-md:gap-5">

        <!-- Misión -->
        <article v-reveal class="relative bg-white rounded-xl border border-[#eef2f6] border-l-[5px] border-l-[#fbc02d] p-8 max-md:p-6 shadow-[0_4px_18px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-200">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-11 h-11 rounded-[10px] bg-[#fbc02d] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="#1e2a3e">
                <path d="M12 2.5c-3 0-5.5 2.5-5.5 5.5 0 1.6.7 3 1.8 4l-1.8 8h11l-1.8-8c1.1-1 1.8-2.4 1.8-4 0-3-2.5-5.5-5.5-5.5zm-2.5 14l1.1-5h2.8l1.1 5h-5zM12 9.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
              </svg>
            </div>
            <h2 class="text-[1.5rem] font-semibold text-[#0a3144] m-0">Misión Institucional</h2>
          </div>
          <p class="text-[#2c3f4f] text-[0.95rem] leading-[1.75] m-0">
            Lograr que todas y todos los estudiantes de la I.E. Santa Rosa culminen la Educación Básica Regular en el nivel Secundaria, afiancen los aprendizajes establecidos en el Currículo Nacional y alcancen su desarrollo integral en espacios seguros, inclusivos y con una convivencia escolar democrática, respetando la diversidad cultural de nuestra región San Martín.
          </p>
          <div class="w-12 h-[3px] bg-[#fbc02d] rounded-full mt-6"></div>
        </article>

        <!-- Visión -->
        <article v-reveal="100" class="relative bg-white rounded-xl border border-[#eef2f6] border-l-[5px] border-l-[#0a3144] p-8 max-md:p-6 shadow-[0_4px_18px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-200">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-11 h-11 rounded-[10px] bg-[#0a3144] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="#fbc02d">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
              </svg>
            </div>
            <h2 class="text-[1.5rem] font-semibold text-[#0a3144] m-0">Visión</h2>
          </div>
          <p class="text-[#2c3f4f] text-[0.95rem] leading-[1.75] m-0">
            Al 2028, ser una institución líder en la región, reconocida por su excelencia académica y formación en valores, donde nuestros egresados sean ciudadanos capaces de enfrentar los desafíos del siglo XXI, con conciencia ambiental y compromiso social, contribuyendo al desarrollo de su comunidad.
          </p>
          <div class="w-12 h-[3px] bg-[#0a3144] rounded-full mt-6"></div>
        </article>

      </div>

      <!-- Valores como refuerzo -->
      <div v-reveal class="mt-14 max-md:mt-10 bg-[#0a3144] rounded-xl p-8 max-md:p-6 flex flex-col max-[700px]:flex-row flex-wrap gap-0 max-[700px]:gap-6 md:flex-row md:divide-x md:divide-white/10">
        <div
          v-for="(valor, i) in valores"
          :key="valor.label"
          class="flex-1 px-8 max-md:px-5 max-[700px]:px-0 first:pl-0 last:pr-0 py-2"
        >
          <p class="text-[#fbc02d] text-[0.68rem] font-bold tracking-[2px] uppercase m-0 mb-1">0{{ i + 1 }}</p>
          <h3 class="text-white text-[1.2rem] font-semibold m-0 mb-2">{{ valor.label }}</h3>
          <p class="text-white/60 text-[0.85rem] leading-relaxed m-0">{{ valor.desc }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import PageHero from '../components/PageHero.vue'
import { useSeo } from '../composables/useSeo'

useSeo({
  title: 'Misión y Visión',
  description: 'Misión y visión de la I.E. Santa Rosa: nuestros principios educativos y objetivos para el desarrollo integral de los estudiantes en Tarapoto, San Martín.',
  path: '/mision-vision',
})

const valores = [
  { label: 'Disciplina', desc: 'Orden, respeto y autocontrol como base de la convivencia.' },
  { label: 'Trabajo',    desc: 'Esfuerzo y perseverancia como camino a la excelencia.' },
  { label: 'Dignidad',   desc: 'Respeto propio y hacia los demás en toda circunstancia.' },
]
</script>
