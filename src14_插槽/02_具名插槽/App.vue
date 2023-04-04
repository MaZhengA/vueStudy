<template>
  <div class="wrapper">
    <Categroy title="音乐"></Categroy>
    <Categroy title="游戏">
      <!-- v-slot 只能添加在 <template> 上  -->
      <template v-slot:center>
        <p>游戏内容</p>
      </template>
      <template v-slot:footer>
        <p>游戏底部</p>
      </template>
    </Categroy>
    <Categroy title="电影">
      <template v-slot:center>
        <p>电影内容</p>
      </template>
      <template v-slot:footer>
        <p>电影底部</p>
      </template>
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
