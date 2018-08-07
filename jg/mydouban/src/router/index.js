import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import seek from '@/views/seek'
import movie from '@/views/movie'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/seek',
      name: 'seek',
      component: seek
    }, {
      path: '/movie',
      name: 'movie',
      component: movie
    }
  ]
})
