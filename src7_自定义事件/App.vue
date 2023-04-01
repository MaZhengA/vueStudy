<template>
  <div class="wrapper">
    <h1>{{ msg }}</h1>
    <!-- 通过props实现父子数据传递：子传父 -->
    <School :getSchoolName="getSchoolName" />
    <!-- 绑定自定义事件“ma”父子数据传递：子传父(@ma) -->
    <!-- 使用native修饰符可以在一个根元素上直接监听一个原生事件 -->
    <Student v-on:ma="getStudentName" @zh="demo" @click.native="wrap" />
    <!-- 通过ref操作dom -->
    <!-- <Student ref="student" /> -->
  </div>
</template>
<script>
import Student from './components/Student.vue';
import School from './components/School.vue';

export default {
  name: 'App',
  data() {
    return {
      msg: '大帅哥'
    }
  },
  components: {
    School,
    Student
  },
  methods: {
    getSchoolName(value) {
      alert(value, 'value==')
    },
    getStudentName(value) {
      alert(value, 'value==')
    },
    demo(){
      console.log('第二个自定义事件')
    },
    wrap() {
      alert('最外层')
    }
  },
  mounted() {
    // this.$refs.student.$on('ma', this.getStudentName)
    // this.$refs.student.$once('ma', this.getStudentName) // 只执行一次
  }
}
</script>
<style lang="less">
  .wrapper {
    background: gray;
  }
</style>
