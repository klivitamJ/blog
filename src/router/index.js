import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    // 游客模式路由
    {
      path: '/home',
      component: () => import('layout/TourModule'),
      children: [
        {
          path: '/',
          redirect: 'artical'
        },
        {
          path: 'album',
          name: 'album',
          component: () => import('layout/TourModule/child/PhotoPlay')
        },
        {
          path: 'artical',
          name: 'artical',
          component: () => import('layout/TourModule/child/Artical')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('layout/EditModule/login')
    },
    {
      path: '/createArtical',
      name: 'createArtical',
      component: () => import('layout/EditModule/ArticalList')
    }
  ]
})
