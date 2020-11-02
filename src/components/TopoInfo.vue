<template>
  <div>
    <div class="bg"
         :style="{width: width + 'px'}"
         :id=id>
      <p style="color:white;margin-top:50px;font-size:15px">{{name}}</p>
    </div>
    <img :class="{small: small}"
         :style="{left: left + 'px'}"
         :src="'./static/img/topo/'+img+'.png'">

  </div>
</template>
<script>
export default {
  props: ['name', 'id', 'soild', 'img', 'width', 'small', 'left']
}
</script>
<style scoped>
.bg {
  text-align: center;
  display: inline-block;
  width: 90px;
  height: 80px;
  background: rgba(63, 81, 181, 0.1);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  /* box-shadow: 0 0 10px rgb(15, 201, 86); */
}
.bg:hover {
  /* border: 2px solid rgba(68, 184, 22, 0.5); */
  /* box-shadow: 0 0 10px rgb(0, 255, 98); */
}
img {
  position: absolute;
  top: 0px;
  left: 25px;
  width: 40px;
  height: 40px;
}
.warn {
  border-radius: 15px;
  border: 2px solid rgba(202, 38, 26, 0.8);
  box-shadow: 0 0 10px rgb(236, 5, 5);
}
.warn:hover {
  border-radius: 15px;
  border: 2px solid rgba(187, 41, 31, 1);
  box-shadow: 0 0 10px rgb(255, 0, 0);
}
.soild {
  top: 100%;
  left: 49%;
  position: absolute;
  height: 44px;
  border: 1px rgb(0, 92, 128) solid;
}
.soild::before {
  width: 10px;
  height: 10px;
  background: red;
}
.small {
  top: 7px;
  left: 23px;
  width: 40%;
  height: 65%;
}
@keyframes bordercolor {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
}
</style>