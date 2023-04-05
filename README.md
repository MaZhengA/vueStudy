## main是vue的入口文件

## vue.config.js文件
> 使用vue inspect > output.js可以查看Vue脚手架的默认配置
> 使用vue.config.js对脚手架进行默认配置

## props
> props只读，如果要修改，先复制到data中一份，对复制的数据进行修改
> 普通接受: props: ['name']
> 限制类型: props: { name: String } 
> 限制类型、必填、默认值 props: { name: { type: String, required: true, default: '马铮' } }

## todolist案例总结
### 组件传值
1. 父传子通过props,
2. 子传父通过调用父组件传过来的的方法
3. 使用v-model时：v-model不能是props传过来的值，因为props是不可修改的

## 组件的自定义事件
1. 一种组件的通信方式，子组件 -> 父组件
2. 使用场景：在父组件中给子组件绑定事件，事件回调在父组件中

## 全局事件总线
1. 适用于任意组件之间的通信
2. 安装全局事件总线
```js
new Vue({
   beforeCreate() {
    Vue.prototype.$bus = this; 
  }
})
```
3. 使用事件总线
```js
// A组件想接收数据，给A绑定事件，事件回调留在A组件内
mounted() {
  this.$bus.$on('hello', (data) => {
    console.log('我是学校, 我收到了student信息', data)
  })
},

// B组件提供数据
this.$bus.$emit('hello', this.name)
// 销毁(beforeDestroy)
this.$bus.$off()
```

## 消息订阅模式
1. pubsub.js中的发布和订阅的事件名一定要相同

## nextTick
1. 在下次dom更新循环结束后执行回调
2. 使用场景：在修改数据之后立即调用这个方法，获取更新后的dom

## 动画
1. 单元素组件的过渡
- 使用transition组件封装
- 通过 appear attribute 设置节点在初始渲染的过渡，appear就是首次的意思
2. 列表过渡，使用transition-group

## 代理
1. devServer.proxy 可以是一个指向开发环境 API 服务器的字符串，缺点是1.不能配置多个代理，2.不能灵活的控制走不走代理
```js
module.exports = {
  devServer: {
    proxy: 'http://localhost:5000'
  }
}
```
2. 具体规则
```js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/api' : ''}, // 重写路径，把api转为''
        ws: true, 支持websocket
        changeOrigin: true // 用于控制请求头中host的值
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
```
## 修改vue.config.js后一定要重新启动

## 插槽
1. 作用：让父组件可以向子组件的指定位置插入html结构，父子组件通信: 父组件 -> 子组件
2. 分类：默认插槽、具名插槽、作用域插槽
3. 作用域插槽：数据在组件自身，但数据生成的html结构由组件的使用者决定

## Vuex
1. Action 通过 store.dispatch 方法触发：
```js
store.dispatch('increment')
// 第一个context：与 store 实例具有相同方法和属性，第二个额外的参数
actions: {
  increment (context, value) {
    context.commit('increment')
  }
}
```
2. Mutations 通过 store.commit 方法触发：
```js
store.commit('increment')
// state是第一个参数，payload是额外的参数
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
```
3. 获取随机字符串接口
https://api.uixsj.cn/hitokoto/get?type=social

4. 模块化+命名空间
- 目的：让代码更好维护，让多种数据分类更加明确

## vue-router
1. <router-link to="/home" active-class="active">实现切换,active-class指定高亮样式
2. <router-view>指定展示位置
3. 注意点
- 路由组件放在page文件夹中，一般组件放在component文件夹中
- 切换路由时，组件会被销毁，需要时再挂载
- 每个组件都有$route信息，存储自己的路由信息
- 整个应用只有一个router，通过组件的$router属性获取