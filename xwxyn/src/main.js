// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import store from './store'
import App from './App'
import VueLazyload from 'vue-lazyload'
import '../static/mescroll.min.css'
import '../static/mescroll.m.js'
import loading from '@/components/common/loading'
import axios from 'axios'
Vue.prototype.$ajax = axios;
Vue.prototype.psta = process.env.NODE_ENV == 'production' ? '' : '/proxyapi';
FastClick.attach(document.body)
Vue.component('loading', loading)
Vue.use(VueLazyload)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
// console.log(store.state.scrollTop)

// router.beforeEach((to, from, next) => {
//   if (to.meta.keepAlive) {
//     let dom = document.querySelector('#mescroll'); //找到滚动条主体内容
//     dom.scrollTop = store.state.scrollTop;
//   }
// });
