<template>
  <div>
    <h3>姓名: {{ name }}</h3>
    <h3>地址: {{ address }}</h3>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '马铮',
      address: '杭州'
    }
  }
}
</script>

<style scoped>

</style>