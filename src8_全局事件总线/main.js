import Vue from "vue";
import App from './App.vue';
import plugins from "./plugins";

Vue.config.productionTip = false;
Vue.prototype.x = {a:1, b:2};
// Vue.use(plugins)
new Vue({
  el: '#app',
  render: (h) => h(App),
  beforeCreate() {
    // 这里的this指得是new Vue后的实例对象
    // 安装全局事件总线 // bus取义总线
    Vue.prototype.$bus = this; 
  }
})