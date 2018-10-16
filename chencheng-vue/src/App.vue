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
    <div class="fixed-block" draggable="true" @click="isActive=!isActive">
      <!-- <fs-audio></fs-audio> -->
      来点音乐🎵
    </div>
    <div class="wangyi-music" :style="isActive?'right:0px':''">
      <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="//music.163.com/outchain/player?type=0&id=2451714141&auto=1&height=430"></iframe>
    </div>
  </div>
</template>
<script>
    import FsContent from '@/components/common/fs-content'
    // import FsAudio from '@/components/common/fs-audio'
    export default {
        name: 'App',
        data() {
          return {
            menuItems: null,
            dropList: null,
            isActive:false
          }
        },
        components: {
          FsContent,
          // FsAudio,
        },
        methods: {
          init() {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'));
            if(userInfo && userInfo.avatar) {
              this.$store.dispatch('save',userInfo);
            }
          },
        },
        created() {
          this.init();

          // 添加监听事件 隐藏网易播放器
          document.addEventListener('click', (e) => {
            if(e.target.className !== 'fixed-block') {
              this.isActive = false;
            }
          })
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
        .fixed-block {
          position: fixed;
          // width: 100px;
          // height: 100px;
          right: 0px;
        }
        .wangyi-music {
          position: fixed;
          right: -330px;
          z-index: 11;
          top: 200px;
          transition: right 1s;
          .active {
            right: 0px;
          }
        }
    }
</style>