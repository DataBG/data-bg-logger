import { EEnv, IDef } from '../../model';

export const LoggerTest = {
  LOG: 'log测试',
  INFO: 'info测试',
  WARN: 'warn测试',
  ERROR: 'error测试',
  DEBUG: 'debug测试',
  namespace: 'src.__tests__',
  appName: 'TEST_LOGGER',
};

export const _def: IDef = { appName: LoggerTest.appName, env: EEnv.PROD };
