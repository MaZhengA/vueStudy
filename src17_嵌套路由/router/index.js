// 用于创建整个应用的路由
import VueRouter from 'vue-router';

import About from '@/pages/About.vue';
import Home from '@/pages/Home.vue';
import First from '@/components/First.vue';
import Second from '@/components/Second.vue';

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: 'first', component: First },
        // ...其他子路由
        { path: 'second', component: Second },
      ]
    },
    {
      path: '/about',
      component: About
    },
  ]
})