// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload'
import topNav from './common/topNav'
import Footer from './common/Footer'
import axios from 'axios'
Vue.prototype.$ajax = axios
Vue.prototype.psta = process.env.NODE_ENV == 'production' ? '' : '/proxyapi';
Vue.component('topNav', topNav)
Vue.component('Footer', Footer)
Vue.use(VueLazyload)
Vue.config.productionTip = false

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '404',
  loading: '正在加载',
  attempt: 1
})
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
