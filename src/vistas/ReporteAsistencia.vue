<template>
  <div class="bg-white text-[#1e2a3e]" :class="reporteGenerado ? '' : 'pb-24 max-md:pb-16'">

    <PageHero
      badge="TRANSPARENCIA ESCOLAR"
      title="Reporte de Asistencia"
      description="Acceda a la información detallada sobre el cumplimiento escolar de nuestros estudiantes con transparencia y compromiso."
      :breadcrumb="[{ label: 'Reporte de Asistencia' }]"
    />

    <div class="max-w-[1200px] mx-auto px-6 max-[480px]:px-4 pt-10 pb-10">

      <!-- Tarjeta de criterios -->
      <div class="bg-white rounded-xl border border-[#eef2f6] shadow-[0_4px_18px_rgba(0,0,0,0.05)] p-6 max-[600px]:p-4 mb-8">

        <!-- Alerta error -->
        <div
          v-if="mensajeError"
          class="flex items-start gap-3 bg-[#fef2f2] border border-[#fca5a5] border-l-[4px] border-l-[#b91c1c] text-[#7f1d1d] px-4 py-[0.85rem] rounded-[10px] mb-5 animate-shake"
          role="alert"
        >
          <span class="flex-shrink-0 inline-flex items-center justify-center mt-px">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#b91c1c">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
          </span>
          <div class="flex flex-col gap-[0.15rem] text-[0.88rem] leading-[1.4]">
            <strong class="font-semibold text-[#991b1b]">No se puede generar el reporte</strong>
            <span class="text-[#7f1d1d]">{{ mensajeError }}</span>
          </div>
        </div>

        <!-- Fila única: todos los campos + botón -->
        <div class="flex flex-wrap gap-3 items-end">

          <!-- DNI -->
          <div class="flex flex-col gap-[0.4rem] flex-[2] min-w-[180px]">
            <label class="text-[0.7rem] font-semibold uppercase text-[#4a6177] tracking-[1px]">DNI del estudiante</label>
            <div class="relative flex items-center">
              <span class="absolute left-[0.9rem] inline-flex items-center pointer-events-none z-10" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="#94a3b8">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </span>
              <input
                type="text" v-model="busquedaAlumno"
                @input="sanitizarDni(); limpiarError('dni')" @keypress="soloNumeros"
                placeholder="Ej: 72839405" maxlength="8" inputmode="numeric" pattern="[0-9]{8}"
                class="w-full py-[0.7rem] pl-10 pr-4 rounded-xl text-[0.9rem] transition-all duration-200 bg-white font-[inherit] text-[#1e2a3e] outline-none placeholder:text-[#94a3b8]"
                :class="errores.dni
                  ? 'border border-[#b91c1c] bg-[#fef2f2] focus:border-[#b91c1c] focus:shadow-[0_0_0_3px_rgba(185,28,28,0.15)]'
                  : 'border border-[#e2e8f0] focus:border-[#fbc02d] focus:shadow-[0_0_0_3px_rgba(251,192,45,0.2)]'"
              />
            </div>
            <span v-if="errores.dni" class="text-[0.75rem] text-[#b91c1c] font-semibold">{{ errores.dni }}</span>
          </div>

          <!-- Periodo -->
          <div class="flex flex-col gap-[0.4rem] flex-[1.5] min-w-[150px]">
            <label class="text-[0.7rem] font-semibold uppercase text-[#4a6177] tracking-[1px]">Año lectivo</label>
            <div class="relative flex items-center">
              <span class="absolute left-[0.9rem] inline-flex items-center pointer-events-none z-10" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="#94a3b8">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"/>
                </svg>
              </span>
              <select
                v-model="periodoSeleccionado" :disabled="cargandoPeriodos"
                class="w-full py-[0.7rem] pl-10 pr-8 rounded-xl text-[0.9rem] transition-all duration-200 bg-white font-[inherit] text-[#1e2a3e] outline-none appearance-none cursor-pointer"
                :class="errores.periodo
                  ? 'border border-[#b91c1c] bg-[#fef2f2] focus:border-[#b91c1c] focus:shadow-[0_0_0_3px_rgba(185,28,28,0.15)]'
                  : 'border border-[#e2e8f0] focus:border-[#fbc02d] focus:shadow-[0_0_0_3px_rgba(251,192,45,0.2)]'"
              >
                <option v-if="cargandoPeriodos" value="">Cargando...</option>
                <option v-for="p in periodos" :key="p.codperiod" :value="p.codperiod">{{ p.name }}{{ p.is_active === 'Y' ? ' ✦' : '' }}</option>
              </select>
              <span class="absolute right-[0.9rem] pointer-events-none text-[#4a6177] text-[0.8rem]" aria-hidden="true">▾</span>
            </div>
            <span v-if="errores.periodo" class="text-[0.75rem] text-[#b91c1c] font-semibold">{{ errores.periodo }}</span>
          </div>

          <!-- Desde -->
          <div class="flex flex-col gap-[0.4rem] flex-[1.2] min-w-[140px]">
            <label class="text-[0.7rem] font-semibold uppercase text-[#4a6177] tracking-[1px]">
              Desde <span class="text-[#b0bec5] font-normal normal-case tracking-normal">(opcional)</span>
            </label>
            <div class="relative flex items-center">
              <span class="absolute left-[0.9rem] inline-flex items-center pointer-events-none z-10" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="#94a3b8">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </span>
              <input
                type="date" v-model="fechaDesde" @input="limpiarError('desde')"
                class="w-full py-[0.7rem] pl-10 pr-4 rounded-xl text-[0.9rem] transition-all duration-200 bg-white font-[inherit] text-[#1e2a3e] outline-none"
                :class="errores.desde
                  ? 'border border-[#b91c1c] bg-[#fef2f2] focus:border-[#b91c1c] focus:shadow-[0_0_0_3px_rgba(185,28,28,0.15)]'
                  : 'border border-[#e2e8f0] focus:border-[#fbc02d] focus:shadow-[0_0_0_3px_rgba(251,192,45,0.2)]'"
              />
            </div>
            <span v-if="errores.desde" class="text-[0.75rem] text-[#b91c1c] font-semibold">{{ errores.desde }}</span>
          </div>

          <!-- Hasta -->
          <div class="flex flex-col gap-[0.4rem] flex-[1.2] min-w-[140px]">
            <label class="text-[0.7rem] font-semibold uppercase text-[#4a6177] tracking-[1px]">
              Hasta <span class="text-[#b0bec5] font-normal normal-case tracking-normal">(opcional)</span>
            </label>
            <div class="relative flex items-center">
              <span class="absolute left-[0.9rem] inline-flex items-center pointer-events-none z-10" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="#94a3b8">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </span>
              <input
                type="date" v-model="fechaHasta" @input="limpiarError('hasta')"
                class="w-full py-[0.7rem] pl-10 pr-4 rounded-xl text-[0.9rem] transition-all duration-200 bg-white font-[inherit] text-[#1e2a3e] outline-none"
                :class="errores.hasta
                  ? 'border border-[#b91c1c] bg-[#fef2f2] focus:border-[#b91c1c] focus:shadow-[0_0_0_3px_rgba(185,28,28,0.15)]'
                  : 'border border-[#e2e8f0] focus:border-[#fbc02d] focus:shadow-[0_0_0_3px_rgba(251,192,45,0.2)]'"
              />
            </div>
            <span v-if="errores.hasta" class="text-[0.75rem] text-[#b91c1c] font-semibold">{{ errores.hasta }}</span>
          </div>

          <!-- Botón -->
          <div class="flex flex-col gap-[0.4rem] flex-shrink-0 max-[600px]:w-full">
            <label class="opacity-0 select-none pointer-events-none text-[0.7rem]" aria-hidden="true">·</label>
            <button
              @click="generarReporte"
              class="inline-flex items-center gap-2 px-6 py-[0.72rem] text-[0.88rem] font-bold rounded-lg bg-[#fbc02d] text-[#1e2a3e] border-0 hover:bg-[#f5b81b] hover:-translate-y-px hover:shadow-[0_6px_16px_rgba(251,192,45,0.3)] disabled:opacity-60 disabled:cursor-wait disabled:translate-y-0 transition-all duration-200 cursor-pointer font-[inherit] w-full justify-center whitespace-nowrap"
              :disabled="cargando"
            >
              <span>{{ cargando ? 'Consultando...' : 'Generar reporte' }}</span>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
              </svg>
            </button>
          </div>

        </div>
      </div>

      <!-- No encontrado -->
      <div v-if="noEncontrado && !reporteGenerado" class="py-14 px-8 bg-[#fff8f8] border border-[#fca5a5] rounded-xl text-center">
        <p class="text-[0.7rem] font-semibold text-[#b91c1c] uppercase tracking-[1.5px] m-0 mb-2">Sin resultados</p>
        <p class="text-[#4a6177] text-[0.95rem] m-0">No se encontró ningún estudiante con el DNI <strong class="text-[#1e2a3e] font-semibold">{{ busquedaAlumno }}</strong>. Verifique el número e intente nuevamente.</p>
      </div>

      <!-- Estado inicial -->
      <div v-if="!reporteGenerado && !noEncontrado" class="py-14 px-8 bg-[#f8fafc] border border-[#eef2f6] rounded-xl text-center">
        <p class="text-[0.7rem] font-semibold text-[#fbc02d] uppercase tracking-[1.5px] m-0 mb-2">Listo para consultar</p>
        <p class="text-[#4a6177] text-[0.95rem] m-0">Ingrese el DNI del estudiante y presione <strong class="text-[#1e2a3e] font-semibold">Generar reporte</strong> para ver su registro de asistencia.</p>
      </div>

    </div>

  </div>

  <!-- Resultados: raíz independiente, fondo full-width -->
  <div v-if="reporteGenerado" ref="resultadosRef" class="bg-[#f8fafc] border-t border-[#eef2f6] py-12 max-[600px]:py-8 pb-24 max-md:pb-16">
    <div class="max-w-[1200px] mx-auto px-6 max-[480px]:px-4">

      <!-- Encabezado -->
      <div class="flex items-start justify-between mb-8 max-[600px]:mb-6 flex-wrap gap-3">
        <div>
          <p class="text-[0.68rem] font-semibold tracking-[2px] uppercase m-0 mb-1 text-[#4a6177]">Resultados de consulta</p>
          <h3 class="text-[#0a3144] text-[1.4rem] max-[600px]:text-[1.15rem] font-semibold m-0 leading-tight">{{ nombreEstudiante }}</h3>
        </div>
        <div class="flex items-center gap-3 flex-shrink-0 flex-wrap">
          <span class="bg-white border border-[#eef2f6] text-[#4a6177] py-[0.4rem] px-[0.9rem] rounded-lg text-[0.7rem] font-semibold tracking-[1px] shadow-sm">{{ gradoSeccion }}</span>
          <button
            @click="descargarPDF"
            :disabled="generandoPDF"
            data-no-pdf
            class="inline-flex items-center gap-2 px-4 py-[0.45rem] text-[0.82rem] font-semibold rounded-lg bg-[#0a3144] text-white hover:bg-[#0d3d58] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer border-0 font-[inherit]"
          >
            <svg v-if="!generandoPDF" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm2-4v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"/></svg>
            <svg v-else class="animate-spin" viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-dasharray="31.4" stroke-dashoffset="10" stroke-linecap="round"/></svg>
            {{ generandoPDF ? 'Generando...' : 'Descargar PDF' }}
          </button>
        </div>
      </div>

      <!-- Tarjetas de resumen -->
      <div class="grid grid-cols-1 gap-4 mb-6 min-[900px]:[grid-template-columns:1.4fr_1fr_1fr]">

        <!-- Donut -->
        <div class="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
          <div
            class="w-[140px] h-[140px] max-[480px]:w-[120px] max-[480px]:h-[120px] rounded-full relative flex items-center justify-center mb-5 before:content-[''] before:absolute before:inset-[18px] before:bg-white before:rounded-full"
            :style="{ background: donutBackground }"
          >
            <div class="relative z-10 flex flex-col items-center">
              <span class="text-[1.8rem] font-bold text-[#1e2a3e] leading-none">{{ porcentajeTotal }}%</span>
              <span class="text-[0.65rem] font-semibold text-[#4a6177] tracking-[1px] mt-1">ASISTENCIA</span>
            </div>
          </div>
          <div class="flex gap-5 flex-wrap justify-center w-full">
            <div v-for="item in leyenda" :key="item.label" class="flex flex-col items-center gap-[0.2rem] min-w-[60px]">
              <span class="w-[9px] h-[9px] rounded-full inline-block" :style="{ backgroundColor: item.color }"></span>
              <span class="text-[0.6rem] font-semibold text-[#4a6177] tracking-[0.5px]">{{ item.label }}</span>
              <span class="text-[0.95rem] font-bold text-[#1e2a3e]">{{ item.pct }}%</span>
            </div>
          </div>
        </div>

        <!-- Días + Inasistencias: side by side en tablet, contents en desktop -->
        <div class="grid grid-cols-2 max-[480px]:grid-cols-1 gap-4 min-[900px]:contents">

          <!-- Días asistidos -->
          <div class="bg-[#fbc02d] rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
            <span class="text-[2.8rem] max-[480px]:text-[2.4rem] font-bold text-[#1e2a3e] leading-none mb-1">{{ statsResumen.present }}</span>
            <span class="text-[0.68rem] font-semibold text-[#1e2a3e]/70 tracking-[1.2px]">DÍAS ASISTIDOS</span>
          </div>

          <!-- Inasistencias -->
          <div class="relative bg-white rounded-xl p-6 border border-[#eef2f6] flex flex-col items-center justify-center text-center shadow-sm">
            <div class="absolute top-3 left-3 w-[22px] h-[22px] rounded-full bg-[#c1272d] text-white flex items-center justify-center font-bold text-[0.78rem]">!</div>
            <span class="text-[2.8rem] max-[480px]:text-[2.4rem] font-bold text-[#1e2a3e] leading-none mb-1">{{ String(statsResumen.absent).padStart(2, '0') }}</span>
            <span class="text-[0.68rem] font-semibold text-[#4a6177] tracking-[1.2px]">INASISTENCIAS</span>
          </div>

        </div>
      </div>

      <!-- Gráfico de tendencia -->
      <div v-if="chartSvg" class="bg-white rounded-xl p-6 max-[480px]:p-4 shadow-sm mb-6 overflow-hidden">
        <div class="flex items-start justify-between mb-4 flex-wrap gap-2">
          <div>
            <h4 class="text-[0.95rem] font-semibold text-[#1e2a3e] m-0">Tendencia de asistencia</h4>
            <p class="text-[#4a6177] text-[0.78rem] m-0 mt-0.5 max-[480px]:hidden">Tasa acumulada a lo largo del periodo</p>
          </div>
          <div class="flex items-center gap-3 flex-wrap">
            <span class="flex items-center gap-1 text-[0.62rem] font-semibold text-[#4a6177] uppercase tracking-[0.5px]"><span class="w-2 h-2 rounded-full bg-[#22c55e] inline-block flex-shrink-0"></span>Asistencia</span>
            <span class="flex items-center gap-1 text-[0.62rem] font-semibold text-[#4a6177] uppercase tracking-[0.5px]"><span class="w-2 h-2 rounded-full bg-[#f59e0b] inline-block flex-shrink-0"></span>Tardanza</span>
            <span class="flex items-center gap-1 text-[0.62rem] font-semibold text-[#4a6177] uppercase tracking-[0.5px]"><span class="w-2 h-2 rounded-full bg-[#3b82f6] inline-block flex-shrink-0"></span>Justificado</span>
            <span class="flex items-center gap-1 text-[0.62rem] font-semibold text-[#4a6177] uppercase tracking-[0.5px]"><span class="w-2 h-2 rounded-full bg-[#ef4444] inline-block flex-shrink-0"></span>Falta</span>
          </div>
        </div>

        <div class="w-full overflow-x-auto">
        <svg :viewBox="`0 0 ${chartSvg.W} ${chartSvg.H}`" class="w-full min-w-[280px] overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fbc02d" stop-opacity="0.22"/>
              <stop offset="100%" stop-color="#fbc02d" stop-opacity="0.02"/>
            </linearGradient>
          </defs>

          <!-- Grid lines + labels Y -->
          <template v-for="pct in [0, 25, 50, 75, 100]" :key="pct">
            <line
              :x1="chartSvg.padX" :x2="chartSvg.W - chartSvg.padX"
              :y1="chartSvg.toY(pct)" :y2="chartSvg.toY(pct)"
              :stroke="pct === 0 || pct === 100 ? '#d1d9e0' : '#eef2f6'" stroke-width="1"
            />
            <text :x="chartSvg.padX - 6" :y="chartSvg.toY(pct) + 3.5"
              text-anchor="end" font-size="9" fill="#b0bec5">{{ pct }}%</text>
          </template>

          <!-- Línea de referencia 85% -->
          <line
            :x1="chartSvg.padX" :x2="chartSvg.W - chartSvg.padX"
            :y1="chartSvg.refY" :y2="chartSvg.refY"
            stroke="#fbc02d" stroke-width="1" stroke-dasharray="5,4" opacity="0.5"
          />
          <text :x="chartSvg.W - chartSvg.padX + 4" :y="chartSvg.refY + 3.5"
            font-size="9" fill="#fbc02d" opacity="0.8">85%</text>

          <!-- Área -->
          <path :d="chartSvg.areaPath" fill="url(#areaGrad)" />

          <!-- Línea de tendencia (curva suave) -->
          <path :d="chartSvg.linePath" fill="none" stroke="#fbc02d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />

          <!-- Dots coloreados por estado del día -->
          <circle v-for="(pt, i) in chartSvg.points" :key="i"
            :cx="pt.x" :cy="pt.y" r="3.5"
            :fill="pt.dotColor" stroke="white" stroke-width="1.5"
          />

          <!-- Fecha labels distribuidas -->
          <text v-for="idx in chartSvg.labelIndexes" :key="`d${idx}`"
            :x="chartSvg.points[idx].x"
            :y="chartSvg.toY(0) + 16"
            text-anchor="middle" font-size="9" fill="#94a3b8"
          >{{ chartSvg.points[idx].fecha }}</text>
        </svg>
        </div>
      </div>

      <!-- Tabla detalle -->
      <div class="bg-white rounded-xl overflow-hidden shadow-sm">
        <div class="px-6 py-4 border-b border-[#eef2f6]">
          <h3 class="text-[1rem] font-semibold text-[#1e2a3e] m-0">Detalle de asistencia</h3>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr>
                <th class="text-left py-[0.85rem] px-5 max-[480px]:px-3 border-b border-[#f1f5f9] bg-[#f8fafc] font-semibold text-[#1e2a3e] text-[0.7rem] uppercase tracking-[1px]">Fecha</th>
                <th class="text-left py-[0.85rem] px-5 max-[480px]:px-3 border-b border-[#f1f5f9] bg-[#f8fafc] font-semibold text-[#1e2a3e] text-[0.7rem] uppercase tracking-[1px]">Estado</th>
                <th class="text-left py-[0.85rem] px-5 max-[480px]:px-3 border-b border-[#f1f5f9] bg-[#f8fafc] font-semibold text-[#1e2a3e] text-[0.7rem] uppercase tracking-[1px] max-[560px]:hidden">Hora ingreso</th>
                <th class="text-left py-[0.85rem] px-5 max-[480px]:px-3 border-b border-[#f1f5f9] bg-[#f8fafc] font-semibold text-[#1e2a3e] text-[0.7rem] uppercase tracking-[1px] max-[480px]:hidden">Observaciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(registro, idx) in registrosPaginados" :key="idx" class="hover:bg-[#fef9e3] transition-colors duration-150">
                <td class="py-[0.85rem] px-5 max-[480px]:px-3 border-b border-[#f1f5f9] text-[0.875rem] text-[#2c3f4f]">{{ registro.fecha }}</td>
                <td class="py-[0.85rem] px-5 max-[480px]:px-3 border-b border-[#f1f5f9]">
                  <span :class="estadoBadgeClass(registro.estado)">{{ registro.estado }}</span>
                </td>
                <td class="py-[0.85rem] px-5 max-[480px]:px-3 border-b border-[#f1f5f9] text-[0.875rem] text-[#2c3f4f] max-[560px]:hidden">{{ registro.hora }}</td>
                <td class="py-[0.85rem] px-5 max-[480px]:px-3 border-b border-[#f1f5f9] text-[0.875rem] text-[#2c3f4f] max-[480px]:hidden">{{ registro.observacion }}</td>
              </tr>
              <tr v-if="registrosFiltrados.length === 0">
                <td colspan="4" class="text-center text-[#94a3b8] py-10 italic text-[0.875rem]">No se encontraron registros.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Paginación -->
        <div v-if="totalPaginas > 1 && !printMode" data-no-pdf class="flex justify-center items-center gap-[0.4rem] px-6 py-4 border-t border-[#f1f5f9]">
          <button @click="paginaActual = Math.max(1, paginaActual - 1)" :disabled="paginaActual === 1" class="bg-white border border-[#e2e8f0] px-[0.7rem] py-[0.4rem] text-[0.9rem] text-[#1e2a3e] rounded-lg hover:bg-[#fbc02d] hover:border-[#fbc02d] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer">‹</button>
          <button
            v-for="pag in totalPaginas" :key="pag"
            class="px-[0.75rem] py-[0.4rem] text-[0.85rem] rounded-lg cursor-pointer transition-all duration-200"
            :class="pag === paginaActual ? 'bg-[#fbc02d] text-[#1e2a3e] font-bold border border-[#fbc02d]' : 'bg-white border border-transparent text-[#1e2a3e] hover:bg-[#fef9e3]'"
            @click="paginaActual = pag"
          >{{ pag }}</button>
          <button @click="paginaActual = Math.min(totalPaginas, paginaActual + 1)" :disabled="paginaActual === totalPaginas" class="bg-white border border-[#e2e8f0] px-[0.7rem] py-[0.4rem] text-[0.9rem] text-[#1e2a3e] rounded-lg hover:bg-[#fbc02d] hover:border-[#fbc02d] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer">›</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import PageHero from '../components/PageHero.vue'
import api from '@/services/api'
import jsPDF from 'jspdf'
import { useSeo } from '../composables/useSeo'

useSeo({
  title: 'Reporte de Asistencia',
  description: 'Consulta el reporte de asistencia de estudiantes de la I.E. Santa Rosa — Tarapoto. Transparencia escolar para padres y apoderados.',
  path: '/reporte-asistencia',
})
const _logoSrc = new URL('../assets/logo.png', import.meta.url).href

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
  if (!busquedaAlumno.value.trim())                                                e.dni     = 'Ingrese el DNI del estudiante.'
  else if (!/^\d{8}$/.test(busquedaAlumno.value.trim()))                           e.dni     = 'El DNI debe tener exactamente 8 dígitos numéricos.'
  if (!periodoSeleccionado.value)                                                   e.periodo = 'Seleccione un periodo.'
  if (fechaDesde.value && fechaHasta.value && fechaHasta.value < fechaDesde.value)  e.hasta   = 'La fecha "Hasta" no puede ser anterior a "Desde".'
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

const studentData     = ref(null)
const enrollmentData  = ref(null)
const allAssistances  = ref([])
const reporteGenerado = ref(false)
const noEncontrado    = ref(false)
const cargando        = ref(false)
const paginaActual    = ref(1)
const registrosPorPagina = 4
const printMode       = ref(false)   // muestra todas las filas al generar PDF
const generandoPDF    = ref(false)
const resultadosRef   = ref(null)    // no usado en generación jsPDF, pero mantenido

const estadoLabel = (s) => ({ present: 'Asistencia', late: 'Tardanza', justified: 'Justificado' }[s] ?? 'Falta')

const estadoBadgeClass = (estado) => {
  const map = {
    asistencia:  'bg-[#d1fae5] text-[#065f46]',
    tardanza:    'bg-[#fed7aa] text-[#92400e]',
    falta:       'bg-[#ffe4e4] text-[#b91c1c]',
    justificado: 'bg-[#e0f2fe] text-[#075985]',
  }
  return `inline-block px-[0.8rem] py-[0.25rem] rounded-full text-[0.7rem] font-semibold uppercase tracking-[0.5px] ${map[estado.toLowerCase()] ?? 'bg-gray-100 text-gray-600'}`
}

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

const pctPresente     = computed(() => statsResumen.value.total ? Math.round((statsResumen.value.present / statsResumen.value.total) * 100) : 0)
const pctTardanza     = computed(() => statsResumen.value.total ? Math.round((statsResumen.value.late    / statsResumen.value.total) * 100) : 0)
const pctFalta        = computed(() => statsResumen.value.total ? Math.round((statsResumen.value.absent  / statsResumen.value.total) * 100) : 0)
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

const totalPaginas       = computed(() => Math.ceil(registrosFiltrados.value.length / registrosPorPagina))
const registrosPaginados = computed(() => {
  if (printMode.value) return registrosFiltrados.value
  const i = (paginaActual.value - 1) * registrosPorPagina
  return registrosFiltrados.value.slice(i, i + registrosPorPagina)
})

const generarReporte = async () => {
  if (!validar()) {
    reporteGenerado.value = false
    setTimeout(() => document.querySelector('[role="alert"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 30)
    return
  }
  cargando.value = true; mensajeError.value = ''; reporteGenerado.value = false; noEncontrado.value = false
  try {
    const { data } = await api.get('/attendance/student', { params: { dni: busquedaAlumno.value.trim(), period: periodoSeleccionado.value } })
    if (!data.student) { noEncontrado.value = true; return }
    studentData.value = data.student; enrollmentData.value = data.enrollment; allAssistances.value = data.assistances ?? []
    paginaActual.value = 1; reporteGenerado.value = true
  } catch { mensajeError.value = 'Error al conectar con el servidor. Intente nuevamente.' }
  finally { cargando.value = false }
}

const fechaGeneracion = computed(() => {
  return new Date().toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric' })
})

const descargarPDF = async () => {
  if (generandoPDF.value) return
  generandoPDF.value = true
  await nextTick()

  try {
    // ── Datos ──────────────────────────────────────────────
    const registros    = registrosFiltrados.value
    const nombre       = nombreEstudiante.value
    const grado        = gradoSeccion.value
    const dni          = busquedaAlumno.value?.trim() ?? ''
    const periodo      = periodos.value.find(p => p.codperiod === periodoSeleccionado.value)?.description ?? periodoSeleccionado.value
    const stats        = statsResumen.value
    const pct          = porcentajeTotal.value
    const asistidos    = stats.present
    const tardanzas    = stats.late
    const inasistencias = stats.absent
    const justificados  = stats.justified
    const totalDias    = stats.total

    // ── Logo (carga con aspect ratio real) ────────────────
    const logoData = await new Promise(res => {
      const img = new Image()
      img.onload = () => {
        const c = document.createElement('canvas')
        c.width = img.naturalWidth; c.height = img.naturalHeight
        c.getContext('2d').drawImage(img, 0, 0)
        res({ src: c.toDataURL('image/png'), ratio: img.naturalWidth / img.naturalHeight })
      }
      img.onerror = () => res(null)
      img.src = _logoSrc
    })

    // ── Constantes de layout (mm) ──────────────────────────
    const W = 210, ML = 15, CW = 180
    const HEADER_H  = 24   // altura total del header
    const FOOTER_Y  = 278  // donde empieza el footer
    const CS        = HEADER_H + 4  // content start Y
    const ROW_H     = 7.5
    const TBL_HDR_H = 9

    // CS=30 → info(7+31+5)=43 → stats(7+27+5)=39 → tbl title(7)+tbl hdr(9)=16 → sum=98+CS=128
    const TABLE_START_P1 = CS + 43 + 39 + 16
    const ROWS_P1 = Math.floor((FOOTER_Y - TABLE_START_P1) / ROW_H)
    const ROWS_PN = Math.floor((FOOTER_Y - (CS + TBL_HDR_H)) / ROW_H)
    const totalPages = totalDias === 0 ? 1
      : totalDias <= ROWS_P1 ? 1
      : 1 + Math.ceil((totalDias - ROWS_P1) / ROWS_PN)

    // ── Colores ────────────────────────────────────────────
    const navy   = [10, 49, 68]
    const yellow = [251, 192, 45]
    const dark   = [30, 42, 62]
    const muted  = [100, 116, 139]
    const light  = [248, 250, 252]
    const border = [220, 228, 236]
    const white  = [255, 255, 255]

    const stateRgb = (e) => {
      const s = (e ?? '').toLowerCase()
      return s === 'asistencia'  ? [22, 163, 74]
           : s === 'tardanza'    ? [217, 119, 6]
           : s === 'justificado' ? [37, 99, 235]
           : [220, 38, 38]
    }

    // ── Documento ──────────────────────────────────────────
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

    // ── Cabecera de página ─────────────────────────────────
    const NAVY_H  = HEADER_H - 2   // franja navy
    const LOGO_H  = NAVY_H - 4     // altura del logo (margen 2mm arriba y abajo)
    const LOGO_W  = logoData ? LOGO_H * logoData.ratio : 0   // ancho proporcional real
    const LOGO_Y  = 2              // margen superior

    const drawHeader = (page) => {
      // Fondo navy
      doc.setFillColor(...navy)
      doc.rect(0, 0, W, NAVY_H, 'F')
      // Franja amarilla
      doc.setFillColor(...yellow)
      doc.rect(0, NAVY_H, W, 2, 'F')

      // Logo con ancho natural proporcional a la altura
      if (logoData) {
        try { doc.addImage(logoData.src, 'PNG', ML, LOGO_Y, LOGO_W, LOGO_H) } catch (_) {}
      }

      // Textos — igual que el header web: nombre grande + subtítulo pequeño
      const textX = ML + LOGO_W + 4
      const midY  = NAVY_H / 2

      doc.setFont('helvetica', 'bold')
      doc.setFontSize(13)
      doc.setTextColor(...white)
      doc.text('I.E. SANTA ROSA', textX, midY - 1)

      doc.setFont('helvetica', 'normal')
      doc.setFontSize(11)
      doc.setTextColor(160, 190, 215)
      doc.text('INSTITUCIÓN EDUCATIVA', textX, midY + 5)

      // Número de página (derecha)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(7)
      doc.setTextColor(130, 170, 200)
      doc.text(`Pág. ${page} / ${totalPages}`, W - ML, midY + 2, { align: 'right' })
    }

    // ── Pie de página ──────────────────────────────────────
    const drawFooter = () => {
      doc.setDrawColor(...border)
      doc.setLineWidth(0.3)
      doc.line(ML, FOOTER_Y + 2, W - ML, FOOTER_Y + 2)
      doc.setFont('helvetica', 'italic')
      doc.setFontSize(7)
      doc.setTextColor(...muted)
      doc.text(`Generado el ${fechaGeneracion.value}`, ML, FOOTER_Y + 7)
      doc.text('I.E. Santa Rosa — Sistema de Gestión Escolar', W - ML, FOOTER_Y + 7, { align: 'right' })
    }

    // ── Barra de sección ───────────────────────────────────
    const drawSection = (y, title) => {
      doc.setFillColor(...light)
      doc.rect(ML, y, CW, 7, 'F')
      doc.setDrawColor(...border)
      doc.setLineWidth(0.2)
      doc.rect(ML, y, CW, 7, 'S')
      doc.setFillColor(...yellow)
      doc.rect(ML, y, 2, 7, 'F')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(7.5)
      doc.setTextColor(...navy)
      doc.text(title, ML + 5, y + 4.7)
      return y + 7
    }

    // ── Cabecera de tabla ──────────────────────────────────
    const COL = [32, 44, 26, CW - 32 - 44 - 26]
    const HDRS = ['Fecha', 'Estado', 'Hora ingreso', 'Observaciones']

    const drawTableHeader = (y) => {
      doc.setFillColor(...navy)
      doc.rect(ML, y, CW, TBL_HDR_H, 'F')
      let cx = ML
      HDRS.forEach((h, i) => {
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(7.5)
        doc.setTextColor(...white)
        doc.text(h.toUpperCase(), cx + 4, y + TBL_HDR_H / 2 + 1.2, { baseline: 'middle' })
        if (i < HDRS.length - 1) {
          doc.setDrawColor(255, 255, 255)
          doc.setLineWidth(0.15)
          doc.line(cx + COL[i], y + 1.5, cx + COL[i], y + TBL_HDR_H - 1.5)
        }
        cx += COL[i]
      })
      return y + TBL_HDR_H
    }

    // ── Fila de tabla ──────────────────────────────────────
    const drawRow = (y, r, i) => {
      const isEven = i % 2 === 0
      doc.setFillColor(isEven ? 255 : 248, isEven ? 255 : 250, isEven ? 255 : 252)
      doc.rect(ML, y, CW, ROW_H, 'F')

      doc.setDrawColor(...border)
      doc.setLineWidth(0.15)
      doc.line(ML, y + ROW_H, ML + CW, y + ROW_H)

      // Separadores verticales de columnas
      let cx = ML
      for (let ci = 0; ci < COL.length - 1; ci++) {
        cx += COL[ci]
        doc.line(cx, y, cx, y + ROW_H)
      }

      const ty = y + ROW_H / 2 + 1

      // Fecha
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8.5)
      doc.setTextColor(...dark)
      doc.text(r.fecha ?? '', ML + 4, ty, { baseline: 'middle' })

      // Estado — punto de color + texto bold
      const sc = stateRgb(r.estado)
      doc.setFillColor(...sc)
      doc.circle(ML + COL[0] + 4, y + ROW_H / 2, 1.6, 'F')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(8)
      doc.setTextColor(...sc)
      doc.text(r.estado ?? '', ML + COL[0] + 8.5, ty, { baseline: 'middle' })

      // Hora
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8.5)
      doc.setTextColor(...muted)
      doc.text(r.hora ?? '—', ML + COL[0] + COL[1] + 4, ty, { baseline: 'middle' })

      // Observaciones (1 línea recortada)
      const obsRaw = r.observacion?.trim()
      const obs = (obsRaw && obsRaw !== 'N/A' && obsRaw !== '—' && obsRaw !== 'null') ? obsRaw : '—'
      doc.setTextColor(...dark)
      const obsX = ML + COL[0] + COL[1] + COL[2] + 4
      doc.text(doc.splitTextToSize(obs, COL[3] - 8)[0], obsX, ty, { baseline: 'middle' })
    }

    // ── CONSTRUCCIÓN ───────────────────────────────────────
    let currentPage = 1
    drawHeader(currentPage)

    let y = CS

    // — Datos del estudiante —
    y = drawSection(y, 'DATOS DEL ESTUDIANTE')
    doc.setFillColor(...white)
    doc.setDrawColor(...border)
    doc.setLineWidth(0.25)
    doc.rect(ML, y, CW, 31, 'FD')
    doc.setLineWidth(0.2)
    doc.line(ML + CW / 2, y + 3, ML + CW / 2, y + 28)

    const infoLbl = (txt, x, iy) => {
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(6.5)
      doc.setTextColor(...muted)
      doc.text(txt.toUpperCase(), x, iy)
    }
    const infoVal = (txt, x, iy, maxW) => {
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(10)
      doc.setTextColor(...dark)
      doc.text(doc.splitTextToSize(String(txt), maxW ?? CW - 8)[0], x, iy)
    }

    infoLbl('Nombre completo del estudiante', ML + 4, y + 7)
    infoVal(nombre, ML + 4, y + 13.5, CW - 8)
    infoLbl('DNI / Código', ML + 4, y + 22)
    infoVal(dni || 'N/A', ML + 4, y + 28.5, CW / 2 - 8)
    infoLbl('Grado y sección', ML + CW / 2 + 4, y + 22)
    infoVal(grado, ML + CW / 2 + 4, y + 28.5, CW / 2 - 8)

    y += 31 + 5

    // — Resumen —
    y = drawSection(y, 'RESUMEN DE ASISTENCIA')

    const statDefs = [
      { bg: [255, 249, 219], lbl: 'Tasa de asistencia', val: `${pct}%`,           sub: 'del período académico' },
      { bg: [240, 253, 244], lbl: 'Días asistidos',     val: `${asistidos}`,       sub: `de ${totalDias} días registrados` },
      { bg: [255, 241, 242], lbl: 'Inasistencias',      val: `${inasistencias}`,   sub: `${justificados} justificada${justificados !== 1 ? 's' : ''}` },
      { bg: [255, 251, 235], lbl: 'Tardanzas',          val: `${tardanzas}`,       sub: 'llegadas fuera de horario' },
    ]

    const STAT_W = (CW - 3) / 4
    const STAT_H = 27
    statDefs.forEach((s, i) => {
      const sx = ML + i * (STAT_W + 1)
      doc.setFillColor(...s.bg)
      doc.rect(sx, y, STAT_W, STAT_H, 'F')
      doc.setDrawColor(...border)
      doc.setLineWidth(0.2)
      doc.rect(sx, y, STAT_W, STAT_H, 'S')
      const cx = sx + STAT_W / 2
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(6.5)
      doc.setTextColor(...muted)
      doc.text(s.lbl.toUpperCase(), cx, y + 6, { align: 'center' })
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(20)
      doc.setTextColor(...dark)
      doc.text(s.val, cx, y + 19.5, { align: 'center' })
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(6.5)
      doc.setTextColor(...muted)
      doc.text(s.sub, cx, y + 25.5, { align: 'center' })
    })

    y += STAT_H + 5

    // — Tabla —
    y = drawSection(y, 'DETALLE DE ASISTENCIA')
    y = drawTableHeader(y)

    registros.forEach((r, i) => {
      if (y + ROW_H > FOOTER_Y) {
        drawFooter()
        doc.addPage()
        currentPage++
        drawHeader(currentPage)
        y = CS
        y = drawTableHeader(y)
      }
      drawRow(y, r, i)
      y += ROW_H
    })

    // Borde exterior de la tabla
    doc.setDrawColor(...border)
    doc.setLineWidth(0.3)
    doc.line(ML, y, ML + CW, y)
    doc.line(ML, CS + 43 + 38 + 16, ML, y)
    doc.line(ML + CW, CS + 43 + 38 + 16, ML + CW, y)

    drawFooter()

    const filename = `Reporte_Asistencia_${nombre.replace(/\s+/g, '_')}.pdf`
    doc.save(filename)

  } finally {
    generandoPDF.value = false
  }
}

const chartData = computed(() => {
  const sorted = [...registrosFiltrados.value]
    .filter(r => r.raw_date)
    .sort((a, b) => a.raw_date.localeCompare(b.raw_date))

  let presentes = 0
  return sorted.map((r, i) => {
    if (r.estado === 'Asistencia') presentes++
    const tasa = Math.round((presentes / (i + 1)) * 100)
    const dotColor = r.estado === 'Asistencia'  ? '#22c55e'
                   : r.estado === 'Tardanza'    ? '#f59e0b'
                   : r.estado === 'Justificado' ? '#3b82f6'
                   : '#ef4444'
    return { fecha: r.fecha, tasa, dotColor }
  })
})

const chartSvg = computed(() => {
  const data = chartData.value
  if (data.length < 2) return null

  const W = 600, H = 160, padX = 36, padY = 16
  const innerW = W - padX * 2
  const innerH = H - padY * 2 - 22   // 22px para labels de fecha abajo

  const toX = (i) => +(padX + (i / (data.length - 1)) * innerW).toFixed(2)
  const toY = (v) => +(padY + (1 - v / 100) * innerH).toFixed(2)

  const points = data.map((d, i) => ({
    x: toX(i), y: toY(d.tasa),
    dotColor: d.dotColor, fecha: d.fecha, tasa: d.tasa,
  }))

  // Curva suave con cubic bezier
  const linePath = points.reduce((acc, p, i) => {
    if (i === 0) return `M${p.x},${p.y}`
    const prev = points[i - 1]
    const cx = (prev.x + p.x) / 2
    return `${acc} C${cx},${prev.y} ${cx},${p.y} ${p.x},${p.y}`
  }, '')

  const floor    = toY(0)
  const areaPath = `${linePath} L${points.at(-1).x},${floor} L${points[0].x},${floor} Z`

  // Línea de referencia al 85% (mínimo de asistencia típico)
  const refY = toY(85)

  const n = points.length - 1
  const labelIndexes = [...new Set([0, Math.round(n / 4), Math.round(n / 2), Math.round(3 * n / 4), n])]
    .filter(idx => idx >= 0 && idx <= n)

  return { W, H, padX, padY, innerW, innerH, points, linePath, areaPath, refY, labelIndexes, toY }
})
</script>
