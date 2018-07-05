<template>
  <div class="content-write">
    <div class="action-bar">
        <div class="article-item article-category">
            <div class="left">分类</div>
            <div class="right">
                <RadioGroup v-model="category" type="button">
                    <Radio label="随笔"></Radio>
                    <Radio label="JS"></Radio>
                    <Radio label="HTML"></Radio>
                    <Radio label="CSS"></Radio>
                </RadioGroup>
            </div>
        </div>
        <div class="article-item article-type">
            <div class="left">类型</div>
            <div class="right">
                <RadioGroup v-model="type" type="button">
                    <Radio label="常规文本"></Radio>
                    <Radio label="markdown"></Radio>
                </RadioGroup>
            </div>
        </div>
    </div>
    <div class="content-body">
        <div class="article-item article-title">
            <div class="left">标题</div>
            <div class="right">
                <Input v-model="title" placeholder="想个霸气点的标题吧" style="width: 300px"></Input>
            </div>
        </div>
        <div class="article-item article-cover">
            <div class="left">封面</div>
            <div class="right">
                <Input v-model="cover" placeholder="请用图片链接吧，上传功能完善中。。。" style="width: 300px"></Input>
            </div>
        </div>
        <div class="article-item article-content">
            <div class="left">内容</div>
            <div class="right">
                <Input v-model="content" type="textarea" :rows="10" placeholder="Enter something..."></Input>
            </div>
        </div>
        <div class="article-item article-images">
            <div class="left">图片</div>
            <div class="right">
                <!-- <Upload
                    ref="upload"
                    :show-upload-list="false"
                    :format="['jpg','jpeg','png']"
                    :max-size="2048"
                    multiple
                    type="drag"
                    action="//jsonplaceholder.typicode.com/posts/"
                    style="display: inline-block;width:58px;">
                    <div style="width: 58px;height:58px;line-height: 58px;">
                        <Icon type="camera" size="20"></Icon>
                    </div>
                </Upload>
                <Modal title="View Image" v-model="visible">
                    <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
                </Modal> -->
            </div>
        </div>
        <div class="article-item article-footer">
            <Button type="success" large style="margin: auto" @click="uploadArtical()">发布文章</Button>
        </div>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
          return {
            detaiData: {},
            category: '随笔',
            type: '常规文本',
            title: '',
            content: '',
            cover: ''
          }
        },
        components: {
        },
        methods: {
          init() {
          },
          uploadArtical() { // 获取详细数据
            let data = {
                title: this.title,
                cover: this.cover,
                type: this.type,
                category: this.category,
                content: this.content,
                meta: {
                    userName: 'chengcheng',
                    likeNum: '1234',
                    replyNum: '323',
                }
            }
            this.$http.post('/content/add', data).then(res => {
                console.log(res, 'res');
                this.$router.go(-1);
                // if(res && res.data && res.data.result) {
                //     this.detaiData = res.data.result.data;
                // }
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