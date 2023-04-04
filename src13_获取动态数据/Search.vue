<template>
  <div>
    <input type="text" placeholder="输入搜索内容" v-model="keyword" />
    <button @click="searchImg">search</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'search',
  data() {
    return {
      keyword: '',
      // imgList: []
    }
  },
  methods: {
    searchImg() {
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(res => {
        this.$bus.$emit('send', res.data.items)
      })
    }
  }
}
</script>

<style>

</style>