<template>
  <ul class="ul-list">
    <MyItem 
      v-for="todo in todos" 
      :key="todo.id" 
      :todo="todo" 
      :checkedTodo="checkedTodo"
      :deleteTodo="deleteTodo"
      :editTodo="editTodo"
    />
  </ul>
</template>

<script>
import MyItem from './MyItem.vue';
export default {
  name: 'List',
  components: { MyItem },
  props: ['todos', 'checkedTodo', 'deleteTodo', 'editTodo'],
  data() {
    return {
      
    }
  }
}
</script>

<style scoped lang="less">
.ul-list {
  padding: 0;
}
</style>