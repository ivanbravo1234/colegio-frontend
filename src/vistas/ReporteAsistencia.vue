<template>
  <div class="bg-white text-[#1e2a3e] py-10 pb-16">
    <div class="max-w-[1200px] mx-auto px-6 max-[480px]:px-4">

      <!-- Encabezado con imagen -->
      <div class="grid max-[900px]:grid-cols-1 gap-8 items-center mb-10 gap-y-6" style="grid-template-columns: 1.3fr 1fr">
        <div class="max-[900px]:text-center">
          <h1 class="relative inline-block text-[2.6rem] max-[900px]:text-[2rem] max-[600px]:text-[1.7rem] font-black text-[#1e2a3e] mb-2 leading-[1.05] tracking-tight after:block after:w-[70px] after:h-1 after:bg-[#fbc02d] after:rounded-full after:mt-2 max-[900px]:after:mx-auto">
            Seguimiento de Asistencia Académica
          </h1>
          <p class="text-[#4a6177] max-w-[540px] max-[900px]:mx-auto text-[0.95rem] leading-[1.55] mt-2">
            Acceda a la información detallada sobre el cumplimiento escolar de nuestros estudiantes. Transparencia y compromiso para una excelencia formativa.
          </p>
        </div>
        <div
          class="w-full bg-[#1a2f3a] rounded-[14px] shadow-[0_6px_20px_rgba(0,0,0,0.1)] border border-[#eef2f6] max-[900px]:max-w-[500px] max-[900px]:mx-auto"
          style="aspect-ratio: 4/3; background-size: cover; background-position: center 35%"
          :style="{ backgroundImage: `url(${colegioImg})` }"
          role="img"
          aria-label="I.E. Santa Rosa"
        ></div>
      </div>

      <!-- Tarjeta de criterios -->
      <div class="bg-[#f9fafc] rounded-[16px] p-8 max-[600px]:p-[1.4rem] mb-8 shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-[#eef2f6]">
        <div class="flex items-center justify-between mb-5 max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-3">
          <h2 class="text-[1.2rem] font-extrabold text-[#1e2a3e] m-0 flex items-center gap-2">
            <span class="inline-flex items-center justify-center" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#1e2a3e">
                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
              </svg>
            </span>
            Criterios de Búsqueda
          </h2>
          <div class="opacity-60 max-[600px]:hidden" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#eef2f6" stroke-width="2">
              <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/>
            </svg>
          </div>
        </div>

        <!-- Alerta error -->
        <div v-if="mensajeError" class="alerta-error" role="alert">
          <span class="flex-shrink-0 inline-flex items-center justify-center mt-px">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#b91c1c">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
          </span>
          <div class="flex flex-col gap-[0.15rem] text-[0.88rem] leading-[1.4]">
            <strong class="font-extrabold text-[#991b1b]">No se puede generar el reporte</strong>
            <span class="text-[#7f1d1d]">{{ mensajeError }}</span>
          </div>
        </div>

        <!-- Grid de campos -->
        <div class="grid grid-cols-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-5 items-end">
          <!-- DNI -->
          <div class="campo" :class="{ 'campo-error': errores.dni }">
            <label>DNI</label>
            <div class="input-wrap">
              <span class="input-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#94a3b8">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </span>
              <input type="text" v-model="busquedaAlumno" @input="sanitizarDni(); limpiarError('dni')" @keypress="soloNumeros" placeholder="Ej: 72839405" maxlength="8" inputmode="numeric" pattern="[0-9]{8}" />
            </div>
            <span v-if="errores.dni" class="error-campo">{{ errores.dni }}</span>
          </div>

          <!-- Periodo -->
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
                <option v-for="p in periodos" :key="p.codperiod" :value="p.codperiod">{{ p.name }}{{ p.is_active === 'Y' ? ' ✦' : '' }}</option>
              </select>
              <span class="select-arrow" aria-hidden="true">▾</span>
            </div>
            <span v-if="errores.periodo" class="error-campo">{{ errores.periodo }}</span>
          </div>

          <!-- Desde -->
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

          <!-- Hasta -->
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

        <div class="flex justify-end mt-6 max-[600px]:justify-stretch">
          <button
            @click="generarReporte"
            class="inline-flex items-center gap-2 px-6 py-[0.85rem] text-[0.9rem] font-bold rounded-lg bg-[#1e2a3e] text-white border-0 hover:bg-[#0a3144] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(10,49,68,0.25)] disabled:opacity-60 disabled:cursor-wait disabled:translate-y-0 transition-all duration-200 cursor-pointer font-[inherit] max-[600px]:w-full max-[600px]:justify-center"
            :disabled="cargando"
          >
            <span>{{ cargando ? 'Generando...' : 'Generar Reporte' }}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Resultados: resumen visual -->
      <template v-if="reporteGenerado">
        <section class="mb-10">
          <div class="flex items-start justify-between mb-5 flex-wrap gap-3">
            <div>
              <h3 class="text-[1.3rem] font-extrabold text-[#1e2a3e] m-0 mb-1">Resumen Visual — {{ nombreEstudiante }}</h3>
              <p class="text-[#4a6177] m-0 text-[0.85rem]">Distribución de asistencia del periodo seleccionado</p>
            </div>
            <span class="bg-[#e0f2fe] text-[#075985] py-[0.4rem] px-[0.9rem] rounded-lg text-[0.7rem] font-extrabold tracking-[1px]">{{ gradoSeccion }}</span>
          </div>

          <div class="grid max-[900px]:grid-cols-1 gap-5" style="grid-template-columns: 1.4fr 1fr 1fr">
            <!-- Gráfico donut -->
            <div class="bg-[#f9fafc] rounded-[16px] p-6 border border-[#eef2f6] flex flex-col items-center text-center">
              <div class="donut-chart" :style="{ background: donutBackground }">
                <div class="donut-center">
                  <span class="text-[1.8rem] font-black text-[#1e2a3e] leading-none">{{ porcentajeTotal }}%</span>
                  <span class="text-[0.7rem] font-bold text-[#4a6177] tracking-[1.2px] mt-1">TOTAL</span>
                </div>
              </div>
              <div class="flex gap-4 flex-wrap justify-center w-full mt-1">
                <div v-for="item in leyenda" :key="item.label" class="flex flex-col items-center gap-[0.2rem] min-w-[70px]">
                  <span class="w-[10px] h-[10px] rounded-full inline-block" :style="{ backgroundColor: item.color }"></span>
                  <span class="text-[0.65rem] font-bold text-[#4a6177] tracking-[0.5px]">{{ item.label }}</span>
                  <span class="text-[0.95rem] font-extrabold text-[#1e2a3e]">{{ item.pct }}%</span>
                </div>
              </div>
            </div>

            <!-- Días asistidos -->
            <div class="bg-[#fef9e3] rounded-[16px] p-6 border border-[#eef2f6] flex flex-col items-center justify-center text-center">
              <span class="text-[3rem] font-black text-[#1e2a3e] leading-none mb-1">{{ statsResumen.present }}</span>
              <span class="text-[0.7rem] font-extrabold text-[#4a6177] tracking-[1.2px]">DÍAS ASISTIDOS</span>
            </div>

            <!-- Inasistencias -->
            <div class="relative bg-[#f1f5f9] rounded-[16px] p-6 border border-[#eef2f6] flex flex-col items-center justify-center text-center">
              <div class="absolute top-4 left-4 w-[26px] h-[26px] rounded-full bg-[#c1272d] text-white flex items-center justify-center font-extrabold text-[0.9rem]">!</div>
              <span class="text-[3rem] font-black text-[#1e2a3e] leading-none mb-1">{{ String(statsResumen.absent).padStart(2, '0') }}</span>
              <span class="text-[0.7rem] font-extrabold text-[#4a6177] tracking-[1.2px]">INASISTENCIAS</span>
            </div>
          </div>
        </section>

        <!-- Tabla detalle -->
        <section class="bg-[#f9fafc] rounded-[16px] p-6 max-[480px]:p-4 border border-[#eef2f6]">
          <div class="flex justify-between items-center mb-4 flex-wrap gap-3">
            <h3 class="text-[1.2rem] font-extrabold text-[#1e2a3e] m-0">Detalle de Asistencia</h3>
            <button @click="descargarPDF" class="inline-flex items-center gap-[0.375rem] text-[0.85rem] font-bold text-[#b7791f] hover:text-[#8a5a00] transition-colors duration-200 cursor-pointer bg-transparent border-0 font-[inherit]">
              <span aria-hidden="true">↓</span> Descargar PDF
            </button>
          </div>

          <div class="overflow-x-auto bg-white rounded-xl border border-[#eef2f6]">
            <table class="w-full border-collapse">
              <thead>
                <tr>
                  <th class="text-left py-[0.9rem] px-4 max-[480px]:py-[0.6rem] max-[480px]:px-2 border-b border-[#eef2f6] bg-[#f9fafc] font-extrabold text-[#1e2a3e] text-[0.72rem] uppercase tracking-[1px] max-[480px]:text-[0.78rem]">FECHA</th>
                  <th class="text-left py-[0.9rem] px-4 max-[480px]:py-[0.6rem] max-[480px]:px-2 border-b border-[#eef2f6] bg-[#f9fafc] font-extrabold text-[#1e2a3e] text-[0.72rem] uppercase tracking-[1px] max-[480px]:text-[0.78rem]">ESTADO</th>
                  <th class="text-left py-[0.9rem] px-4 max-[480px]:py-[0.6rem] max-[480px]:px-2 border-b border-[#eef2f6] bg-[#f9fafc] font-extrabold text-[#1e2a3e] text-[0.72rem] uppercase tracking-[1px] max-[480px]:text-[0.78rem]">HORA INGRESO</th>
                  <th class="text-left py-[0.9rem] px-4 max-[480px]:py-[0.6rem] max-[480px]:px-2 border-b border-[#eef2f6] bg-[#f9fafc] font-extrabold text-[#1e2a3e] text-[0.72rem] uppercase tracking-[1px] max-[480px]:text-[0.78rem]">OBSERVACIONES</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(registro, idx) in registrosPaginados" :key="idx" class="hover:bg-[#fef9e3]">
                  <td class="py-[0.9rem] px-4 max-[480px]:py-[0.6rem] max-[480px]:px-2 border-b border-[#eef2f6] text-[0.88rem] text-[#2c3f4f] max-[480px]:text-[0.78rem]">{{ registro.fecha }}</td>
                  <td class="py-[0.9rem] px-4 max-[480px]:py-[0.6rem] max-[480px]:px-2 border-b border-[#eef2f6] text-[0.88rem] text-[#2c3f4f] max-[480px]:text-[0.78rem]">
                    <span :class="`estado-badge ${registro.estado.toLowerCase()}`">{{ registro.estado }}</span>
                  </td>
                  <td class="py-[0.9rem] px-4 max-[480px]:py-[0.6rem] max-[480px]:px-2 border-b border-[#eef2f6] text-[0.88rem] text-[#2c3f4f] max-[480px]:text-[0.78rem]">{{ registro.hora }}</td>
                  <td class="py-[0.9rem] px-4 max-[480px]:py-[0.6rem] max-[480px]:px-2 border-b border-[#eef2f6] text-[0.88rem] text-[#2c3f4f] max-[480px]:text-[0.78rem]">{{ registro.observacion }}</td>
                </tr>
                <tr v-if="registrosFiltrados.length === 0">
                  <td colspan="4" class="text-center text-[#94a3b8] py-8 italic text-[0.88rem]">No se encontraron registros para los criterios seleccionados.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Paginación -->
          <div v-if="totalPaginas > 1" class="flex justify-center items-center gap-[0.4rem] mt-6">
            <button @click="paginaActual = Math.max(1, paginaActual - 1)" :disabled="paginaActual === 1" class="bg-white border border-[#e2e8f0] px-[0.7rem] py-[0.4rem] text-[0.9rem] text-[#1e2a3e] rounded-lg hover:bg-[#fbc02d] hover:border-[#fbc02d] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer">‹</button>
            <button
              v-for="pag in totalPaginas"
              :key="pag"
              class="px-[0.75rem] py-[0.4rem] text-[0.85rem] rounded-lg cursor-pointer transition-all duration-200"
              :class="pag === paginaActual ? 'bg-[#fbc02d] text-[#1e2a3e] font-bold border border-[#fbc02d]' : 'bg-white border border-transparent text-[#1e2a3e] hover:bg-[#fef9e3]'"
              @click="paginaActual = pag"
            >{{ pag }}</button>
            <button @click="paginaActual = Math.min(totalPaginas, paginaActual + 1)" :disabled="paginaActual === totalPaginas" class="bg-white border border-[#e2e8f0] px-[0.7rem] py-[0.4rem] text-[0.9rem] text-[#1e2a3e] rounded-lg hover:bg-[#fbc02d] hover:border-[#fbc02d] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer">›</button>
          </div>
        </section>
      </template>

      <!-- No encontrado -->
      <div v-else-if="noEncontrado" class="text-center py-12 px-6 bg-[#f9fafc] border-2 border-dashed border-[#e2e8f0] rounded-[16px] text-[#4a6177]">
        <div class="mb-4"><svg viewBox="0 0 24 24" width="48" height="48" fill="#94a3b8" class="mx-auto"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>
        <p class="m-0">No se encontró ningún estudiante con el DNI <strong class="text-[#1e2a3e]">{{ busquedaAlumno }}</strong>. Verifique el número e intente nuevamente.</p>
      </div>

      <!-- Estado inicial -->
      <div v-else class="text-center py-12 px-6 bg-[#f9fafc] border-2 border-dashed border-[#e2e8f0] rounded-[16px] text-[#4a6177]">
        <div class="mb-4"><svg viewBox="0 0 24 24" width="48" height="48" fill="#fbc02d" class="mx-auto"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg></div>
        <p class="m-0">Complete los criterios de búsqueda y presione <strong class="text-[#1e2a3e]">"Generar Reporte"</strong> para ver los resultados.</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import colegioImg from '@/assets/PortadaSRWEB.png'
import api from '@/services/api'

const periodos            = ref([])
const periodoSeleccionado = ref('')
const cargandoPeriodos    = ref(false)

onMounted(async () => {
  cargandoPeriodos.value = true
  try {
    const { data } = await api.get('/attendance/periods')
    periodos.value = data.periods ?? []
    const activo = periodos.value.find(p => p.is_active === 'Y')
    periodoSeleccionado.value = activo?.codperiod ?? periodos.value[0]?.codperiod ?? ''
  } catch { /* el select queda vacío */ }
  finally { cargandoPeriodos.value = false }
})

const busquedaAlumno = ref('')
const fechaDesde     = ref('')
const fechaHasta     = ref('')

const sanitizarDni = () => { busquedaAlumno.value = busquedaAlumno.value.replace(/\D/g, '').slice(0, 8) }
const soloNumeros  = (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey) return
  const c = e.which ?? e.keyCode
  if (c < 48 || c > 57) e.preventDefault()
}

