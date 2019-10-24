<template>
    <div class="col-md-4">
                        <div class="king-block king-block-themed bk-ranger-box mb10" id="disk_sum">
                            <div class="ranger-wrapper">
                                <table class="mb0 pr15 ranger-header-box color">
                                    <thead class="">
										<th>故障类型</th>
										<th>故障名称</th>
										<th>故障等级</th>
										<th>故障对象</th>
										<th>目标主机</th>
                                    </thead>
									<tbody id="">
                                        <tr>
                                            <td style="width:20%">恶意url</td>
                                            <td style="width:20%">恶意请求</td>
                                            <td style="width:15%">中</td>
                                            <td style="width:15%">粮达网</td>
                                            <td style="width:30%">192.168.32.17</td>
                                        </tr>
                                         <tr>
                                            <td style="width:20%">恶意url</td>
                                            <td style="width:20%">恶意请求</td>
                                            <td style="width:15%">中</td>
                                            <td style="width:15%">粮达网</td>
                                            <td style="width:30%">192.168.32.17</td>
                                        </tr>
                                         <tr>
                                            <td style="width:20%">恶意url</td>
                                            <td style="width:20%">恶意请求</td>
                                            <td style="width:15%">中</td>
                                            <td style="width:15%">粮达网</td>
                                            <td style="width:30%">192.168.32.17</td>
                                        </tr>
                                         <tr>
                                            <td style="width:20%">恶意url</td>
                                            <td style="width:20%">恶意请求</td>
                                            <td style="width:15%">中</td>
                                            <td style="width:15%">粮达网</td>
                                            <td style="width:30%">192.168.32.17</td>
                                        </tr>
                                         <tr>
                                            <td style="width:20%">恶意url</td>
                                            <td style="width:20%">恶意请求</td>
                                            <td style="width:15%">中</td>
                                            <td style="width:15%">粮达网</td>
                                            <td style="width:30%">192.168.32.17</td>
                                        </tr> <tr>
                                            <td style="width:20%">恶意url</td>
                                            <td style="width:20%">恶意请求</td>
                                            <td style="width:15%">中</td>
                                            <td style="width:15%">粮达网</td>
                                            <td style="width:30%">192.168.32.17</td>
                                        </tr> <tr>
                                            <td style="width:20%">恶意url</td>
                                            <td style="width:20%">恶意请求</td>
                                            <td style="width:15%">中</td>
                                            <td style="width:15%">粮达网</td>
                                            <td style="width:30%">192.168.32.17</td>
                                        </tr> <tr>
                                            <td style="width:20%">恶意url</td>
                                            <td style="width:20%">恶意请求</td>
                                            <td style="width:15%">中</td>
                                            <td style="width:15%">粮达网</td>
                                            <td style="width:30%">192.168.32.17</td>
                                        </tr> <tr>
                                            <td style="width:20%">恶意url</td>
                                            <td style="width:20%">恶意请求</td>
                                            <td style="width:15%">中</td>
                                            <td style="width:15%">粮达网</td>
                                            <td style="width:30%">192.168.32.17</td>
                                        </tr> <tr>
                                            <td style="width:20%">恶意url</td>
                                            <td style="width:20%">恶意请求</td>
                                            <td style="width:15%">中</td>
                                            <td style="width:15%">粮达网</td>
                                            <td style="width:30%">192.168.32.17</td>
                                        </tr> <tr>
                                            <td style="width:20%">恶意url</td>
                                            <td style="width:20%">恶意请求</td>
                                            <td style="width:15%">中</td>
                                            <td style="width:15%">粮达网</td>
                                            <td style="width:30%">192.168.32.17</td>
                                        </tr>
                                        </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
</template>
<script>
	export default {
		data(){
			return{
				goodsList:[],
			}
		},
		filters:{
			pan_flase: function(val){
				console.log(val)
				if(val == false)
					val = '0'
				return val
			},
			filterFun: function (value) {
                if(value&& value.length > 4&&value != false) {
					value= value.substring(0,4)+'%';
                	return value;
					}
				else{
					value = '无'
                	return value;

				}
				},
		},
	}
</script>
<style scoped>
td{
	color: white;
	margin: auto;
}
table{
	margin-left: 20px;
	width: 95%;
}
thead{
    background: #003e69;
    color: white;
	font-size: 15px;
	text-align: center;
	box-shadow: inset 0px 0px 8px 10px #0e254e;
    width: 100%;
	max-width: 100%;
    border-top-left-radius: 13%;
    border-top-right-radius: 13%;
}
tbody{
	text-align: center;
	font-family: 'Audiowide';
    color: rgb(188,188,255);
    text-shadow: 0 0 10px blue;
}
.font1{
	font-family: 'Audiowide';
    text-align: center;
    color: rgb(188,188,255);
    text-shadow: 0 0 10px blue;
}
.ranger-wrapper{
	 overflow-x: hidden;
	 height: 280px;
	 width: 100%;
}

.ranger-wrapper::-webkit-scrollbar{
    display: none;
}
.king-block{
	padding-top: 10px
}
tr:hover{
    box-shadow:inset 1px 3px 20px 0px rgba(10,10,255,.3);

}
.on_click_true{
    text-shadow: 0 0 10px red;
	color: red;
}
</style>