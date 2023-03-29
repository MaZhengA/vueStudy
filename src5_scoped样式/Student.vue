<template>
  <div class="demo">
    <h3>名称: {{ studentName }}</h3>
    <h3>地址: {{ address }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Student',
  // 数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先
  data() {
    return {
      studentName: '侯晶晶',
      address: '杭州'
    }
  },
}
</script>

<style lang="less" scoped>
  .demo {
    height: 100px;
    background: red;
    h3 {
      color: blue;
    }
  }
</style>