<template>
  <div>
    <h2>{{ msg }}</h2>
    <h3>姓名: {{ studentName }}</h3>
    <h3>地址: {{ address }}</h3>
    <h3>年龄：{{ myAge }}</h3>
    <button @click="myAge++">年龄加1</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      msg: '我是个帅哥',
      myAge: this.age
    }
  },
  props: {
    studentName: String, // 指定类型
    address: String,
    age: Number
  }
}
</script>

<style scoped>

</style>