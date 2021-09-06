<template>
  <header id="layout-header">
    <dv-decoration-8 class="header-left-decoration" :color="['rgb(86,138,234)', 'rgb(50,74,154)']"/>
    <dv-decoration-5 class="header-center-decoration" :color="['rgb(86,138,234)', 'rgb(50,74,154)']"/>
    <dv-decoration-8 class="header-right-decoration" :reverse="true" :color="['rgb(86,138,234)', 'rgb(50,74,154)']" />
    <div class="center-title">大数据可视化平台</div>
  </header>
</template>

<script>
export default {
  // name: 'LayoutHeader'
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
}
</style>
