<script setup>

import useCollect from "@/stores/modules/collect";
const useCollectStore = useCollect();
const { collect } = useCollectStore;

</script>
<template>
  <div class="collect">
    <h2>collect</h2>
  </div>
</template>
<style scoped lang="less"></style>
