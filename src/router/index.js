import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/rolllistpage',
      name: 'rolllistpage',
      component: () => import('../views/RollListPage.vue')
    },
    {
      path: '/customPiePage',
      name: 'customPiePage',
      component: () => import('../views/CustomPiePage.vue')
    },
    {
      path: '/globePage',
      name: 'globePage',
      component: () => import('../views/GlobePage.vue')
    },
    {
      path:'/',
      name:'index',
      component:() => import('../views/index.vue')
    }
  ]
})
