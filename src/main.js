import { createApp } from 'vue'
import { createUnhead, headSymbol } from '@unhead/vue'
import App from './App.vue'
import router from './router'
import revealDirective from './directives/reveal.js'
import './style.css'
console.log('BASE URL:', import.meta.env.VITE_API_BASE_URL)

const app = createApp(App)
const head = createUnhead()

app.provide(headSymbol, head)

app
  .use(router)
  .directive('reveal', revealDirective)
  .mount('#app')
