import HYRequest from '../request/index';

export const getDetail = (houseId) => {
  return HYRequest.get({
    url: '/detail/infos',
    params: {
      houseId,
    },
  });
};
