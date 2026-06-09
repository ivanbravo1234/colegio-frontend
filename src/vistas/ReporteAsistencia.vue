<template>
  <div class="reporte-asistencia">
    <div class="container">
      <!-- Encabezado con imagen -->
      <div class="header-section">
        <div class="header-text">
          <h1 class="page-title">Seguimiento de Asistencia Académica</h1>
          <p class="page-description">
            Acceda a la información detallada sobre el cumplimiento escolar de nuestros estudiantes.
            Transparencia y compromiso para una excelencia formativa.
          </p>
        </div>
        <div
          class="header-image"
          :style="{ backgroundImage: `url(${colegioImg})` }"
          role="img"
          aria-label="I.E. Santa Rosa"
        ></div>
      </div>

      <!-- Criterios de Búsqueda -->
      <div class="criterios-card">
        <div class="criterios-head">
          <h2 class="criterios-title">
            <span class="filter-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#1e2a3e">
                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
              </svg>
            </span>
            Criterios de Búsqueda
          </h2>
          <div class="search-deco" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#eef2f6" stroke-width="2">
              <circle cx="11" cy="11" r="7"/>
              <line x1="16.5" y1="16.5" x2="21" y2="21"/>
            </svg>
          </div>
        </div>

        <!-- Alerta de error general -->
        <div v-if="mensajeError" class="alerta-error" role="alert">
          <span class="alerta-icono" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#b91c1c">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
          </span>
          <div class="alerta-texto">
            <strong>No se puede generar el reporte</strong>
            <span>{{ mensajeError }}</span>
          </div>
        </div>

        <div class="filtros-grid">
          <!-- Campo DNI -->
          <div class="campo" :class="{ 'campo-error': errores.dni }">
            <label>DNI</label>
            <div class="input-wrap">
              <span class="input-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#94a3b8">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </span>
              <input
                type="text"
                v-model="busquedaAlumno"
                @input="sanitizarDni(); limpiarError('dni')"
                @keypress="soloNumeros"
                placeholder="Ej: 72839405"
                maxlength="8"
                inputmode="numeric"
                pattern="[0-9]{8}"
                title="Solo se permiten 8 dígitos numéricos"
              />
            </div>
            <span v-if="errores.dni" class="error-campo">{{ errores.dni }}</span>
          </div>

          <!-- Campo Periodo -->
          <div class="campo" :class="{ 'campo-error': errores.periodo }">
            <label>Periodo</label>
            <div class="input-wrap">
              <span class="input-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#94a3b8">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"/>
                </svg>
              </span>
              <select v-model="periodoSeleccionado" :disabled="cargandoPeriodos">
                <option v-if="cargandoPeriodos" value="">Cargando periodos...</option>
                <option v-for="p in periodos" :key="p.codperiod" :value="p.codperiod">
                  {{ p.name }}{{ p.is_active === 'Y' ? ' ✦' : '' }}
                </option>
              </select>
              <span class="select-arrow" aria-hidden="true">▾</span>
            </div>
            <span v-if="errores.periodo" class="error-campo">{{ errores.periodo }}</span>
          </div>

          <!-- Campo Desde -->
          <div class="campo" :class="{ 'campo-error': errores.desde }">
            <label>Desde</label>
            <div class="input-wrap">
              <span class="input-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#94a3b8">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"/>
                </svg>
              </span>
              <input type="date" v-model="fechaDesde" @input="limpiarError('desde')" />
            </div>
            <span v-if="errores.desde" class="error-campo">{{ errores.desde }}</span>
          </div>

          <!-- Campo Hasta -->
          <div class="campo" :class="{ 'campo-error': errores.hasta }">
            <label>Hasta</label>
            <div class="input-wrap">
              <span class="input-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#94a3b8">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"/>
                </svg>
              </span>
              <input type="date" v-model="fechaHasta" @input="limpiarError('hasta')" />
            </div>
            <span v-if="errores.hasta" class="error-campo">{{ errores.hasta }}</span>
          </div>
        </div>

        <div class="boton-contenedor">
          <button @click="generarReporte" class="btn-generar" :disabled="cargando">
            <span>{{ cargando ? 'Generando...' : 'Generar Reporte' }}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Todo lo de abajo SOLO aparece tras hacer click en "Generar Reporte" -->
      <template v-if="reporteGenerado">
        <!-- Resumen Visual -->
        <section class="resumen-section">
          <div class="resumen-head">
            <div>
              <h3>Resumen Visual — {{ nombreEstudiante }}</h3>
              <p class="resumen-sub">Distribución de asistencia del periodo seleccionado</p>
            </div>
            <span class="nivel-badge">{{ gradoSeccion }}</span>
          </div>

          <div class="resumen-grid">
            <div class="resumen-card resumen-card--grafico">
              <div class="donut-chart" :style="{ background: donutBackground }">
                <div class="donut-center">
                  <span class="donut-pct">{{ porcentajeTotal }}%</span>
                  <span class="donut-label">TOTAL</span>
                </div>
              </div>
              <div class="donut-legend">
                <div class="legend-item">
                  <span class="dot dot--asistencia"></span>
                  <span class="legend-label">ASISTENCIAS</span>
                  <span class="legend-val">{{ pctPresente }}%</span>
                </div>
                <div class="legend-item">
                  <span class="dot dot--tardanza"></span>
                  <span class="legend-label">TARDANZAS</span>
                  <span class="legend-val">{{ pctTardanza }}%</span>
                </div>
                <div class="legend-item">
                  <span class="dot dot--falta"></span>
                  <span class="legend-label">FALTAS</span>
                  <span class="legend-val">{{ pctFalta }}%</span>
                </div>
              </div>
            </div>

            <div class="resumen-card resumen-card--dias">
              <span class="big-number">{{ statsResumen.present }}</span>
              <span class="big-label">DÍAS ASISTIDOS</span>
            </div>

            <div class="resumen-card resumen-card--inasistencias">
              <div class="alert-icon" aria-hidden="true">!</div>
              <span class="big-number">{{ String(statsResumen.absent).padStart(2, '0') }}</span>
              <span class="big-label">INASISTENCIAS</span>
            </div>
          </div>
        </section>

        <!-- Detalle de Asistencia -->
        <section class="detalle-asistencia">
          <div class="detalle-head">
            <h3>Detalle de Asistencia</h3>
            <button @click="descargarPDF" class="btn-descargar">
              <span aria-hidden="true">↓</span> Descargar PDF
            </button>
          </div>

          <div class="tabla-container">
            <table>
              <thead>
                <tr>
                  <th>FECHA</th>
                  <th>ESTADO</th>
                  <th>HORA INGRESO</th>
                  <th>OBSERVACIONES</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(registro, idx) in registrosPaginados" :key="idx">
                  <td>{{ registro.fecha }}</td>
                  <td>
                    <span :class="`estado-badge ${registro.estado.toLowerCase()}`">
                      {{ registro.estado }}
                    </span>
                  </td>
                  <td>{{ registro.hora }}</td>
                  <td>{{ registro.observacion }}</td>
                </tr>
                <tr v-if="registrosFiltrados.length === 0">
                  <td colspan="4" class="tabla-vacia">No se encontraron registros para los criterios seleccionados.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="paginacion" v-if="totalPaginas > 1">
            <button @click="paginaActual = Math.max(1, paginaActual - 1)" :disabled="paginaActual === 1" class="page-btn">‹</button>
            <span
              v-for="pag in totalPaginas"
              :key="pag"
              class="page-number"
              :class="{ active: pag === paginaActual }"
              @click="paginaActual = pag"
            >
              {{ pag }}
            </span>
            <button @click="paginaActual = Math.min(totalPaginas, paginaActual + 1)" :disabled="paginaActual === totalPaginas" class="page-btn">›</button>
          </div>
        </section>
      </template>

      <!-- Estudiante no encontrado -->
      <div v-else-if="noEncontrado" class="estado-inicial">
        <div class="estado-inicial-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="#94a3b8">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <p>No se encontró ningún estudiante con el DNI <strong>{{ busquedaAlumno }}</strong>. Verifique el número e intente nuevamente.</p>
      </div>

      <!-- Mensaje inicial amigable (cuando aún no se ha generado) -->
      <div v-else class="estado-inicial">
        <div class="estado-inicial-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="#fbc02d">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
          </svg>
        </div>
        <p>Complete los criterios de búsqueda y presione <strong>"Generar Reporte"</strong> para ver los resultados.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import colegioImg from '@/assets/PortadaSRWEB.png'
