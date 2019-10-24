<template>
    <div name='拓扑图'>
        <div id='1001'>交换机1001</div>
        <div id='1002'>服务器1002</div>
        <div id='1003'>交换机1003</div>
        <div id='1004'>AC1004</div>
        <div id='1005'>路由器1005</div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            newdata:[],
            olddata:[],
            timeerOfRealtime:null,
        }
    },
    methods: {
        setcolor(data){
            data.forEach(element => {
                var pc = document.getElementById(element)
                if(pc==null)
                    return true
                else{
                    this.olddata.push(element)
                    pc.classList.add("warn");
                  }
            })
        },
        delcolor(data){
            this.olddata = data
            data.forEach(element => {
                var pc = document.getElementById(element)
                pc.classList.remove("warn");
            })
            this.olddata = []
        },
        setIntervalOfRealTime(){
            var uthis = this;
            clearInterval(uthis.timeerOfRealtime);
            uthis.timeerOfRealtime = setInterval(() => {
                fetch('../../static/data.txt',{
                    method:'get'
                }).then(rs=>{
                    return rs.json()
                }).then(data=>{
                    uthis.newdata=data.data[0]
                })
                this.delcolor(uthis.olddata)
                this.setcolor(uthis.newdata)
                uthis.newdata = []
            },3000);
        }
    },
    mounted(){
        this.setIntervalOfRealTime()
    }
}
</script>
<style scoped>
div{
    background: white;
}
.warn{
    background: red;
    /* animation: warn 0.5s infinite alternate */
}
@keyframes warn {
    0%{
        background: red
    }
    100%{
        background: white
    }
}
</style>