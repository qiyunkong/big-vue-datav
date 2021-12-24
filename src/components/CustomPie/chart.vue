<template>
  <Echart :options="options" id="custompie" :width="width" :height="height" />
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
          animation: false,
          color: [
            "rgb(36,159,245)", // 正常
            "rgb(0,232,234)", // 暂未
            "rgb(250,200,88)", // 空闲
            "rgb(227,77,78)", // 故障
          ],
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : ({c}台)", //每个字母只能用一次
            color: "rgb(26,92,215)",
          },
          toolbox: {
            show: true,
          },
          calculable: true,
          legend: {
            orient: "vertical", // 排列方式 vertical 列  horizontal 行
            icon: "circle", // 图标类型
            bottom: 0, // 调整位置
            right: 0,
            top: 40,
            data: newData.xData, // 数据值
            textStyle: {
              color: "rgb(158,229,250)",
            },
          },
          series: [
            {
              name: "设备实时状态",
              type: "pie",
              radius: ["70%", "50%"],
              // 连接图形和文字线条
              labelLine: {
                //length 连接图形的线条
                length: 25,
                length2: 20,
              },
              avoidLabelOverlap: true,
              center: ["45%", "40%"],
              data: newData.seriesData,
            },
          ],
        };
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
