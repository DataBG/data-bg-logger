import { init, log } from '..';
import { EEnv } from '../model';

init({ appName: 'TEST_LOGGER', env: EEnv.PROD });

log('log测试', 'src.__tests__');
