<template>
    <nav class="nav-fixed">
        <div class="nav-container">
            <div class="nav-container-logo">
                <img :src="logo" alt="logo">
            </div>
            <div class="nav-container-opetation">
                <div class="operation" v-for="item in operation" :key="item.code">
                    <i class="icon-home2"></i>
                    {{item.text}}
                </div>
            </div>
            <div class="nav-container-user">{{user}}</div>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            logo: null,
            operation: null,
            user: null
        }
    },
    methods: {
        init() {
            this.logo = 'https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png';
            this.user = '陈成';
            this.operation = [
                    {text: '模板一', code: 'code1'},
                    {text: '模板二', code: 'code2'},
                    {text: '模板三', code: 'code3'},
                ];
        }
    },
    created() {
        this.init();
    }
}
</script>
<style lang="less" scoped>
.nav-fixed {
    .nav-container {
        position: fixed;
        width: 100%;
        top: 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #f0f0f0;
        .nav-container-logo {
            flex: 0 0 100px;
            background: #e7e7e7;
            font-size: 0px;
            img {
                max-height: 50px;
            }
        }
        .nav-container-opetation {
            flex: 1;
            display: flex;
            .operation {
                padding: 0 10px;
            }
        }
        .nav-container-user {
            flex: 0 0 100px;
            background: #e7e7e7;
        }
    }
}
</style>

