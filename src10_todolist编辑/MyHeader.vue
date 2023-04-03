<template>
  <input placeholder="请输入todo" v-model="title" @keyup.enter="add" />
</template>

<script>
import { nanoid } from 'nanoid';
export default {
  name: 'Header',
  props: ['receive'],
  data() {
    return {
      title: ''
    }
  },
  methods: {
    add() {
      if (this.title.length > 0) {
        const todoObj = {
          id: nanoid(),
          title: this.title,
          done: false,
          isEdit: false
        }
        this.receive(todoObj);
        this.title = ''
      }
    }
  }
}
</script>

<style>

</style>