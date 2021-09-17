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
        xData:['温度','湿度','土壤氮','土壤钾','导电率'],
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
      cleartime:{}
    }
  },
  computed:{
    stateid(){
      console.log( "this.$store.state.id",this.$store.state.id)
      return this.$store.state.id
    }
  },
  components: {
    Chart
  },
  
  watch:{
    stateid:{
       handler(newData) {
        clearInterval (this.cleartime)
        const That = this;
        this.$api.cropsdata.cropsdataList({
          id:newData,
          page:1,
          count:5,
        }).then((response)=>{
          const {data} = response;
          let _newData = data.data;
          const {cdata} = this;
          cdata.seriesData[0].data = []
          cdata.seriesData[1].data = []
          cdata.seriesData[2].data = []
          cdata.seriesData[3].data = []
          cdata.seriesData[4].data = []
          cdata.xAxisData = []
          
          _newData.reverse()
          _newData.forEach(({sTMP,sHR,NN,KK,sEC,create_time})=>{
            cdata.seriesData[0].data.push(sTMP)
            cdata.seriesData[1].data.push(sHR)
            cdata.seriesData[2].data.push(NN)
            cdata.seriesData[3].data.push(KK)
            cdata.seriesData[4].data.push(sEC)
            cdata.xAxisData.push(create_time.split("T")[1])
          })
          this.cdata = {...cdata};

        })
        this.cleartime = setInterval(function(){
         That.$api.cropsdata.cropsdataList({
          id:newData,
          page:1,
          count:5,
        }).then((response)=>{
          const {data} = response;
          let _newData = data.data;
          const {cdata} = That;
          cdata.seriesData[0].data = []
          cdata.seriesData[1].data = []
          cdata.seriesData[2].data = []
          cdata.seriesData[3].data = []
          cdata.seriesData[4].data = []
          cdata.xAxisData = []
          
          _newData.reverse()
          _newData.forEach(({sTMP,sHR,NN,KK,sEC,create_time})=>{
            cdata.seriesData[0].data.push(sTMP)
            cdata.seriesData[1].data.push(sHR)
            cdata.seriesData[2].data.push(NN)
            cdata.seriesData[3].data.push(KK)
            cdata.seriesData[4].data.push(sEC)
            cdata.xAxisData.push(create_time.split("T")[1])
          })
          That.cdata = {...cdata};

        })
        },1000*60)

      },
      immediate: true,
      deep: true,
    }
  }

}
</script>