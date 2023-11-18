<script setup>

import useDetailInfo from '@/stores/modules/detail';
import { storeToRefs } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import DetailSwiper from './cpns/DetailSwiper.vue'
import DetailInfos from './cpns/DetailInfos.vue';
import DetailFacility from './cpns/DetailFacility.vue'
import DetailLandlord from './cpns/DetailLandlord.vue';
import DetailHotcommon from './cpns/DetailHotcommon.vue';
import DetailNotice from './cpns/DetailNotice.vue';
import DetailLocation from './cpns/DetailLocation.vue';
import DetailPricedec from './cpns/DetailPricedec.vue';
import TabbarControl from '@/components/TabbarControl/index.vue';

import useScroll from '@/hooks/useScroll';
import { objectKeys } from '@antfu/utils';


const useDetail = useDetailInfo();
const { details } = storeToRefs(useDetail)
// const houseId = router.$route.params.id;

const swiperMain = computed(() => details.value?.mainPart)


const route = useRoute();
const houseId = route.params.id;
useDetail.getDetailHouseInfo(houseId);

const router = useRouter()
const onClickLeft = () => {
    router.back()
}

// 控制tanbarControl的显示与隐藏
const deRef = ref();
const { scrollTop } = useScroll(deRef);
const isTabbarControlShow = computed(() => {
    return scrollTop.value >= 250
})

const selectEls = ref({});
const names = computed(() => {
    return Object.keys(selectEls.value)
});
const getSectionRefs = (value) => {
    // console.log(value)问题：滚动引起的组件不停在刷新 
    // console.log(value.$el.getAttribute('name'))
    if (!value) return
    selectEls.value[value.$el.getAttribute('name')] = value.$el
}

// 点击跳转
let isClick = false;
let currentDistance = -1;
const tabItemClick = (index) => {
    console.log('---', index)
    const key = Object.keys(selectEls.value)[index]
    const el = selectEls.value[key];
    let distance = el.offsetTop;
    if (index !== 0) {
        distance = distance - 50;
    }
    isClick = true;
    currentDistance = distance;
    deRef.value.scrollTo({
        top: distance,
        behavior: 'smooth'
    })
}

// 监听页面滚动，匹配TabbarControl的item正确的索引
const tabbarRef = ref();

watch(scrollTop, (newValue) => {
    if (currentDistance === newValue) {
        isClick = false
    }
    if (isClick) return;
    // isClick为true时，下面操作不会做
    const els = Object.values(selectEls.value);
    const elValues = els.map(item => item.offsetTop)
    // 根据newValue去匹配想要的索引
    let tabIndex = elValues.length - 1;
    for (let i = 0; i < elValues.length; i++) {
        if (elValues[i] > newValue + 40) {
            tabIndex = i - 1;
            break
        }
        if (tabIndex == -1) return
    }
    console.log(tabIndex);
    if (tabbarRef.value) {
        console.log(tabbarRef.value.currentIndex)
        tabbarRef.value.currentIndex = tabIndex;
    }


})

</script>
<template>
    <div class="detail" ref="deRef">
        <van-nav-bar title="房屋详情" left-text="返回" left-arrow @click-left="onClickLeft" />
        <template v-if="isTabbarControlShow">
            <TabbarControl :titles="names" @tabItemClick="tabItemClick" ref="tabbarRef"></TabbarControl>
        </template>

        <div v-if="swiperMain" v-memo="[swiperMain]">
            <DetailSwiper :swiperMain="swiperMain.topModule.housePicture.housePics"></DetailSwiper>
            <!-- infos -->
            <DetailInfos name="描述" :ref="getSectionRefs" :detailTopInfo="swiperMain.topModule"></DetailInfos>
            <!-- 因为以下布局结构相似，可以制作模板插槽 -->
            <DetailFacility name="设施" :ref="getSectionRefs"
                :house-facility="swiperMain?.dynamicModule.facilityModule.houseFacility">
            </DetailFacility>
            <!-- 房东介绍 -->
            <DetailLandlord name="房东" :ref="getSectionRefs" :house-landlord="swiperMain?.dynamicModule.landlordModule">
            </DetailLandlord>
            <!-- 热门评论 -->
            <DetailHotcommon name="评论" :ref="getSectionRefs" :house-commons="swiperMain?.dynamicModule.commentModule">
            </DetailHotcommon>
            <!-- 预定须知 -->
            <DetailNotice name="须知" :ref="getSectionRefs" :rules="swiperMain?.dynamicModule?.rulesModule?.orderRules">
            </DetailNotice>
            <!-- 位置周边 -->
            <DetailLocation name="周边" :ref="getSectionRefs" :position="swiperMain?.dynamicModule.positionModule">
            </DetailLocation>
            <!-- 价格说明 -->
            <DetailPricedec :introduction="swiperMain?.introductionModule" :ensure="swiperMain?.ensureModule">
            </DetailPricedec>s
        </div>

    </div>
</template>
<style scoped lang="less">
.detail {
    background: var(--primmary-bg-color);
    height: 100vh;
    overflow-y: auto;
}
</style>