<template>
  <div id='roll-statistics-page' class="com-page">
    <div class="bg-color-black">
      <h2 class="chart-title d-flex pt-2 pl-2">
        <span style="color:rgb(26,92,215)">
         <icon name="align-left"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">设备数据排行榜</span>
          <dv-decoration-3 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" :color="['rgb(26,92,215)', 'rgb(4,20,82)']" />
        </div>
      </h2>
      <main class="chart-scroll-boarde">
         <dv-scroll-board :config="config" style="height:100%"  ref="scrollStatistics" />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        header: ["设备id", "数据总和","数据比例"],
        data: [],
        rowNum: 7, //表格行数
        headerHeight: 35,
        headerBGC: "rgb(26,92,215,0.1)", //表头
        oddRowBGC: "rgb(17,55,228,0.15)", //奇数行
        evenRowBGC: "rgb(26,92,215,0.35)", //偶数行
        // index: true,
        columnWidth: [100,200,100],
        align: ["center","center","right"],
        waitTime:1000*30,
      },
      index:0
    };
  },
 mounted(){
    this.cropsdeviceTime();
    let That = this;
    setInterval(function(){
      That.cropsdeviceTime()
    },1000*60*40)
  },
  methods:{
    // 获取全设备数据
    async cropsdeviceTime(){
      try{
        const response =  await this.$api.cropsdevice.cropsdeviceTime();
        const {data,code} =  response.data
        const {config} = this;
        if(config.data.lenght==8){
          config.data = []
        }
        if(code == 200 && data.length != 0){
          data.forEach(({id, count, percent})=>{
            config.data.push([id,count,percent+"%"])
          })
          this.config = {...config}
        }else{
          let index = 0;
          while(index < 3){
            index++;
            config.data.push([index,Number.parseInt(index*100*Math.random()*50),Number.parseInt(index*Math.random()*10)*5+"%"])
          }
          console.log(config.data)
          this.config = {...config}

        }
      }catch(err){
        console.log(err)
      }

    }
  }

};
</script>

<style lang="scss">
#roll-statistics-page {
 padding:.125rem;
  .bg-color-black{
    display:flex;
    flex-direction: column;
    padding:.125rem;
    height:100%;
    .chart-scroll-boarde{
      padding:.025rem;
      flex:1;
    }
  }
}
</style>
