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
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input 
        v-show="todo.isEdit" 
        :value="todo.title" 
        style="width: 50px"
        @blur="handleBlur(todo, $event)"
        ref="inputRef"
      />
    </label>
    <div>
      <button class="edit" @click="editItem(todo)">编辑</button>
      <button class="dange" @click="deleteItem(todo.id)">删除</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  props: ['todo', 'checkedTodo', 'deleteTodo', 'editTodo'],
  methods: {
    checkedItem(id, e) {
      const checkedStatus = {checked: e.target.checked, id};
      this.checkedTodo(checkedStatus)
    },
    deleteItem(id) {
      this.deleteTodo(id)
    },
    // 编辑
    editItem(todo) {
      if (todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true
      } else {
        this.$set(todo, 'isEdit', true)
      }
      // nextTick在下次 DOM 更新循环结束之后执行延迟回调
      this.$nextTick(function() {
        this.$refs.inputRef.focus();
      })
    },
    // 失焦后修改
    handleBlur(todo,e) {
      const { value } = e.target;
      todo.title = value;
      todo.isEdit = false;
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
  .dange, .edit {
    border: none;
    background: red;
    color: white;
    cursor: pointer;
  }
  .edit {
    margin-right: 5px;
    background: blue;
  }
</style>