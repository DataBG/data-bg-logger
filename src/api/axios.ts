import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { console } from '../utils/index';
import { EEnv } from '../model';
import { BASE_IP, PORT } from './config';

let config: AxiosRequestConfig = {
  withCredentials: true,
};

export const updateBaseURL = (env: EEnv): void => {
  const baseURL = `${BASE_IP}:${PORT[env]}`;
  config.baseURL = baseURL;
};

const instance: AxiosInstance = axios.create(config);

instance.interceptors.request.use(
  (config) => {
    console.group(`[axios.request] ${config.url}`, () => {
      // console.log(config);
    });
    return config;
  },
  (err) => {
    // console.error(err);
    console.error('interceptors.request.error');
    return err;
  }
);

instance.interceptors.response.use(
  (response) => {
    const config = response.config;
    console.group(`[axios.response] ${config.url}`, () => {
      // console.log(response);
    });
    return response;
  },
  (err) => {
    // console.error(err);
    console.error('interceptors.response.error');
    return err;
  }
);

export default instance;
