<template>
    <div class="col-md-4">
                        <div class="king-block king-block-themed bk-ranger-box mb10" id="disk_sum">
                            <div class="ranger-wrapper">
                                <table class="mb0 pr15 ranger-header-box color">
                                    <thead class="">
										<th>Ip</th>
										<th>次数</th>
                                    </thead>
									<tbody id="">
                                        <tr v-for="index in 30" :key="index">
                                            <td style="width:70%">192.168.32.17</td>
                                            <td style="width:30%">{{index}}</td>
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
				letter:'host_memory',       //默认不排序 // 排序字段
            	original:true,   //默认从小到大排列
			}
		},
		methods:{
            orderFn(letter,original){
                this.letter = letter; //排序字段
                this.original = original; //排序方式
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
		computed:{
            list: function() {
                var _this = this;
                // 筛选
                var arrGoods = [];
                for (var i = 0;i < this.goodsList.length; i++)
                {
                    // 如果匹配成功, 向空数组添加数据
                    if (this.goodsList[i].name.search(this.searchVal) != -1) {
                        arrGoods.push(this.goodsList[i]);
                    }
                }
                // 升序降序排列
                // false:升序  true:降序
                if (this.letter != '') {
                    arrGoods.sort(function(a,b){
                        if(_this.original){
                            return b[_this.letter] - a[_this.letter];
                        }else{
                            return a[_this.letter] - b[_this.letter];
                        }
                    });
                }
                _this.total = 0;
                for (var i = 0;i < arrGoods.length; i++){
                    _this.total += arrGoods[i].price;
                }
                return arrGoods;
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