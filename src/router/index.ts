import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: () => import('@/views/home-page.vue')
      },
      {
        path: '/search',
        component: () => import('@/views/search-page.vue')
      },
      {
        path: '/camera',
        component: () => import('@/views/camera-page.vue')
      },
      {
        path: '/liked',
        component: () => import('@/views/liked-page.vue')
      },
      {
        path: '/profile',
        component: () => import('@/views/profile-page.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
