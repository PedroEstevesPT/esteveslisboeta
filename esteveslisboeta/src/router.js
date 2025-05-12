import { createRouter, createWebHashHistory } from 'vue-router' // Change here
import Landing from './views/LandingPage.vue'
import Collab from './views/CollabPage.vue'
import Discography from './views/DiscographyPage.vue'

const routes = [
  { path: '/', component: Landing ,                name : 'Landing' },
  { path: '/collab', component: Collab,            name: 'Collab' },
  { path: '/discography', component: Discography,  name: 'Discography' }
]

const router = createRouter({
  history: createWebHashHistory(), // Change here
  routes
})

export default router