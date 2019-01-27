<template>
	<div>
		<h4>已选商品</h4>
		<el-table :data="cartProducts">
			<el-table-column label="商品编号" prop="id"></el-table-column>
			<el-table-column label="商品名称" prop="name"></el-table-column>
			<el-table-column label="商品价格" prop="price"></el-table-column>
			<el-table-column label="商品数量" prop="num"></el-table-column>
			<el-table-column label="操作" fixed="right" width="100">
				<template slot-scope="scope"> 
					<el-button type="danger" @click="delProduct(scope.row.id)">删除</el-button>	
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
	import {mapGetters,mapActions } from "vuex"
	export default{
		name:'cart',
		data(){
			return{
				// cartProducts:[]    // 存放购物车
			}
		},
		computed:{
			...mapGetters(['cartProducts'])
		},
		methods:{
			...mapActions(['delProduct'])
		}
	}
</script>
<style scoped>
	
</style>