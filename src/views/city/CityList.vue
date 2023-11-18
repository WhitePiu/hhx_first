
<script setup>
import { computed, defineProps } from 'vue'
import useCity from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import router from '@/router';
const props = defineProps({
    citylist: {
        type: Object,
        default: () => { }
    }
})

// 城市列表
const cities = computed(() => props.citylist.cities);
// 热门
const hotCities = computed(() => props.citylist.hotCities);

// 索引修改
const listList = computed(() => {
    const list = props.citylist.cities.map((item) => item.group);
    list.unshift('#');
    return list
})

// 选择城市返回home页，将选择的城市存到 city的store里
const useCityStore = useCity();
const choiceCity = (city) => {
    // console.log(city)
    useCityStore.selectedCity = city.cityName;
    router.back()
}
</script>
<template>
    <div class="city-list">
        <van-index-bar :sticky="false" :index-list="listList">
            <van-index-anchor index="热门" />
            <div class="hot-city">
                <van-row gutter="15">
                    <template v-for="(item, index) in hotCities" :key="item.cityId">
                        <van-col span="6">
                            <van-tag @click="choiceCity(item)" round type="warning" size="large">{{ item.cityName
                            }}</van-tag>
                        </van-col>
                    </template>
                </van-row>
            </div>

            <template v-for="(item, index) in cities" :key="index">
                <van-index-anchor :index="item.group" />
                <template v-for="(item, index) in item.cities" :key="item.cityId">
                    <van-cell :title="item.cityName" @click="choiceCity(item)" />
                </template>
            </template>
        </van-index-bar>



    </div>
</template>
<style scoped lang="less">
.city-list {
    .hot-city {
        padding: 15px;
        padding-right: 30px;

        .van-col--6 {
            text-align: center;
        }

        .van-tag {
            display: block;
            margin: 10px auto;
            color: #444;
            background-color: #fff4ec;
        }
    }
}
</style>