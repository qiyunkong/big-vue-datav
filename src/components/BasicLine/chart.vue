<template>
  <Echart :options="options" id="basicline" :width="width" :height="height" />
</template>

<script>
import Echart from "@/common/echart";
export default {
  data() {
    return {
      options: {},
    };
  },

  components: {
    Echart,
  },

  props: {
    cdata: {
      type: Object,
      default: () => ({}),
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
  },

  watch: {
    cdata: {
      handler(newData) {
        this.options = {
          grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          },
          yAxis: {
            type: "value",
            splitLine:{
              lineStyle:{
                color:"rgba(255,255,255,0.25)"
              }
            }
          },
          legend: {
            textStyle: {
              color: "#fff",
            },
            data: newData.xData,
          },
          series: newData.seriesData,
        };
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
