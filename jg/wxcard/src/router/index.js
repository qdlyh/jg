import Vue from 'vue'
import Router from 'vue-router'
import wx from 'weixin-js-sdk'
import myForm from '@/components/view/myForm'
import myCard from '@/components/view/myCard'
import cardBox from '@/components/view/cardBox'
import Error from '@/components/view/Error'
import youCard from '@/components/view/youCard'

Vue.use(Router)

const Foo1 = () => view('../cardBox')
const Foo2 = () => view('../youCard')
const Foo3 = () => view('../myCard')
const Foo4 = () => view('../myForm')

export default new Router({
  routes: [{
      path: '/myCard',
      name: 'myCard',
      component: myCard
    },
    {
      path: '/myCard',
      name: 'myCard',
      component: myCard
    },
    {
      path: '/myForm',
      name: 'myForm',
      component: myForm
    },
    {
      path: '/cardBox',
      name: 'cardBox',
      component: cardBox
    },
    {
      path: '/youCard',
      name: 'youCard',
      component: youCard
    },
    {
      path: '*',
      name: 'Error',
      component: Error,
    },
  ]
})
