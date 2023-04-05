<template>
  <div>
    <div>消息编号{{ params.id }}</div>
    <div>消息内容{{ params.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: ['params'],
  mounted() {
    console.log(this.params)
  }
}
</script>

<style>

</style>