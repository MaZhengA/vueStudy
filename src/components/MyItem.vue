<template>
  <li class="li-style">
    <label>
      <input 
        type="checkbox" 
        :checked="todo.done" 
        @click="checkedItem(todo.id, $event)" 
      />
      <!-- v-model实现双向绑定可以直接修改，不太推荐，因为直接修改了props -->
      <!-- <input type="checkbox" v-model="todo.done" />  -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="dange" @click="deleteItem(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  props: ['todo', 'checkedTodo', 'deleteTodo'],
  methods: {
    checkedItem(id, e) {
      const checkedStatus = {checked: e.target.checked, id};
      this.checkedTodo(checkedStatus)
    },
    deleteItem(id) {
      this.deleteTodo(id)
    }
  }
}
</script>

<style scoped lang="less">
  .li-style {
    border: 1px solid #666;
    padding: 3px;
    margin: 3px;
    display: flex;
    justify-content: space-between;
  }
  .dange {
    border: none;
    background: red;
    color: white;
    cursor: pointer;
  }
</style>