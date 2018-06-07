import Vue from 'vue'
import Router from 'vue-router'
import user from '@/components/user'
import message from '@/components/message'
import dialogue from '@/components/dialogue'
import article from '@/components/index/article'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: () =>
        import ('@/components/index/index')
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
        import ('@/components/index/articleList')
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
        import ('@/components/userinfo/userTypeForm')
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
    {
      //安全设置
      path: '/safety',
      name: 'safety',
      component: () =>
        import ('@/components/money/safety')
    },
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
      path: '/article',
      name: 'article',
      component: () =>
        import ('@/components/index/article')
    },
    {
      path: '/dialogue',
      name: 'dialogue',
      component: dialogue
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/user',
      name: 'user',
      component: user
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
      path: '/expertUser',
      name: 'expertUser',
      component: () =>
        import ('@/components/expertUser')
    },
    {
      //专家大众天地
      path: '/expertAll',
      name: 'expertAll',
      component: () =>
        import ('@/components/expert/expertAll')
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
