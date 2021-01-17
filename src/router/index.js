import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/main',
    name: 'Categories',
    meta: {layout: 'main'},
    component: () => import('../views/Main.vue'),
  },
  {
    path: '/history',
    name: 'History',
    meta: {layout: 'main'},
    component: () => import('../views/History.vue'),
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: {layout: 'main'},
    component: () => import('../views/Planning.vue'),
  },
  {
    path: '/record',
    name: 'Record',
    meta: {layout: 'main'},
    component: () => import('../views/Record.vue'),
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {layout: 'main'},
    component: () => import('../views/Categories.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: 'main'},
    component: () => import('../views/Profile.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
