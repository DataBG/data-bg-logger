import instance from './instance';
import { EHttpMethod } from '../model';

export const httpRequest = (url: string, method: EHttpMethod, data?: any, params?: any) => {
  return instance(url, { method, data, params }).then((res) => res.data);
};
