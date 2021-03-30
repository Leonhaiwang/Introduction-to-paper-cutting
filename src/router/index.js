import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
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
    path: '/page1',
    component: () => import('../views/page1.vue')
  },
  {
    path: '/page2',
    component: () => import('../views/page2.vue')
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
    path: '/paperdetail3',
    component: () => import('../views/paperDetail3.vue')
  },
  {
    path: '/paperdetail4',
    component: () => import('../views/paperDeatil4.vue')
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
  ,
  {
    path: '*',
    redirect: '/index'
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
