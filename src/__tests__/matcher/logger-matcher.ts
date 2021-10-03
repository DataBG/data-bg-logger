import { EMessageType, ILogModel } from '../../model';
import { LoggerTest, _def } from '../constant/logger';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeValidLog(msgType: EMessageType): R;
    }
  }
}

expect.extend({
  toBeValidLog(received: ILogModel, msgType: EMessageType) {
    const { appName, env, type, namespace, text } = received;
    const pass =
      appName === LoggerTest.appName &&
      env === _def.env &&
      namespace === LoggerTest.namespace &&
      type === msgType &&
      text === LoggerTest[msgType];

    return {
      pass,
      message: () => `Message type ${msgType} ${pass ? 'passed' : 'failed'}!`,
    };
  },
});

export {};
