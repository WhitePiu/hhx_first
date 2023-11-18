<script setup>
import TabBar from '@/components/TabBar/index.vue';
import LoadingAimate from '@/components/LoadingAimate/index.vue';
</script>

<template>
  <TabBar v-if="!$route.meta.isTabbarShow"></TabBar>
  <router-view v-slot="props">
    <keep-alive>
      <component :is="props.Component"></component>
    </keep-alive>
  </router-view>
  <LoadingAimate></LoadingAimate>
</template>

<style scoped></style>
