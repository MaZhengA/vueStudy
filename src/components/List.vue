<template>
  <div v-if="imgList.length">
    <ul v-for="item in imgList" :key="item.id">
      <li>
        <img :src="item.avatar_url" alt="占位" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data() {
    return {
      imgList: []
    }
  },
  mounted() {
    this.$bus.$on('send', (data) => {
      this.imgList = data;
    })
  }
}
</script>

<style>

</style>