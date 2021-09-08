<template>
  <div id='custom-line-page' class="com-page">
    <div class="bg-color-black">
      <h2 class="chart-title d-flex pt-2 pl-2">
        <span style="color:rgb(26,92,215)">
          <icon name="chart-pie"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">设备概况</span>
          <dv-decoration-3 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" :color="['rgb(26,92,215)', 'rgb(4,20,82)']" />
        </div>
      </h2>
      <main class="chart-line">
        <BasicLine />
      </main>
    </div>
  </div>
</template>

<script>
import BasicLine from '@/components/BasicLine'
export default {
  components: {
    BasicLine
  }
}
</script>

<style lang="scss">
  #custom-line-page{
    padding:.125rem;
    .bg-color-black{
      display:flex;
      flex-direction: column;
      padding:.125rem;
      height:100%;
      .chart-line{
        padding:.025rem;
        flex:1;
      }
    }
  }
</style>