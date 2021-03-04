import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/page',
    component: () => import('../views/page.vue')
  },
  {
    path: '/news',
    component: () => import('../views/news.vue')
  },
  {
    path: '/register',
    component: () => import('../views/register.vue')
  },{
    path: '/login',
    component: () =>  import('../views/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
