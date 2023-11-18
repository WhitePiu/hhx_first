<script setup>
import HomeListV1 from '@/components/HomeListV1/index.vue';
import HomeListV2 from '@/components/HomeListV2/index.vue';
import router from '@/router';

defineProps({
    homeList: {
        type: Array,
        default: () => []
    }
})

const goDetails = (item) => {
    router.push('/detail/' + item.houseId)
}
</script>
<template>
    <div class="home-list-card">

        <template v-for="(item, index) in homeList" :key="item.data.houseId">
            <div class="item">
                <HomeListV1 @click="goDetails(item.data)" v-if="item.discoveryContentType === 9" :list="item.data">
                </HomeListV1>
                <HomeListV2 @click="goDetails(item.data)" v-else-if="item.discoveryContentType === 3" :list="item.data">
                </HomeListV2>
            </div>
        </template>
    </div>
</template>
<style scoped lang="less">
.home-list-card {
    display: flex;
    flex-wrap: wrap;

    width: 100%;

    .item {
        width: 50%;
        // padding: 7px;
        box-sizing: border-box;
        // height: 220px;
        // border-radius: 5px;
        padding: 3px;

    }

}
</style>