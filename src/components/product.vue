<template>
	<div class="product">
		<h4>商品信息</h4>
		<el-table :data="shopList">
			<el-table-column label="商品编号" prop="id"></el-table-column>
			<el-table-column label="商品名称" prop="name"></el-table-column>
			<el-table-column label="商品价格" prop="price"></el-table-column>
			<el-table-column label="购物车" fixed="right" width="100">
				<template slot-scope="scope">
					<el-button type="text" @click="addToCart(scope.row.id)">添加到购物车</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
	import {mapGetters,mapActions } from "vuex"
	export default{
		name:'product',
		data(){
			return{
				/*shopList:[
					{
						'id':11,
						'name':'鱼香肉丝',
						'price':12
					},
					{
						'id':22,
						'name':'宫保鸡丁',
						'price':14
					},
					{
						'id':47,
						'name':'米饭',
						'price':2
					}
				]*/
			}
		},
		computed:{
			// 从store中取数据
			...mapGetters(['shopList'])
		},
		methods:{
			// addToCart(data){
			// 	// this.$message(data);
			// 	console.log(data);
			// },
			...mapActions(['addToCart'])
		}
	}
</script>
<style scoped></style>