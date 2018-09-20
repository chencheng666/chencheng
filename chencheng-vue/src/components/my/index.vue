<template>
  <div class="content-write">
    <div class="content-body">
        <div class="article-item article-title">
            <div class="left">登录名</div>
            <div class="right">
                <Input v-model="detailData.userName" placeholder="请输入姓名" style="width: 300px" readonly></Input>
            </div>
        </div>
        <div class="article-item article-title">
            <div class="left">姓名</div>
            <div class="right">
                <Input v-model="detailData.name" placeholder="请输入姓名" style="width: 300px"></Input>
            </div>
        </div>
        <div class="article-item article-title">
            <div class="left">手机号码</div>
            <div class="right">
                <Input v-model="detailData.mobile" placeholder="请输入手机号码" style="width: 300px"></Input>
            </div>
        </div>
        <div class="article-item article-title">
            <div class="left">邮箱</div>
            <div class="right">
                <!-- <Input v-model="detailData.email" placeholder="请输入邮箱" style="width: 300px"></Input> -->
                <AutoComplete
                    v-model="detailData.email"
                    placeholder="请输入邮箱"
                    @on-search="handleSearch"
                    style="width:300px">
                    <Option v-for="item in emailList" :value="item" :key="item">{{ item }}</Option>
                </AutoComplete>
            </div>
        </div>
        <div class="article-item article-cover">
            <div class="left">头像</div>
            <div class="right">
                <Input v-model="detailData.avatar" placeholder="请用图片链接吧，上传功能完善中。。。" style="width: 300px"></Input>
            </div>
        </div>
        <div class="article-item article-type">
            <div class="left">性别</div>
            <div class="right">
                <RadioGroup v-model="detailData.gender" type="button">
                    <Radio label="male">男</Radio>
                    <Radio label="female">女</Radio>
                    <Radio label="unknow">保密</Radio>
                </RadioGroup>
            </div>
        </div>
        <div class="article-item article-content">
            <div class="left">自我简介</div>
            <div class="right">
                <Input v-model="detailData.description" type="textarea" :rows="10" placeholder="Enter something..."></Input>
            </div>
        </div>
        <div class="article-item article-footer">
            <Button type="success" large style="margin: auto" @click="update()">更新个人信息</Button>
        </div>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
          return {
            detailData: {},
            emailList: [],
          }
        },
        components: {
        },
        methods: {
            handleSearch (value) {
                this.emailList = !value || value.indexOf('@') >= 0 ? [] : [
                    value + '@qq.com',
                    value + '@sina.com',
                    value + '@163.com'
                ];
            },
          init() { // 初始化
            this.getDetailData();
          },
          getDetailData(cb) { // 获取详细数据
            this.$http.get(`/user/detail?_id=${this.$store.state.userInfo.result._id}`).then(res => {
                if(res && res.data && res.data.result) {
                    this.detailData = res.data.result.data;
                    cb && cb(this.detailData);
                }
            }).catch(e => {
                console.log(e, 'e');
            });
          },
          update() { // 更新数据
            let data = {
                _id: this.$store.state.userInfo.result._id,
                name: this.detailData.name,
                mobile: this.detailData.mobile,
                avatar: this.detailData.avatar,
                gender: this.detailData.gender,
                email: this.detailData.email,
                description: this.detailData.description,
            }
            this.$http.post('/user/update', data).then(res => {
                this.$Notice.success({
                    title: '用户信息更新成功',
                });
                this.getDetailData((res) => {
                    console.log(res, 'res少时诵诗书');
                    this.$store.dispatch('save',res);
                    localStorage.setItem('userInfo',JSON.stringify(res));
                })
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
.content-write {
  padding: 20px;
  .content-body {
      margin-top: 20px;
  }
  .article-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .left {
          flex:0 0 50px
      }
      .right {
          flex: 1
      }

  }
}
</style>