import HYRequest from '../request/index';

export const getHomeHotSuggests = () => {
  return HYRequest.get({ url: 'home/hotSuggests' });
};

export const getHomeCategory = () => {
  return HYRequest.get({ url: 'home/categories' });
};

export const getHomeLists = (counter) => {
  return HYRequest.get({
    url: '/home/houselist',
    params: {
      page: counter,
    },
  });
};
