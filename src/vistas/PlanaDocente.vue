<template>
  <div class="bg-white text-[#1e2a3e] pb-24 max-md:pb-16">

    <PageHero
      badge="NUESTRO EQUIPO"
      title="Plana Docente"
      description="Conoce al equipo de profesionales altamente calificados que lideran el aprendizaje y la formación integral de nuestros estudiantes."
      :breadcrumb="[{ label: 'Nuestro Colegio' }, { label: 'Plana Docente' }]"
    />

    <div class="max-w-[1200px] mx-auto px-6 max-[480px]:px-4 pt-14 max-md:pt-10">

      <!-- Filtros -->
      <div class="flex flex-wrap gap-3 items-center justify-center mb-6 bg-[#f9fafc] px-6 py-4 rounded-[14px] border border-[#eef2f6] shadow-[0_1px_3px_rgba(0,0,0,0.04)] max-md:flex-col max-md:items-stretch">
        <div class="relative flex items-center flex-[2] min-w-[220px]">
          <span class="absolute left-[0.9rem] inline-flex items-center pointer-events-none">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#94a3b8">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/>
            </svg>
          </span>
          <input
            type="text"
            v-model="terminoBusqueda"
            @keyup.enter="aplicarFiltros"
            placeholder="Buscar por nombre del docente..."
            class="w-full pl-10 pr-4 py-[0.7rem] border border-[#e2e8f0] rounded-[10px] text-[0.9rem] bg-white font-[inherit] outline-none transition-all duration-200 focus:border-[#fbc02d] focus:shadow-[0_0_0_3px_rgba(251,192,45,0.2)]"
          />
        </div>
        <div class="flex-1 min-w-[180px]">
          <select
            v-model="areaSeleccionada"
            class="w-full px-4 py-[0.7rem] border border-[#e2e8f0] rounded-[10px] text-[0.9rem] bg-white cursor-pointer font-[inherit] outline-none transition-all duration-200 focus:border-[#fbc02d] focus:shadow-[0_0_0_3px_rgba(251,192,45,0.2)] appearance-none"
          >
            <option value="">Todas las áreas</option>
            <option v-for="area in areasDisponibles" :key="area" :value="area">{{ area }}</option>
          </select>
        </div>
        <button
          @click="aplicarFiltros"
          class="inline-flex items-center gap-2 px-6 py-[0.7rem] text-[0.88rem] font-semibold rounded-lg bg-[#fbc02d] text-[#1e2a3e] border-0 hover:bg-[#f5b81b] hover:-translate-y-px transition-all duration-200 cursor-pointer font-[inherit]"
        >Filtrar</button>
        <button
          v-if="filtroActivo.busqueda || filtroActivo.area"
          @click="limpiarFiltros"
          class="inline-flex items-center gap-2 px-5 py-[0.7rem] text-[0.88rem] font-semibold rounded-lg bg-transparent border border-[#e2e8f0] text-[#4a6177] hover:border-red-600 hover:text-red-600 transition-all duration-200 cursor-pointer font-[inherit]"
          type="button"
        >Limpiar</button>
      </div>

      <!-- Contador -->
      <p v-if="docentesFiltrados.length" class="text-center text-[#4a6177] text-[0.88rem] mb-5">
        Mostrando <strong class="text-[#1e2a3e]">{{ docentesFiltrados.length }}</strong>
        docente<span v-if="docentesFiltrados.length !== 1">s</span>
      </p>

      <!-- Grid de docentes -->
      <div v-if="docentesFiltrados.length" class="grid gap-6" style="grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))">
        <article
          v-for="docente in docentesFiltrados"
          :key="docente.id"
          class="bg-white rounded-[14px] overflow-hidden border border-[#eef2f6] shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-[#fbc02d] hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)] group"
        >
          <div class="w-full overflow-hidden bg-[#eef2f6]" style="aspect-ratio: 4/5">
            <img
              :src="docente.foto"
              :alt="docente.nombre"
              loading="lazy"
              class="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div class="p-4 flex flex-col gap-1 flex-1">
            <p class="text-[0.7rem] font-semibold text-[#b7791f] uppercase tracking-[1px] m-0 mb-1">{{ docente.area }}</p>
            <h3 class="text-[1.05rem] font-semibold text-[#1e2a3e] m-0 mb-1 tracking-tight">{{ docente.nombre }}</h3>
            <p class="text-[#4a6177] text-[0.85rem] leading-[1.4] m-0 flex-1 mb-2">{{ docente.grado }}</p>
            <a
              href="#"
              class="inline-flex items-center gap-[0.3rem] text-[#1e2a3e] no-underline text-[0.72rem] font-semibold tracking-[1px] pt-[0.6rem] border-t border-[#eef2f6] transition-all duration-200 hover:text-[#b7791f] hover:gap-[0.5rem]"
            >
              VER PERFIL <span>→</span>
            </a>
          </div>
        </article>
      </div>

      <!-- Sin resultados -->
      <div v-else class="text-center py-12 px-4 bg-[#f9fafc] rounded-[14px] border-2 border-dashed border-[#e2e8f0] text-[#4a6177] text-[0.95rem] flex flex-col items-center gap-3">
        <svg viewBox="0 0 24 24" width="40" height="40" fill="#cbd5e1" aria-hidden="true">
          <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/>
        </svg>
        <p class="m-0">No se encontraron docentes con los criterios seleccionados.</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PageHero from '../components/PageHero.vue'
