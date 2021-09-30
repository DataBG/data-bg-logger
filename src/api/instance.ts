import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Console } from '../utils/console';
import { EEnv } from '../model';
import { BASE_IP, PORT } from './config';

let config: AxiosRequestConfig = {
  withCredentials: true,
};

const instance: AxiosInstance = axios.create(config);

export const updateBaseURL = (env: EEnv): void => {
  const baseURL = `${BASE_IP}:${PORT[env]}`;
  instance.defaults.baseURL = baseURL;
};

instance.interceptors.request.use(
  (config) => {
    Console.group(`[axios.request] ${config.url}`, () => {
      // console.log(instance.defaults.baseURL);
    });
    return config;
  },
  (err) => {
    // console.error(err);
    Console.err('interceptors.request.error');
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => {
    const config = response.config;
    Console.group(`[axios.response] ${config.url}`, () => {
      // console.log(response);
    });
    return response;
  },
  (err) => {
    // console.error(err);
    Console.err('interceptors.response.error');
    return Promise.reject({ code: err.response.status, ...err.response.data });
  }
);

export default instance;
