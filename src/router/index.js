// 用于创建整个应用的路由
import VueRouter from 'vue-router';

import About from '@/pages/About.vue';
import Home from '@/pages/Home.vue';
import First from '@/pages/First.vue';
import Second from '@/pages/Second.vue';
import Detail from '@/pages/Detail.vue';


export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        // 当 /home 匹配成功，
        // First 会被渲染在 Home 的 <router-view> 中
        { 
          path: 'first', 
          component: First,
        },
        // ...其他子路由
        { 
          path: 'second', 
          component: Second,
          children: [
            { 
              name: 'xiangqing',
              path: 'detail/:id/:name',
              component: Detail,
              // props 是一个对象，它会被按原样设置为组件属性。当 props 是静态的时候有用。
              // props: { 'staticProps': true },
              // 使用props:true，route.params 将会被设置为组件属性。
              // props: true,
              // 使用props的对象形式
              props: route => ({
                params: route.params
              })
            }
          ]
        },
      ]
    },
    {
      path: '/about',
      component: About
    },
  ]
})