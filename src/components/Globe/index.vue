<template>
 <div class="globe">
  <Chart :cdata="cdata"/>
 </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  components: {
    Chart
  },
  data () {
    return {
      cdata: []
    }
  },
  mounted () {
    // push数据
    this.cdata = [1]
  }
}
</script>
