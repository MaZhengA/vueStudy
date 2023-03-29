<template>
  <div>
    <h3 @click="showName">姓名: {{ studentName }}</h3>
    <h3>性别: {{ sex }}</h3>
  </div>
</template>

<script>
import CommonFun from '@/mixin';
export default {
  // 混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。
  mixins: [CommonFun],
  name: 'School',
  data() {
    return {
      msg: '我是个帅哥',
      studentName: '马铮',
      sex: '男'
    }
  }
}
</script>

<style scoped>

</style>