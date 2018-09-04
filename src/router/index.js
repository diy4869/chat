import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        path: '/login',
        name: 'login',
        component: () => import('@/components/login')
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/components/register')
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        requiresAuth: true
      },
      component: () => import('@/components/home'),
      children: [{
        path: '/notice',
        name: 'notice',
        meta: {
          requiresAuth: true
        },
        component: () => import('@/components/tab/notice')
      },
      {
        path: '/contacts',
        name: 'contacts',
        meta: {
          requiresAuth: true
        },
        component: () => import('@/components/tab/contacts')
      },
      {
        path: '/dynamic',
        name: 'dynamic',
        meta: {
          requiresAuth: true
        },
        component: () => import('@/components/tab/dynamic')
      },
      {
        path: '/my',
        name: 'my',
        meta: {
          requiresAuth: true
        },
        component: () => import('@/components/tab/my')
      },
      {
        path: '/preview',
        name: 'preview',
        meta: {
          requiresAuth: true
        },
        component: () => import('@/components/tab/icon/preview')
      }]
    },
    {
      path: '/search',
      name: 'search',
      meta: {
        requiresAuth: true
      },
      component: () => import('@/components/user/search')
    },
    {
      path: '/addUser',
      name: 'addUser',
      meta: {
        requiresAuth: true
      },
      component: () => import('@/components/user/addUser')
    },
    {
      path: '/verify',
      name: 'verify',
      meta: {
        requiresAuth: true
      },
      component: () => import('@/components/user/verify')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/components/404')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
