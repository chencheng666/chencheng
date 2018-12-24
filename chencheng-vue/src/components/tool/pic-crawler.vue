<template>
  <div class="content-write">
    <div class="content-body">
        <div class="article-item article-title">
            <div class="left">网址</div>
            <div class="right">
                <Input v-model="url" suffix="ios-search" :placeholder="placeholder" style="width: 300px"></Input>
            </div>
        </div>
        <div class="article-item article-footer">
            <Button type="success" large style="margin: auto" @click="confirm()">确定</Button>
        </div>
    </div>
    <div class="tool-list">
        <div class="tool-item" draggable="true" v-for="(item,index) in imgList" :key="index" @click="showImage(item)" :style="{'background': `url(${$http.defaults.baseURL + item.publicPath})`,'background-repeat':'no-repeat','background-size':'cover'}">
            <!-- <img :src="$http.defaults.baseURL + item.publicPath" alt=""> -->
        </div>
    </div>
    <Spin size="large" fix v-if="loading"></Spin>
    <!-- 图片放大Modal -->
    <Modal title="查看大图" v-model="showImg" @on-ok="downLoadImg()" ok-text="下载">
        <img :src="imgSrcForShow" style="width: 100%">
    </Modal>
  </div>
</template>
<script>
    export default {
        data() {
          return {
            url: '',
            imgList: [],
            loading: false,
            timer: null,
            placeholder: 'https://m.mzitu.com/hot/',
            showImg: false,
            imgSrcForShow: ''
          }
        },
        components: {
        },
        methods: {
            downLoadImg() {
                debugger;
                let aLink = document.createElement('a');
                aLink.download = this.imgSrcForShow.match(/[^\/]*?\.(jpe?g|png|gif|svg)/ig)[0];
                aLink.href = window.URL.createObjectURL(this.imgSrcForShow);
                document.body.appendChild(aLink);
                aLink.click();
            },
            showImage(item) {
                this.imgSrcForShow = this.$http.defaults.baseURL + item.publicPath;
                this.showImg = true;
            },
            init() {
            },
            confirm() { // 获取详细数据
                this.url = this.url || this.placeholder;
                if(!this.url) {
                    this.$Message.warning('请输入网址');
                    return;
                } else if(!/(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?/gi.test(this.url)) {
                    this.$Message.warning('网址不正确');
                    return;
                }
                let data = {
                    url: this.url,
                }
                this.loading = true;
                this.$http.post('/pic-crawler/get', data).then(res => {
                    console.log(res, 'res');
                    this.loading = false;
                    this.imgList = res && res.data && res.data.result && (res.data.result.cb instanceof Array) && res.data.result.cb || [];
                }).catch(e => {
                    this.loading = false;
                    this.$Message.error('失败');
                    console.log(e, 'e');
                });

                this.timer = setTimeout(() => {
                    if(this.loading) {
                        this.loading = false;
                        this.$Message.warning('抓取超时');
                    }
                    clearTimeout(this.timer);
                },10000)
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