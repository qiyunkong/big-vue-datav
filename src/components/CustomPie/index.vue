<template>
  <div class="com-container">
    <Chart :cdata='cdata' />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data () {
    return {
      cdata: {
        xData: ['正常运行', '暂未生产', '空闲设配', '故障设备'],
        seriesData: [
          {
            name: '正常运行',
            value: 50
          },
          {
            name: '暂未生产',
            value: 20
          },
          {
            name: '空闲设配',
            value: 10
          },
          {
            name: '故障设备',
            value: 30
          }
        ]
      }
    }
  },
  components: {
    Chart
  }
}
</script>


