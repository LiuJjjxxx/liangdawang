<template>
  <div id="app">
    <div class="hearder">
      <img class="logo"
           src="../src/assets/zllogo.png">
      <span>一</span>IT基础架构监控大屏{{$store.state.msg}}
    </div>
    <line_pc style="position:absolute;z-index: 100;margin-top: 10px;"></line_pc>
    <div class="con">
      <div class="left"
           style="padding-right:20px">
        <div class="left-one bg">
          <div class="header">服务器状态</div>
          <ServerState> </ServerState>
          <!-- <LianTongLine></LianTongLine> -->
        </div>
        <div class="left-two bg">
          <h2 style="text-align:center;color:white;padding-left:20px;margin: 0px;">网络设备状态</h2>
          <DevicesState></DevicesState>
        </div>
      </div>
      <div class="center">
        <topo></topo>
      </div>
      <div class="right"
           style="padding-left:30px">
        <div class="right-one bg">
          <DianXinLine></DianXinLine>
        </div>
        <div class="right-two bg">
          <div class="header">故障趋势图</div>
          <v-pie></v-pie>
        </div>
      </div>
    </div>
    <div class="buttom">
      <div class="buttom-left bg">
        <div class="header">业务系统状态</div>
        <SystemState></SystemState>
      </div>
      <div class="buttom-right bg ">
        <Fault></Fault>
      </div>
      <div class="buttom-right2 bg ">
        <Cpu></Cpu>
      </div>
    </div>
  </div>
</template>

<script>
import ServerState from '@/components/ServerState'
import LianTongLine from '@/components/LianTongLine'
import SystemState from '@/components/SystemState'
import flow from '@/components/Flow'
import faultTime from '@/components/FaultTime'
import DevicesState from '@/components/DevicesState'
import DianXinLine from '@/components/DianXinLine'
import topo from '@/components/Topo'
import line_pc from '@/components/Line'
import Cpu from '@/components/Cpu'
import Memory from '@/components/Memory'
import FalutState from '@/components/FalutState'
import Fault from '@/components/Fault'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    ServerState,
    LianTongLine,
    SystemState,
    // flow,
    'v-pie': faultTime,
    DevicesState,
    DianXinLine,
    topo,
    line_pc,
    Cpu,
    // Memory,
    FalutState,
    Fault
  },
  mounted() {
    this.$http.login().then(data => {
      console.log(data)
    })
  }
}
</script>

<style scoped>
.logo {
  position: absolute;
  left: 480px;
  width: 80px;
  top: -10px;
}
.bg {
  /* background: #001f40; */
  background: #0e1533;
}
#app {
  margin: 10px;
}
.hearder::before {
  content: '中国医学科学院肿瘤医院深圳医院 ';
  color: orange;
}
.hearder {
  font-size: 30px;
  color: white;
  text-align: center;
  height: 70px;
  padding-top: 10px;
}
.con {
  width: 100%;
  display: flex;
}
.left {
  flex: 1.5;
  width: 100%;
}
.right {
  margin-top: -2px;
  flex: 1.5;
  width: 100%;
}
.center {
  padding: 10px 11px;
  flex: 7;
  width: 100%;
  height: 640px;
  background: #0e1533;
}
.left-one {
  width: 100%;
  height: 323px;
  margin-bottom: 5%;
}
.left-two {
  width: 100%;
  height: 323px;
}
.right-one {
  margin-left: -12px;
  width: 103%;
  height: 323px;
}
.right-two {
  margin: 16px 0px;
  margin-left: -12px;
  width: 103%;
  height: 320px;
}
.right-three {
  margin-left: -11px;
  width: 94.8%;
  position: absolute;
  height: 280px;
}
.buttom {
  margin-top: 5px;
  display: flex;
  width: 100%;
  height: 260px;
}
.buttom-left {
  height: 280px;
  flex: 0 0 274px;
  width: 100%;
  margin-right: 5px;
}
.buttom-center {
  width: 100%;
  margin-left: 6px;
  flex: 0 0 516px;
  height: 280px;
}
.buttom-right {
  height: 280px;
  padding-left: 3px;
  margin-left: 16px;
  flex: 0 0 1298px;
  width: 100%;
}
.buttom-right2 {
  height: 280px;
  margin-left: 18px;
  flex: 0 0 278px;
  width: 100%;
}
/* .border{position:absolute;padding:15px;border-style: solid;border-color: #5171ac; animation: mycolor 3s infinite alternate}
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
} */

div {
  position: relative;
}
</style>
