<template>
  <div class="content-detail">
    <div class="title">
      {{detaiData.title}}
    </div>
    <div class="cover">
      <img src="" alt="">
    </div>
    <div class="content">
      {{detaiData.content}}
    </div>
    <div class="image"></div>
  </div>
</template>
<script>
    export default {
        data() {
          return {
            detaiData: {}
          }
        },
        components: {
        },
        methods: {
          init() {
            this.getDetail();
          },
          getDetail() { // 获取详细数据
            let _this = this;
            this.$http.get('/content/detail', {
              params: {
                _id: _this.$route.query._id
              }
            }).then(res => {
                console.log(res, 'res');
                if(res && res.data && res.data.result) {
                    this.detaiData = res.data.result.data;
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
.content-detail {
  padding: 20px;
  .title {
    color: #1c2438;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin: 20px;
  }
  .cover {
    text-align: center;
  }
  .content {
    color: #495060;
    line-height: 30px;
    font-size: 15px;
  }
}
</style>