import api from '@/services/api'

// ── Periodos (cargados al montar) ─────────────────────────────────────────
const periodos           = ref([])
const periodoSeleccionado = ref('')
const cargandoPeriodos   = ref(false)

onMounted(async () => {
  cargandoPeriodos.value = true
  try {
    const { data } = await api.get('/attendance/periods')
    periodos.value = data.periods ?? []
    const activo = periodos.value.find(p => p.is_active === 'Y')
    periodoSeleccionado.value = activo?.codperiod ?? periodos.value[0]?.codperiod ?? ''
  } catch {
    // si falla, el select queda vacío y el usuario lo nota
  } finally {
    cargandoPeriodos.value = false
  }
})

// ── Filtros ───────────────────────────────────────────────────────────────
const busquedaAlumno = ref('')
const fechaDesde = ref('')
const fechaHasta = ref('')

const sanitizarDni = () => {
  busquedaAlumno.value = busquedaAlumno.value.replace(/\D/g, '').slice(0, 8)
}

const soloNumeros = (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey) return
  const charCode = e.which ?? e.keyCode
  if (charCode < 48 || charCode > 57) e.preventDefault()
}

// ── Validación ────────────────────────────────────────────────────────────
const errores      = ref({})
const mensajeError = ref('')

const validar = () => {
  const nuevosErrores = {}

  if (!busquedaAlumno.value.trim()) {
    nuevosErrores.dni = 'Ingrese el DNI del estudiante.'
  } else if (!/^\d{8}$/.test(busquedaAlumno.value.trim())) {
    nuevosErrores.dni = 'El DNI debe tener exactamente 8 dígitos numéricos.'
  }

  if (!periodoSeleccionado.value) {
    nuevosErrores.periodo = 'Seleccione un periodo.'
  }

  if (fechaDesde.value && fechaHasta.value && fechaHasta.value < fechaDesde.value) {
    nuevosErrores.hasta = 'La fecha "Hasta" no puede ser anterior a "Desde".'
  }

  errores.value = nuevosErrores
  mensajeError.value = Object.keys(nuevosErrores).length > 0
    ? 'Por favor revise los datos ingresados antes de generar el reporte.'
    : ''

  return Object.keys(nuevosErrores).length === 0
}

