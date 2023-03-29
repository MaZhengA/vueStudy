<template>
  <div>
    <h3 @click="showName">名称: {{ studentName }}</h3>
    <h3>地址: {{ address }}</h3>
    <h3>身高: {{ height }}</h3>
  </div>
</template>

<script>
import CommonFun from '../mixin'
export default {
  mixins: [CommonFun],
  name: 'School',
  // 数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先
  data() {
    return {
      msg: '我是个帅哥',
      studentName: '马铮',
      address: '杭州'
    }
  },
  methods: {
    showName() {
      console.log(this.studentName)
    }
  },
  // 混入对象的钩子将在组件自身钩子之前调用。
  created: function () {
    console.log('组件的钩子')
  }
}
</script>

<style scoped>

</style>