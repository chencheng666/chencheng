<template>
  <div class="login" @keyup.enter="confirm()">
	  <div class="login-item">
    	<Input prefix="icon-search" placeholder="输入用户名" style="width: auto" v-model="username"/>
	  </div>
	  <div class="login-item">
    	<Input prefix="icon-search" placeholder="输入密码" style="width: auto" v-model="password" type="password"/>
	  </div>
	  <div class="login-item" v-if="mode !== 'signin'">
    	<Input prefix="icon-search" placeholder="再次输入密码" style="width: auto" v-model="passwordConfirm" type="password"/>
	  </div>
	  <div class="login-item hint" v-if="mode === 'signin'">
    	<span>没有账号
			<a @click="goSignup()">注册</a>
		</span>
	  </div>
	  <div class="login-item hint" v-else>
    	<span>已有账号
			<a @click="goSignin()">登录</a>
		</span>
	  </div>
	  <div class="login-item">
    	<Button type="primary" @click="confirm()">{{mode === 'signin' ? '登录':'注册'}}</Button>
	  </div>
  </div>
</template>
<script>
    export default {
      name: 'login',
      data() {
        return {
			username: '',
			password: '',
			passwordConfirm: '',
			mode: 'signin'
        }
      },
      components: {},
      methods: {
		init() {

		},
		goSignup() { // 切换为注册模式
			this.mode = 'signup';
		},
		goSignin() { // 切换为登录模式
			this.mode = 'signin';
		},
		confirm() { // 确认登录、注册
			let url = '';
			if(!this.password || (this.mode === 'signup' && !this.passwordConfirm) || !this.username) {
				this.$Message.warning('请输入完整信息');
				return;
			}
			if(this.mode === 'signup' && this.password === this.passwordConfirm) {
				url = '/user/signup';
			} 
			if(this.mode === 'signin') {
				url = '/user/signin';
			}
			let data = {
				userName: this.username,
				password: this.password,
			}
			this.$http.post(url, data).then(res => {
				console.log(res, 'res');
				if(res.data.result.code === 'success') {
					this.$Message.success(res.data.result.msg);
					if(this.mode === 'signup') {
						this.mode === 'signin'
					} else {
						console.log(res.data.result,'result~~~');
						let userInfo = res.data.result.cb;
						userInfo.avatar = userInfo.avatar || 'http://img12.3lian.com/gaoqing02/01/58/85.jpg';
						this.$store.dispatch('save',userInfo);

						localStorage.setItem('userInfo',JSON.stringify(userInfo));

						this.$emit('hideModal');
						// setTimeout(() => {
                        //     this.$Modal.remove();
                        // }, 1000);
					}
				} else {
					this.$Message.error(res.data.result.msg);
				}
            }).catch(e => {
                console.log(e, 'e');
            });
		}
      },
      created() {
        this.init();
      }
    }
</script>
<style scoped lang="less">
.login {
  margin: auto;
  text-align: center;
  .login-item {
	  padding: 10px 0px;
  }
  .hint {
	  padding: 2px;
	  font-size: 12px;
	  color: #99999999;
  }
}
</style>