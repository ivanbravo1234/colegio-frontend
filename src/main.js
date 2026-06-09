import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // Importa la configuración del router
import './style.css'

createApp(App)
  .use(router)   // Registra el router en la app
  .mount('#app')