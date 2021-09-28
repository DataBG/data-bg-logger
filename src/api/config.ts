import { EEnv } from '../model';

export const baseIP = 'http://8.130.31.99';
export const port = {
  [EEnv.PROD]: '8080',
  [EEnv.PRE]: '8081',
};
