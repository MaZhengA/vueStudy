import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  // 存储数据
  state: {
    sum: 0
  },
  // 操作数据
  mutations: {
    increment (state, value) {
      state.sum += value
    },
    decrement(state, value) {
      state.sum -= value
    }
  },
  // 相应动作
  actions: {
    jia (context, value) {
      context.commit('increment', value)
    },
    jian (context, value) {
      context.commit('decrement', value)
    }
  },
  // getters用于将state的数据进行加工
  // getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  }
})

export default store;