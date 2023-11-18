<script setup>
import { ref } from 'vue'
defineProps({
    categories: {
        type: Array,
        default: () => []
    }
})
const active = ref(0);
</script>
<template>
    <div class="homecategory">
        <ul class="catelist">
            <template v-for="(item, index) in categories" :key="item.id">
                <li>
                    <img :src="item.pictureUrl" alt="">
                    <span>{{ item.title }}</span>
                </li>
            </template>

        </ul>
    </div>
</template>
<style scoped lang="less">
.homecategory {
    height: 80px;

    ul.catelist {
        display: flex;
        overflow: scroll;

        &::-webkit-scrollbar {
            display: none;
        }

        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 15px;

            img {
                width: 50px;
            }

            span {}
        }
    }

}
</style>