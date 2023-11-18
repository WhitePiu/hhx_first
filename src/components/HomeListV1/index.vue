<script setup>
import { ref } from 'vue';

const props = defineProps({
    list: {
        type: Object,
        default: () => { }
    }
})

const rateValue = ref(props.list.commentScore * 1)
</script>
<template>
    <div class="card-item">
        <!-- 图片 -->
        <div class="img-cover">
            <img :src="list.image.url" alt="">
        </div>
        <!-- 文字框 -->
        <div class="item-content">
            <!-- 整套 1居 。。4.8分 -->
            <div class="item-info">
                <span class="info-room">{{ list.summaryText }}</span>
                <!-- <span class="info-score">{{ list.commentScore }}</span> -->
            </div>
            <!-- title -->
            <div class="item-title">
                {{ list.houseName }}
            </div>
            <!-- rate -->
            <div class="rate">
                <van-rate :model-value="rateValue" allow-half readonly size="12" color="#ffffff" void-color="#cccccc" />
                <span class="item-price">¥ {{ list.finalPrice }}</span>
            </div>
        </div>

    </div>
</template>
<style scoped lang="less">
.card-item {
    display: flex;
    flex-direction: column;
    justify-content: left;
    position: relative;
    // height: 200px;



    background: #fff;
    border-radius: 6px;
    overflow: hidden;

    .img-cover {
        // position: relative;
        width: 100%;
        // height: 100%;

        img {
            width: 100%;
            vertical-align: middle;
            // position: absolute;
            height: fit-content;
            // border-radius: 5px;
        }

    }

    .item-content {
        position: absolute;
        bottom: 0;

        color: #ffffff;
        padding: 5px;

        .item-info {
            line-height: 20px;

            .info-room {}

            .info-score {}
        }

        .item-title {
            word-break: break-all;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .rate {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .item-price {
                display: block;
            }
        }
    }

}
</style>