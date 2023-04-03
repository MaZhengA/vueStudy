<template>
  <div class="wrapper">
    <button @click="getHello">获取hello信息</button>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
   return {

   }
  },
  methods: {
    getHello() {
      axios.get('http://localhost:8080/api/student').then(res => {
        console.log(res.data, 'res')
      }, err => {
        console.log(err, 'err')
      })
    }
  }
}
</script>
<style lang="less">

</style>
