import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/index'
//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  state: {
    linedata: []
  },
  mutations: {
    increment (state,payload) {
      const {id} = payload
      api.cropsdata.cropsdataList({
        id,
      }).then((response)=>{
        const {data} = response;
        state.linedata= data.data
      })
    }
  },
  actions: {
    increment (context,products) {
      context.commit('increment',products) 
    }
  }
})

export default store