<template>
		<div>
				<div id="flow" style="width: 100%;height:300px;"></div>
		</div>
</template>

<script>
import echarts from 'echarts'

export default {
	methods:{	
	line(){
		var flow = echarts.init(document.getElementById('flow'),'liangdawang');
		
		var option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
    }],
    grid:{
        top:'10',
        bottom:'25',
        left:'50',
        right:'60',
    }
};


        flow.setOption(option);
	
		}
	},
	
	mounted(){
		 this.line()
		 
	}	
}


</script>

<style>
</style>