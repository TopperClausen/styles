import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    { path: '/', name: 'home', component: HomeView },

    { path: '/styles', name: 'styles', component: () => import('../views/styles/index.vue') },
    { path: '/styles/new', name: 'new-style', component: () => import('../views/styles/NewView.vue') },
    { path: '/styles/edit/:id', name: 'edit-style', component: () => import('../views/styles/EditView.vue') },
    { path: '/styles/:id', name: 'style', component: () => import('../views/styles/ShowView.vue') }
  ]
})

export default router
