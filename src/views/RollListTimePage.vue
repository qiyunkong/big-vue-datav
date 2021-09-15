<template>
  <div id='roll-list-page' class="com-page">
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
        header: ["日期", "土壤酸碱度"],
        data: [
          ["<time class='colorBlue'>2021-06-11 39:57</time>", "<span  class='colorBlue'>1.89PH</span>"],
          ["<time class='colorBlue'>2021-06-11 39:57</time>", "<span  class='colorBlue'>1.89PH</span>"],
          ["<time class='colorBlue'>2021-06-11 39:57</time>", "<span  class='colorBlue'>2.89PH</span>"],
          ["<time class='colorBlue'>2021-06-11 39:57</time>", "<span  class='colorBlue'>3.89PH</span>"],
          ["<time class='colorBlue'>2021-06-11 39:57</time>", "<span  class='colorBlue'>4.89PH</span>"],
          ["<time class='colorBlue'>2021-06-11 39:57</time>", "<span  class='colorBlue'>5.89PH</span>"],
          ["<time class='colorBlue'>2021-06-11 39:57</time>", "<sp an class='colorBlue'>6.89PH</span>"],
          ["<time class='colorBlue'>2021-06-11 39:57</time>", "<span  class='colorBlue'>7.89PH</span>"],
          ["<time class='colorBlue'>2021-06-11 39:57</time>", "<span  class='colorBlue'>8.89PH</span>"],
          ["<time class='colorBlue'>2021-06-11 39:57</time>", "<span  class='colorBlue'>9.89PH</span>"]
        ],
        rowNum: 4, //表格行数
        headerHeight: 35,
        headerBGC: "rgb(26,92,215,0.1)", //表头
        oddRowBGC: "rgb(0,0,0,0)", //奇数行
        evenRowBGC: "rgb(0,0,0,0)", //偶数行
        columnWidth: [200,200],
        align: ["left","right"]
      }
    };
  },
  
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
