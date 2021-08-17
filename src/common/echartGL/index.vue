<template>
    <div :id="id" :class="className" :style="{height,width}" />
</template>

<script>
import 'echarts-gl'
import resizeMixins from '@/utils/resizeMixins'
export default {
  name: 'echartGL',
  mixins: [resizeMixins],
  props: {
    className: {
      type: String,
      default: 'chartGL'
    },
    id: {
      type: String,
      default: 'chartGL'
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
        // 设置true清空echart缓存
        this.chart.setOption(options, true)
      }
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      this.chart = this.$echarts.init(this.$el)
      this.chart.setOption(this.options, true)
    }
  }
}
</script>
