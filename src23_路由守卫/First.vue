<template>
  <ul>
    <li :style="{opacity}">哈喽</li>
    <li>news1<input type="text" /></li>
    <li>news2<input type="text" /></li>
    <li>news3<input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: 'First',
  data() {
    return {
      opacity: 1
    }
  },
  beforeDestroy() {
    console.log('组件被销毁了');
  },
  activated(){
    console.log('first组件激活了');
    this.timer = setInterval(() => {
      console.log(this.opacity, '====')
      this.opacity -= 0.1;
      if (this.opacity <=0) this.opacity = 1
    },400)
  },
  deactivated() {
    console.log('first组件失活了')
    clearInterval(this.timer)
  }
}
</script>

<style>

</style>