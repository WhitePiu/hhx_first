import { defineStore } from 'pinia';

// const dateStart = formatDate(new Date());
// const dateEnd = `${new Date().getMonth() + 1}月${new Date().getDate() + 1}日`;
const dateStart = new Date();
// const date = new Date().setDate(new Date().getDate() + 1);
const dateEnd = new Date();
dateEnd.setDate(dateEnd.getDate() + 1);
const useMainStore = defineStore('main', {
  // date选择

  state: () => ({
    dateStart: dateStart,
    dateEnd: dateEnd,
    isLoading: true,
  }),
});
export default useMainStore;
