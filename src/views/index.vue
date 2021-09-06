<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <section v-else class="container">
        <layoutHeader/>
        <main></main>
      </section>
    </dv-full-screen-container>
  </div>
</template>

<script>
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
    layoutHeader
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