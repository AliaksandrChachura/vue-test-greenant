import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from '@/constants/modules/routes.js'

const routes = [
  {
    path: ROUTES.authentication.path,
    name: ROUTES.authentication.name,
    component: () => import('@/components/modal/AuthenticationModal.vue')
  },
  {
    path: ROUTES.categories.path,
    name: ROUTES.categories.name,
    component: () => import(/* webpackChunkName: ROUTES.categories.name */ '@/views/Categories.vue')
  },
  {
    path: ROUTES.subCategories.path,
    name: ROUTES.subCategories.name,
    component: () => import(/* webpackChunkName: ROUTES.subCategories.name */ '@/views/SubCategories.vue')
  },
  {
    path: ROUTES.goods.path,
    name: ROUTES.goods.name,
    component: () => import(/* webpackChunkName: ROUTES.goods.name */ '@/views/Equipments.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
