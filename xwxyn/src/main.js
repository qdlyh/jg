// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import VueLazyload from 'vue-lazyload'
import Footer from '@/components/common/Footer'
import '../static/mescroll.min.css'
import '../static/mescroll.m.js'
import axios from 'axios'
Vue.prototype.$ajax = axios;
Vue.prototype.psta = process.env.NODE_ENV == 'production' ? '' : '/proxyapi';
FastClick.attach(document.body)
Vue.component('Footer', Footer)
Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '加载失败',
  loading: '正在加载',
  attempt: 1,

})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
