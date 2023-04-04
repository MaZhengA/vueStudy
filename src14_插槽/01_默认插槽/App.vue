<template>
  <div class="wrapper">
    <Categroy title="音乐"></Categroy>
    <Categroy title="游戏">
      <p>游戏</p>
    </Categroy>
    <Categroy title="电影">
      <p>电影</p>
    </Categroy>
  </div>
</template>
<script>
import Categroy from './components/Categroy';

export default {
  name: 'App',
  components: {
    Categroy
  }
}
</script>
<style lang="less">
.wrapper {
  display: flex;
  justify-content: space-around;
}
</style>
