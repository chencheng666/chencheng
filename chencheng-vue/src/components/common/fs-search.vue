<template>
    <div class="search">
        <input type="text" placeholder="搜索" @focus="getFocus()" v-model="searchValue" class="search-input" @keyup.enter="search()">
        <span class="icon-search" @click="search()">
        </span>
        <div class="his-list" v-if="showHistory && hislistData">
            <div class="his-title">搜索历史</div>
            <div class="his-item" v-for="(item,index) in hislistData" :key="index" v-if="index < 5">
                <div class="item-left" @click="search(item)">{{item}}</div>
                <div class="item-right">
                    <a class="delete-his" @click="removeHis(index)">删除</a>
                </div>
            </div>
            <div class="search-empty" v-if="!hislistData.length">
                暂无搜索记录
            </div>
        </div>
    </div>
</template>
<script>
import { EventBus } from './event-bus.js';
export default {
    data() {
        return {
            showHistory: false,
            searchValue: '',
            hislistData: []
        }
    },
    methods: {
        getFocus() { // 获取到焦点，显示历史记录
            this.showHistory = true;
        },
        search(key) { // 开始执行检索
            if(key) {
                this.searchValue = key;
            }
            let historyList = this.hislistData || [];
            if(!historyList.includes(this.searchValue) && !key) {
                this.searchValue && historyList.unshift(this.searchValue);
                localStorage.setItem('searchHistory', JSON.stringify(historyList));
            }
            EventBus.$emit('search', key || this.searchValue);
        },
        getHistory() { // 获取本地存储
            return JSON.parse(localStorage.getItem('searchHistory'));
        },
        removeHis(index) {// 删除本地存储
            let historyList = this.hislistData || [];
            historyList.splice(index, index + 1);
            localStorage.setItem('searchHistory', JSON.stringify(historyList));
        }
    },
    created() {
        // 获取本地存储搜索历史
        this.hislistData = this.getHistory() || [];

        // 点击其他地方隐藏历史记录
        document.addEventListener('click', (e) => {
            if(e.target.className !== 'search-input' && e.target.className !== 'delete-his') {
                this.showHistory = false;
            }
        })
    }
}
</script>
<style lang="less" scoped>
.search {
    padding: 2px 10px;
    display: initial;
    .icon-search {
        background: #fff;
    }
    input {
        display: inline-block;
        width: 200px;
        height: 32px;
        line-height: 1.5;
        padding: 4px 7px;
        font-size: 12px;
        background: #eee;
        border: 1px solid #dcdee2;
        border-radius: 4px;
        color: #515a6e;
        background-image: none;
        position: relative;
        cursor: text;
        transition: width .3s;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        &:focus {
            // width:220px;
            outline: none;
        }
    }
    .his-list {
        position: absolute;
        background: #fff;
        padding: 10px;
        border-radius: 5px;
        left: 10px;
        top: 60px;
        line-height: 20px;
        box-shadow: #e7e7e7 1px 1px;
        .search-empty {
            padding: 20px;
            text-align: center;
        }
        &::before {
            position: absolute;
            top: -30px;
            left: 10px;
            width: 15px;
            height: 15px;
            content: ' ';
            border-width: 15px;
            border-style: solid;
            border-color: transparent transparent #fff transparent;
        }
        .his-title {
            width: 300px;
            text-align: center;
            color: #99999999;
        }
        .his-item {
            display: flex;
            align-items: center;
            width: 300px;
            padding: 10px 0px;
            justify-content: space-between;
            .item-left {
                flex: 0 0 260px;
            }
            .item-right {
                flex: 1;
            }
            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>

