<script>
export default {
  name: 'home'
}
</script>
<script setup>
import HomeSreachbox from './HomeSreachbox.vue';
import HomeCategory from './HomeCategory.vue';
import HomeLists from './HomeLists.vue';
import DateSearch from '@/components/DateSearch/index.vue';

import useHomeHotSuggests from '@/stores/modules/home'
import { storeToRefs } from 'pinia';
import { ref, watch, computed, onActivated } from 'vue';
// 页面scroll
import useScroll from '@/hooks/useScroll'
// home数据
const useHomeStore = useHomeHotSuggests();
useHomeStore.getHomeCategories();
const { homeCategories, homeList } = storeToRefs(useHomeStore);

useHomeStore.getHomeList();

// 加载更多
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef);
watch(isReachBottom, (newValue) => {

  if (newValue) {
    useHomeStore.getHomeList().then(
      () => { isReachBottom.value = false },
      err => { console.log(err) }
    )
  }
});
// 搜索框显示
// const isShow = ref(false);
// watch(scrollTop, (value) => {
//   if (value > 100) {
//     isShow.value = true
//   } else {
//     isShow.value = false
//   }
// });
// 定义的可响应式数据依赖于另一个可响应式数据，可用computed
const isShow = computed(() => {
  return scrollTop.value >= 100
})
// 跳回home页时，停留在原来的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})
</script>
<template>
  <div class="home" ref="homeRef">
    <van-nav-bar title="旅途" />
    <!-- home页banner -->
    <div class="home-img">
      <img src="http://www.xxcijmz.top/assets/banner.3d82bd25.webp" alt="">
    </div>
    <!-- home 搜索框 -->
    <HomeSreachbox></HomeSreachbox>
    <!-- 分类 -->
    <HomeCategory :categories="homeCategories"></HomeCategory>
    <!-- 展示列表 -->
    <div class="home-lists">
      <h2>热门精选</h2>
      <HomeLists :homeList="homeList"></HomeLists>
    </div>
    <!-- <button @click="getmoreDate">点击加载更多</button> -->
    <!-- 带日期的搜索框 -->
    <DateSearch v-if="isShow"></DateSearch>
  </div>
</template>
<style scoped lang="less">
.home {
  background-color: #f9f9f9;
  padding-bottom: 100px;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;

  :deep(.van-nav-bar__title) {
    color: var(--primmary-color);
  }

  .home-img {
    img {
      width: 100%;
    }
  }

  .home-lists {
    padding: 20px 15px;

    h2 {
      letter-spacing: 0.25em;
      color: #18181B;
    }
  }
}
</style>
