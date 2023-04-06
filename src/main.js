import Vue from "vue";
import App from './App.vue';
// 引入全部组件
// import ElementUI from 'element-ui';
// 引入element的全部样式
// import 'element-ui/lib/theme-chalk/index.css';

import { Button, Select } from 'element-ui';

Vue.config.productionTip = false;
// Vue.use(ElementUI);
Vue.component(Button.name, Button);
// or
// Vue.use(Button);

new Vue({
  el: '#app',
  render: (h) => h(App),
})