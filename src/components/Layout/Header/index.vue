<template>
  <header id="layout-header">
    <dv-decoration-8 class="header-left-decoration" :color="['rgb(86,138,234)', 'rgb(50,74,154)']"/>
    <dv-decoration-5 class="header-center-decoration" :color="['rgb(86,138,234)', 'rgb(50,74,154)']"/>
    <dv-decoration-8 class="header-right-decoration" :reverse="true" :color="['rgb(86,138,234)', 'rgb(50,74,154)']" />
    <h1 class="center-title">大数据可视化平台</h1>
    <time class="center-time">{{date}}</time>
  </header>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data(){
    return {
      date:""
    }
  },
  mounted() {
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date =new Date().toJSON().split("T")[0]+" "+new Date().toTimeString().split(" ")[0]; // 修改数据date
    }, 1000)
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
     
    }
  }
}
</script>

<style lang="scss">
#layout-header {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  .header-center-decoration {
    width: 40%;
    height: 60px;
    margin-top: 30px;
  }
  .header-left-decoration, .header-right-decoration {
    width: 25%;
    height: 60px;
  }
  .center-title {
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
  }
  .center-time {
    position: absolute;
    font-size: .225rem;
    font-weight: bold;
    color:#fff;
    right: 12%;
    top: .675rem;
  }
}
</style>
