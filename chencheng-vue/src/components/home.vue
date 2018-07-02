<template>
  <div>
    <fs-nav>
    </fs-nav>
    <div class="container">container</div>
    <fs-footer>
    </fs-footer>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
.container {
  margin-top: 100px;
}
</style>
