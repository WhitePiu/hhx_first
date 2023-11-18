<script setup>
import { ref } from "vue";

const value = ref('');

</script>
<template>
    <div class="search">
        <form action="/">
            <van-search v-model="value" show-action placeholder="城市/区域/位置" shape="round" />
        </form>

    </div>
</template>
<style scoped lang="less"></style>