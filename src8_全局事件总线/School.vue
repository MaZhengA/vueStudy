<template>
  <div class="school">
    <h3>学校: {{ school }}</h3>
    <h3>地址: {{ address }}</h3>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      school: '浙大',
      address: '杭州'
    }
  },
  mounted() {
    this.$bus.$on('hello', (data) => {
      console.log('我是学校, 我收到了student信息', data)
    })
  },
  beforeDestroy() {
    this.$bus.$off('hello')
  }
}
</script>

<style scoped>
.school {
  background: blue;
}
</style>