import Vue from "vue";
import App from './App.vue';
import plugins from "./plugins";

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: (h) => h(App),
})