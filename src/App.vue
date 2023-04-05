<template>
  <div class="router-wrap">
    <Banner />
    <router-link to="/home" active-class="active" class="home">Home</router-link>
    <router-link to="/about" active-class="active" class="home">About</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import Banner from './components/Banner.vue';
export default {
  name: 'App',
  components: {
    Banner
  }
}
</script>
<style lang="less">
.router-wrap {
  .home {
    margin-right: 20px;
    text-decoration: none;
  }
  .active {
    width: 50px;
    height: 20px;
    background: red;
  }
}
</style>
