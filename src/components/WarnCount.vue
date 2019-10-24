<template>
    <div name='问题汇总' class="WarnCount">
        <div class="box find">
            <h3 class="font-inline">发现</h3>
            <span>2513</span>
        </div>
        <div class="box handle">
            <h3 class="font-inline">治理</h3>
            <span>1210</span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.WarnCount div{
    margin-top:10px 
}
.box{
    border-radius: 10px;
    height: 60px;
    width: 85%;
    margin:  auto;
}
.find{
        background: #0087ee;
}
.handle{
    background: #f37f04;
}
.font-inline{
     padding-left: 20px;
     display:inline-table;
}
span{
    padding-left: 25px;
    color: white;
    font-size: 28px
}
</style>
