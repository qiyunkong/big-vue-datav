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
  },
  created(){
    this.cropsdevicePie();

  },
  methods:{
    // 获取全设备数据
    async cropsdevicePie(){
      const {cdata} = this;
      const response =  await this.$api.cropsdevice.cropsdevicePie({id:1});
      const {online,stanby,fault,offline} = response.data.data;
      cdata.seriesData[0].value = online
      cdata.seriesData[1].value = stanby
      cdata.seriesData[2].value = fault
      cdata.seriesData[3].value = offline
      this.cdata = {...cdata}
      
    },

  }
}
</script>


