// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import { XImg } from 'vux'
import Footer from '@/components/common/Footer'
import '../static/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.prototype.psta = process.env.NODE_ENV == 'production' ? '' : '/proxyapi';
FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
import { Tab, TabItem } from 'vux'
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('x-img', XImg)
Vue.component('Footer', Footer)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
