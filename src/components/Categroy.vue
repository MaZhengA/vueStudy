<template>
  <div class="categroy">
    <h3>{{ title }}</h3>
    <slot :games="games">占位</slot>
  </div>
</template>

<script>
export default {
  name: 'categroy',
  props: ['title'],
  data() {
    return {
      games: ['飞车', '2k', 'LOL']
    }
  }
}
</script>

<style>
.categroy {
  width: 200px;
  height: 300px;
  background: skyblue;
}
</style>