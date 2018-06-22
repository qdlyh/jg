// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import VueLazyload from 'vue-lazyload'
import '../static/mescroll.min.css'
import '../static/mescroll.m.js'
import Footer from '@/components/common/Footer'
import axios from 'axios'
Vue.prototype.$ajax = axios;
Vue.prototype.psta = process.env.NODE_ENV == 'production' ? '' : '/proxyapi';
FastClick.attach(document.body)
Vue.component('Footer', Footer)
Vue.use(VueLazyload)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

router.beforeEach((to, from, next) => {
  //MeScroll.prototype.hideTopBtn(); //MeScroll返回顶部按钮
  if (to.from) {
    console.log(to)
    alert('1')
  }
  next();
});
