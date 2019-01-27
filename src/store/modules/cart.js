
// 初始化数据
const state={
	// 模拟所有的商品
	shop_list:[
		{
			'id':11,
			'name':'黄焖鸡',
			'price':12
		},
		{
			'id':22,
			'name':'大米先生',
			'price':14
		},
		{
			'id':47,
			'name':'肯德基',
			'price':2
		}
	],
	// 保存已添加的商品
	added:[]
};


// getters  抛出数据
const getters={
	shopList(state){
		return state.shop_list; 
	},
	cartProducts(state){
		return state.added.map(({id,num})=>{  // 解构的使用 
			/*let product = state.shop_list.find((p)=>{
				if(id===p.id){
					return p;
				}
			})*/
			let product = state.shop_list.find(n=>n.id == id);
			return {
				...product,
				num
			}
		})
	},
	// 计算总价格
	totalPrice(state,getters){
		let total=0;
		getters.cartProducts.forEach(p=>{
			total+=p.price*p.num;
		})
		return total;
	},
	// 计算总数量
	totalNum(state,getters){
		let num=0;
		getters.cartProducts.forEach(p=>{
			num+=p.num;
		})
		return num;
	}
};


// actions
const actions={
	// 添加到购物车操作
	addToCart({commit},params){
		commit('add',params);  // 携带参数params
	},
	// 清空购物车 
	clearAllCart({commit},params){
		commit('clearAll');
	},
	// 删除某个商品
	delProduct({commit},params){
		commit('del',params);  // 删除某个商品
	}
};


// mutations
const mutations={
	// 添加至购物车
	add(state,params){
		// 判断是否已经添加过该商品了
		let record = state.added.find(n=>n.id===params)
		if(record){
			// 说明之前已经添加过该商品了
			record.num++;
		}else{
			// 说明是第一次添加该商品
			state.added.push({
				id:params,
				num:1   // 商品数据刚开始默认是1
			});
		}
	},
	// 清空购物车
	clearAll(state,params){
		state.added=[];    // 清空数组就行了
	},
	// 删除某个商品
	del(state,params){
		state.added.forEach((p,index)=>{
			if(p.id===params){
				state.added.splice(index,1);    // 删除指定下标的元素
			}
		})
	}
}

export default{
	state,
	getters,
	actions,
	mutations
}