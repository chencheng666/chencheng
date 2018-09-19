<template>
  <div class="layout" style="margin-top: -1px;" id="app">
    <Layout>
      <!-- 头部 -->
      <Header :style="{position: 'fixed', width: '100%','z-index': 999}">
        <fs-nav></fs-nav>
      </Header>
      <!-- 内容区 -->
      <Content :style="{margin: '88px 70px 0', background: '#fff', minHeight: '500px'}">
        <router-view></router-view>
        <!-- 回到顶部 -->
        <BackTop></BackTop>
      </Content>
      <!-- 底部 -->
      <Footer class="layout-footer-center">2018-2020 &copy;chencheng</Footer>
    </Layout>
  </div>
</template>
<script>
    import FsContent from '@/components/common/fs-content'
    export default {
        name: 'App',
        data() {
          return {
            menuItems: null,
            dropList: null,
          }
        },
        components: {
          FsContent
        },
        methods: {
          init() {
          },
        },
        created() {
          this.init();
        }
    }
</script>
<style scoped lang="less">
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        .layout-footer-center{
            text-align: center;
        }
    }
</style>