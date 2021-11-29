import { createRouter, createWebHistory } from 'vue-router'
import Station from '../views/Station.vue'
import News from '../views/News.vue'
const routes = [
  {
    path: '/',
    component: Station
  },
  {
    path: '/station',
    component: Station
  },
  {
    path: '/news',
    component: News
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
