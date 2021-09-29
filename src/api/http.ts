import instance from './instance';
import { ThttpMethod } from '../model';

export const httpRequest = (
  path: string,
  method: ThttpMethod,
  params?: any
) => {
  return instance(path, { method, data: params });
};
