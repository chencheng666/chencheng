<template>
    <div class="list-item">
        <div class="item-left">
            <div class="item-header" @click.stop="goDetail(data)">{{data.title}}</div>
            <div class="item-content">{{data.content}}</div>
            <div class="item-footer">
                <div class="footer-item">
                    <Icon type="heart"></Icon>&nbsp;{{data.meta && data.meta.userName || '陈成'}}
                </div>
                <div class="footer-item">
                    <Icon type="heart"></Icon>&nbsp;{{data.meta && data.meta.likeNum || '0'}}
                </div>
                <div class="footer-item">
                    <Icon type="heart"></Icon>&nbsp;{{data.meta && data.meta.replyNum || '0'}}
                </div>
            </div>
        </div>
        <div class="item-right">
            <img :src="data.image" alt="">
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            default: {}
        }
    },
    methods: {
        goDetail() {
            let _this = this;
            this.$router.push({
                name: 'contentDetail',
                query: {
                    _id: _this.data._id
                }
            });
        }
    },
    created() {
        console.log(this.data);
    }
}
</script>
<style lang="less" scoped>
.list-item {
    display: flex;
    align-items: center;
    margin: 10px;
    border-bottom: 1px solid #e9eaec;
    .item-left {
        flex: 1;
        color: #80848f;
        padding: 10px;
        overflow: hidden;
        .item-header {
            font-size: 16px;
            color: #1c2438;
            font-weight: 500;
            line-height: 40px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            cursor: pointer;
            &:hover {
                color: #3e76f6;
                text-decoration: underline;
            }
        }
        .item-content {
            font-size: 13px;
            line-height: 25px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
        }
        .item-footer {
            display: flex;
            .footer-item {
                font-size: 12px;
                line-height: 30px;
                margin-right: 10px;
            }
        }
    }
    .item-right {
        flex: 0 0 200px;
        font-size: 0px;
        overflow: hidden;
        max-height: 120px;
        img {
            width: 100%;
            border-radius: 5px;
        }
    }
}
</style>

