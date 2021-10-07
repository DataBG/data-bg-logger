import { IDef, EEnv } from '../../model';

export const QueryTest = {
  appName: 'TEST_LOGGER',
  namespace: 'src.__tests__',
};

export const query_def: IDef = {
  appName: QueryTest.appName,
  env: EEnv.PROD,
};
