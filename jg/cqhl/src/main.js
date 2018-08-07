import 'amfe-flexible'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import '../static/mescroll.min.css'
import '../static/mescroll.m.js'
import loading from '@/components/common/loading'
import axios from 'axios'
Vue.prototype.$ajax = axios
Vue.prototype.psta = process.env.NODE_ENV == 'production' ? 'http://hotel.birds-resort.com/EIcon' : '/proxyapi';
import {
  Style,
  Toast,
} from 'cube-ui'

import App from './App'
import router from './router'
Vue.use(VueLazyload)
Vue.component('loading', loading)
// // basic
// Button,
// Loading,
// Tip,
// Toolbar,
// TabBar,
// TabPanels,
// // form
// Checkbox,
// CheckboxGroup,
// Radio,
// RadioGroup,
// Input,
// Textarea,
// Select,
// Switch,
// Rate,
// Validator,
// Upload,
// Form,
// // popup
// Popup,
// Toast,
// Picker,
// CascadePicker,
// DatePicker,
// TimePicker,
// SegmentPicker,
// Dialog,
// ActionSheet,
// Drawer,
// ImagePreview,
// // scroll
// Scroll,
// Slide,
// IndexList,
// Swipe,
// Sticky,
// ScrollNav,
// ScrollNavBar
// Vue.use(Button)
// Vue.use(Loading)
// Vue.use(Tip)
// Vue.use(Toolbar)
// Vue.use(TabBar)
// Vue.use(TabPanels)
// Vue.use(Checkbox)
// Vue.use(CheckboxGroup)
// Vue.use(Radio)
// Vue.use(RadioGroup)
// Vue.use(Input)
// Vue.use(Textarea)
// Vue.use(Select)
// Vue.use(Switch)
// Vue.use(Rate)
// Vue.use(Validator)
// Vue.use(Upload)
// Vue.use(Form)
// Vue.use(Popup)
Vue.use(Toast)
// Vue.use(Picker)
// Vue.use(CascadePicker)
// Vue.use(DatePicker)
// Vue.use(TimePicker)
// Vue.use(SegmentPicker)
// Vue.use(Dialog)
// Vue.use(ActionSheet)
// Vue.use(Drawer)
// Vue.use(ImagePreview)
// Vue.use(Scroll)
// Vue.use(Slide)
// Vue.use(IndexList)
// Vue.use(Swipe)
// Vue.use(Sticky)
// Vue.use(ScrollNav)
// Vue.use(ScrollNavBar)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

router.afterEach((to, from) => {
  function onBridgeReady() {
    WeixinJSBridge.call('hideOptionMenu');
  }

  if (typeof WeixinJSBridge == "undefined") {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
      document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
  } else {
    onBridgeReady();
  }
})

