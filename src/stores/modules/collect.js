import { getCollects } from '@/services/modules/collect';
import { defineStore } from 'pinia';

const useCollect = defineStore('collect', {
  state: () => {
    return {
      collect: {},
    };
  },
  actions: {
    async getCollectsAll() {
      const res = await getCollects();
      this.collect = res.data.data;
    },
  },
});

export default useCollect;
