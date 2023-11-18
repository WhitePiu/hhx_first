import { defineStore } from 'pinia';
import { getHomeHotSuggests, getHomeCategory, getHomeLists } from '@/services/modules/home';

const useHomeHotSuggests = defineStore('home', {
  state: () => {
    return {
      hotSuggests: [],
      homeCategories: [],
      homeList: [],
      counter: 1,
    };
  },
  actions: {
    async getHotSuggests() {
      const result = await getHomeHotSuggests();
      this.hotSuggests = result.data;
    },
    async getHomeCategories() {
      const res = await getHomeCategory();
      this.homeCategories = res.data;
    },
    async getHomeList() {
      const res = await getHomeLists(this.counter);
      this.homeList.push(...res.data);
      this.counter++;
    },
  },
});

export default useHomeHotSuggests;
