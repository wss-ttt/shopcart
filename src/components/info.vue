<template>
  <div class="info">
    <div class="item-wrapper">
      <div class='item'>总数：
        <strong>{{totalNum}}</strong>
      </div>
      <div class='item'>总价：
        <strong>{{totalPrice}}</strong>
      </div>
      <el-button type="warning" @click="clearAllCart">清空购物车</el-button>
    </div>
  </div>
  </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'info',
  data() {
    return {
    	// totalNum:13,
    	// totalPrice:342
    }
  },
  computed:{
  	// 从store中取数据
  	...mapGetters(['totalPrice','totalNum'])
  },
  methods:{
  	...mapActions(['clearAllCart'])
  }
}

</script>
<style scoped>
.item-wrapper {
  display: flex;
  background-color: #dfdfdf;
  align-items: center;
  justify-content: center;
}

.item {
  flex: 1;
}

</style>
