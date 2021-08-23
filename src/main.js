// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'echarts-gl'
import dataV from '@jiaminghi/data-view'
import * as echarts from 'echarts'

// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/chart-bar.js'
import 'vue-awesome/icons/chart-area.js'
import 'vue-awesome/icons/chart-pie.js'
import 'vue-awesome/icons/chart-line.js'
import 'vue-awesome/icons/align-left.js'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

// 引入全局css
import './assets/scss/style.scss';

Vue.use(dataV)
Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: (h) => h(App),
}).$mount('#app');
