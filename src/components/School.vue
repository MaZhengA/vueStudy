<template>
  <div class="school">
    <h3>学校: {{ school }}</h3>
    <h3>地址: {{ address }}</h3>
    <button @click="sendSchoolName">把学校姓名传递过来</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  props: ['getSchoolName'],
  data() {
    return {
      school: '浙大',
      address: '杭州'
    }
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.school)
    }
  }
}
</script>

<style scoped>
.school {
  background: blue;
}
</style>