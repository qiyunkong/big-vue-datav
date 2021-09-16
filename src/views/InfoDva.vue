<template>
  <div id="infoDva">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:rgb(26,92,215)">
          <icon name="chart-bar"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">设备信息</span>
            <dv-decoration-3 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" :color="['rgb(26,92,215)', 'rgb(4,20,82)']" />
        </div>
      </div>
      <div class="d-flex jc-center">
        <div class="pic">	</div>
				<div class="list">
					<ul>
						<li>设备名称：{{dvainfo.devicecard}}</li>
						<li>SN：{{dvainfo.devicecard}}</li>
						<li>服务器IP：223.12.98.26</li>
						<li>服务器端口：6777</li>
					</ul>
					<ul>
						<li>
							<p>采集频率</p>
							<p>1分钟</p>
						</li>
						<li>
							<p>上传频率</p>
							<p>1分钟</p>
							</li>
						<li><p>电压</p><p>5V</p></li>
						<li><p>信号强度</p><p>24</p></li>
					</ul>
				</div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		data(){
			return {
				dvainfo:{}
			}
		},
		computed:{
			info(){
				return this.$store.state.dvainfo
			}
		},
		watch:{
    info:{
     handler(newData){
			console.log(newData)
			this.dvainfo = {...newData}
     } 
    }
  }
	}
</script>

<style lang="scss">
#infoDva {
  padding: 0.2rem;
  height: 3.75rem;
  min-width: 10rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 3.35rem;
    border-radius: 0.125rem;
		.pic {
			flex:1;
			height:2.9rem;
			background-image:url("/img/college.png");
			background-position: 47% -132%;
			background-size:100%;
			background-repeat: no-repeat;
		}
		.list{
			flex:3;
			height:2.9rem;
			// background-color:red;
			&>ul{
				&:nth-child(1){
					display:grid;
					grid-template-columns:1fr 1fr;
					grid-template-rows:1fr 1fr;
					font-size:.2rem;
					li{
						padding:.125rem .125rem;
					}
				}
				&:nth-child(2){
					margin-top:.625rem;
					display:grid;
					grid-template-columns:1fr 1fr 1fr 1fr;
					li{
						padding:.0625rem;
						text-align:center;
						margin:0 .125rem;
						font-size:.2rem;
						border:1px solid rgb(101,134,236);
						p{
							padding:.0625rem 0;
						}
					}
				}
			}
		}
  }
  .text {
    color: #c3cbde;
  }
}
</style>
