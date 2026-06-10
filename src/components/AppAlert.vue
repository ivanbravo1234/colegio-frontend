<template>
  <Teleport to="body">
    <Transition name="alert-slide">
      <div
        v-if="state.visible"
        class="fixed bottom-6 right-6 z-[9999] max-w-[420px] w-[calc(100vw-3rem)] flex items-start gap-3.5 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.18)] px-4 py-4"
        :class="estilos[state.tipo].contenedor"
        role="alert"
        aria-live="assertive"
      >
        <!-- Ícono -->
        <div
          class="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0"
          :class="estilos[state.tipo].iconoBg"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" :fill="estilos[state.tipo].iconoColor" v-html="estilos[state.tipo].icono" aria-hidden="true"></svg>
        </div>

        <!-- Texto -->
        <div class="flex-1 min-w-0 pt-[1px]">
          <p v-if="state.titulo" class="text-[0.88rem] font-semibold leading-snug m-0 mb-0.5" :class="estilos[state.tipo].titulo">
            {{ state.titulo }}
          </p>
          <p class="text-[0.81rem] leading-[1.55] m-0" :class="estilos[state.tipo].mensaje">
            {{ state.mensaje }}
          </p>
        </div>

        <!-- Cerrar -->
        <button
          @click="cerrarAlerta"
          class="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-lg opacity-50 hover:opacity-100 transition-opacity duration-150 border-0 bg-transparent cursor-pointer mt-[1px]"
          :class="estilos[state.tipo].cerrar"
          aria-label="Cerrar"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>

        <!-- Barra de progreso -->
        <div
          v-if="state.duracion > 0"
          class="absolute bottom-0 left-0 h-[3px] rounded-b-2xl"
          :class="estilos[state.tipo].barra"
          :style="{ animation: `alert-progress ${state.duracion}ms linear forwards` }"
        ></div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useAlert } from '../composables/useAlert'

const { state, cerrarAlerta } = useAlert()

const estilos = {
  success: {
    contenedor: 'bg-[#f0fdf4] border border-[#86efac]',
    iconoBg:    'bg-[#dcfce7]',
    iconoColor: '#16a34a',
    icono:      '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>',
    titulo:     'text-[#15803d]',
    mensaje:    'text-[#166534]',
    cerrar:     'text-[#16a34a]',
    barra:      'bg-[#22c55e]',
  },
  warning: {
    contenedor: 'bg-[#fffbeb] border border-[#fde68a]',
    iconoBg:    'bg-[#fef3c7]',
    iconoColor: '#d97706',
    icono:      '<path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>',
    titulo:     'text-[#92400e]',
    mensaje:    'text-[#78350f]',
    cerrar:     'text-[#d97706]',
    barra:      'bg-[#fbc02d]',
  },
  error: {
    contenedor: 'bg-[#fef2f2] border border-[#fca5a5]',
    iconoBg:    'bg-[#fee2e2]',
    iconoColor: '#dc2626',
    icono:      '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>',
    titulo:     'text-[#991b1b]',
    mensaje:    'text-[#7f1d1d]',
    cerrar:     'text-[#dc2626]',
    barra:      'bg-[#ef4444]',
  },
  info: {
    contenedor: 'bg-[#eff6ff] border border-[#93c5fd]',
    iconoBg:    'bg-[#dbeafe]',
    iconoColor: '#2563eb',
    icono:      '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>',
    titulo:     'text-[#1e40af]',
    mensaje:    'text-[#1e3a8a]',
    cerrar:     'text-[#2563eb]',
    barra:      'bg-[#3b82f6]',
  },
}
</script>

<style>
@keyframes alert-progress {
  from { width: 100%; }
  to   { width: 0%; }
}

.alert-slide-enter-active { transition: opacity 0.22s ease, transform 0.22s ease; }
.alert-slide-leave-active { transition: opacity 0.18s ease, transform 0.18s ease; }
.alert-slide-enter-from,
.alert-slide-leave-to     { opacity: 0; transform: translateY(12px) scale(0.97); }
</style>
