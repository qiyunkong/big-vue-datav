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
         <dv-scroll-board :config="config" style="height:100%"  />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        header: ["数据总和", "数据比例"],
        data: [
          ["10", "<span  class='colorYellow'>↑75%</span>"],
          ["20", "<span  class='colorRed'>↓33%</span>"],
          ["60", "<span  class='colorGrass'>↑100%</span>"],
          ["60", "<span  class='colorGrass'>↑94%</span>"],
          ["60", "<span  class='colorGrass'>↑95%</span>"],
          ["20", "<span  class='colorGrass'>↑63%</span>"],
          ["40", "<sp an  class='colorGrass'>↑84%</span>"],
          ["30", "<span  class='colorRed'>↓46%</span>"],
          ["20", "<span  class='colorRed'>↓13%</span>"],
          ["100", "<span  class='colorGrass'>↑76%</span>"]
        ],
        rowNum: 7, //表格行数
        headerHeight: 35,
        headerBGC: "rgb(26,92,215,0.1)", //表头
        oddRowBGC: "rgb(17,55,228,0.15)", //奇数行
        evenRowBGC: "rgb(26,92,215,0.35)", //偶数行
        index: true,
        columnWidth: [50],
        align: ["center"]
      }
    };
  },

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
