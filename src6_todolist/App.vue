<template>
  <div class="wrapper">
    <MyHeader :receive="receive"></MyHeader>
    <List :todos="todos" :checkedTodo="checkedTodo" :deleteTodo="deleteTodo"></List>
    <Footer :todos="todos" :cleanAllDone="cleanAllDone" :checkedAllTodo="checkedAllTodo"></Footer>
  </div>
</template>
<script>
import MyHeader from './components/MyHeader.vue';
import List from './components/List.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  components: {
    MyHeader,
    List,
    Footer
  },
  methods: {
    receive(todoObj) {
      this.todos.push(todoObj);
    },
    checkedTodo(checkedStatus) {
      this.todos.forEach(item => {
        if (item.id === checkedStatus.id) {
          item.done = checkedStatus.checked
        }
      })
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((item, index) => item.id !== id)
    },
    cleanAllDone() {
      this.todos = this.todos.filter((item) => !item.done);
    },
    checkedAllTodo(checked) {
      this.todos.forEach(item => item.done = checked)
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
}
</script>
<style lang="less">
  body {
    ul, li {
      list-style: none
    }
  }
  .wrapper {
    width: 260px;
    border: 1px solid #666;
    padding: 10px
  }
</style>
