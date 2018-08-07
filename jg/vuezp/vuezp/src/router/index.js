import Vue from 'vue'
import Router from 'vue-router'
import nav from '@/components/nav'
import myinfo from '@/components/myinfo/myinfo'
import invoice from '@/components/myinfo/invoice'
import findwork from '@/components/findwork/findwork'
import deliverlist from '@/components/findwork/deliverlist'
import companylist from '@/components/findwork/companylist'
import mydeliver from '@/components/findwork/mydeliver'
import Error from '@/components/Error'
Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/nav',
      name: 'nav',
      component: nav,
      meta: {
        title: '页面导航',
        keepAlive: false
      }
    },
    {
      path: '/myinfo',
      name: 'myinfo',
      component: myinfo,
      meta: {
        title: '个人简历',
        keepAlive: false
      }
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: invoice,
      meta: {
        title: '发票中心',
        keepAlive: true
      }
    },
    {
      path: '/findwork',
      name: 'findwork',
      component: findwork,
      meta: {
        title: '找工作',
        keepAlive: true
      }
    },
    {
      path: '/deliverlist',
      name: 'deliverlist',
      component: deliverlist,
      meta: {
        title: '我的投递',
        keepAlive: true
      }
    },
    {
      path: '/companylist:id',
      name: 'companylist',
      component: companylist,
      meta: {
        title: '公司详情',
        keepAlive: true
      }
    },
    {
      path: '/mydeliver:id',
      name: 'mydeliver',
      component: mydeliver,
      meta: {
        title: '已投递公司详情',
        keepAlive: true
      }
    },
    {
      path: '*',
      name: 'Error',
      component: Error,
      meta: {
        title: '页面发生错误',
        keepAlive: true
      }
    }
  ]
})
export default router;
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    /* 路由发生变化修改页面title */
    document.title = to.meta.title;
  }
  next();
});

