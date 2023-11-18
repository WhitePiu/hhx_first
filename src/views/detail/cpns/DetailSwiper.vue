<script setup>
const datas = defineProps({
    swiperMain: {
        type: Array,
        default: () => ([])
    }
})
// 分类数据 
let swiperGroup = {};
const arr = datas.swiperMain

for (const item of arr) {
    // console.log(item)
    let valuesArr = swiperGroup[item.enumPictureCategory];
    if (!valuesArr) {
        valuesArr = []
        swiperGroup[item.enumPictureCategory] = valuesArr

    }
    valuesArr.push(item)
    // console.log(valuesArr)
}
// console.log(swiperGroup)
// 定义转换数据的方法
const titleReg = /【(.*?)】/i;
const getTitle = (title) => {
    // return title.replace('：', '').replace('【', '').replace('】', '')
    const titles = titleReg.exec(title);
    return titles[1]
}

// 当前索引
const getCategoryActiveIndex = (item) => {
    // console.log(item)
    let valueArr = swiperGroup[item?.enumPictureCategory];
    // return (valueArr.findIndex(data => item === data));
    if (!valueArr) return;
    return valueArr.findIndex((i) => {
        return i === item
    }) + 1;
}
</script>
<template>
    <div class="detail-swiper">
        <van-swipe :autoplay="3000" class="swiper-hy">
            <template v-for="(item, index) in swiperMain" :key="item.orderIndex">
                <van-swipe-item class="swiper-item">
                    <img :src="item.url" class="swipre-img" alt="">
                </van-swipe-item>
            </template>

            <template #indicator="{ active, total }">
                <div class="custom-indicator">
                    <template v-for="(value, key, index) in swiperGroup" :key="key">
                        <div class="custom" :class="{ active: swiperMain[active]?.enumPictureCategory == key }">
                            {{ getTitle(value[0].title) }}

                            <template v-if="swiperMain[active]?.enumPictureCategory == key">
                                <span>{{ getCategoryActiveIndex(swiperMain[active]) }}/{{ value.length }}</span>
                            </template>
                        </div>
                    </template>
                </div>
            </template>
        </van-swipe>
    </div>
</template>
<style scoped lang="less">
.detail-swiper {

    .swiper-hy {
        position: relative;
        height: auto;

        .swiper-item {
            .swipre-img {
                width: 100%;
            }
        }

        .custom-indicator {
            position: absolute;
            right: 5px;
            bottom: 5px;
            padding: 3px 7px;
            font-size: 12px;
            background: rgba(0, 0, 0, 0.3);
            display: flex;
            border-radius: 10px;

            .custom {
                color: #ffffff;
                margin: 0 5px;
                border-radius: 5px;
                padding: 0 5px;
                font-weight: bold;

                &.active {
                    background: #ffffff;
                    color: #000000;
                }
            }
        }
    }

}
</style>