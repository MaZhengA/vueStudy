## main是vue的入口文件

## vue.config.js文件
> 使用vue inspect > output.js可以查看Vue脚手架的默认配置
> 使用vue.config.js对脚手架进行默认配置

## props
> props只读，如果要修改，先复制到data中一份，对复制的数据进行修改
> 普通接受: props: ['name']
> 限制类型: props: { name: String } 
> 限制类型、必填、默认值 props: { name: { type: String, required: true, default: '马铮' } }

## 组件传值
1. 父传子通过props,
2. 子传父通过调用父组件传过来的的方法

## todolist案例总结
