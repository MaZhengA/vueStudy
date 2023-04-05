<template>
  <div>
    <h3>{{ $store.state.sum }}</h3>
    <h3>扩大10倍后的值{{ $store.getters.bigSum }}</h3>
    <h3 style="color:red">下方组件总人数{{ $store.state.personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>  
</template>

<script>
export default {
  name: 'count',
  data() {
    return {
      n: 1
    }
  },
  methods: {
    increment() {
      // this.count += 1;
      this.$store.dispatch('jia', this.n)
    },
    decrement() {
      // this.count -= 1;
      this.$store.dispatch('jian', this.n)
    }
  }
}
</script>

<style>
button {
  margin: 5px
}
</style>