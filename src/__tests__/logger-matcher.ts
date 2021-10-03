import { EEnv, EMessageType, IDef, ILogModel } from '../model';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeValidLog(msgType: EMessageType): R;
    }
  }
}

const LoggerTest = {
  LOG: 'log测试',
  INFO: 'info测试',
  WARN: 'warn测试',
  ERROR: 'error测试',
  DEBUG: 'debug测试',
  namespace: 'src.__tests__',
  appName: 'TEST_LOGGER',
};

const _def: IDef = { appName: LoggerTest.appName, env: EEnv.PROD };

expect.extend({
  toBeValidLog(received: ILogModel, msgType: EMessageType) {
    const { appName, env, type, namespace, text } = received;
    const pass =
      appName === LoggerTest.appName &&
      env === _def.env &&
      namespace === LoggerTest.namespace &&
      type === msgType &&
      text === LoggerTest[msgType];
    if (pass) {
      return {
        pass: true,
        message: () => `Message type ${msgType} passed!`,
      };
    } else {
      return {
        pass: false,
        message: () => `Message type ${msgType} failed!`,
      };
    }
  },
});

export {};
