<template>
    <div class="tool-page">
        <div class="tool-list">
            <div class="tool-item" v-for="(item,index) in toolList" :key="index" @click="item.onclick">
                <div class="title">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            toolList: null
        }
    },
    components: {
    },
    methods: {
        init() {
            let _this = this;
            this.toolList = [
                { name: '图片爬取', code: 'pic-crawler', onclick() {
                    _this.$router.push({
                        name: 'pic-crawler'
                    });
                }},
                // {name: '图片爬取2', code: 'pic-crawler'},
                // {name: '图片爬取3', code: 'pic-crawler'},
                // {name: '图片爬取4', code: 'pic-crawler'},
                // {name: '图片爬取5', code: 'pic-crawler'},
                // {name: '图片爬取6', code: 'pic-crawler'},
            ]
        }
    },
    created() {
        this.init();
    }
}
</script>
<style scoped lang="less">
.tool-page {
    padding: 50px;
    .tool-list {
        padding: 20px;
        text-align: center;
        .tool-item {
            width: 200px;
            height: 100px;
            padding: 20px;
            text-align: center;
            border-radius: 4px;
            border: 1px solid #ededed;
            display: inline-flex;
            margin: 30px 10px;
            cursor: pointer;
            &:hover {
                box-shadow: 10px 10px 5px #888888;
            }
            .title {
                margin: auto;
                display: inline;
                font-size: 20px;
                font-weight: 500;
            }
        }
    }
}
</style>