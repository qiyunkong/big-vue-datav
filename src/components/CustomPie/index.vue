<template>
  <div>
    <Chart :cdata='cdata' />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data () {
    return {
      cdata: {
        xData: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6'],
        seriesData: [
          {
            name: '1分',
            value: 100
          },
          {
            name: '2分',
            value: 200
          },
          {
            name: '3分',
            value: 200
          },
          {
            name: '4分',
            value: 100
          },
          {
            name: '5分',
            value: 100
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
