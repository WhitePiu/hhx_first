<script setup>
import useMainStore from '@/stores/modules/main';
const mainStore = useMainStore();
const loadingChange = () => {
    mainStore.isLoading = false
}
</script>
<template>
    <div class="loading" v-if="mainStore.isLoading" @click="loadingChange">
        <div class="bg">
            <img src="@/assets/img/home/full-screen-loading.gif" alt="">
        </div>

    </div>
</template>
<style scoped lang="less">
.loading {
    position: fixed;
    z-index: 999;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);

    .bg {
        width: 85px;
        height: 85px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        border-radius: 15px;
        // background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;

        img {
            width: 70px;
            height: 70px;
        }
    }
}
</style>