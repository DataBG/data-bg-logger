import instance from './instance';
import { ThttpMethod } from '../model';

export const httpRequest = (
  url: string,
  method: ThttpMethod,
  data?: any,
  params?: any
) => {
  return instance(url, { method, data, params });
};
