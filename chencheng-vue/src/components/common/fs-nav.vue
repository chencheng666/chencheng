<template>
    <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo" @click="goHome()">求索</div>
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
              {text:'写文章', code:'write', icon:'ios-paper'}
            ];
            this.dropList = [
              {text:'git地址', code:'git', icon:'ios-navigate'},
              {text:'资料整理', code:'css', icon:'ios-keypad'},
              {text:'路线图', code:'html', icon:'ios-analytics'},
              {text:'讨论区', code:'note', icon:'ios-paper'},
              {text:'反馈', code:'note', icon:'ios-paper'},
            ];
          },
          goHome() {
            this.$router.push({
              name: 'home'
            });
            // this.$router.go(-1);
          }
        },
        created() {
          this.init();
        }
    }
</script>
<style lang="less" scoped>
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
</style>

