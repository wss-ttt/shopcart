import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart.js'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {  //和文件名字对应
    cart,
  },
  strict: process.env.NODE_ENV !== 'production', // 严格模式
});