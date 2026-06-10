import { reactive } from 'vue'

const state = reactive({
  visible: false,
  tipo: 'info',      // 'success' | 'warning' | 'error' | 'info'
  titulo: '',
  mensaje: '',
  duracion: 5000,
})

let timer = null

const mostrarAlerta = ({ tipo = 'info', titulo = '', mensaje = '', duracion = 5000 } = {}) => {
  if (timer) clearTimeout(timer)
  Object.assign(state, { visible: true, tipo, titulo, mensaje, duracion })
  if (duracion > 0) {
    timer = setTimeout(() => cerrarAlerta(), duracion)
  }
}

const cerrarAlerta = () => {
  state.visible = false
  if (timer) { clearTimeout(timer); timer = null }
}

export const useAlert = () => ({ state, mostrarAlerta, cerrarAlerta })
