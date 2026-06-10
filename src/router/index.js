import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../vistas/Inicio.vue'
import MisionVision from '../vistas/MisionVision.vue'
import Historia from '../vistas/Historia.vue'
import Directivos from '../vistas/Directivos.vue'
import PlanaDocente from '../vistas/PlanaDocente.vue'
import ReporteAsistencia from '../vistas/ReporteAsistencia.vue'
import NoticiasLista from '../vistas/NoticiasLista.vue'
import NoticiaDetalle from '../vistas/NoticiaDetalle.vue'
import Contacto from '../vistas/Contacto.vue'
import Nosotros from '../vistas/Nosotros.vue'
import Admision from '../vistas/Admision.vue'
import Agreements from '../vistas/Agreements.vue'

const routes = [
  { path: '/', name: 'Home', component: Inicio },
  { path: '/about', component: Nosotros },
  { path: '/admision', component: Admision },
  { path: '/agreements', component: Agreements },
  { path: '/mision-vision', component: MisionVision },
  { path: '/historia', component: Historia },
  { path: '/directivos', component: Directivos },
  { path: '/plana-docente', component: PlanaDocente },
  { path: '/reporte-asistencia', component: ReporteAsistencia },
  { path: '/news', name: 'Noticias', component: NoticiasLista },
  { path: '/news/:id', name: 'NoticiaDetalle', component: NoticiaDetalle },
  { path: '/contacto', component: Contacto },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0, behavior: 'instant' }),
})

export default router