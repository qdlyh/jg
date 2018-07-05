import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const vuex = new Vuex.Store({
  //state全局状态变量
  state: {
    msgId:null,
    page:0,
    scrollTop:0,
    article: {}, //缓存文章详细信息
  },
  //mutations改变全局状态方法
  mutations: {
    scrollTop(state,scroll){
      state.scrollTop = scroll;
    },
     message(state,id){
        state.msgId = id;
     }
  }
})

export default vuex
