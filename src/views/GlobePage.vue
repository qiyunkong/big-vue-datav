<template>
  <div id='globe-page'  class="com-page echart-gl">
    <GLobe/>
  </div>
</template>

<script>
import GLobe from '@/components/Globe'
export default {
  components: {
    GLobe
  }
}
</script>



<style lang="scss">
#globe-page {
  width:100%;
  height:80%;
  &.echart-gl{
      position:relative;
      &::before {
        content:"";
        position:absolute;
        width: 100%;
        height:100%;
        top: 0;
        left: 0;
        z-index: -1;
        background-image:url("../assets/img/lbx.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        animation: rotate-bg 14s alternate infinite;
      }
      &::after {
        content:"";
        position:absolute;
        width: 100%;
        height:100%;
        top: 0;
        left: 0;
        z-index: -3;
        background-image:url("../assets/img/jt.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        animation: rotate-bg 15s reverse infinite;
      }
    }
    @keyframes rotate-bg {
      from {
        transform:rotate(0deg);
      }
      to {
        transform:rotate(360deg);
      }
    }
}
</style>
