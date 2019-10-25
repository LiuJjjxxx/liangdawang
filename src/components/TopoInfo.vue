<template>
    <div>
        <div class="bg" :id=id>
            <p style="color:white;margin-top:20px;font-size:10px">{{name}}</p>
        </div>
        <img :src="'../../static/img/topo/'+img+'.png'">
        <div :id=id v-if="soild != false" class="soild"></div>
    </div>
</template>
<script>
export default {
    props:['name','id','soild','img']
}
</script>
<style scoped>
.bg{
    text-align: center;
    display: inline-block;
    width: 110px;    
    height: 40px;
    background:rgba(63, 81, 181, .1);
    border-radius: 10px;
    border: 2px solid rgb(31, 187, 122,.5)
}
img{
    position: absolute;
    top: 0px;
    left: 40px;
    width: 30%;
    height: 50%;
}
.warn{
    border: 2px solid rgba(187, 41, 31, 0.5)
}
.soild{
    top: 100%;
    left: 49%;
    position: absolute;
    height: 44px;
    border: 1px rgb(0, 92, 128) solid;
}
.soild::before{
    width: 10px;
    height: 10px;
    background: red;
}
@keyframes bordercolor {
    0%{
        transform: translateY(0)
    }
    100%{
        transform: translateY(10px)

    }
}
</style>