const limpiarError = (campo) => {
  if (!errores.value[campo]) return
  const copia = { ...errores.value }
  delete copia[campo]
  errores.value = copia
  if (!Object.keys(copia).length) mensajeError.value = ''
}

// ── Datos de la API ───────────────────────────────────────────────────────
const studentData    = ref(null)
const enrollmentData = ref(null)
const allAssistances = ref([])

// ── Estado UI ─────────────────────────────────────────────────────────────
const reporteGenerado = ref(false)
const noEncontrado    = ref(false)
const cargando        = ref(false)
const paginaActual    = ref(1)
const registrosPorPagina = 4

// ── Mapeo status API → etiqueta visual ───────────────────────────────────
const estadoLabel = (status) => {
  if (status === 'present') return 'Asistencia'
  if (status === 'late')    return 'Tardanza'
  return 'Falta'
}

// ── Registros filtrados por periodo y rango de fechas (client-side) ───────
const registrosFiltrados = computed(() => {
  let records = allAssistances.value.map(a => ({
    fecha:       a.date,
    raw_date:    a.raw_date,
    period_code: a.period_code,
    estado:      estadoLabel(a.status),
    hora:        a.time_entry ?? '—',
    observacion: a.observation ?? '—',
  }))

  if (periodoSeleccionado.value) {
    records = records.filter(r => r.period_code === periodoSeleccionado.value)
  }
  if (fechaDesde.value) records = records.filter(r => r.raw_date >= fechaDesde.value)
  if (fechaHasta.value) records = records.filter(r => r.raw_date <= fechaHasta.value)

  return records
})

// ── Stats calculadas del conjunto filtrado ────────────────────────────────
const statsResumen = computed(() => {
  const records = registrosFiltrados.value
  const total   = records.length
  if (!total) return { total: 0, present: 0, absent: 0, late: 0, rate: 0 }

  const present = records.filter(r => r.estado === 'Asistencia').length
  const absent  = records.filter(r => r.estado === 'Falta').length
  const late    = records.filter(r => r.estado === 'Tardanza').length

  return { total, present, absent, late, rate: Math.round((present / total) * 100) }
})

