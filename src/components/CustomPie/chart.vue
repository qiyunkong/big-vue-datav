<template>
  <div>
    <Echart
      :options='options'
      id='doughnutDev'
      :width='width'
      :height='height'
    />
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      options: {}
    }
  },
  components: {
    Echart
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  watch: {
    cdata: {
      handler (newData) {
        this.options = {
          color: [
            'rgb(0,175,241)',
            'rgb(35,218,242)',
            'rgb(54,83,206)',
            'rgb(10,40,117)',
            'rgb(134,255,255)',
            'rgb(36,92,206)'
          ],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
            color: 'rgb(26,92,215)'
          },
          toolbox: {
            show: true
          },
          calculable: true,
          legend: {
            orient: 'horizontal',
            icon: 'circle',
            bottom: 0,
            x: 'center',
            data: newData.xData,
            textStyle: {
              color: 'rgb(158,229,250)'
            }
          },
          series: [
            {
              name: '通过率统计',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: true,
              center: ['50%', '40%'],
              data: newData.seriesData
            }
          ]
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
