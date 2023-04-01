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
