import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: () => import('@/views/home.vue')
      },
      {
        path: '/search',
        component: () => import('@/views/search.vue')
      },
      {
        path: '/camera',
        component: () => import('@/views/camera.vue')
      },
      {
        path: '/liked',
        component: () => import('@/views/liked.vue')
      },
      {
        path: '/profile',
        component: () => import('@/views/profile.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
