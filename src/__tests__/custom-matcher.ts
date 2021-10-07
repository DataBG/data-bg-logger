import { EMessageType, ILogModel } from '../model';
import { LoggerTest, logger_def } from './constant/logger';
import { QueryTest, query_def } from './constant/query';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeValidLog(msgType: EMessageType): R;
      toBeValidQuery(): R;
    }
  }
}

expect.extend({
  toBeValidLog(received: ILogModel, msgType: EMessageType) {
    const { appName, env, type, namespace, text } = received;
    const pass =
      appName === LoggerTest.appName &&
      env === logger_def.env &&
      namespace === LoggerTest.namespace &&
      type === msgType &&
      text === LoggerTest[msgType];

    return {
      pass,
      message: () => `Message type ${msgType} ${pass ? 'passed' : 'failed'}!`,
    };
  },
  toBeValidQuery(received: ILogModel[]) {
    let pass = false;
    received.forEach((ele) => {
      const { appName, env, type, namespace, text } = ele;
      pass =
        appName === QueryTest.appName &&
        env === query_def.env &&
        namespace === QueryTest.namespace &&
        text === LoggerTest[type];
      if (!pass) {
        return {
          pass,
          message: () => `Query api failed!`,
        };
      }
    });
    return {
      pass,
      message: () => `Query api passed!`,
    };
  },
});

export {};
