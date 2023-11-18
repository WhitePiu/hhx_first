<script setup>

import { ref, computed } from 'vue'
import useMainStore from '@/stores/modules/main'
import { storeToRefs } from 'pinia'


const value = ref('');

const useMain = useMainStore();
const { dateStart, dateEnd } = storeToRefs(useMain);
const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
const dateStartStr = computed(() => formatDate(dateStart.value));
const dateEndStr = computed(() => formatDate(dateEnd.value));

</script>
<template>
    <div class="home-search-box-fixed">
        <van-row gutter="2">
            <van-col span="4">
                <div class="date-show">
                    <div class="date-item">
                        <span>住</span>
                        <span class="date-title">{{ dateStartStr }}</span>
                    </div>
                    <div class="date-item item-leave">
                        <span>离</span>
                        <span class="date-title">{{ dateEndStr }}</span>

                        <!-- <van-icon size="8" color="#333333" name="play" class="date-icon-right-bottom" /> -->
                        <!-- <span class="dete-serach-icon"></span> -->
                    </div>

                </div>

            </van-col>
            <van-col span="20">
                <van-search v-model="value" placeholder="请输入搜索关键词" />
            </van-col>
        </van-row>
    </div>
</template>
<style scoped lang="less">
.home-search-box-fixed {
    position: fixed;
    width: 100%;
    // height: 50px;
    background: #ffffff;
    z-index: 99;
    top: 0;
    padding: 10px 0;

    .date-show {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 5px;

        font-size: 12px;
        background-color: var(--primmary-bg-color);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;

        position: relative;



        .date-item {
            display: flex;
            justify-content: left;
            align-items: baseline;
            letter-spacing: 0.1em;
            line-height: 18px;
            position: relative;


            span {
                color: #999999;
            }

            .date-title {
                color: #333333;
            }

            &.item-leave {
                position: relative;
                background: none;

                &::before {
                    content: '';
                    width: 0;
                    height: 0;
                    position: absolute;
                    bottom: 0px;
                    right: -4px;
                    border-width: 3px;
                    border-style: solid;
                    border-color: var(--primmary-bg-color);
                    border-right-color: #333333;
                    border-bottom-color: #333333;
                }
            }
        }

        .dete-serach-icon {
            display: inline-block;
            // width: 1px;
            // height: 1px;
            border-width: 3px;
            border-style: solid;
            border-color: #ffffff;
            border-right-color: #333333;
            border-bottom-color: #333333;
            // margin-right: -5px;
            // margin-bottom: -3px;
        }


    }



    /deep/.van-search {
        padding: 0 5px 0 3px;
    }

    .van-search__content {
        padding-left: 5px;
    }

    /deep/.van-search__content--round {
        border-radius: 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
}
</style>