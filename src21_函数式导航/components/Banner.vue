<template>
  <div>
    <button @click="forward">前进</button>
    <button @click="back">后退</button>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  methods: {
    forward() {
      this.$router.forward()
    },
    back() {
      console.log(this.$router, 'this.$router')
      this.$router.back()
    }
  }
}
</script>

<style>

</style>