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
    this.cropsdeviceList();
    this.cropsdatainfo();
  },
  methods:{
    // 获取全设备数据
    async cropsdeviceList(){
      // let statusList = ["正常运行","故障设备","空闲设备","暂未生产"] 
      // const response =  await this.$api.cropsdevice.cropsdeviceList({id:1});
      
      
    },
    async cropsdatainfo(){
      const response = await this.$api.cropsdata.cropsdataList({id:1})
      console.log(response)
    }
  }
}
</script>


