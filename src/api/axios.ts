import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { consoleGroup } from '../utils/index';
import { EEnv } from '../model';
import { baseIP, port } from './config';

let config: AxiosRequestConfig = {
  withCredentials: true,
};

export const updateBaseURL = (env: EEnv): void => {
  const baseURL = `${baseIP}:${port[env]}`;
  config.baseURL = baseURL;
};

const instance: AxiosInstance = axios.create(config);

instance.interceptors.request.use(
  (config) => {
    consoleGroup(`[axios.request] ${config.url}`, () => {
      console.log(config);
    });
    return config;
  },
  (err) => {
    console.error(err);
    return err;
  }
);

instance.interceptors.response.use(
  (response) => {
    const config = response.config;
    consoleGroup(`[axios.response] ${config.url}`, () => {
      console.log(response);
    });
    return response;
  },
  (err) => {
    console.error(err);
    return err;
  }
);

export default instance;
