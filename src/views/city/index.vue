<script setup>
import SearchBox from '@/components/SearchBox/index.vue'
import useCity from '@/stores/modules/city';
import CityList from '@/views/city/CityList.vue'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const useCityStore = useCity();
const { cities } = storeToRefs(useCityStore);


useCityStore.getCitiesAll();


const activeName = ref('')
</script>
<template>
    <div class="city">
        <!-- searchbox -->
        <div class="city-search">
            <SearchBox></SearchBox>
        </div>
        <div class="city-box">
            <van-tabs v-model:active="activeName" color="#ff9854">
                <template v-for="(value, key, index) in cities" :key="index">
                    <van-tab :title="value.title" :name="value.title">
                        <CityList :citylist="value"></CityList>
                    </van-tab>
                </template>

            </van-tabs>

        </div>
    </div>
</template>
<style scoped lang="less"></style>