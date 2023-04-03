<template>
  <div>
    <button @click="isShow = !isShow ">显示/隐藏</button>
    <transition appear>
      <p v-show="isShow">你好啊</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      isShow: true
    }
  },

}
</script>

<style scoped>
  p {
    height: 40px;
    background: red;
  }
  .v-enter-active {
    animation: bounce-in 3s;
  }
  .v-leave-active {
    animation: bounce-in 3s reverse;
  }
  @keyframes bounce-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(100%);
    }
  }
</style>