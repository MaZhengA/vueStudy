<template>
  <ul>
    <li>news1<input type="text" /></li>
    <li>news2<input type="text" /></li>
    <li>news3<input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: 'First',
  beforeDestroy() {
    console.log('组件被销毁了');
  }
}
</script>

<style>

</style>