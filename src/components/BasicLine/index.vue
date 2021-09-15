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
      }
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
        console.log("newData",newData) 
        console.log(this)
        const {cdata} = this
        console.log(cdata)
        newData.forEach(({sTMP,sHR,NN,KK,sEC})=>{
          cdata.seriesData[0].data.push(sTMP)
          cdata.seriesData[1].data.push(sHR)
          cdata.seriesData[2].data.push(NN)
          cdata.seriesData[3].data.push(KK)
          cdata.seriesData[4].data.push(sEC)
        })
        // this.cdata = {...cdata};
        // console.log(this.cdata);
      },
      immediate: true,
      deep: true,
    }
  }

}
</script>