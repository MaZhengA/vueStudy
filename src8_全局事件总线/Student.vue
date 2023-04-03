<template>
  <div class="student">
    <h3>姓名: {{ name }}</h3>
    <h3>性别: {{ sex }}</h3>
    <button @click="sendStudentName">把学生名传递给学校</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '马铮',
      sex: '男',
    }
  },
  methods: {
    sendStudentName(){
      this.$bus.$emit('hello', this.name)
    }
  }
}
</script>

<style scoped>
.student {
  background: yellow;
}
</style>