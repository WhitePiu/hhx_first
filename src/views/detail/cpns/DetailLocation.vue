<script setup>
import DetailSection from '@/components/DetailSection/index.vue'
import { onMounted, ref } from 'vue';

const props = defineProps({
    position: {
        type: Object,
        default: () => ({})
    }
})

const houseMapRef = ref()
onMounted(() => {
    const map = new BMapGL.Map(houseMapRef.value);
    const point = new BMapGL.Point(props.position.longitude, props.position.latitude);
    // const point = new BMapGL.Point(116.404, 39.915);
    map.centerAndZoom(point, 25);
    const marker = new BMapGL.Marker(point);        // 创建标注   
    map.addOverlay(marker);
})
</script>
<template>
    <div class="detail-landlord">
        <DetailSection title="位置周边" moretext="查看更多周边信息">
            <template #sectionContent>
                <div class="location" ref="houseMapRef">

                </div>
            </template>
        </DetailSection>
    </div>
</template>
<style scoped lang="less">
.detail-landlord {
    .location {
        height: 300px;
    }
}
</style>