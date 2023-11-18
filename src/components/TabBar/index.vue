<script setup>
import dataTabbar from '@/assets/data/tabbar'

import getAssetURL from '@/utils/load_assets';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';


// 图片选中状态
const currenIndex = ref(0);

const route = useRoute();

watch(route, (newValue) => {
    console.log(newValue.path)
    const index = dataTabbar.findIndex((item) => item.path === newValue.path);
    if (index === -1) return;
    currenIndex.value = index;
})



</script>
<template>
    <div class="tabbar">
        <van-tabbar v-model="currenIndex" active-color="#ff9854" inactive-color="#333" route>
            <template v-for="(item, index) in dataTabbar">
                <van-tabbar-item :to="item.path">
                    <span>{{ item.title }}</span>
                    <template #icon>
                        <img v-if="currenIndex === index" :src="getAssetURL(item.imgActive)">
                        <img v-else :src="getAssetURL(item.img)" alt="">
                    </template>
                </van-tabbar-item>
            </template>
        </van-tabbar>

    </div>
</template>
<style scoped lang="less">
.tabbar {
    .van-tabbar-item__icon img {
        height: 26px;
    }
}
</style>