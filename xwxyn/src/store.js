import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const vuex = new Vuex.Store({
  //state全局状态变量
  state: {
    //page:1,     //缓存页数
    //replyPage:1,  //缓存回复页数
    listId: null,  //标记选项卡
    listSize:0,  //有tab功能的文章/或单页列表，缓存页请求数量
    itemTop: 0, //文章，用户类列表高度
    replyTop: 0, //记录回复列表高度
    msgTop: 0, //留言列表高度
    msgData: {}, //缓存留言信息
    replyData:{},//缓存回复信息
  },
  //mutations改变全局状态方法
  mutations: {
    listId(state, id) {
      state.listId = id;
      //console.log(state.listId)
      state.listId = sessionStorage.setItem('listId', state.listId);
    }
  }
})
export default vuex
