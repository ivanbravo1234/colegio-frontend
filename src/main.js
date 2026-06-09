import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importa la configuración del router
import './style.css'
console.log('BASE URL:', import.meta.env.VITE_API_BASE_URL)

createApp(App)
	.use(router) // Registra el router en la app
	.mount('#app')