const errores      = ref({})
const mensajeError = ref('')

const validar = () => {
  const e = {}
  if (!busquedaAlumno.value.trim())                                           e.dni    = 'Ingrese el DNI del estudiante.'
  else if (!/^\d{8}$/.test(busquedaAlumno.value.trim()))                      e.dni    = 'El DNI debe tener exactamente 8 dígitos numéricos.'
  if (!periodoSeleccionado.value)                                              e.periodo = 'Seleccione un periodo.'
  if (fechaDesde.value && fechaHasta.value && fechaHasta.value < fechaDesde.value) e.hasta = 'La fecha "Hasta" no puede ser anterior a "Desde".'
  errores.value = e
  mensajeError.value = Object.keys(e).length ? 'Por favor revise los datos ingresados antes de generar el reporte.' : ''
  return !Object.keys(e).length
}

const limpiarError = (campo) => {
  if (!errores.value[campo]) return
  const c = { ...errores.value }
  delete c[campo]
  errores.value = c
  if (!Object.keys(c).length) mensajeError.value = ''
}

const studentData    = ref(null)
const enrollmentData = ref(null)
const allAssistances = ref([])
const reporteGenerado = ref(false)
const noEncontrado    = ref(false)
const cargando        = ref(false)
const paginaActual    = ref(1)
const registrosPorPagina = 4

