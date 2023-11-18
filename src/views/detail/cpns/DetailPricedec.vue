<script setup>
defineProps({
    introduction: {
        type: Object,
        default: () => ({})
    },
    ensure: {
        type: Object,
        default: () => ({})
    }
})
</script>
<template>
    <div class="price-dec">
        <h2>{{ introduction.title }}</h2>
        <p class="price-content">
            {{ introduction.introduction }}
        </p>
        <div class="price-bottom">
            <img class="price-img" :src="ensure.icon" alt="">
            <p class="price-text">弘源旅途, 永无止境!</p>
        </div>

    </div>
</template>
<style scoped lang="less">
.price-dec {
    padding: 15px;
    padding-bottom: 30px;
    background: #fff;
    margin-top: 15px;
    display: flex;
    flex-direction: column;

    .price-content {
        margin-top: 2.66667vw;
        font-size: 3.2vw;
        line-height: 1.5;
        color: #78716C;
        text-align: justify;
        text-indent: 2rem;
    }

    .price-bottom {
        padding: 50px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .price-img {
            width: 30%;
        }

        .price-text {
            margin-top: 3.2vw;
            font-size: 3.2vw;
            color: #7688a7;

        }
    }
}
</style>