import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { EEnv } from '../model';
import { BASE_IP, PORT } from './config';
import { debugConsole } from '../utils/debug';
import { adaptAxiosError } from './errorHandler';
import { IExceptionResponse } from '..';

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
    debugConsole(`[axios.request] ${config.url}`);
    return config;
  },
  (err) => {
    debugConsole('interceptors.request.error');
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => {
    const config = response.config;
    debugConsole(`[axios.response] ${config.url}`);
    return response;
  },
  (err: AxiosError) => {
    debugConsole('interceptors.response.error');
    // TODO: clear console
    // debugConsole('response', err.response);
    // debugConsole('request', err.request);
    const { status, data } = err.response;

    const adpatedResponse: IExceptionResponse = adaptAxiosError(status, data);
    return Promise.reject(adpatedResponse);
  }
);

export default instance;
