import { getDetail } from '@/services/modules/detail';
import { defineStore } from 'pinia';

const useDetailInfo = defineStore('detail', {
  state: () => {
    return {
      details: [],
    };
  },
  actions: {
    async getDetailHouseInfo(houseId) {
      const result = await getDetail(houseId);
      this.details = result.data;
    },
  },
});

export default useDetailInfo;
