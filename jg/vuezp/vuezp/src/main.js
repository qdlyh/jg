// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import loading from "./common/loading"
import Dialog from "./common/Dialog"
Vue.prototype.$ajax = axios
// Vue.prototype.psta =  process.env.NODE_ENV=='production'? 'http://hxxing.nat300.top/mvc':'/proxyapi';
Vue.prototype.psta = process.env.NODE_ENV == 'production' ? 'http://huipin.birds-resort.com/mvc' : '/proxyapi';
Vue.config.productionTip = false
Vue.component('loading', loading)
Vue.component('Dialog', Dialog)
Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '加载失败',
  loading: '正在加载',
  attempt: 1,

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
