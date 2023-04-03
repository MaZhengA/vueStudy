<template>
  <div class="wrapper">
    <h1>{{ msg }}</h1>
    <School />
    <Student />
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
  }
}
</script>
<style lang="less">
  .wrapper {
    background: gray;
  }
</style>
