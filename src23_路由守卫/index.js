// 用于创建整个应用的路由
import VueRouter from 'vue-router';

import About from '@/pages/About.vue';
import Home from '@/pages/Home.vue';
import First from '@/pages/First.vue';
import Second from '@/pages/Second.vue';
import Detail from '@/pages/Detail.vue';


const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      // meta: {isAuth: true, title: '主页'}, // meta配置元信息
      children: [
        // 当 /home 匹配成功，
        // First 会被渲染在 Home 的 <router-view> 中
        { 
          path: 'first', 
          component: First,
          meta: {isAuth: true, title: '第一个家'},
          // beforeEnter: (to, from, next) => {
          //   // 单个路由守卫
          //   next()
          //   console.log(to, from)
          // }
        },
        // ...其他子路由
        { 
          path: 'second', 
          component: Second,
          meta: {isAuth: false},
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
      component: About,
      // meta: {isAuth: true, title: '关于'}
    },
  ]
});

// 全局前置路由守卫，当一个导航触发时，全局前置守卫按照创建顺序调用
// router.beforeEach((to, from, next) => {
  // to:即将要进入的目标 路由对象
  // from:当前导航正要离开的路由
  // next:执行下一段操作
  // console.log('执行',to, from)
//   if (to.meta.isAuth) {
//     if (localStorage.getItem('name') === 'mazheng') {
//       next()
//     }
//   } else {
//     alert('看不了啊兄弟')
//   }
// });

// 后置路由守卫，可以用来修改网页标题
// router.afterEach((to, from) => {
//   document.title = to.meta.title; // 修改网页标题
// })

export default router;