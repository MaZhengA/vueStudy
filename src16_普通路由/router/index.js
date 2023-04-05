// 用于创建整个应用的路由
import VueRouter from 'vue-router';

import About from '@/components/About.vue';
import Home from '@/components/Home.vue';

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
  ]
})