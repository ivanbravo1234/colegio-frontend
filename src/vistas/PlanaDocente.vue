<template>
  <div class="plana-docente">
    <div class="container">
      <!-- Encabezado -->
      <div class="header-section">
        <span class="eyebrow">NUESTRO EQUIPO</span>
        <h1 class="page-title">Plana Docente</h1>
        <p class="page-description">
          Conoce al equipo de profesionales altamente calificados que lideran el aprendizaje
          y la formación integral de nuestras estudiantes, impulsando la excelencia académica
          con vocación y compromiso.
        </p>
      </div>

      <!-- Filtros -->
      <div class="filtros">
        <div class="filtro-busqueda">
          <span class="input-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#94a3b8">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/>
            </svg>
          </span>
          <input
            type="text"
            v-model="terminoBusqueda"
            @keyup.enter="aplicarFiltros"
            placeholder="Buscar por nombre del docente..."
            class="input-busqueda"
          />
        </div>
        <div class="filtro-area">
          <select v-model="areaSeleccionada" class="select-area">
            <option value="">Todas las áreas</option>
            <option v-for="area in areasDisponibles" :key="area" :value="area">
              {{ area }}
            </option>
          </select>
        </div>
        <button @click="aplicarFiltros" class="btn-filtrar">Filtrar</button>
        <button
          v-if="filtroActivo.busqueda || filtroActivo.area"
          @click="limpiarFiltros"
          class="btn-limpiar"
          type="button"
        >
          Limpiar
        </button>
      </div>

      <!-- Resultado -->
      <p v-if="docentesFiltrados.length" class="resultado-count">
        Mostrando <strong>{{ docentesFiltrados.length }}</strong>
        docente<span v-if="docentesFiltrados.length !== 1">s</span>
      </p>

      <!-- Lista de docentes -->
      <div class="docentes-grid" v-if="docentesFiltrados.length">
        <article v-for="docente in docentesFiltrados" :key="docente.id" class="docente-card">
          <div class="docente-foto">
            <img :src="docente.foto" :alt="docente.nombre" loading="lazy" />
          </div>
          <div class="docente-body">
            <p class="docente-area">{{ docente.area }}</p>
            <h3 class="docente-nombre">{{ docente.nombre }}</h3>
            <p class="docente-grado">{{ docente.grado }}</p>
            <a href="#" class="docente-link">
              VER PERFIL
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      </div>
      <div v-else class="sin-resultados">
        <svg viewBox="0 0 24 24" width="40" height="40" fill="#cbd5e1" aria-hidden="true">
          <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/>
        </svg>
        <p>No se encontraron docentes con los criterios seleccionados.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Áreas disponibles para el filtro
const areasDisponibles = [
  'Comunicación',
  'Matemática',
  'Ciencias Sociales',
  'Educación Física',
  'Arte',
  'Educación para el Trabajo',
  'Ciencia y Tecnología',
  'Inglés',
]

// Datos de los docentes (con fotos reales de Unsplash)
const docentes = ref([
  {
    id: 1,
    nombre: 'Dra. Martha Rodríguez',
    area: 'Matemática',
    grado: '5to de Secundaria',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80',
  },
  {
    id: 2,
    nombre: 'Lic. Carlos Mendoza',
    area: 'Comunicación',
    grado: '3ro de Secundaria',
    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=80',
  },
  {
    id: 3,
    nombre: 'Mgtr. Elena Vaca',
    area: 'Ciencias Sociales',
    grado: '1ro de Secundaria',
    foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&q=80',
  },
  {
    id: 4,
    nombre: 'Lic. Jorge Linares',
    area: 'Ciencias Sociales',
    grado: '4to de Secundaria',
    foto: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=500&fit=crop&q=80',
  },
  {
    id: 5,
    nombre: 'Mgtr. Sofia Castillo',
    area: 'Comunicación',
    grado: 'Primaria y 2do de Secundaria',
    foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&q=80',
  },
  {
    id: 6,
    nombre: 'Lic. Ricardo Palma',
    area: 'Arte',
    grado: '2do de Secundaria',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80',
  },
  {
    id: 7,
    nombre: 'Dra. Beatriz Ortiz',
    area: 'Educación para el Trabajo',
    grado: 'Departamento Psicopedagógico',
    foto: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=500&fit=crop&q=80',
  },
  {
    id: 8,
    nombre: 'Lic. Miguel Grao',
    area: 'Educación Física',
    grado: 'Todos los grados',
    foto: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&q=80',
  },
  {
    id: 9,
    nombre: 'Mg. Laura Fernández',
    area: 'Educación para el Trabajo',
    grado: '4to y 5to de Secundaria',
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&q=80',
  },
  {
    id: 10,
    nombre: 'Prof. Ana Lucía Ríos',
    area: 'Arte',
    grado: '1ro y 2do de Secundaria',
    foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&q=80',
  },
  {
    id: 11,
    nombre: 'Lic. Daniel Huamán',
    area: 'Ciencia y Tecnología',
    grado: '3ro, 4to y 5to de Secundaria',
    foto: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=500&fit=crop&q=80',
  },
  {
    id: 12,
    nombre: 'Mgtr. Patricia Salas',
    area: 'Inglés',
    grado: 'Todos los grados',
    foto: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop&q=80',
  },
])

// Variables de filtro
const terminoBusqueda = ref('')
const areaSeleccionada = ref('')
const filtroActivo = ref({ busqueda: '', area: '' })

const aplicarFiltros = () => {
  filtroActivo.value = {
    busqueda: terminoBusqueda.value.trim().toLowerCase(),
    area: areaSeleccionada.value,
  }
}

