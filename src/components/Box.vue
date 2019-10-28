<template>
    <div class="box" :style="{background:color}">
        <span>{{name}}</span>
                  <h3 style="margin:3px;font-size:25px">10</h3>
                </div>
</template>

<script>
export default {
    props:['name','color']
}
</script>
<style scoped>
.box{
  border-radius: 10px;
  padding-top: 10px;
  text-align: center;
  margin-left: 25px;
  width: 80px;
  height: 70px;
  font-size: 12px;
    color: white;
}
.box>span{
}
</style>