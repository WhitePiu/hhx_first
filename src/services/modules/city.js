import HYRequest from '../request/index';

export const getCities = () => {
  return HYRequest.get({ url: '/city/all' });
};