const estadoLabel = (s) => ({ present: 'Asistencia', late: 'Tardanza', justified: 'Justificado' }[s] ?? 'Falta')

const registrosFiltrados = computed(() => {
  let r = allAssistances.value.map(a => ({
    fecha: a.date, raw_date: a.raw_date, period_code: a.period_code,
    estado: estadoLabel(a.status), hora: a.time_entry ?? '—', observacion: a.observation ?? '—',
  }))
  if (periodoSeleccionado.value) r = r.filter(x => x.period_code === periodoSeleccionado.value)
  if (fechaDesde.value) r = r.filter(x => x.raw_date >= fechaDesde.value)
  if (fechaHasta.value) r = r.filter(x => x.raw_date <= fechaHasta.value)
  return r
})

const statsResumen = computed(() => {
  const r = registrosFiltrados.value, total = r.length
  if (!total) return { total: 0, present: 0, absent: 0, late: 0, justified: 0, rate: 0 }
  const present   = r.filter(x => x.estado === 'Asistencia').length
  const absent    = r.filter(x => x.estado === 'Falta').length
  const late      = r.filter(x => x.estado === 'Tardanza').length
  const justified = r.filter(x => x.estado === 'Justificado').length
  return { total, present, absent, late, justified, rate: Math.round((present / total) * 100) }
})

