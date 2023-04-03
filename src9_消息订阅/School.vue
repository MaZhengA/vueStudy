<template>
  <div class="school">
    <h3>学校: {{ school }}</h3>
    <h3>地址: {{ address }}</h3>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  name: 'School',
  data() {
    return {
      school: '浙大',
      address: '杭州'
    }
  },
  mounted() {
    this.pubId = PubSub.subscribe('hello', function(msg, data) {
      console.log(msg, data, '有人发布了消息')
    })
  },
  beforeDestroy() {
    PubSub.unsubscribe(this.pubId);
  }
}
</script>

<style scoped>
.school {
  background: blue;
}
</style>