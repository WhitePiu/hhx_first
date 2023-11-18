<script setup>
import DetailSection from '@/components/DetailSection/index.vue'
defineProps({
    rules: {
        type: Array,
        default: () => ([])
    }
})
</script>
<template>
    <div class="detail-rules">
        <DetailSection title="预定须知">
            <template #sectionContent>
                <div class="rules">
                    <template v-for="(item, index) in rules" :key="rules.title">
                        <van-row>
                            <van-col span="8">
                                <span class="rules-title">{{ item.title }}</span>
                            </van-col>
                            <van-col span="16">
                                <span class="rules-intro"> {{ item.introduction }}</span>

                            </van-col>
                        </van-row>
                    </template>

                </div>
            </template>
        </DetailSection>
    </div>
</template>
<style scoped lang="less">
.detail-rules {
    .rules {
        line-height: 30px;
        color: #666;
        font-size: 15px;

        .rules-title,
        .rules-intro {
            display: block;
            padding: 5px 15px;
        }

    }
}
</style>