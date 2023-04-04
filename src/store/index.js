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
  }
})

export default store;