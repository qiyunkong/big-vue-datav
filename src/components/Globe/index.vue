<template>
 <div class="com-container">
  <Chart :cdata="cdata"/>
 </div>
</template>


<script>
import Chart from './chart.vue';
export default {
  data(){
    return {
      cdata: [],
    }
  },
  components: {
    Chart,
  },
  mounted () {
    let data = [];
    // 随机数据 i控制线数量
    for (let i = 0; i < 100; i++) {
      data = data.concat(this.rodamData());
    }
    //push数据
    this.cdata = data
  },
  methods:{
    //随机数
    rodamData:function () {
        //let name = '随机数据' + Math.random().toFixed(5) * 100000;
        // 模拟数据，构造飞线的起始经纬度
        let longitude = 116.2;
        let latitude = 39.56;
        let longitude2 = Math.random() * 360 - 180;
        let latitude2 = Math.random() * 180 - 90;
        return {
          coords: [
            [longitude, latitude],
            [longitude2, latitude2],
          ],
          value: (Math.random() * 3000).toFixed(2),
        };
    },
  }
}
</script>

<style lang="scss">
  // .an-scale{
  //   animation: scale-bg 14s alternate infinite;
  // }
  // @keyframes scale-bg {
  //   from {
  //     transform: scale(0.5,0.5);
  //   }
  //   to {
  //     transform: scale(1.0,1.0);
  //   }
  // }
</style>
