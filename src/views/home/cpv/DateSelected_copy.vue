<script setup>
import { ref } from 'vue'
const dateStart = ref('');
const dateEnd = ref('');
const dateCounter = ref(0);
const show = ref(false);

const formatDate = (date) => `${date.getMonth() + 1}月${date.getDate()}日`;

dateStart.value = formatDate(new Date());
dateEnd.value = `${new Date().getMonth() + 1}月${new Date().getDate() + 1}日`;
const onConfirm = (values) => {

    const [start, end] = values;

    show.value = false;
    dateStart.value = formatDate(start);
    dateEnd.value = formatDate(end);

    dateCounter.value = (end - start) / (1000 * 60 * 60 * 24);
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
                        <span class="date-value" :value="dateStart">{{ dateStart }}</span>
                    </div>
                </div>
                <div class="date-counter">
                    <span class="counter-selected">共{{ dateCounter }}晚</span>
                </div>

            </div>
            <div class="leave-hotel">
                <h4 class="datetitle">离店</h4>
                <div class="date-card">
                    <span class="date-value" :value="dateEnd">{{ dateEnd }}</span>
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