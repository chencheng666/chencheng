<template>
    <div class="content">
        <div class="content-left">
            <fs-content-list-item v-for="(item, index) in contentList" :key="index" :data="item"></fs-content-list-item>
        </div>
        <div class="content-right">
            <fs-content-right-block></fs-content-right-block>
        </div>
    </div>
</template>
<script>
    import FsContentListItem from '@/components/common/fs-content-list-item';
    import FsContentRightBlock from '@/components/common/fs-content-right-block';
    export default {
        components: {
            FsContentListItem,
            FsContentRightBlock
        },
        data() {
            return {
                contentList: null
            }
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
                this.contentList = [
                    {title:'两年，60万字，说说写作“失败者”的感悟', content:'五一当天，简书给我发过来我的两周年创作提醒，把我吓了一跳，不知不觉两年过去了，就这样漫无目的的写了将近60万字，真的是五一劳动节很好的一个礼物，说明自己一直在“码农”的路上辛勤的耕耘着，唯一的遗憾是依旧没有签约，依旧没有“红”，依旧在自己平凡的工作和生活中平凡的活着，好“失败”。', image:'https://upload-images.jianshu.io/upload_images/1994601-c1db6b8f374f8b4d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700', meta: {userName: '大漠孤烟直', likeNum:'20', replyNum: '114'}},
                    {title:'两年，60万字，说说写作“失败者”的感悟', content:'五一当天，简书给我发过来我的两周年创作提醒，把我吓了一跳，不知不觉两年过去了，就这样漫无目的的写了将近60万字，真的是五一劳动节很好的一个礼物，说明自己一直在“码农”的路上辛勤的耕耘着，唯一的遗憾是依旧没有签约，依旧没有“红”，依旧在自己平凡的工作和生活中平凡的活着，好“失败”。', image:'https://upload-images.jianshu.io/upload_images/1994601-c1db6b8f374f8b4d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700', meta: {userName: '大漠孤烟直', likeNum:'20', replyNum: '114'}},
                    {title:'两年，60万字，说说写作“失败者”的感悟', content:'五一当天，简书给我发过来我的两周年创作提醒，把我吓了一跳，不知不觉两年过去了，就这样漫无目的的写了将近60万字，真的是五一劳动节很好的一个礼物，说明自己一直在“码农”的路上辛勤的耕耘着，唯一的遗憾是依旧没有签约，依旧没有“红”，依旧在自己平凡的工作和生活中平凡的活着，好“失败”。', image:'https://upload-images.jianshu.io/upload_images/1994601-c1db6b8f374f8b4d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700', meta: {userName: '大漠孤烟直', likeNum:'20', replyNum: '114'}},
                    {title:'两年，60万字，说说写作“失败者”的感悟', content:'五一当天，简书给我发过来我的两周年创作提醒，把我吓了一跳，不知不觉两年过去了，就这样漫无目的的写了将近60万字，真的是五一劳动节很好的一个礼物，说明自己一直在“码农”的路上辛勤的耕耘着，唯一的遗憾是依旧没有签约，依旧没有“红”，依旧在自己平凡的工作和生活中平凡的活着，好“失败”。', image:'https://upload-images.jianshu.io/upload_images/1994601-c1db6b8f374f8b4d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700', meta: {userName: '大漠孤烟直', likeNum:'20', replyNum: '114'}},
                    {title:'两年，60万字，说说写作“失败者”的感悟', content:'五一当天，简书给我发过来我的两周年创作提醒，把我吓了一跳，不知不觉两年过去了，就这样漫无目的的写了将近60万字，真的是五一劳动节很好的一个礼物，说明自己一直在“码农”的路上辛勤的耕耘着，唯一的遗憾是依旧没有签约，依旧没有“红”，依旧在自己平凡的工作和生活中平凡的活着，好“失败”。', image:'https://upload-images.jianshu.io/upload_images/1994601-c1db6b8f374f8b4d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700', meta: {userName: '大漠孤烟直', likeNum:'20', replyNum: '114'}},
                    {title:'两年，60万字，说说写作“失败者”的感悟', content:'五一当天，简书给我发过来我的两周年创作提醒，把我吓了一跳，不知不觉两年过去了，就这样漫无目的的写了将近60万字，真的是五一劳动节很好的一个礼物，说明自己一直在“码农”的路上辛勤的耕耘着，唯一的遗憾是依旧没有签约，依旧没有“红”，依旧在自己平凡的工作和生活中平凡的活着，好“失败”。', image:'https://upload-images.jianshu.io/upload_images/1994601-c1db6b8f374f8b4d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700', meta: {userName: '大漠孤烟直', likeNum:'20', replyNum: '114'}},
                ]
            }
        },
        created() {
            this.init();
        }
    }
</script>
<style scoped lang="less">
.content {
    display: flex;
    .content-left {
        flex: 1;
    }
    .content-right {
        flex: 0 0 300px;
    }
}
</style>
