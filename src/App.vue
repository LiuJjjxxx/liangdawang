<template>
  <div id="app">
      <div class="hearder"><span>一</span>综合信息监控平台</div>
    <div class="con">
        <div class="left" style="padding-right:30px">
          <div class="left-one bg">
            <div class="header">故障问题汇总</div>
            <wancount>  </wancount>
            <span class="border row1"></span>
            <span class="border row2"></span>
            <span class="border col1"></span>
            <span class="border col2"></span>
          </div>
          <h2 style="color:white;padding-left:15px;padding-top:15px">资产信息</h2>
          <div class="left-two bg">
            <div class="all-event">
                <box :name="name[0]" :color="color[0]"></box>
                <box :name="name[1]" :color="color[1]"></box>
                <box :name="name[2]" :color="color[2]"></box>
                <box :name="name[3]" :color="color[3]"></box>
                <box :name="name[4]" :color="color[4]"></box>
            </div>
            <span class="border row1"></span>
            <span class="border row2"></span>
            <span class="border col1"></span>
            <span class="border col2"></span>
          </div>
        </div>
        <div class="center">
        <!-- <topo></topo> -->

        </div>
        <div class="right" style="padding-left:30px">
          <h2 style="color:white;margin:0 0 10px 0">故障信息分类</h2>
          <div class="right-one bg">
            <v-pie></v-pie>
            <span class="border row1"></span>
            <span class="border row2"></span>
            <span class="border col1"></span>
            <span class="border col2"></span>
          </div>
          <h2 style="color:white;margin-top:20px">故障信息等级</h2>
          <div class="right-two bg">
          <v-leave></v-leave>
            <span class="border row1"></span>
            <span class="border row2"></span>
            <span class="border col1"></span>
            <span class="border col2"></span>
          </div>
        </div>
    </div>
          <h2 style="color:white;padding-left:15px;margin:0">故障信息</h2>
    <div class="buttom">
        <div class="buttom-left bg">
          <fault></fault>
          <span class="border row1"></span>
            <span class="border row2"></span>
            <span class="border col1"></span>
            <span class="border col2"></span>
        </div>
        <div class="buttom-center bg">
          <h2 style="color:white;position:absolute;top:-72px">流量趋势图</h2>
            <flow></flow>
          <span class="border row1"></span>
            <span class="border row2"></span>
            <span class="border col1"></span>
            <span class="border col2"></span>
        </div>
        <div class="buttom-right bg ">
          <h2 style="color:white;position:absolute;top:-72px">IP-TOP-问题</h2>        
          <ipTop></ipTop>
          <span class="border row1"></span>
            <span class="border row2"></span>
            <span class="border col1"></span>
            <span class="border col2"></span>
        </div>

    </div>
  </div>
</template>

<script>
import wancount from '@/components/WarnCount'
import box from '@/components/Box'
import fault from '@/components/fault'
import flow from '@/components/Flow'
import faultInformation from '@/components/FaultInformation'
import faultInLeave from '@/components/FaultInLeave'
import ipTop from '@/components/IpTop'
import topo from '@/components/Topo'







export default {
  name: 'App',
  data(){
    return{
      name:['光纤交换','堡垒机','IDS','A10','交换机'],
      color:['#993947','#00468c','#9d704d','#554641','#117372','#4b589e','#7f167b','#75700b','#75700b','#528f07'],
    }
  },
  components:{
    wancount,
    box,
    fault,
    flow,
    'v-pie':faultInformation,
    'v-leave':faultInLeave,
    ipTop,
    topo,
  },
  methods:{
    


  }
}
</script>

<style scoped>
.bg{
  background: rgba(35, 19, 179, 0.075)
}
#app{
  margin: 10px
}
.hearder::before{
  content: '粮达网';
  color: orange;
}
.all-event{
  padding-top: 10px;
  flex-flow:row wrap;
  display: flex;
  width: 100%;
  height: 100%;
}
.hearder{
  font-size: 30px;
  color: white;
  text-align: center;
  height: 70px;
  padding-top:10px 
}
.con{
  width: 100%;
  display: flex
}
.left{
  margin: auto;
  flex: 2.5;
  width: 100%;
  
}
.right{
  flex: 2;
  width: 100%;
}
.center{
  flex: 5.5;
  width: 100%;
  height: 600px;
  /* background: yellow */
}
.left-one{
  width: 100%;
  height: 200px;
  margin-bottom: 10%;
}
.left-two{
  width: 100%;
  height: 200px;
}
.right-one{
  width: 100%;
  height: 270px;
}
.right-two{
  width: 100%;
  height: 220px;
}
.buttom{
  margin-top: 10px;
  padding-top: 20px;
  display: flex;
  width: 100%;
  height: 300px;

}
.buttom-left{
  flex: 3;
  width: 100%;
  margin-right: 20px
}
.buttom-center{
  flex: 5;
  width: 100%;
}
.buttom-right{
  margin-left: 20px;
  flex: 2;
  width: 100%;
}
.border{position:absolute;padding:15px;border-style: solid;border-color: #5171ac; animation: mycolor 3s infinite alternate}
.row1{border-width: 2px 0 0 2px;top:-5px;left:-5px;}
.row2{border-width: 2px 2px 0 0;top:-5px;right:-5px;}
.col1{border-width: 0 0 2px 2px;bottom:-5px;left:-5px;}
.col2{border-width: 0 2px 2px 0;bottom:-5px;right:-5px;}
@keyframes mycolor {
  0%{
    border-color: rgb(7, 7, 117)
  }
  100%{
    border-color: rgb(139, 139, 165)
  }
}

div{
  position:relative;
}
</style>
