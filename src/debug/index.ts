import { init, log, info, query, queryAll } from '..';
import { EEnv, EMessageType, IQuery } from '../model';

init({ appName: 'TEST_LOGGER', env: EEnv.PROD });

const logRes = log('log测试', 'src.__tests__');
logRes.then((res) => console.log('log', res));

const infoRes = info('info测试', 'src.__tests__');
infoRes.then((res) => console.log('info', res));

// init({ appName: 'sampleAppName', env: EEnv.PROD });

// const queryAllParam: IQuery = {
//   type: EMessageType.ERROR,
//   namespace: 'sampleNamespace',
//   keyword: 'blablabla',
// };

// query(queryAllParam);

// init({ appName: 'sampleAppName', env: EEnv.PROD });

// queryAll();
