import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import userType from '@/components/userType'
import userList from '@/components/userList'
import moneyList from '@/components/moneyList'
import integral from '@/components/integral'
import shareUser from '@/components/shareUser'
import deal from '@/components/deal'
import dealOut from '@/components/dealOut'
import makeName from '@/components/makeName'
import member from '@/components/member'
import openImg from '@/components/openImg'
Vue.use(Router)
Router.prototype.go = function () {
  this.isBack = true
  window.history.go(-1)
}
export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: '',
        keepAlive: false,
      }
    },
    {
      //页面404返回首页
      path: '*',
      redirect: '/'
    },
    {
      path: '/userType',
      name: 'userType',
      component: userType,
      meta: {
        title: '',
        keepAlive: true
      }
    },
    {
      path: '/userList',
      name: 'userList',
      component: userList,
      meta: {
        title: '',
        keepAlive: false,
      }
    },
    {
      path: '/moneyList',
      name: 'moneyList',
      component: moneyList,
      meta: {
        title: '',
        keepAlive: false,
      }
    },
    {
      path: '/integral',
      name: 'integral',
      component: integral,
      meta: {
        title: '',
        keepAlive: false,
      }
    },
    {
      path: '/shareUser',
      name: 'shareUser',
      component: shareUser,
      meta: {
        title: '',
        keepAlive: false
      }
    },
    {
      path: '/deal',
      name: 'deal',
      component: deal,
      meta: {
        title: '',
        keepAlive: false,
      }
    },
    {
      path: '/dealOut',
      name: 'dealOut',
      component: dealOut,
      meta: {
        title: '',
        keepAlive: false,
      }
    },
    {
      path: '/makeName',
      name: 'makeName',
      component: makeName,
      meta: {
        title: '',
        keepAlive: false,
      }
    },
    {
      path: '/member',
      name: 'member',
      component: member,
      meta: {
        title: '',
        keepAlive: true,
      }
    },
    {
      path: '/openImg',
      name: 'openImg',
      component: openImg,
      meta: {
        title: '',
        keepAlive: true,
      }
    }
  ]
})
