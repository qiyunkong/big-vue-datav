// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'echarts-gl'
import dataV from '@jiaminghi/data-view'
import * as echarts from 'echarts'
import { HappyScroll } from 'vue-happy-scroll'
import api from './api/index';
import store from './store/index'

// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/chart-bar.js'
import 'vue-awesome/icons/chart-area.js'
import 'vue-awesome/icons/chart-pie.js'
import 'vue-awesome/icons/chart-line.js'
import 'vue-awesome/icons/align-left.js'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$api = api;

// 适配flex
import '@/common/js/flexible.js';
// 引入全局css
import './assets/scss/style.scss';
import 'vue-happy-scroll/docs/happy-scroll.css'

Vue.use(dataV)

// 自定义组件名
Vue.component('icon', Icon)
Vue.component('happy-scroll', HappyScroll)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: (h) => h(App),
}).$mount('#app');
