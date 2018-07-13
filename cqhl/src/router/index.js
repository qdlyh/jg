import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import userType from '@/components/userType'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/userType',
      name: 'userType',
      component: userType
    }
  ]
})
