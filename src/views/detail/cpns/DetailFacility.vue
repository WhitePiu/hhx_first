<script setup>
import DetailSection from '@/components/DetailSection/index.vue'
import { computed } from 'vue';

const facilityObj = defineProps({
    houseFacility: {
        type: Object,
        default: () => { }
    }
});
// const houseFacilitysArr = computed(() => facilityObj.houseFacility.houseFacilitys);
// const facilitySortArr = computed(() => facilityObj.houseFacility.facilitySort);
// console.log(typeof houseFacilitysArr)
// function except(array, excepts) {
//     if (array && excepts) {
//         const newArray = [];
//         for (const elem of array) {
//             if (excepts.includes(elem)) newArray.push(elem);
//         }
//         return newArray;
//     }
// }
// except(houseFacilitysArr, facilitySortArr)
// const needFacilityArr = except(houseFacilitysArr.value, facilitySortArr.value)
// let needFacilityArr = houseFacilitysArr.filter((item) => {
//     for (const value of facilitySortArr.values()) {
//         if (item === value) return needFacilityArr.push(item)
//     }
// })
</script>
<template>
    <div class="facility">
        <!-- 房屋设施 -->
        <DetailSection title="房屋设施" moretext="查看全部设施">
            <template #sectionContent>
                <div class="facility-bg">
                    <!-- <template v-if="houseFacility.houseFacilitys.length > 0"> -->
                    <template v-for="(item, index) in facilityObj.houseFacility?.houseFacilitys" :key="item.groupId">
                        <div class="house-item" v-if="houseFacility?.facilitySort?.includes(index)">
                            <div class="house-group">
                                <div class="group-title">
                                    <div class="group-title-icon">
                                        <img :src="item.icon" alt="">
                                    </div>
                                    <div class="group-title-text">
                                        {{ item.groupName }}
                                    </div>
                                </div>
                                <div class="group-tags">
                                    <template v-if="item.facilitys">
                                        <div class="tag-box" v-for="(tag) in item.facilitys.slice(0, 4)" :key="tag.name">
                                            <van-icon name="passed" class="tag-icon" color="#4ADE80" />
                                            <span class="tag-text">{{ tag.name }}</span>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <!-- </template> -->
                    </template>

                </div>

            </template>
        </DetailSection>

    </div>
</template>
<style scoped lang="less">
.facility {

    .facility-bg {
        border-radius: 10px;
        background: var(--primmary-ceil-bg-color);

        .house-item {
            padding: 15px;



            .house-group {
                display: flex;

                .group-title {
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 20%;

                    .group-title-icon {
                        img {
                            width: 20px;
                            height: 20px;
                        }
                    }

                    .group-title-text {}
                }

                .group-tags {
                    display: flex;
                    flex: 1;
                    flex-wrap: wrap;
                    padding: 0 10px;

                    .tag-box {
                        width: 50%;
                        display: flex;
                        justify-content: left;
                        align-items: center;
                        padding: 5px 10px;
                        text-align: center;
                        box-sizing: border-box;

                        .tag-icon {}

                        .tag-text {
                            padding: 0 5px;
                        }
                    }
                }
            }
        }
    }


}
</style>