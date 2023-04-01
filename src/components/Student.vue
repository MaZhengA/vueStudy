<template>
  <div class="student">
    <h3>姓名: {{ name }}</h3>
    <h3>性别: {{ sex }}</h3>
    <h3>总数：{{ count }}</h3>
    <button @click="count++">加加加</button>
    <button @click="sendStudentName">把学生姓名传递过来</button>
    <button @click="unbind">解绑事件</button>
    <button @click="destroyApp">销毁组件</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '马铮',
      sex: '男',
      count: 0
    }
  },
  methods: {
    sendStudentName() {
      // 触发student组件实例上的ma事件
      this.$emit('ma', this.name)
      this.$emit('zh')
    },
    unbind() {
      this.$off('ma') // 清空一个事件
      this.$off(['ma', 'zh']) // 清空多个事件
      this.$off() // 清空全部事件
    },
    destroyApp() {
      // 销魂当前实例后，所有组件的自定义事件全都失效，原生事件不受影响
      this.$destroy()
    }
  }
}
</script>

<style scoped>
.student {
  background: yellow;
}
</style>