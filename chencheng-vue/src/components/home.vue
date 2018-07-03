<template>
  <div class="layout" style="margin-top: -1px;">
    <Layout>
      <!-- 头部 -->
      <Header :style="{position: 'fixed', width: '100%','z-index': 999}">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">求索</div>
          <div class="layout-nav">
            <MenuItem v-for="(item, index) in menuItems" :name="index" :key="index">
            <Icon :type="item.icon"></Icon>{{item.text}}
            </MenuItem>
            <!-- 消息 -->
            <Badge dot>
              <Icon type="ios-bell-outline" size="26" style="color:#fff;font-size:18px"></Icon>
            </Badge>
          </div>
          <!-- 头像 -->
          <div class="layout-avatar">
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            <Dropdown trigger="click" style="margin-left: 20px">
              <a href="javascript:void(0)">
                <Icon type="arrow-down-b" style="color: rgba(255,255,255,.7);"></Icon>
              </a>
              <!-- 下拉菜单 -->
              <DropdownMenu slot="list">
                <DropdownItem v-for="(item, index) in dropList" :key="index">{{item.text}}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Menu>
      </Header>
      <!-- 内容区 -->
      <Content :style="{margin: '88px 70px 0', background: '#fff', minHeight: '500px'}">
        <fs-content></fs-content>
        <!-- 回到顶部 -->
        <BackTop></BackTop>
      </Content>
      <!-- 底部 -->
      <Footer class="layout-footer-center">2018-2020 &copy; 后宫群</Footer>
    </Layout>
  </div>
</template>
<script>
    import FsContent from '@/components/common/fs-content'
    export default {
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
            this.menuItems = [
              {text:'JS', code:'js', icon:'ios-navigate'},
              {text:'CSS', code:'css', icon:'ios-keypad'},
              {text:'HTML', code:'html', icon:'ios-analytics'},
              {text:'随笔', code:'note', icon:'ios-paper'}
            ];
            this.dropList = [
              {text:'git地址', code:'git', icon:'ios-navigate'},
              {text:'资料整理', code:'css', icon:'ios-keypad'},
              {text:'路线图', code:'html', icon:'ios-analytics'},
              {text:'讨论区', code:'note', icon:'ios-paper'},
              {text:'反馈', code:'note', icon:'ios-paper'},
            ];
          }
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
        .layout-logo{
            width: 100px;
            height: 30px;
            background: #5b6270;
            border-radius: 3px;
            float: left;
            position: relative;
            top: 15px;
            left: 20px;
            line-height: 30px;
            text-align: center;
            font-size: 20px;
            color: orange;
        }
        .layout-nav{
            width: 420px;
            margin: 0 auto;
            margin-right: 20px;
        }
        .layout-avatar{
          position: absolute;
          right: -20px;
          top: 0px;
        }
        .layout-footer-center{
            text-align: center;
        }
    }
</style>