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
import 'echarts-gl';
import jsondata from './data.json'
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
          zoom:100,
          tooltip: {
            show:false,
            trigger: 'item',
          },
          grid:{
            top: '0', // 与容器顶部的距离
          },
          globe: {
            baseTexture: '/img/timg.jpg',
            globeRadius: 70, // 球面半径
            //environment: '#fff', //背景色
            shading: 'color',
            light: {
              // 光照阴影
              main: {
                color: '#fff', // 光照颜色
                intensity: 1, // 光照强度
                alpha: 40,
                beta: -30,
              },
              ambient: {
                color: '#fff',
                intensity: 1,
              },
            },
            viewControl: {
              alpha: 30,
              beta: 160,
              autoRotate: true, // 开启自动旋转
              autoRotateAfterStill: 10,
              distance: 240,
            },
          },
          series:[{
            name: '世界贸易情况',
            type: 'lines3D',
            coordinateSystem: 'globe',
            effect: {
              show: true,
            },
            blendMode: 'lighter',
            lineStyle: { //飞线
              width: 2,
              color:"#3498db",
            },
            data:newData,
            silent: false,
          }]
        }   
      },
      immediate: true,
      deep: true
    }

  },
   methods:{
    baseTextureInIt:function () {
      let $echarts =  {...this.$echarts}
      $echarts.registerMap('world', jsondata);
      let canvas = document.createElement('canvas');
      let baseTexture = $echarts.init(canvas, null, {
        width: 4096,
        height: 2048,
      });
      baseTexture.setOption({
        geo: {
          type: 'map',
          map: 'world',
          left:0,
          top: 0,
          right: 0,
          bottom: 0,
          boundingCoords: [
            [-180, 90],
            [180, -90],
          ],
          roam: false,
          itemStyle: {
            normal: {
             //面积颜色
              areaColor: 'rgb(26,92,215)',
              borderColor: '#eee',
            },
            emphasis: {
              areaColor: '#ffff',
            },
          },
          label: {
            normal: {
              fontSize: 20,
              show: false,
              textStyle: {
                color: 'red',
              },
            },
            emphasis: {
              fontSize: 30,
              show: true,
              textStyle: {
                color: 'yellow',
              },
            },
          },
        }
      });
     return  baseTexture
    }
  }
}
</script>
