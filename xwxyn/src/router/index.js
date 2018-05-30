import Vue from 'vue'
import Router from 'vue-router'
import user from '@/components/user'
import userType from '@/components/userType'
import message from '@/components/message'
import dialogue from '@/components/dialogue'
import expertUser from '@/components/expertUser'
import userTypeRedact from '@/components/userTypeRedact'
import index from '@/components/index/index'
import introduce from '@/components/index/introduce'
import userList from '@/components/index/userList'
import articleList from '@/components/index/articleList'
import article from '@/components/index/article'
import introduceForm from '@/components/index/introduceForm'
import yzList from '@/components/yizhen/yzList'
import yzArticle from '@/components/yizhen/yzArticle'
import expertAll from '@/components/expert/expertAll'
import expertList from '@/components/expert/expertList'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/userType',
      name: 'userType',
      component: userType
    },
    {
      path: '/userTypeRedact',
      name: 'userTypeRedact',
      component: userTypeRedact
    },
    {
      path: '/userList',
      name: 'userList',
      component: userList
    },
    {
      path: '/articleList',
      name: 'articleList',
      component: articleList
    },
    {
      path: '/article',
      name: 'article',
      component: article,
      children: [{
        path: '/article/message',
        component: message,
        children: [{
          path: '/article/message/dialogue',
          component: dialogue,
        }]
      }, ]
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: introduce
    },
    {
      path: '/introduceForm',
      name: 'introduceForm',
      component: introduceForm
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/yzList',
      name: 'yzList',
      component: yzList
    },
    {
      path: '/yzArticle',
      name: 'yzArticle',
      component: yzArticle
    },
    {
      path: '/expertUser',
      name: 'expertUser',
      component: expertUser
    },
    {
      path: '/expertAll',
      name: 'expertAll',
      component: expertAll
    },
    {
      path: '/expertList',
      name: 'expertList',
      component: expertList
    }
  ]
})