const pctPresente  = computed(() => statsResumen.value.total ? Math.round((statsResumen.value.present / statsResumen.value.total) * 100) : 0)
const pctTardanza  = computed(() => statsResumen.value.total ? Math.round((statsResumen.value.late    / statsResumen.value.total) * 100) : 0)
const pctFalta     = computed(() => statsResumen.value.total ? Math.round((statsResumen.value.absent  / statsResumen.value.total) * 100) : 0)
const porcentajeTotal = computed(() => statsResumen.value.rate)

const donutBackground = computed(() => {
  const p = pctPresente.value, t = p + pctTardanza.value
  return `conic-gradient(#fbc02d 0% ${p}%, #1e2a3e ${p}% ${t}%, #c1272d ${t}% 100%)`
})

const leyenda = computed(() => [
  { label: 'ASISTENCIAS', color: '#fbc02d', pct: pctPresente.value },
  { label: 'TARDANZAS',   color: '#1e2a3e', pct: pctTardanza.value },
  { label: 'FALTAS',      color: '#c1272d', pct: pctFalta.value },
])

const nombreEstudiante = computed(() => studentData.value?.fullname ?? '')
const gradoSeccion     = computed(() => {
  if (!enrollmentData.value) return 'SIN MATRÍCULA'
  const { grade, section } = enrollmentData.value
  return `${grade ?? ''} ${section ?? ''}`.trim().toUpperCase() || 'MATRICULADO'
})

