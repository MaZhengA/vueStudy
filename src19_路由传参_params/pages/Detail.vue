<template>
  <div>
    <div>消息编号{{ this.$route.params.id }}</div>
    <div>消息内容{{ this.$route.params.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style>

</style>