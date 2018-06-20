import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: () =>
        import ('@/components/index/index'),
      meta: {
        title: '首页',
        keepAlive: true
      }
    },
    {
      //产品介绍
      path: '/introduce',
      name: 'introduce',
      component: () =>
        import ('@/components/index/introduce')
    },
    {
      //产品安装表
      path: '/introduceForm',
      name: 'introduceForm',
      component: () =>
        import ('@/components/index/introduceForm')
    },
    {
      //用户列表
      path: '/userList',
      name: 'userList',
      component: () =>
        import ('@/components/index/userList')
    },
    {
      //文章列表
      path: '/articleList',
      name: 'articleList',
      component: () =>
        import ('@/components/index/articleList'),
      meta: {
        title: '',
        keepAlive: true
      }
    },
    {
      //用户类型信息    
      path: '/userType',
      name: 'userType',
      component: () =>
        import ('@/components/userinfo/userType')
    },
    {
      //用户类型信息编辑
      path: '/userTypeForm',
      name: 'userTypeForm',
      component: () =>
        import ('@/components/userinfo/userTypeForm'),
      meta: {
        title: '',
        keepAlive: true
      }
    },
    {
      //我的提问和回答
      path: '/myIssue',
      name: 'myIssue',
      component: () =>
        import ('@/components/userinfo/myIssue')
    },
    {
      //我的关注
      path: '/myAttention',
      name: 'myAttention',
      component: () =>
        import ('@/components/userinfo/myAttention')
    },
    {
      //收藏和历史记录
      path: '/mySchistory',
      name: 'mySchistory',
      component: () =>
        import ('@/components/userinfo/mySchistory')
    },
    {
      //我的消息
      path: '/myMessage',
      name: 'myMessage',
      component: () =>
        import ('@/components/userinfo/myMessage')
    },
    {
      //收货地址
      path: '/myAddress',
      name: 'myAddress',
      component: () =>
        import ('@/components/userinfo/myAddress')
    },
    {
      //收货地址编辑
      path: '/myAddressForm',
      name: 'myAddressForm',
      component: () =>
        import ('@/components/userinfo/myAddressForm')
    },
    {
      //设置
      path: '/safety',
      name: 'safety',
      component: () =>
        import ('@/components/userinfo/safety')
    },
    {
      //手机验证
      path: '/myPhone',
      name: 'myPhone',
      component: () =>
        import ('@/components/userinfo/myPhone')
    },
    {
      //我的钱包
      path: '/myWallet',
      name: 'myWallet',
      component: () =>
        import ('@/components/money/myWallet')
    },
    {
      //充钱
      path: '/addition',
      name: 'addition',
      component: () =>
        import ('@/components/money/addition')
    },
    {
      //明细
      path: '/detail',
      name: 'detail',
      component: () =>
        import ('@/components/money/detail')
    },
    // {
    //   //安全设置
    //   path: '/safety',
    //   name: 'safety',
    //   component: () =>
    //     import ('@/components/money/safety')
    // },
    {
      //修改密码
      path: '/password',
      name: 'password',
      component: () =>
        import ('@/components/money/password')
    },
    {
      //入驻
      path: '/enterText',
      name: 'enterText',
      component: () =>
        import ('@/components/enter/enterText')
    },
    {
      //入驻申请表
      path: '/enterForm',
      name: 'enterForm',
      component: () =>
        import ('@/components/enter/enterForm')
    },
    {
      //入驻资料上传
      path: '/uploadFile',
      name: 'uploadFile',
      component: () =>
        import ('@/components/enter/uploadFile')
    },
    {
      //志愿者认证
      path: '/volunteer',
      name: 'volunteer',
      component: () =>
        import ('@/components/ac/volunteer')
    },
    {
      //企业认证
      path: '/enterprise',
      name: 'enterprise',
      component: () =>
        import ('@/components/ac/enterprise')
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () =>
        import ('@/components/index/article'),
      meta: {
        title: '',
        keepAlive: true
      }
    },
    {
      path: '/dialogue/:id',
      name: 'dialogue',
      component: () =>
        import ('@/components/dialogue'),
      meta: {
        title: '',
        keepAlive: true
      }
    },
    {
      path: '/message/:id',
      name: 'message',
      component: () =>
        import ('@/components/message'),
      meta: {
        title: '',
        keepAlive: true
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () =>
        import ('@/components/user')
    },
    {
      path: '/questions',
      name: 'questions',
      component: () =>
        import ('@/components/questions')
    },
    {
      //义诊列表
      path: '/yzList',
      name: 'yzList',
      component: () =>
        import ('@/components/yizhen/yzList')
    },
    {
      //义诊文章
      path: '/yzArticle',
      name: 'yzArticle',
      component: () =>
        import ('@/components/yizhen/yzArticle')
    },
    {
      //专家信息
      path: '/expertUser/:id',
      name: 'expertUser',
      component: () =>
        import ('@/components/expertUser'),
      meta: {
        title: '专家信息',
        keepAlive: true
      }
    },
    {
      //专家大众天地
      path: '/expertAll0',
      name: 'expertAll0',
      component: () =>
        import ('@/components/expert/expertAll0'),
      meta: {
        title: '专家列表',
        keepAlive: true
      }
    },
    {
      //专家大众天地
      path: '/expertAll1',
      name: 'expertAll1',
      component: () =>
        import ('@/components/expert/expertAll1'),
      meta: {
        title: '资讯专区',
        keepAlive: true
      }
    },
    {
      //专家大众天地
      path: '/expertAll2',
      name: 'expertAll2',
      component: () =>
        import ('@/components/expert/expertAll2'),
      meta: {
        title: '我的提问',
        keepAlive: true
      }
    },
    {
      //专家列表
      path: '/expertList',
      name: 'expertList',
      component: () =>
        import ('@/components/expert/expertList')
    }
  ]
})
export default router;
router.beforeEach((to, from, next) => {
  MeScroll.prototype.hideTopBtn(); //MeScroll返回顶部按钮
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
