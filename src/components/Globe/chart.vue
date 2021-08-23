<template>
  <EchartGL
    :options='options'
    id='globe'
    :width='width'
    :height='height'
  >
  </EchartGL>
</template>

<script>
import EchartGL from '@/common/echartGL'
export default {
  components: {
    EchartGL
  },
  data () {
    return {
      options: {}
    }
  },
  props: {
    cdata: {
      type: Array,
      default: () => ([])
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
       default: '100%'
    }
  },
  watch: {
    cdata: {
      handler (newData) {
        this.options = {
          zoom: 100,
          tooltip: {
            show: false,
            trigger: 'item'
          },
          globe: {
            baseTexture: '/img/timg.jpg',
            globeRadius: 80, // 球面半径
            shading: 'color', // 背景色
            light: {
              main: {
                color: '#fff',
                intensity: 1,
                alpha: 40,
                beta: -30
              },
              ambient: {
                color: '#fff',
                intensity: 1
              }
            },
            viewControl: {
              alpha: 30,
              beta: 160,
              autoRotate: true,
              autoRotateAfterStill: 10,
              distance: 240
            },
            series: [{
              name: '世界贸易情况',
              type: 'lines3D',
              coordinateSystem: 'globe',
              effect: {
                show: true
              },
              blendMode: 'lighter',
              lineStyle: { // 飞线
                width: 2,
                color: '#3498db'
              },
              data:newData,
              silent: false
            }]
          }
        }
      }
    }

  }
}
</script>
