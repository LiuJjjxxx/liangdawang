<template>
		<div>
				<div id="leave" style="width: 100%;height:300px;"></div>
		</div>
</template>

<script>
import echarts from 'echarts'

export default {
    data(){
        return{
            option:{
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '35%'],
                data:[
                    {value:335, name:'高危'},
                    {value:310, name:'低危'},
                    {value:234, name:'中危'},
                ],
                label: {
                    normal: {
                        formatter: '{b}\n{d}%',  //label 的内容
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
            }
        ]
    },
        }
    },
	methods:{	
	leave(){
		var leave = echarts.init(document.getElementById('leave'),'liangdawang');
        leave.setOption(this.option);
		}
	},
	
	mounted(){
		 this.leave()
		 
	}	
}


</script>

<style>
</style>