const limpiarFiltros = () => {
  terminoBusqueda.value = ''
  areaSeleccionada.value = ''
  filtroActivo.value = { busqueda: '', area: '' }
}

const docentesFiltrados = computed(() => {
  let resultado = [...docentes.value]
  if (filtroActivo.value.busqueda) {
    resultado = resultado.filter((d) =>
      d.nombre.toLowerCase().includes(filtroActivo.value.busqueda)
    )
  }
  if (filtroActivo.value.area) {
    resultado = resultado.filter((d) => d.area === filtroActivo.value.area)
  }
  return resultado
})
</script>

<style scoped>
.plana-docente {
  font-family: 'Inter', 'Segoe UI', sans-serif;
  background-color: #ffffff;
  color: #1e2a3e;
  padding: 3rem 0 4rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ============== ENCABEZADO ============== */
.header-section {
  text-align: center;
  margin-bottom: 2.5rem;
}

.eyebrow {
  display: inline-block;
  background-color: #fbc02d;
  color: #1e2a3e;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 2px;
  padding: 0.35rem 0.8rem;
  border-radius: 2px;
  margin-bottom: 0.8rem;
}

.page-title {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 2.6rem;
  font-weight: 900;
  color: #1e2a3e;
  margin: 0 0 0.7rem;
  letter-spacing: -0.5px;
  position: relative;
  display: inline-block;
}

.page-title::after {
  content: '';
  display: block;
  width: 70px;
  height: 4px;
  background-color: #fbc02d;
  margin: 0.6rem auto 0;
  border-radius: 3px;
}

.page-description {
  color: #4a6177;
  max-width: 700px;
  margin: 0.5rem auto 0;
  line-height: 1.55;
  font-size: 0.95rem;
}

/* ============== FILTROS ============== */
.filtros {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  background-color: #f9fafc;
  padding: 1rem 1.5rem;
  border-radius: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  border: 1px solid #eef2f6;
}

.filtro-busqueda {
  position: relative;
  flex: 2;
  min-width: 220px;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 0.9rem;
  display: inline-flex;
  align-items: center;
  pointer-events: none;
}

.input-busqueda {
  width: 100%;
  padding: 0.7rem 1rem 0.7rem 2.4rem;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  transition: all 0.2s;
  outline: none;
  background-color: white;
  font-family: inherit;
  box-sizing: border-box;
}

.input-busqueda:focus {
  border-color: #fbc02d;
  box-shadow: 0 0 0 3px rgba(251, 192, 45, 0.2);
}

.filtro-area {
  flex: 1;
  min-width: 180px;
}

.select-area {
  width: 100%;
  padding: 0.7rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  background-color: white;
  cursor: pointer;
  outline: none;
  font-family: inherit;
  box-sizing: border-box;
}

.select-area:focus {
  border-color: #fbc02d;
  box-shadow: 0 0 0 3px rgba(251, 192, 45, 0.2);
}

.btn-filtrar {
  background-color: #fbc02d;
  color: #1e2a3e;
  border: none;
  padding: 0.7rem 1.6rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.btn-filtrar:hover {
  background-color: #f5b81b;
  transform: translateY(-1px);
}

.btn-limpiar {
  background: none;
  border: 1px solid #e2e8f0;
  color: #4a6177;
  padding: 0.7rem 1.2rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.btn-limpiar:hover {
  border-color: #b91c1c;
  color: #b91c1c;
}

/* ============== CONTADOR ============== */
.resultado-count {
  text-align: center;
  color: #4a6177;
  font-size: 0.88rem;
  margin: 0 0 1.2rem;
}

.resultado-count strong {
  color: #1e2a3e;
}

/* ============== GRID DE DOCENTES ============== */
.docentes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

.docente-card {
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #eef2f6;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  display: flex;
  flex-direction: column;
}

.docente-card:hover {
  transform: translateY(-4px);
  border-color: #fbc02d;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
}

.docente-foto {
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background-color: #eef2f6;
}

.docente-foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.docente-card:hover .docente-foto img {
  transform: scale(1.05);
}

.docente-body {
  padding: 1rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
}

.docente-area {
  font-size: 0.7rem;
  font-weight: 800;
  color: #b7791f;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 0.2rem;
}

.docente-nombre {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  color: #1e2a3e;
  margin: 0 0 0.3rem;
  letter-spacing: -0.2px;
}

.docente-grado {
  color: #4a6177;
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0 0 0.6rem;
  flex: 1;
}

.docente-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: #1e2a3e;
  text-decoration: none;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 1px;
  padding-top: 0.6rem;
  border-top: 1px solid #eef2f6;
  transition: color 0.2s, gap 0.2s;
}

.docente-link:hover {
  color: #b7791f;
  gap: 0.5rem;
}

/* ============== SIN RESULTADOS ============== */
.sin-resultados {
  text-align: center;
  padding: 3rem 1rem;
  background-color: #f9fafc;
  border-radius: 14px;
  color: #4a6177;
  font-size: 0.95rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  border: 2px dashed #e2e8f0;
}

.sin-resultados p {
  margin: 0;
}

/* ============== RESPONSIVE ============== */
@media (max-width: 768px) {
  .filtros {
    flex-direction: column;
    align-items: stretch;
    padding: 1rem;
  }
  .filtro-busqueda,
  .filtro-area {
    width: 100%;
  }
  .btn-filtrar,
  .btn-limpiar {
    width: 100%;
  }
  .page-title {
    font-size: 2rem;
  }
  .docentes-grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  .docentes-grid {
    grid-template-columns: 1fr;
  }
}
</style>
