<template>
  <div>
    <ul>
      <li v-for="(item, index) in itemList" :key="index">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/second/detail/${item.id}/${item.name}`">{{ item.name }}</router-link> -->

        <!-- 跳转路由并携带params参数，to的对象写法，name不允许换成path -->
        <router-link :to="{
          name: 'xiangqing',
          params: {
            id: item.id,
            name: item.name
          }
        }">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Second',
  data() {
    return {
      itemList: [
        {id: 1, name: '消息1'},
        {id: 2, name: '消息2'},
        {id: 3, name: '消息3'}
      ]
    }
  }
}
</script>

<style>

</style>