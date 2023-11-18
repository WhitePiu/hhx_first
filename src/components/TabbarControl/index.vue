<script setup>
import { ref } from "vue";

defineProps({
    titles: {
        type: Array,
        default: () => ([])
    }
})
const emit = defineEmits(['tabItemClick'])
const currentIndex = ref(0);
const itemClick = (index) => {
    currentIndex.value = index
    emit('tabItemClick', currentIndex.value)
}
defineExpose({ currentIndex })
</script>
<template>
    <div class="tabbar-control">
        <div class="tabbar-top">
            <template v-for="(item, index) in titles">
                <div class="bar-item" @click="itemClick(index)" :class="currentIndex === index ? 'active' : ' '">
                    {{ item }}
                </div>
            </template>

        </div>
    </div>
</template>
<style scoped lang="less">
.tabbar-control {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    height: 40px;
    line-height: 40px;
    background: #fff;
    box-sizing: border-box;

    .tabbar-top {
        display: flex;
        align-items: center;
        justify-content: left;
        box-sizing: border-box;


        .bar-item {
            box-sizing: border-box;
            padding: 0 15px;
            color: #292524;
        }

        .active {
            font-weight: 900;
            position: relative;
            color: var(--primmary-color);

            &::before {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                height: 3px;
                background: var(--primmary-color);
            }

            // border-bottom: 3px solid var(--primmary-color);
        }
    }
}
</style>