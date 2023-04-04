<template>
  <div class="categroy">
    <h3>{{ title }}</h3>
    <slot name="center">内容</slot>
    <slot name="footer">底部</slot>
  </div>
</template>

<script>
export default {
  name: 'categroy',
  props: ['title']
}
</script>

<style>
.categroy {
  width: 200px;
  height: 300px;
  background: skyblue;
}
</style>