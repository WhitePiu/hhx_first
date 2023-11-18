<script setup>
import DetailSection from '@/components/DetailSection/index.vue'

defineProps({
    houseLandlord: {
        type: Object,
        default: () => ({})
    }
})
</script>
<template>
    <div class="detail-landlord">
        <DetailSection title="房东介绍" moretext="查看房东主页">
            <template #sectionContent>
                <div class="landlord-box">
                    <div class="landtop">
                        <img :src="houseLandlord.topScroll" alt="">
                    </div>
                    <div class="lanlord-info">
                        <div class="lanlord-info-left">
                            <img class="landlord-icon" :src="houseLandlord.hotelLogo" alt="">
                        </div>
                        <div class="lanlord-info-mid">
                            <div class="lanlord-title">
                                {{ houseLandlord.hotelName }}
                            </div>
                            <div class="lanlord-tag">
                                <template v-for="(item, index) in houseLandlord.hotelTags" :key="index">
                                    <span class="taglist" :style="{ color: item.tagText.color }">{{ item.tagText.text
                                    }}</span>
                                </template>

                        </div>
                    </div>
                        <div class="lanlord-info-rt">
                            <van-button color="linear-gradient(90deg,#fa8c1d,#fcaf3f)">
                                联系房东
                            </van-button>
                        </div>
                    </div>
                    <div class="landlord-bot">
                        <!-- <div class="bot-box">
                                                                                                                                        <div class="botbox-title"></div>
                                                                                                                                    </div> -->
                        <van-row gutter="20">
                            <template v-for="(item, index) in houseLandlord.hotelSummary" :key="index">
                                <van-col span="8">
                                    <div class="bot-title">
                                        {{ item.title }}
                                    </div>
                                    <div class="bot-rate">
                                        {{ item.introduction }}
                                    </div>
                                    <div class="bot-tip">
                                        {{ item?.tip }}
                                    </div>
                                </van-col>
                            </template>


                        </van-row>

                    </div>
                </div>


            </template>
        </DetailSection>
    </div>
</template>
<style scoped lang="less">
.detail-landlord {
    .landlord-box {
        .landtop {
            img {
                width: 100%;
                border-radius: 5px;
            }
        }

        .lanlord-info {
            display: flex;
            margin: 15px;
            align-items: center;
            justify-content: center;

            .lanlord-info-left {
                .landlord-icon {
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    box-shadow: 0 0 7px #999999;
                }
            }

            .lanlord-info-mid {
                display: flex;
                justify-content: center;
                align-items: left;
                flex-wrap: wrap;
                flex-direction: column;
                flex: 1;


                .lanlord-title {
                    font-size: 24px;
                    padding-left: 15px;
                    line-height: 30px;
                }

                .lanlord-tag {
                    font-size: 14px;
                    color: #999999;
                    display: flex;
                    align-items: center;
                    justify-content: left;
                    margin: 15px 0;

                    .taglist {
                        display: block;
                        padding: 0 15px;
                        border-right: 1px solid #999999;

                        &:last-child {
                            border: none;
                        }
                    }
                }
            }

            .lanlord-info-rt {}
        }

        .landlord-bot {

            padding: 15px;
            line-height: 2rem;

            .bot-title {
                font-size: 14px;
                color: #999999;
            }

            .bot-rate {
                font-size: 22px;
                color: #333333;
                font-weight: 700;
            }

            .bot-tip {
                font-size: 14px;
                color: #666666;
            }


        }

    }

}
</style>