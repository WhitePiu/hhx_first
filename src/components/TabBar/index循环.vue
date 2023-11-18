<script setup>
import dataTabbar from '@/assets/data/tabbar'
import getAssetURL from '@/utils/load_assets';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// 图片选中状态
const currenIndex = ref(0);
const router = useRouter();
const itemClick = (item, index) => {
    currenIndex.value = index
    router.push(item.path)
}
</script>
<template>
    <div class="tabbar">
        <div class="tab-item" v-for="(item, index) in dataTabbar" :class="{ active: currenIndex === index }"
            @click="itemClick(item, index)">
            <template v-if="currenIndex !== index">
                <img class="item-img" :src="getAssetURL(item.img)" alt="">
            </template>
            <template v-else>
                <img class="item-img" :src="getAssetURL(item.imgActive)" alt="">
            </template>

            <span class="item-name">{{ item.title }}</span>
        </div>
    </div>
</template>
<style scoped lang="less">
.tabbar {
    left: 0;
    right: 0;
    height: 55px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: aliceblue;

    .tab-item {
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;

        &.active {
            color: var(--primmary-color);

            .item-name {
                color: inherit;
            }
        }

        .item-img {
            width: 50%;
        }

        .item-name {
            font-size: 13px;
            color: #333;
        }
    }
}
</style>