<script setup>
import router from "@/router"
import useCity from '@/stores/modules/city';

const goAllcities = () => {
    router.push('/city')
}
const getMyLocation = () => {
    // console.log('222')
    navigator.geolocation.getCurrentPosition(
        res => {
            console.log('当前位置', res)
        },
        err => {
            console.log(err)
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
    )

}
const useCityStore = useCity();
const { selectedCity } = useCityStore
</script>
<template>
    <div class="location">
        <div class="home-location">
            <div class="location-left">
                <span class="home-city" @click="goAllcities">{{ selectedCity }}</span>
            </div>
            <div class="location-right" @click="getMyLocation">
                <span class="my-location">我的位置</span>
                <img class="icon-location" src="@/assets/img/home/icon_location.png" alt="">
            </div>
        </div>
        <!-- 入住日期和人数 -->
    </div>
</template>
<style scoped lang="less">
.location {
    .home-location {
        display: flex;
        height: 40px;
        justify-content: center;
        align-items: center;
        padding: 0 10px;

        .location-left {
            flex: 1;

            .home-city {
                color: #444;
                font-size: 20px;
                font-weight: 900;
            }

        }

        .location-right {
            display: flex;
            justify-content: center;
            align-items: center;

            .my-location {
                color: #9e9e9e;
                letter-spacing: 0.1rem;
            }

            .icon-location {
                width: 20px;
            }
        }
    }



}
</style>