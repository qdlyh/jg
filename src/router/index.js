import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import introduce from '@/components/introduce'
import cooperation from '@/components/cooperation'
import survey from '@/components/survey'
import articleList from '@/components/articleList'
import article from '@/components/article'
import nurseForm from '@/components/nurseForm'
import serveForm from '@/components/serveForm'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: introduce
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: cooperation
    },
    {
      path: '/survey',
      name: 'survey',
      component: survey
    },
    {
      path: '/nurseForm',
      name: 'nurseForm',
      component: nurseForm
    },
    {
      path: '/serveForm',
      name: 'serveForm',
      component: serveForm
    },
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
