<template>
  <div>
    <h3>Home页面</h3>
    <router-link to="/home/first" active-class="active" class="home">第一个家</router-link>
    <router-link to="/home/second" active-class="active" class="home">第二个家</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
.home {
  margin-right: 20px;
  text-decoration: none;
}
.active {
  width: 50px;
  height: 20px;
  background: red;
}
</style>