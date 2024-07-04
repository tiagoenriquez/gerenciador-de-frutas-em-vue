import { createRouter, createWebHistory } from 'vue-router'
import ListaView from '../views/ListaView.vue'
import CadastroView from '../views/CadastroView.vue'
import EdicaoView from '../views/EdicaoView.vue'
import AmeacaView from '../views/AmeacaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'lista',
      component: ListaView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroView
    },
    {
      path: '/edicao',
      name: 'edicao',
      component: EdicaoView
    },
    {
      path: '/ameaca',
      name: 'ameaca',
      component: AmeacaView
    }
  ]
})

export default router