import { useSeo } from '../composables/useSeo'

useSeo({
  title: 'Plana Docente',
  description: 'Conoce a los docentes de la I.E. Santa Rosa en Tarapoto: profesionales calificados comprometidos con la formación integral de nuestros estudiantes.',
  path: '/plana-docente',
})

const areasDisponibles = ['Comunicación', 'Matemática', 'Ciencias Sociales', 'Educación Física', 'Arte', 'Educación para el Trabajo', 'Ciencia y Tecnología', 'Inglés']

const docentes = ref([
  { id: 1,  nombre: 'Dra. Martha Rodríguez', area: 'Matemática',               grado: '5to de Secundaria',                  foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80' },
  { id: 2,  nombre: 'Lic. Carlos Mendoza',   area: 'Comunicación',             grado: '3ro de Secundaria',                  foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=80' },
  { id: 3,  nombre: 'Mgtr. Elena Vaca',      area: 'Ciencias Sociales',        grado: '1ro de Secundaria',                  foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&q=80' },
  { id: 4,  nombre: 'Lic. Jorge Linares',    area: 'Ciencias Sociales',        grado: '4to de Secundaria',                  foto: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=500&fit=crop&q=80' },
  { id: 5,  nombre: 'Mgtr. Sofia Castillo',  area: 'Comunicación',             grado: 'Primaria y 2do de Secundaria',       foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&q=80' },
  { id: 6,  nombre: 'Lic. Ricardo Palma',    area: 'Arte',                     grado: '2do de Secundaria',                  foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80' },
  { id: 7,  nombre: 'Dra. Beatriz Ortiz',    area: 'Educación para el Trabajo', grado: 'Departamento Psicopedagógico',      foto: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=500&fit=crop&q=80' },
  { id: 8,  nombre: 'Lic. Miguel Grao',      area: 'Educación Física',         grado: 'Todos los grados',                   foto: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&q=80' },
  { id: 9,  nombre: 'Mg. Laura Fernández',   area: 'Educación para el Trabajo', grado: '4to y 5to de Secundaria',           foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&q=80' },
  { id: 10, nombre: 'Prof. Ana Lucía Ríos',  area: 'Arte',                     grado: '1ro y 2do de Secundaria',            foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&q=80' },
  { id: 11, nombre: 'Lic. Daniel Huamán',    area: 'Ciencia y Tecnología',     grado: '3ro, 4to y 5to de Secundaria',       foto: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=500&fit=crop&q=80' },
  { id: 12, nombre: 'Mgtr. Patricia Salas',  area: 'Inglés',                   grado: 'Todos los grados',                   foto: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop&q=80' },
])

const terminoBusqueda  = ref('')
const areaSeleccionada = ref('')
const filtroActivo     = ref({ busqueda: '', area: '' })

const aplicarFiltros = () => {
  filtroActivo.value = { busqueda: terminoBusqueda.value.trim().toLowerCase(), area: areaSeleccionada.value }
}

const limpiarFiltros = () => {
  terminoBusqueda.value = ''
  areaSeleccionada.value = ''
  filtroActivo.value = { busqueda: '', area: '' }
}

const docentesFiltrados = computed(() => {
  let r = [...docentes.value]
  if (filtroActivo.value.busqueda) r = r.filter(d => d.nombre.toLowerCase().includes(filtroActivo.value.busqueda))
  if (filtroActivo.value.area)     r = r.filter(d => d.area === filtroActivo.value.area)
  return r
})
</script>
