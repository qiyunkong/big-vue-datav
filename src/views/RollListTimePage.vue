<template>
  <div id='roll-list-page' class="com-page">
    <div class="bg-color-black">
      <h2 class="chart-title d-flex pt-2 pl-2">
        <span style="color:rgb(26,92,215)">
         <icon name="align-left"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">设备检测的土壤酸碱度</span>
          <dv-decoration-3 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" :color="['rgb(26,92,215)', 'rgb(4,20,82)']" />
        </div>
      </h2>
      <main class="chart-scroll-boarde">
         <dv-scroll-board :config="config" style="height:100%" />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        header: ["日期",'温度','湿度','土壤氮','土壤氢','导电率',"酸碱度"],
        data: [],
        rowNum: 4, //表格行数
        headerHeight: 45,
        headerBGC: "rgb(26,92,215,0.1)", //表头
        oddRowBGC: "rgb(0,0,0,0)", //奇数行
        evenRowBGC: "rgb(0,0,0,0)", //偶数行
        columnWidth: [75,65,65,65,65,65,65],
        waitTime:1000*15,
       
      }
    };
  },
  computed:{
    stateid(){
      return this.$store.state.id
    }
  },
  watch:{
    stateid:{
      handler(newData){
        const That = this;
        const {config} = this;
        // 清除定时定时器
        clearInterval (this.cleartime)
      

        this.$api.cropsdata.cropsdataList({
          id:newData,
          page:1,
          count:8,
        }).then((response)=>{
          const {data} = response;
          let _newData = data.data;
          config.data = []
          _newData.reverse()
          _newData.forEach(({create_time,sTMP,sHR,NN,KK,sEC,sPH})=>{
            create_time = create_time.split("T")[1]
            let row = [
            `<time class='colorBlue'>${create_time}</time>`, 
            `<time class='colorBlue'>${sTMP}</time>`, 
            `<time class='colorBlue'>${sHR}</time>`, 
            `<time class='colorBlue'>${NN}</time>`, 
            `<time class='colorBlue'>${KK}</time>`, 
            `<time class='colorBlue'>${sEC}</time>`, 
            `<span  class='colorBlue'>${sPH}</span>`
            ]
            config.data.push(row)
          })
          this.config= {...config}
        })
        this.cleartime = setInterval(function(){
          That.$api.cropsdata.cropsdataList({
            id:newData,
            page:1,
            count:5,
          }).then((response)=>{
            const {data} = response;
            let _newData = data.data;
            config.data = []
            _newData.reverse()
            _newData.forEach(({create_time,sTMP,sHR,NN,KK,sEC,sPH})=>{
              create_time = create_time.split("T")[1]
              let row = [
              `<time class='colorBlue'>${create_time}</time>`, 
              `<time class='colorBlue'>${sTMP}</time>`, 
              `<time class='colorBlue'>${sHR}</time>`, 
              `<time class='colorBlue'>${NN}</time>`, 
              `<time class='colorBlue'>${KK}</time>`, 
              `<time class='colorBlue'>${sEC}</time>`, 
              `<span  class='colorBlue'>${sPH}</span>`
              ]
              config.data.push(row)
            })
            // 截取长度
            // config.data = config.data.filter(item => item == 5); 
            That.config= {...config}
          })
        },1000*60)
      },
      immediate: true,
      deep: true, 
    }
  }

  
};
</script>

<style lang="scss">
#roll-list-page {
 padding:.125rem;
  .bg-color-black{
    display:flex;
    flex-direction: column;
    padding:.125rem;
    height:100%;
    .chart-scroll-boarde{
      padding:.025rem;
      flex:1;
      .colorBlue{
        color:rgb(40,140,240);
      }
    }
  }
}
</style>
