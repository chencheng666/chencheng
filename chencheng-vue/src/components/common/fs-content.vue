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
                // 获取
                this.$http.get('/content').then(res => {
                    console.log(res, 'res');
                    if(res && res.data && res.data.result) {
                        this.contentList = res.data.result.contentList;
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
.content {
    display: flex;
    .content-left {
        flex: 1;
    }
    .content-right {
        flex: 0 0 300px;
        margin: 23px 10px;
    }
}
</style>
