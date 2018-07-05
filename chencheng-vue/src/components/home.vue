<template>
  <fs-content></fs-content>
</template>
<script>
    import FsContent from '@/components/common/fs-content'
    export default {
        name: 'home',
        data() {
          return {
          }
        },
        components: {
          FsContent
        },
        methods: {
          init() {
          }
        },
        created() {
          this.init();
        }
    }
</script>
<style scoped lang="less">
</style>