const pctPresente = computed(() =>
  statsResumen.value.total ? Math.round((statsResumen.value.present / statsResumen.value.total) * 100) : 0
)
const pctTardanza = computed(() =>
  statsResumen.value.total ? Math.round((statsResumen.value.late    / statsResumen.value.total) * 100) : 0
)
const pctFalta = computed(() =>
  statsResumen.value.total ? Math.round((statsResumen.value.absent  / statsResumen.value.total) * 100) : 0
)

const porcentajeTotal = computed(() => statsResumen.value.rate)

const donutBackground = computed(() => {
  const p = pctPresente.value
  const t = p + pctTardanza.value
  return `conic-gradient(#fbc02d 0% ${p}%, #1e2a3e ${p}% ${t}%, #c1272d ${t}% 100%)`
})

const nombreEstudiante = computed(() => studentData.value?.fullname ?? '')

const gradoSeccion = computed(() => {
  if (!enrollmentData.value) return 'SIN MATRÍCULA'
  const { grade, section } = enrollmentData.value
  return `${grade ?? ''} ${section ?? ''}`.trim().toUpperCase() || 'MATRICULADO'
})

// ── Paginación ────────────────────────────────────────────────────────────
const totalPaginas = computed(() =>
  Math.ceil(registrosFiltrados.value.length / registrosPorPagina)
)

const registrosPaginados = computed(() => {
  const inicio = (paginaActual.value - 1) * registrosPorPagina
  return registrosFiltrados.value.slice(inicio, inicio + registrosPorPagina)
})

