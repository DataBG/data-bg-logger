import { EMessageType, ILogModel, IExceptionResponse } from '../model';
import { LoggerTest, logger_def } from './constant/logger';
import { QueryTest, query_def } from './constant/query';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeValidLog(msgType: EMessageType): R;
      toBeValidQuery(): R;
      toBeValidError(expectCode: number): R;
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
  toBeValidError(received: IExceptionResponse, expectCode: number) {
    const { statusCode, msg, detail } = received;
    const codeCheck = statusCode === expectCode;
    const msgCheck = msg !== null;
    const detailCheck = detail !== null;
    const pass = codeCheck && msgCheck && detailCheck;

    return {
      pass,
      message: () =>
        `${
          pass
            ? 'Error matched!'
            : `Error not matched : ${!codeCheck && `Expect statusCode ${expectCode}, `} ${
                !msgCheck && `Expect msg ${msg}, `
              } ${!detailCheck && `Expect detail ${detail}`}!`
        }`,
    };
  },
});

export {};
