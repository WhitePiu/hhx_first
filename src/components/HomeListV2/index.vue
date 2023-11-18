<script setup>
import { ref } from 'vue';

const props = defineProps({
    list: {
        type: Object,
        default: () => { }
    }
})
// const imgURL = ref(props.list.image.url)


</script>
<template>
    <div class="card-item bgf">
        <!-- 图片 -->
        <div class=" img-cover">
            <img v-if="list.image" :src="list.image.url" alt="">
        </div>
        <!-- 文字框 -->
        <div class="item-content">
            <!-- location -->
            <div class="item-location">
                <img src="@/assets/img/home/location.png" alt="">
                <span class="location-title">{{ list.location }}</span>
            </div>
            <!-- title -->
            <div class="item-title">
                {{ list.houseName }}
            </div>
            <!-- 整套 1居 。。4.8分 -->
            <div class="item-info">
                <span class="info-room">{{ list.summaryText }}</span>
                <!-- <span class="info-score">{{ list.commentScore }}</span> -->
            </div>
            <div class="item-price">
                <div class="now-price">¥{{ list.finalPrice }}</div>
                <div class="discount-price">¥{{ list.productPrice }}</div>
                <div class="down-price">
                    <!-- list.priceTipBadge.text 有可能为null -->
                    <van-tag round class="priceibg" v-if="list.priceTipBadge">
                        {{ list.priceTipBadge.text }}
                    </van-tag>
                    <!-- <span class="priceibg">{{ list.priceTipBadge.text }}</span> -->
                </div>

            </div>
        </div>

    </div>
</template>
<style scoped lang="less">
.card-item {
    display: flex;
    flex-direction: column;
    justify-content: left;

    // height: 200px;
    border-radius: 6px;
    overflow: hidden;

    &.bgf {
        background-color: #ffffff;
    }

    .img-cover {

        width: 100%;


        img {
            width: 100%;
            vertical-align: middle;

            // border-radius: 5px;
        }

    }

    .item-location {
        display: flex;
        align-items: center;
        justify-content: left;

        img {
            width: 13px;
            height: 13px;
        }

        span {
            color: #444;
            margin-left: 7px;
        }
    }

    .item-content {

        color: #000000;
        padding: 3px 5px 5px 5px;

        .item-info {
            line-height: 16px;
            font-size: 12px;
            color: #A3A3A3;


            .info-room {
                margin-top: 5px;
            }


        }

        .item-title {
            word-break: break-all;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 13px;
            margin-top: 5px;
        }

        .item-price {
            display: flex;


            .now-price {
                color: #ff9854;
                padding-right: 5px;
            }

            .discount-price {
                font-size: 12px;
                color: #999999;
                padding-right: 5px;
                text-decoration: line-through;
            }

            .down-price {

                .priceibg {
                    font-size: 12px;
                    color: #ffffff;
                    background: linear-gradient(90deg, #FF6666, #FF9F9F);
                }

            }
        }
    }

}
</style>