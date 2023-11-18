<script setup>
defineProps({
    title: {
        type: String,
        default: ''
    },
    moretext: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <div class="section">
        <!-- title -->
        <div class="section-title">
            <h2>{{ title }}</h2>
            <van-divider />
        </div>
        <!-- content -->
        <div class="section-content">
            <slot name="sectionContent"></slot>
        </div>
        <!-- bottom -->
        <div class="section-bottom" v-if="moretext.length">
            <div class="bottext">{{ moretext }}</div>
            <van-icon name="arrow" class="right" />
        </div>

    </div>
</template>
<style scoped lang="less">
.section {
    background: #ffffff;
    padding: 10px;
    margin-top: 10px;

    .section-title {}

    .section-content {
        padding: 10px 0;
    }

    .section-bottom {
        color: var(--primmary-color);
        display: flex;
        align-items: center;
        justify-content: end;
        font-weight: 900;

        .bottext {
            padding: 0 5px;
            font-size: 15px;
        }

        .right {
            font-weight: 900;

        }
    }
}
</style>