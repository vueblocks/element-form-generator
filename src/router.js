import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/form-generator'
    },
    {
      path: '/form-generator',
      component: () => import('@/views/form-generator/index.vue')
    }
  ]
})
