<script setup>
import DetailSection from '@/components/DetailSection/index.vue'
import { ref } from 'vue';
defineProps({
    houseCommons: {
        type: Object,
        default: () => ({})
    }
})

const value = ref(3);
</script>
<template>
    <div class="detail-hotcommon">
        <DetailSection title="热门评论" :moretext="'查看全部' + houseCommons.totalCountStr + '条评论'">
            <template #sectionContent>
                <div class="hot-commons">
                    <div class="common-top">
                        <van-row>
                            <van-col span="12">
                                <div class="common-top-left">
                                    <div class="scores">{{ houseCommons.overall }}</div>
                                    <div class="scores-info">
                                        <span class="states">{{ houseCommons.scoreTitle }}</span>
                                        <span class="common">{{ houseCommons.totalCount }}条评论</span>
                                        <van-rate v-model="value" readonly allow-half color="#ffd21e" :size="8" />
                                    </div>
                                </div>
                            </van-col>
                            <van-col span="12">
                                <div class="common-top-rt">

                                    <template v-for="(item, index) in houseCommons.subScores" :key="index">
                                        <span class="common-category">{{ item }}</span>
                                    </template>

                                </div>
                            </van-col>
                        </van-row>


                    </div>
                    <div class="common-tagbox">
                        <template v-for="(item, index) in houseCommons.commentTagVo" :key="index">
                            <span class="common-tags" :style="{ color: item.color, background: item.backgroundColor }">{{
                                item.text }}</span>
                        </template>

                    </div>
                    <div class="hot-common">
                        <div class="common-user">
                            <div class="common-user-img">
                                <img :src="houseCommons.comment?.userAvatars" alt="">
                            </div>
                            <div class="common-user-info">
                                <div class="common-user-name">
                                    {{ houseCommons.comment?.userName }}
                                </div>
                                <div class="common-user-time">
                                    {{ houseCommons.comment?.checkInDate }}
                                </div>
                            </div>
                        </div>
                        <div class="common-textarea">
                            {{ houseCommons.comment?.commentDetail }}
                        </div>
                    </div>
                </div>
            </template>
        </DetailSection>
    </div>
</template>
<style scoped lang="less">
.detail-hotcommon {
    padding-bottom: 20px;
    background: #ffffff;

    .hot-commons {
        padding-bottom: 15px;

        .common-top {
            display: flex;
            padding: 10px 0;

            .common-top-left {
                display: flex;
                align-items: center;
                justify-content: left;

                .scores {
                    font-size: 35px;
                    font-weight: 900;
                    color: #333;
                    padding: 15px;
                    letter-spacing: 0.2rem;
                }

                .scores-info {
                    display: flex;
                    align-items: left;
                    justify-content: center;
                    flex-direction: column;
                    flex-wrap: wrap;
                    line-height: 28px;


                    .states {}

                    .common {
                        color: #999999;
                    }
                }
            }

            .common-top-rt {
                display: flex;
                align-items: center;
                justify-content: left;
                // flex-direction: column;
                flex-wrap: wrap;

                .common-category {
                    color: #666;
                    display: block;
                    padding: 0 15px;
                    line-height: 28px;
                }
            }
        }

        .common-tagbox {
            display: flex;
            flex-wrap: wrap;
            margin: 10px 0;

            .common-tags {
                display: block;
                margin-right: 10px;
                border-radius: 10px;
                background: #f5f5f5;
                color: #666;
                letter-spacing: 0.1rem;
                padding: 5px 10px;
                margin: 10px 7px;
            }
        }

        .hot-common {
            background: var(--primmary-bg-color);
            padding: 10px;
            border-radius: 10px;

            .common-user {
                display: flex;
                justify-content: center;
                align-items: center;

                .common-user-img {
                    padding: 10px;

                    img {
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        box-shadow: 0 0 10px #dddddd;
                    }
                }

                .common-user-info {
                    flex: 1;
                    display: flex;
                    justify-content: left;
                    align-items: left;
                    flex-direction: column;

                    .common-user-name {
                        font-size: 20px;
                        padding: 10px 0;
                    }

                    .common-user-time {
                        color: #959494;
                        letter-spacing: 0.1rem;
                    }
                }


            }

            .common-textarea {
                padding: 15px;
                color: #333;
            }
        }
    }
}
</style>