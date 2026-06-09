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

const routes = [
  { path: '/', name: 'Home', component: Inicio },
  { path: '/mision-vision', component: MisionVision },
  { path: '/historia', component: Historia },
  { path: '/directivos', component: Directivos },
  { path: '/plana-docente', component: PlanaDocente },
  { path: '/reporte-asistencia', component: ReporteAsistencia },
  { path: '/noticias', name: 'Noticias', component: NoticiasLista },
  { path: '/noticias/:id', name: 'NoticiaDetalle', component: NoticiaDetalle },
  { path: '/contacto', component: Contacto },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router