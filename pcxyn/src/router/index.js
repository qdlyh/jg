import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import introduce from '@/components/introduce'
import introduceApp from '@/components/introduceApp'
import cooperation from '@/components/cooperation'
import company from '@/components/company'
import survey from '@/components/survey'
import articleList from '@/components/articleList'
import article from '@/components/article'
import nurseForm from '@/components/nurseForm'
import serveForm from '@/components/serveForm'
Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: '华夏夕阳暖官网',
        keepAlive: true
      }
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: introduce,
      meta: {
        title: '下载中心Pc',
        keepAlive: false
      }
    },
    {
      path: '/introduceApp',
      name: 'introduceApp',
      component: introduceApp,
      meta: {
        title: '下载中心App',
        keepAlive: false
      }
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: cooperation,
      meta: {
        title: '合作申请',
        keepAlive: false
      }
    },
    {
      path: '/company',
      name: 'company',
      component: company,
      meta: {
        title: '公司简介',
        keepAlive: false
      }
    },
    {
      path: '/survey',
      name: 'survey',
      component: survey,
      meta: {
        title: '健康云详情',
        keepAlive: false
      }
    },
    {
      path: '/nurseForm',
      name: 'nurseForm',
      component: nurseForm,
      meta: {
        title: '护理培训',
        keepAlive: false
      }
    },
    {
      path: '/serveForm',
      name: 'serveForm',
      component: serveForm,
      meta: {
        title: '技术服务',
        keepAlive: false
      }
    },
    {
      path: '/articleList',
      name: 'articleList',
      component: articleList,
      meta: {
        title: '分类详情',
        keepAlive: false
      }
    },
    {
      path: '/article',
      name: 'article',
      component: article,
      meta: {
        title: '文章详情',
        keepAlive: true
      }
    }
  ]
})
export default router;
/* 页面不在最顶部时转跳页面，新页面的滚动条自动跳到最底层 */
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
