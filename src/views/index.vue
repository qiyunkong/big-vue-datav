<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <section v-else class="container">
        <layoutHeader/>
        <layoutMain class="layout-main">
          <template v-slot:pie>
            <page-custom-pie/>
          </template>
          <template v-slot:gl>2</template>
          <template v-slot:sort>
            <pageRollList></pageRollList>
          </template>
          <template v-slot:dva>4</template>
          <template v-slot:data>
            <pageRollListTime/>
          </template>
          <template v-slot:line>
            <pageBasicLine/>
          </template>
        </layoutMain>
      </section>
    </dv-full-screen-container>
  </div>
</template>

<script>
import BasicLinePage from './BasicLinePage'
import CustomPiePage from './CustomPiePage'
import RollListDvaPage from './RollListDvaPage'
import RollListTimePage from './RollListTimePage'
import layoutMain from '@/components/Layout/Main'
import layoutHeader from '@/components/Layout/Header'


export default {
  // 数据声明
  data () {
    return {
      loading:true,
    }
  },

  // 组件引入
  components: {
    layoutMain,
    layoutHeader,
    pageCustomPie:CustomPiePage,
    pageRollList:RollListDvaPage,
    pageRollListTime:RollListTimePage,
    pageBasicLine:BasicLinePage
  },

  // 生命周期
  mounted () {
    this.cancelLoding();
  },

  // 方法定义
  methods: {
    cancelLoding () {
      // 模拟数据loading
      setTimeout(()=>{
        this.loading = false;
      },500)
    } 
  }


}
</script>
<style lang="scss">
@import '../assets/scss/index.scss';
</style>