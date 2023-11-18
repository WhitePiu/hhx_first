import HYRequest from '../request/index';

export const getCollects = () => {
  HYRequest.get({
    url: '/favor/list',
  });
};
