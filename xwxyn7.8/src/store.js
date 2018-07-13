import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const vuex = new Vuex.Store({
  //state全局状态变量
  state: {
    page:1,     //缓存页数
    replyPage:1,  //缓存回复页数
    replyTop:0, //记录回复列表高度
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
