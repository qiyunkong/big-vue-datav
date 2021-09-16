import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/index'
//挂载Vuex
Vue.use(Vuex)
//创建VueX对象
const store = new Vuex.Store({
  state: {
    linedata: [],
    rolllistdate:[],
    dvainfo:{},
    AlarmClock:{}
  },
  mutations: {
    setLineData (state,payload) {
      const {id} = payload
      if(!JSON.stringify(state.AlarmClock) == "{}"){
        clearInterval (state.AlarmClock)
        state.AlarmClock = {};
      }else{
        api.cropsdata.cropsdataList({
          id,
          page:1,
          count:5,
        }).then((response)=>{
          const {data} = response;
          state.linedata= data.data
        })
      }
      state.AlarmClock =  setInterval(function(){
        api.cropsdata.cropsdataList({
          id,
          page:1,
          count:5,
        }).then((response)=>{
          const {data} = response;
          state.linedata = data.data
        })
      },1000*60)
    },
    setDvaInfo(state,payload){
     const {row} = payload
      state.dvainfo = {...row}
    }
  },
  actions: {
    setLineData (context,products) {
      context.commit('setLineData',products) 
    }
  }
})

export default store