// ── Generar reporte ───────────────────────────────────────────────────────
const generarReporte = async () => {
  if (!validar()) {
    reporteGenerado.value = false
    setTimeout(() => {
      document.querySelector('.alerta-error')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 30)
    return
  }

  cargando.value     = true
  mensajeError.value = ''
  reporteGenerado.value = false
  noEncontrado.value    = false

  try {
    const { data } = await api.get('/attendance/student', {
      params: {
        dni:    busquedaAlumno.value.trim(),
        period: periodoSeleccionado.value,
      },
    })

    if (!data.student) {
      noEncontrado.value = true
      return
    }

    studentData.value    = data.student
    enrollmentData.value = data.enrollment
    allAssistances.value = data.assistances ?? []
    paginaActual.value   = 1
    reporteGenerado.value = true

    setTimeout(() => {
      document.querySelector('.resumen-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)

  } catch {
    mensajeError.value = 'Error al conectar con el servidor. Intente nuevamente.'
  } finally {
    cargando.value = false
  }
}

const descargarPDF = () => {
  alert('Descargando reporte en PDF... (funcionalidad pendiente de integración)')
}
</script>

<style scoped>
.reporte-asistencia {
  font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
  background-color: #ffffff;
  padding: 2.5rem 0 4rem;
  color: #1e2a3e;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ============== ENCABEZADO ============== */
.header-section {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2.5rem;
  padding: 0.5rem 0;
}

.header-text {
  text-align: left;
}

.page-title {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 2.6rem;
  font-weight: 900;
  color: #1e2a3e;
  margin-bottom: 0.5rem;
  position: relative;
  display: inline-block;
  letter-spacing: -0.5px;
  line-height: 1.05;
}

.page-title::after {
  content: '';
  display: block;
  width: 70px;
  height: 4px;
  background-color: #fbc02d;
  margin: 0.6rem 0 0;
  border-radius: 3px;
}

.page-description {
  color: #4a6177;
  max-width: 540px;
  margin: 0.5rem 0 0;
  line-height: 1.55;
  font-size: 0.95rem;
}

.header-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  background-size: cover;
  background-position: center 35%;
  background-color: #1a2f3a;
  border-radius: 14px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #eef2f6;
}

/* ============== TARJETA DE CRITERIOS ============== */
.criterios-card {
  background: #f9fafc;
  border-radius: 16px;
  padding: 1.8rem 2rem 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  border: 1px solid #eef2f6;
}

.criterios-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
}

.criterios-title {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  color: #1e2a3e;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.search-deco {
  opacity: 0.6;
}

.filtros-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  align-items: flex-end;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.campo label {
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #4a6177;
  letter-spacing: 1px;
}

.input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 0.9rem;
  display: inline-flex;
  align-items: center;
  pointer-events: none;
  z-index: 1;
}

.campo input,
.campo select {
  width: 100%;
  padding: 0.7rem 1rem 0.7rem 2.4rem;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 0.9rem;
  transition: all 0.2s;
  background-color: #fff;
  font-family: inherit;
  color: #1e2a3e;
  box-sizing: border-box;
}

.campo input:focus,
.campo select:focus {
  border-color: #fbc02d;
  outline: none;
  box-shadow: 0 0 0 3px rgba(251, 192, 45, 0.2);
}

.campo input::placeholder {
  color: #94a3b8;
}

.campo select {
  appearance: none;
  -webkit-appearance: none;
  padding-right: 2.2rem;
  cursor: pointer;
}

.select-arrow {
  position: absolute;
  right: 0.9rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #4a6177;
  font-size: 0.8rem;
}

.boton-contenedor {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
}

.btn-generar {
  background-color: #1e2a3e;
  color: #fff;
  border: none;
  padding: 0.85rem 1.6rem;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}

.btn-generar:hover:not(:disabled) {
  background-color: #0a3144;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(10, 49, 68, 0.25);
}

.btn-generar:disabled {
  opacity: 0.6;
  cursor: wait;
}

/* ============== ALERTA DE ERROR ============== */
.alerta-error {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  background-color: #fef2f2;
  border: 1px solid #fca5a5;
  border-left: 4px solid #b91c1c;
  color: #7f1d1d;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  margin-bottom: 1.2rem;
  animation: shake 0.4s ease-in-out;
}

.alerta-icono {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
}

.alerta-texto {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  font-size: 0.88rem;
  line-height: 1.4;
}

.alerta-texto strong {
  font-weight: 800;
  color: #991b1b;
}

.alerta-texto span {
  color: #7f1d1d;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%      { transform: translateX(-6px); }
  40%      { transform: translateX(6px); }
  60%      { transform: translateX(-4px); }
  80%      { transform: translateX(4px); }
}

/* ============== ERRORES POR CAMPO ============== */
.campo-error .input-wrap {
  border-color: transparent;
  border-radius: 12px;
  /* Truco para mantener el wrap visible y no romper el focus amarillo */
}

.campo-error input,
.campo-error select {
  border-color: #b91c1c;
  background-color: #fef2f2;
}

.campo-error input:focus,
.campo-error select:focus {
  border-color: #b91c1c;
  box-shadow: 0 0 0 3px rgba(185, 28, 28, 0.15);
}

.error-campo {
  display: block;
  margin-top: 0.3rem;
  font-size: 0.75rem;
  color: #b91c1c;
  font-weight: 600;
}

/* ============== ESTADO INICIAL (antes de generar) ============== */
.estado-inicial {
  text-align: center;
  padding: 3rem 1.5rem;
  background-color: #f9fafc;
  border: 2px dashed #e2e8f0;
  border-radius: 16px;
  color: #4a6177;
}

.estado-inicial-icon {
  margin-bottom: 1rem;
}

.estado-inicial strong {
  color: #1e2a3e;
}

/* ============== RESUMEN VISUAL ============== */
.resumen-section {
  margin-bottom: 2.5rem;
}

.resumen-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.resumen-head h3 {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
  color: #1e2a3e;
  margin: 0 0 0.2rem;
}

.resumen-sub {
  color: #4a6177;
  margin: 0;
  font-size: 0.85rem;
}

.nivel-badge {
  background-color: #e0f2fe;
  color: #075985;
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 1px;
}

.resumen-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 1.2rem;
}

.resumen-card {
  background: #f9fafc;
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid #eef2f6;
  display: flex;
  flex-direction: column;
}

.resumen-card--grafico {
  align-items: center;
  text-align: center;
  padding: 1.5rem;
}

.donut-chart {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
}

.donut-chart::before {
  content: '';
  position: absolute;
  inset: 18px;
  background: #f9fafc;
  border-radius: 50%;
}

.donut-center {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.donut-pct {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 1.8rem;
  font-weight: 900;
  color: #1e2a3e;
  line-height: 1;
}

.donut-label {
  font-size: 0.7rem;
  font-weight: 700;
  color: #4a6177;
  letter-spacing: 1.2px;
  margin-top: 0.2rem;
}

.donut-legend {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.legend-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  min-width: 70px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.dot--asistencia { background-color: #fbc02d; }
.dot--tardanza { background-color: #1e2a3e; }
.dot--falta { background-color: #c1272d; }

.legend-label {
  font-size: 0.65rem;
  font-weight: 700;
  color: #4a6177;
  letter-spacing: 0.5px;
}

.legend-val {
  font-size: 0.95rem;
  font-weight: 800;
  color: #1e2a3e;
}

.resumen-card--dias {
  background-color: #fef9e3;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.resumen-card--inasistencias {
  background-color: #f1f5f9;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

.alert-icon {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #c1272d;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.9rem;
}

.big-number {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 3rem;
  font-weight: 900;
  color: #1e2a3e;
  line-height: 1;
  margin-bottom: 0.3rem;
}

.big-label {
  font-size: 0.7rem;
  font-weight: 800;
  color: #4a6177;
  letter-spacing: 1.2px;
}

/* ============== DETALLE / TABLA ============== */
.detalle-asistencia {
  background: #f9fafc;
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid #eef2f6;
}

.detalle-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.detalle-head h3 {
  font-family: 'Public Sans', 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  color: #1e2a3e;
  margin: 0;
}

.btn-descargar {
  background: none;
  border: none;
  color: #b7791f;
  font-weight: 800;
  font-size: 0.85rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.2s;
}

.btn-descargar:hover {
  color: #8a5a00;
}

.tabla-container {
  overflow-x: auto;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #eef2f6;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: left;
  padding: 0.9rem 1rem;
  border-bottom: 1px solid #eef2f6;
}

th {
  background-color: #f9fafc;
  font-weight: 800;
  color: #1e2a3e;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

td {
  font-size: 0.88rem;
  color: #2c3f4f;
}

tbody tr:last-child td {
  border-bottom: none;
}

tbody tr:hover {
  background-color: #fef9e3;
}

.estado-badge {
  display: inline-block;
  padding: 0.25rem 0.8rem;
  border-radius: 40px;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.estado-badge.asistencia {
  background: #d1fae5;
  color: #065f46;
}
.estado-badge.tardanza {
  background: #fed7aa;
  color: #92400e;
}
.estado-badge.falta {
  background: #ffe4e4;
  color: #b91c1c;
}

.tabla-vacia {
  text-align: center;
  color: #94a3b8;
  padding: 2rem;
  font-style: italic;
}

/* Paginación */
.paginacion {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1.5rem;
}

.page-btn {
  background: #fff;
  border: 1px solid #e2e8f0;
  padding: 0.4rem 0.7rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  color: #1e2a3e;
  transition: all 0.2s;
}

.page-btn:hover:not(:disabled) {
  background: #fbc02d;
  border-color: #fbc02d;
}

.page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.page-number {
  display: inline-block;
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  background: #fff;
  border: 1px solid transparent;
  color: #1e2a3e;
}

.page-number.active {
  background: #fbc02d;
  color: #1e2a3e;
  font-weight: 800;
  border-color: #fbc02d;
}

.page-number:hover:not(.active) {
  background: #fef9e3;
}

/* ============== RESPONSIVE ============== */
@media (max-width: 900px) {
  .filtros-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .resumen-grid {
    grid-template-columns: 1fr;
  }
  .header-section {
    grid-template-columns: 1fr;
  }
  .header-text {
    text-align: center;
  }
  .page-title::after {
    margin: 0.6rem auto 0;
  }
  .header-image {
    max-width: 500px;
    margin: 0 auto;
  }
  .page-title {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  .filtros-grid {
    grid-template-columns: 1fr;
  }
  .criterios-card {
    padding: 1.4rem;
  }
  .boton-contenedor {
    justify-content: stretch;
  }
  .btn-generar {
    width: 100%;
    justify-content: center;
  }
  .page-title {
    font-size: 1.7rem;
  }
  .criterios-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .search-deco {
    display: none;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  .detalle-asistencia {
    padding: 1rem;
  }
  th, td {
    padding: 0.6rem 0.5rem;
    font-size: 0.78rem;
  }
}
</style>
