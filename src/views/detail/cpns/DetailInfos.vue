<script setup>
import { computed } from "vue"

const infos = defineProps({
    detailTopInfo: {
        type: Object,
        default: () => { }
    }
})
const housetags = computed(() => infos.detailTopInfo.houseTags)
const commentBrief = computed(() => infos.detailTopInfo.commentBrief)
const nearByPosition = computed(() => infos.detailTopInfo.nearByPosition)


</script>
<template>
    <div class="detail-infos">

        <!-- title -->
        <div class="info-text">
            <h3>{{ detailTopInfo.houseName }}</h3>
        </div>
        <!-- tags -->
        <div class="info-tags">
            <template v-for="(item, index) in housetags" :key="index">
                <template v-if="item.tagText">
                    <div class="tags-item"
                        :style="{ color: item.tagText.color, background: item.tagText?.background?.color }">
                        {{ item.tagText?.text }}
                    </div>
                </template>
            </template>
        </div>
        <!-- common -->
        <div class="info-common info-cell">
            <div class="common-left info-cell-left">
                <div class="common-overall">{{ commentBrief.overall }}</div>
                <div class="common-score">{{ commentBrief.scoreTitle }}</div>
                <div class="comment-brief">{{ commentBrief.commentBrief }}</div>
            </div>
            <div class="common-right info-cell-right">
                <div class="comment-totalcount">{{ commentBrief.totalCount }}条评论</div>
                <van-icon name="arrow" class="right" />
            </div>



        </div>
        <!-- location -->
        <div class="info-location info-cell">
            <div class="info-cell-left location-left">
                {{ nearByPosition.address }}
            </div>
            <div class="info-cell-right">
                <span>地图·周边 </span>
                <van-icon name="arrow" class="right" size="12" />
            </div>
        </div>


    </div>
</template>
<style scoped lang="less">
.detail-infos {
    padding: 5px;
    color: #333333;
    background: #ffffff;
    padding-bottom: 30px;

    .info-text {
        line-height: 18px;

        h3 {
            letter-spacing: 0.05em;
        }
    }

    .info-tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        align-items: center;
        margin-top: 10px;

        .tags-item {
            padding: 3px 5px;
            margin: 3px;

        }

    }

    .info-cell {
        color: #333333;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--primmary-ceil-bg-color);
        padding: 5px;
        border-radius: 5px;
        margin-top: 10px;
        min-height: 30px;

        .info-cell-left {
            flex: 1;
            display: flex;
            justify-content: left;
            align-items: center;
            font-size: 14px;
        }

        .info-cell-right {
            width: 30%;
            display: flex;
            color: var(--primmary-color);
            justify-content: end;
            align-items: center;
            font-size: 12px;
            font-weight: bold;

            .right {
                font-weight: bold;
                // margin-top: 2px;
            }
        }
    }

    .info-common {


        .common-left {

            letter-spacing: 0.1em;

            div {
                padding-right: 5px;
            }

            .common-overall {
                font-weight: bolder;
                font-size: 22px;
            }

            .common-score {
                font-weight: bolder;
            }

            .comment-brief {
                color: #666666;
                overflow: hidden;
            }
        }

        .common-right {


            .comment-totalcount {
                padding-right: 5px;
            }




        }



    }

    .info-location {
        .location-left {
            font-weight: bold;
            color: #333333;
        }
    }
}
</style>