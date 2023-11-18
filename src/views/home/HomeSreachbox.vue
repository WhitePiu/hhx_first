<script setup>
import LocationArea from './cpv/LocationArea.vue'
import DateSelected from './cpv/DateSelected.vue'

import useHomeHotSuggests from "@/stores/modules/home";
import { storeToRefs } from 'pinia';

// hotsuggests
const useHomeStore = useHomeHotSuggests();
const { hotSuggests } = storeToRefs(useHomeStore);
useHomeStore.getHotSuggests();


</script>
<template>
    <div class="home-sreachbox">
        <!-- 位置 -->
        <LocationArea></LocationArea>
        <!-- 日期 -->
        <DateSelected></DateSelected>
        <!-- 价格 -->
        <div class="home-item home-price">
            <div class="pricebox">
                <span class="price_info">价格不限</span>
            </div>
            <div class="personbox">
                <span class="price_info">人数不限</span>
            </div>
        </div>
        <!-- 关键字/位置/民宿名 -->
        <div class="home-item">
            <span class="price_info">关键字/位置/民宿名 </span>
        </div>
        <div class="home-suggets">
            <template v-for="(item, index) in hotSuggests" :key="index">
                <van-tag round type="primary"
                    :style="{ background: item.tagText.background.color, color: item.tagText.color }">{{ item.tagText.text
                    }}</van-tag>
            </template>


        </div>
        <!-- 开始搜索 -->
        <div class="home-searchbtn">
            <van-button class="btn-size" round block color="linear-gradient(90deg, #fa8c1d, #fcaf3f)">开始搜索</van-button>
        </div>
    </div>
</template>
<style scoped lang="less">
.home-sreachbox {
    .home-item {
        display: flex;
        padding: 0 15px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #f8f8f8;

        .price_info {
            color: #999999;
            font-size: 15px;
        }
    }

    .home-price {
        .pricebox {
            flex: 1;
        }

        .personbox {
            width: 30%;
        }
    }

    .home-suggets {
        padding: 10px 20px;

        .van-tag {
            padding: 3px 15px;
            margin: 5px;
        }
    }

    .home-searchbtn {
        padding: 15px;

        .btn-size {
            font-size: 22px;
            letter-spacing: 0.3rem;

        }
    }


}
</style>