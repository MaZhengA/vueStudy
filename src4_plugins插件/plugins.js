export default {
  install(Vue) {
    // 添加全局过滤
    Vue.filter('mySlice', function(value) {
      console.log(value, 'value')
      return value.slice(0,1)
    }),
    // 2. 添加全局资源
    Vue.directive('fbind', {
      bind(el, binding) {
        el.value = binding.value;
      },
      inserted(el) {
        el.focus();
      },
      update(el, binding) {
        el.value = binding.value;
      }
    })
    // 3. 注入组件选项 (定义混入)
    Vue.mixin({
      data() {
        return { age: 20}
      }
    })
    // 原型上插入方法
    Vue.prototype.hello = () => alert('你好')
  }
}