<template>
    <div class="content">
        <div class="content-left">
            <fs-content-list-item v-for="(item, index) in contentList" :key="index" :data="item"></fs-content-list-item>
            <Spin size="large" fix v-if="spinShow"></Spin>
            <div class="empty" v-if="contentList&&!contentList.length"></div>
        </div>
        <div class="content-right" v-if="!isSearch">
            <fs-content-right-block></fs-content-right-block>
        </div>
    </div>
</template>
<script>
    import { EventBus } from './event-bus.js';
    import FsContentListItem from '@/components/common/fs-content-list-item';
    import FsContentRightBlock from '@/components/common/fs-content-right-block';
    export default {
        components: {
            FsContentListItem,
            FsContentRightBlock
        },
        data() {
            return {
                contentList: null,
                spinShow: false,
                isSearch: false,
            }
        },
        methods: {
            init(param) {
                let url = '';
                if(param) {
                    url = `/content?keyword=${param}`
                } else {
                    url = `/content`;
                }
                this.spinShow = true;
                // 获取
                this.$http.get(url).then(res => {
                    if(res && res.data && res.data.result) {
                        this.contentList = res.data.result.contentList;
                        this.spinShow = false;
                    }
                }).catch(e => {
                });
            }
        },
        created() {
            this.init();
            EventBus.$on('search', res => {
                this.isSearch = true;
                this.init(res);
            });
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
    .empty {
        width: 100%;
        height: 500px;
        background: url('../../assets/nodata.gif');
        background-position: center;
    }
}
</style>
