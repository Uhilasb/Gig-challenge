import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home/Home.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/Contacts/Create.vue')
    },
    {
      path: '/:id/edit',
      name: 'edit',
      props: true,
      component: () => import('../views/Contacts/Create.vue')
    }
  ]
})

export default router
