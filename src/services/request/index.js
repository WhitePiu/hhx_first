import axios from 'axios';

import { baseURL, TIMEOUT } from './config';

import useMainStore from '@/stores/modules/main';
const mainStore = useMainStore();

class HYRequest {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL: baseURL,
      timeout: TIMEOUT,
      // headers: headers
    });
    this.instance.interceptors.request.use(
      (config) => {
        mainStore.isLoading = true;
        return config;
      },
      (err) => {
        return err;
      },
    );
    this.instance.interceptors.response.use(
      (res) => {
        mainStore.isLoading = false;
        return res;
      },
      (err) => {
        mainStore.isLoading = false;
        return err;
      },
    );
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: 'GET' });
  }
  post(config) {
    return this.request({ ...config, method: 'POST' });
  }
}

export default new HYRequest(baseURL);
