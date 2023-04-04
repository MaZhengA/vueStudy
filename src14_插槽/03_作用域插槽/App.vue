<template>
  <div class="wrapper">
    <Categroy title="游戏">
      <template slot-scope="slotProps">
        <ul>
          <li v-for="(item, index) in slotProps.games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Categroy>
    <Categroy title="游戏">
      <template slot-scope="{games}">
        <ol>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Categroy>
    <Categroy title="游戏">
      <template v-slot:default="slotProps">
        <h4 v-for="(item, index) in slotProps.games" :key="index">{{ item }}</h4>
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
