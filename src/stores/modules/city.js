import { defineStore } from 'pinia';
import { getCities } from '@/services/modules/city';

const useCity = defineStore('city', {
  state: () => ({
    cities: [],
    selectedCity: '广州',
  }),
  actions: {
    async getCitiesAll() {
      const citiesResonpse = await getCities();
      this.cities = citiesResonpse.data;
    },
  },
});

export default useCity;
