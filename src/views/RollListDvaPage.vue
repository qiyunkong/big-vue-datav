<template>
  <div id='roll-Dva-page' class="com-page">
    <div class="bg-color-black">
      <h2 class="chart-title d-flex pt-2 pl-2">
        <span style="color:rgb(26,92,215)">
         <icon name="align-left"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">所有设备目前状况</span>
          <dv-decoration-3 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" :color="['rgb(26,92,215)', 'rgb(4,20,82)']" />
        </div>
      </h2>
      <main class="chart-scroll-boarde">
         <dv-scroll-board :config="config" style="height:100%"  ref="scrollBoard" @click="getMethod"/>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        header: ["状态", "设备编号","设备id"],
        data: [],
        rowNum: 5, //表格行数
        headerHeight: 35,
        headerBGC: "rgb(26,92,215,0.1)", //表头
        oddRowBGC: "rgb(0,0,0,0)", //奇数行
        evenRowBGC: "rgb(0,0,0,0)", //偶数行
        columnWidth: [100,200,80],
        align: ["left","left","right"],
      }
    };
  },
  mounted(){
    this.cropsdeviceList();
  
  },
  methods:{
    // 获取全设备数据
    async cropsdeviceList(){
      let statusList = [
        "<span class='stateBlue'>正常运行</span>",
        "<span class='stateGreen'>暂未生产</span>",
        "<span class='stateYellow'>空闲设备</span>",
        "<span class='stateRed'>故障设备</span>"] 
      const response =  await this.$api.cropsdevice.cropsdeviceList({id:1,page:1,count:200,});
      const {data,code} =  response.data
      const {config} = this;
      if(code == 200){
        config.data = data.map(({status,devicecard,id})=>{
          return [statusList[status],devicecard,id]
        })
        this.config = {...config};
      }
      this.init(config.data[0][2],data[0])
      
    },
    getMethod({row}){
      this.$store.dispatch('setLineData',{
        id:row[2]
      })
      this.$store.commit('setDvaInfo',{
        row:{
          devicecard:row[1]
        }
      })
    },
    init(id,row){
      this.$store.dispatch('setLineData',{
        id:id
      })
      this.$store.commit('setDvaInfo',{
        row:row
      })
    }
  }

};
</script>

<style lang="scss">
#roll-Dva-page {
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
  .stateBlue{
    padding:0.05rem;
    border:1px solid rgb(36,159,245);
    color:rgb(36,159,245);
    font-size:0.2rem;
  }
  .stateGreen{
    padding:0.05rem;
    border:1px solid rgb(0,232,234);
    color:rgb(0,232,234);
    font-size:0.2rem;
  }
  .stateYellow{
    padding:0.05rem;
    border:1px solid rgb(250,200,88);
    color:rgb(250,200,88);
    font-size:0.2rem;
  }
  .stateRed{
    padding:0.05rem;
    border:1px solid rgb(227,77,78);
    color:rgb(227,77,78);
    font-size:0.2rem;
  }
}
</style>
