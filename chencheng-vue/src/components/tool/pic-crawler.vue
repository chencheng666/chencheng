<template>
  <div class="content-write">
    <div class="content-body">
        <div class="article-item article-title">
            <div class="left">网站地址</div>
            <div class="right">
                <Input v-model="url" placeholder="需要爬取的图片网站" style="width: 300px"></Input>
            </div>
        </div>
        <div class="article-item article-footer">
            <Button type="success" large style="margin: auto" @click="confirm()">确定</Button>
        </div>
    </div>
    <div class="tool-list">
        <div class="tool-item" v-for="(item,index) in imgList" :key="index" @click="item.onclick && item.onclick">
            <!-- <div class="title">{{item.name}}</div> -->
            <img :src="item.originPath" alt="">
        </div>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
          return {
            url: '',
            imgList: []
          }
        },
        components: {
        },
        methods: {
          init() {
          },
          confirm() { // 获取详细数据
            let data = {
                url: this.url,
            }
            this.$http.post('/pic-crawler/get', data).then(res => {
                console.log(res, 'res');
                this.imgList = res && res.data && res.data.result&& res.data.result.cb || [];
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
    .tool-list {
        padding: 20px;
        text-align: center;
        .tool-item {
            width: 200px;
            height: 100px;
            text-align: center;
            border-radius: 4px;
            border: 1px solid #ededed;
            display: inline-flex;
            margin: 30px 10px;
            overflow: hidden;
            cursor: pointer;
            &:hover {
                box-shadow: 10px 10px 5px #888888;
            }
            img {
                text-align: center;
                max-width: 100%;
                max-height: 100%;
                margin: auto;
            }
        }
    }
}
</style>