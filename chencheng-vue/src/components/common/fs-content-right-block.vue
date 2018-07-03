<template>
<div class="right-block">
    <!-- 图片轮播 -->
    <div class="pic-carousel">
        <div class="title">友情链接</div>
        <Carousel autoplay loop :autoplay-speed="3000">
            <CarouselItem v-for="(item, index) in picList" :key="index">
                <div class="pic-item">
                    <img :src="item.url" :alt="item.desc">
                </div>
            </CarouselItem>
        </Carousel>
    </div>
    <!-- 讨论组 -->
    <div class="discus-block">
        <div class="title">讨论组</div>
        <Collapse accordion>
            <Panel :name="String(index + 1)" v-for="(item, index) in memList" :key="index">
                {{item.name}}
                <p slot="content">{{item.content}}</p>
            </Panel>
        </Collapse>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            picList: null, // 轮播图片
            memList: null, // 讨论组成员
        }
    },
    methods: {
        init() {
            this.picList = [
                {url: 'http://up.enterdesk.com/edpic_source/c4/3d/b6/c43db6e6b1b6fc0ccd42daa0211bed2c.jpg', desc: ''},
                {url: 'http://imgsrc.baidu.com/imgad/pic/item/4610b912c8fcc3cef90a7ae79845d688d53f201f.jpg', desc: ''},
                {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530597346501&di=8ce3c9946cee8443a30834cce9a32927&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fac4bd11373f0820207282ceb41fbfbedaa641baf.jpg', desc: ''}
            ];
            this.memList = [
                {name: '史蒂夫·乔布斯', content: '史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。', avatar: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=0aa02418890a19d8df0e8c575293e9ee/a08b87d6277f9e2fc11760a11630e924b899f37d.jpg'},
                {name: '陈成', content: '史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。', avatar: ''},
                {name: '刘忠华', content: '史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。', avatar: ''},
                {name: '张可心', content: '史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。', avatar: ''},
            ];
        }
    },
    created() {
        this.init();
    }
}
</script>
<style lang="less" scoped>
.right-block {
    .pic-carousel {
        width: 300px;
        text-align: center;
        .pic-item {
            height: 200px;
        }
    }
    .title {
        padding: 10px;
        color: orange;
        text-align: center;
        background: #f8f8f9;
        margin-top: 10px;
    }
}
</style>

