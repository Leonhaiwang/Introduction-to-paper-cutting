import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue')

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
  },
  {
    path: '/login',
    component: () => import('../views/login.vue')
  }, {
    path: '/login',
    component: () => import('../views/login.vue')
  }, {
    path: '/papercutting',
    component: () => import('../views/papercuttingInstruction.vue')
  },
  {
    path: '/paperdetail',
    component: () => import('../views/paperDetail.vue')
  },
  {
    path: '/paperdetail1',
    component: () => import('../views/paperDetail1.vue')
  },
  {
    path: '/paperdetail2',
    component: () => import('../views/paperDetail2.vue')
  },
  {
    path: '/forum',
    component: () => import('../views/forum.vue')
  }
  ,
  {
    path: '/userset',
    component: () => import('../views/userset.vue')
  }
  ,
  {
    path: '/aboutme',
    component: () => import('../views/aboutme.vue')
  },
  {
    path: '/questioncustomer',
    component: () => import('../views/questioncustomer.vue')
  },
  {
    path: '/questionlist',
    component: () => import('../views/questionlist.vue')
  }


  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