const totalPaginas      = computed(() => Math.ceil(registrosFiltrados.value.length / registrosPorPagina))
const registrosPaginados = computed(() => {
  const i = (paginaActual.value - 1) * registrosPorPagina
  return registrosFiltrados.value.slice(i, i + registrosPorPagina)
})

const generarReporte = async () => {
  if (!validar()) {
    reporteGenerado.value = false
    setTimeout(() => document.querySelector('.alerta-error')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 30)
    return
  }
  cargando.value = true; mensajeError.value = ''; reporteGenerado.value = false; noEncontrado.value = false
  try {
    const { data } = await api.get('/attendance/student', { params: { dni: busquedaAlumno.value.trim(), period: periodoSeleccionado.value } })
    if (!data.student) { noEncontrado.value = true; return }
    studentData.value = data.student; enrollmentData.value = data.enrollment; allAssistances.value = data.assistances ?? []
    paginaActual.value = 1; reporteGenerado.value = true
    setTimeout(() => document.querySelector('.resumen-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  } catch { mensajeError.value = 'Error al conectar con el servidor. Intente nuevamente.' }
  finally { cargando.value = false }
}

const descargarPDF = () => alert('Descargando reporte en PDF... (funcionalidad pendiente de integración)')
</script>

<style scoped>
/* Donut chart */
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
  align-items: center;
}

/* Alerta de error */
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

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-6px); }
  40%       { transform: translateX(6px); }
  60%       { transform: translateX(-4px); }
  80%       { transform: translateX(4px); }
}

/* Campos de formulario */
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
  outline: none;
}
.campo input:focus,
.campo select:focus {
  border-color: #fbc02d;
  box-shadow: 0 0 0 3px rgba(251, 192, 45, 0.2);
}
.campo input::placeholder { color: #94a3b8; }
.campo select {
  appearance: none;
  -webkit-appearance: none;
  padding-right: 2.2rem;
  cursor: pointer;
}
.select-arrow {
  position: absolute;
  right: 0.9rem;
  pointer-events: none;
  color: #4a6177;
  font-size: 0.8rem;
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
  font-size: 0.75rem;
  color: #b91c1c;
  font-weight: 600;
}

/* Badges de estado en tabla */
.estado-badge {
  display: inline-block;
  padding: 0.25rem 0.8rem;
  border-radius: 40px;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.estado-badge.asistencia  { background: #d1fae5; color: #065f46; }
.estado-badge.tardanza    { background: #fed7aa; color: #92400e; }
.estado-badge.falta       { background: #ffe4e4; color: #b91c1c; }
.estado-badge.justificado { background: #e0f2fe; color: #075985; }
</style>
