<template>
  <div v-show="todos.length">
    <input type="checkbox" :checked="isAll" @click="checkedAll"/>
    已完成{{ count }}/{{ todos.length }}件事
    <button class="clear" @click="clearAllDone">清楚已完成的任务</button>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: ['todos', 'cleanAllDone', 'checkedAllTodo'],
  
  computed: {
    count() {
      return this.todos.filter(item => item.done == true).length;
    },
    isAll() {
      return this.count === this.todos.length && this.todos.length > 0;
    }
  },
  methods: {
    clearAllDone() {
      this.cleanAllDone()
    },
    checkedAll(e) {
      this.checkedAllTodo(e.target.checked)
    }
  }
}
</script>

<style lang="less" scoped>
  .clear {
    background: red;
    color: white;
    border: none;
  }
</style>>