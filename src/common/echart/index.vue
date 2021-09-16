<template>
  <div :id='id' :class='className' :style='{ height: height, width: width }' ></div>
</template>

<script>
import resizeMixins from '@/utils/resizeMixins'
export default {
  name: 'echart',
  mixins: [resizeMixins],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    options: {
      handler (options) {
        this.chart.clear()
        this.chart.setOption(options,true)
      }
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      // 初始化echart
      this.chart = this.$echarts.init(this.$el)
      this.chart.setOption(this.options, true)
    }
  }
}
</script>

<style lang="scss" scoped>
  .chart{
    height:100%;
    width:100%;
  }
</style>
