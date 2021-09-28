import { init, log } from '..';
import { EEnv } from '../model';

init({ appName: 'TEST_LOGGER', env: EEnv.TEST });

log('测试测试', 'src.__tests__');
