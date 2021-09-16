<template>
  <div id='globe-page'  class="com-page">
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
}
</style>
