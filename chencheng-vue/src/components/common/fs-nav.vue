<template>
    <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo" @click="goHome()">求索</div>
        <div class="layout-search">
			<fs-search></fs-search>
        </div>
        <div class="layout-nav">
          <MenuItem v-for="(item, index) in menuItems" :name="index" :key="index" @click.native="item.onclick()">
          <Icon :type="item.icon"></Icon>{{item.text}}
          </MenuItem>
          <!-- 消息 -->
          <Badge dot>
              <Icon type="ios-bell-outline" size="26" style="color:#fff;font-size:18px"></Icon>
          </Badge>
        </div>
        <!-- 头像 -->
        <div class="layout-avatar">
			<Avatar :src="getUserInfo.avatar"/>
			<Dropdown trigger="click" style="margin-left: 20px">
				<a href="javascript:void(0)">
				<Icon type="arrow-down-b" style="color: rgba(255,255,255,.7);"></Icon>
				</a>
				<!-- 下拉菜单 -->
				<DropdownMenu slot="list">
				<DropdownItem v-for="(item, index) in dropList" :key="index" @click.native="item.onclick()">{{item.text}}</DropdownItem>
				</DropdownMenu>
			</Dropdown>
        </div>
		<Modal
			v-model="showLogin"
			footer-hide	
			title="登录/注册">
			<fs-login
      @hideModal='hideModal'></fs-login>
		</Modal>
    </Menu>
</template>
<script>
import FsContent from '@/components/common/fs-content'
import FsSearch from '@/components/common/fs-search'
import FsLogin from '@/components/login/index'
export default {
    data() {
      return {
        menuItems: null,
        dropList: null,
        showLogin:false,
      }
    },
    components: {
      FsContent,
      FsSearch,
      FsLogin
    },
    computed: {
      getUserInfo() {
        let userInfo = this.$store.state.userInfo.result;
        return userInfo;
      }
    },
    methods: {
      hideModal() {
        setTimeout(() => {
            document.querySelector('.ivu-modal-wrap').dispatchEvent(new Event('click'));
            this.$Modal.remove();
        }, 200);
      },
      init() {
        let _this = this;
        this.menuItems = [
          {text:'JS', code:'js', icon:'ios-navigate', onclick: ''},
          {text:'CSS', code:'css', icon:'ios-keypad', onclick: ''},
          {text:'HTML', code:'html', icon:'ios-analytics', onclick: ''},
          {text:'写文章', code:'write', icon:'ios-paper', onclick() {
            _this.goWrite();
          }}
        ];
        this.dropList = [
          {text:'git地址', code:'git', icon:'ios-navigate',onclick() {
            window.open("https://github.com/chencheng666/chencheng");
          }},
          {text:'资料整理', code:'css', icon:'ios-keypad',onclick() {
            window.open('https://www.baidu.com');
          }},
          {text:'路线图', code:'html', icon:'ios-analytics',onclick() {
            window.open('https://www.baidu.com');
          }},
          {text:'讨论区', code:'note', icon:'ios-paper',onclick() {
            window.open('https://www.baidu.com');
          }},
          {text:'反馈', code:'note', icon:'ios-paper',onclick() {
            window.open('https://www.baidu.com');
          }},
        ];
        if(this.getUserInfo && this.getUserInfo.userName) { // 已登录状态显示个人中心
          this.dropList.push({text:'个人中心', code:'note', icon:'ios-paper',onclick() {
            window.open('https://www.baidu.com');
          }});
        } else { // 未登录显示登录、注册
          this.dropList.push({text:'登录/注册', code:'note', icon:'ios-paper',onclick() {
            _this.showLogin = true;
          }});
        }
      },
      goHome() {
        this.$router.push({
          name: 'home'
        });
        // this.$router.go(-1);
      },
      goWrite() {
        this.$router.push({
          name: 'contentWrite'
        });
        // this.$router.go(-1);
	  },
    },
    created() {
      this.init();
    }
}
</script>
<style lang="less" scoped>
.layout-search {
	display: inline-block;
	position: absolute;
	left: 200px;
}
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

