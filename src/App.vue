<template>
  <div id="app">
   <h1>购物车</h1> 
   <product></product>
   <cart></cart>
   <info></info>
  </div>
</template>

<script>
import product from '@/components/product.vue'
import cart from '@/components/cart.vue'
import info from '@/components/info.vue'
export default {
  name: 'App',
  components:{
    product,
    cart,
    info
  } 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
