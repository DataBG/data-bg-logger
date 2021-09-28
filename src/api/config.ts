import { EEnv } from '../model';

export const BASE_IP = 'http://8.130.31.99';
export const PORT = {
  [EEnv.PROD]: '8080',
  [EEnv.PRE]: '8081',
};
export const REPORT_URL = '/logger/submit';
export const QUERY_URL = '/logger/query';
