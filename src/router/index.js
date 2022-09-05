import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'authentication',
    component: () => import('@/components/modal/AuthenticationModal.vue')
  },
  {
    path: '/catalog',
    name: 'categories',
    component: () => import('@/views/Categories.vue'),
    children: [
      {
        path: ':catId',
        name: 'subCategories',
        component: () => import('@/views/SubCategories.vue'),
      },
      {
        path: ':catId/:subcatId',
        name: 'goods',
        component: () => import('@/views/Equipments.vue')
      }
  ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
