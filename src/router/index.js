import { createRouter, createWebHistory } from 'vue-router'
import Station from '../views/Station.vue'
import News from '../views/News.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Station
  },
  {
    path: '/station',
    name: 'Station',
    component: Station
  },
  {
    path: '/news',
    name: 'News',
    component: News
  }
]

const router = createRouter({
  hash: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
