import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import introduce from '@/components/introduce'
import cooperation from '@/components/cooperation'
import form from '@/components/form'
import articleList from '@/components/articleList'
import article from '@/components/article'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    // {
    //   path: '/introduce',
    //   name: 'introduce',
    //   component: introduce
    // },
    // {
    //   path: '/cooperation',
    //   name: 'cooperation',
    //   component: cooperation
    // },
    {
      path: '/form',
      name: 'form',
      component: form
    }
    // {
    //   path: '/articleList',
    //   name: 'articleList',
    //   component: articleList
    // },
    // {
    //   path: '/article',
    //   name: 'article',
    //   component: article
    // }
  ]
})
