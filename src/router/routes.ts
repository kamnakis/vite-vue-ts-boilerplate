import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('~/pages/Landing.vue')
  },
  {
    path: '/',
    component: () => import('~/layouts/LDashboard.vue'),
    children: [
      { name: 'Home', path: 'home', component: () => import('~/pages/Home.vue') },
      { name: 'About', path: 'about', component: () => import('~/pages/About.vue') },
      { name: 'Contact', path: 'contact', component: () => import('~/pages/Contact.vue') }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('~/pages/Error404.vue')
  }
]
