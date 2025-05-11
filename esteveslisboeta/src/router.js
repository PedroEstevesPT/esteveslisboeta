import { createRouter, createWebHistory } from 'vue-router'
import Landing from './views/LandingPage.vue'
import Collab from './views/CollabPage.vue'
import Discography from './views/DiscographyPage.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/collab', component: Collab },
  { path: '/discography', component: Discography }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router