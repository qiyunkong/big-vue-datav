<template>
  <div class="com-container">
   <Chart :cdata='cdata' />
  </div>
</template>

<script>
import Chart from './chart.vue';
export default {
  data () {
    return {
      cdata: {
        xData:['温度','湿度','土壤氮','土壤氢','导电率'],
        xAxisData:[],
        seriesData: [
          {
            name: '温度', //sTMP
            type: 'line',
            stack: '总量',
            data: []
          },
          {
            name: '湿度', //sHR
            type: 'line',
            stack: '总量',
            data: []
          },
          {
            name: '土壤氮', //NN
            type: 'line',
            stack: '总量',
            data: []
          },
          {
            name: '土壤钾',//KK
            type: 'line',
            stack: '总量',
            data: []
          },
          {
            name: '导电率',//sEc
            type: 'line',
            stack: '总量',
            data: []
          }
        ]
      },
      startValue:0
    }
  },
  computed:{
    lineData(){
      return this.$store.state.linedata
    }
  },
  components: {
    Chart
  },
  watch:{
    lineData:{
       handler(newData) {
          const {cdata} = this;
          cdata.seriesData[0].data = []
          cdata.seriesData[1].data = []
          cdata.seriesData[2].data = []
          cdata.seriesData[3].data = []
          cdata.seriesData[4].data = []
          cdata.xAxisData = []
          newData.forEach(({sTMP,sHR,NN,KK,sEC,create_time})=>{
            cdata.seriesData[0].data.push(sTMP)
            cdata.seriesData[1].data.push(sHR)
            cdata.seriesData[2].data.push(NN)
            cdata.seriesData[3].data.push(KK)
            cdata.seriesData[4].data.push(sEC)
            cdata.xAxisData.push(create_time.split("T")[1])
        })
        console.log(1);
        this.cdata = {...cdata};
      },
      immediate: true,
      deep: true,
    }
  }

}
</script>