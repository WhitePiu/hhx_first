<script setup>
import { computed, ref } from 'vue'
import useMainStore from "@/stores/modules/main";
import { storeToRefs } from 'pinia';


const useMain = useMainStore()
const { dateStart, dateEnd } = storeToRefs(useMain);


const formatDate = (date) => `${date.getMonth() + 1}月${date.getDate()}日`;
const dateStartStr = computed(() => formatDate(dateStart.value));
const dateEndStr = computed(() => formatDate(dateEnd.value));
const geDateCounter = (end, start) => {
    const counter = (end - start) / (1000 * 60 * 60 * 24);
    return counter;
}

const dateCounter = ref(geDateCounter(dateEnd.value, dateStart.value));
const show = ref(false);


const onConfirm = (values) => {
    const [start, end] = values;

    useMain.dateStart = start;
    useMain.dateEnd = end;

    dateCounter.value = geDateCounter(end, start);

    show.value = false;
};
// 入住 离店
const formatter = (day) => {
    const month = day.date.getMonth() + 1;
    const date = day.date.getDate();

    if (day.type === 'start') {
        day.bottomInfo = '入住';
    } else if (day.type === 'end') {
        day.bottomInfo = '离店';
    }

    return day;
};


</script>
<template>
    <div class="home-date">
        <!-- 入住 ｜ 离店 -->
        <!-- 入住日期选择 共 2 晚 ｜  离店日期选择 -->
        <div class="date-selected" @click="show = true">
            <div class="in-hotel">
                <div class="inhotel-left">
                    <h4 class="datetitle">入住</h4>

                    <div class="date-card">
                        <span class="date-value" :value="dateStartStr">{{ dateStartStr }}</span>
                    </div>
                </div>
                <div class="date-counter">
                    <span class="counter-selected">共{{ dateCounter }}晚</span>
                </div>

            </div>
            <div class="leave-hotel">
                <h4 class="datetitle">离店</h4>
                <div class="date-card">
                    <span class="date-value" :value="dateEndStr">{{ dateEndStr }}</span>
                </div>
            </div>
        </div>

        <van-calendar color="#ff9854" :show-confirm="false" v-model:show="show" type="range" @confirm="onConfirm"
            :formatter="formatter" />

    </div>
</template>
<style scoped lang="less">
.date-selected {
    display: flex;
    padding: 15px;

    .in-hotel {

        flex: 1;
        display: flex;
        justify-items: center;
        align-items: center;

        .inhotel-left {
            flex: 1;

            .date-card {}
        }


        .date-counter {
            width: 30%;

            .counter-selected {
                color: gray;
                font-size: 16px;
                letter-spacing: 0.1rem;
            }
        }


    }

    .leave-hotel {
        width: 30%;
    }

    .date-card {
        padding: 10px 0;

        .date-value {
            font-size: 20px;
            color: #444444;
        }
    }

    .datetitle {
        color: #999;
        font-size: 18px;
        font-weight: normal;
    }
}
</style>