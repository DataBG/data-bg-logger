import {
  IDef,
  EEnv,
  EMessageType,
  ILogSubmitBody,
  EhttpMethod,
  ILock,
  ELock,
} from './model';
import { updateBaseURL } from './api/instance';
import { REPORT_URL, QUERY_URL } from './api/config';
import { httpRequest } from './api/http';
import { unlock } from './utils/lock';

// 環境參數
let _def: IDef = { appName: 'DEFAULT_APP_NAME', env: EEnv.TEST };

// 初始化鎖
let _initLock: ILock = {
  flag: ELock.LOCKED,
};

export const init = (def: IDef): void => {
  console.log('[init] def', def);
  _def = def;
  updateBaseURL(def.env);
  unlock(_initLock);
};

export const log = (text: string, namespace?: string) => {
  if (_initLock.flag === ELock.LOCKED) {
    throw new Error(
      'Unable to report log! Please initialize logger SDK environment by calling init()'
    );
  }
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  httpRequest(
    `${REPORT_URL}/${env}/${EMessageType.LOG}`,
    EhttpMethod.POST,
    body
  ).then(
    (res) => {
      console.log('SDK log success', res.data);
    },
    (err) => {
      console.log('SDK log failed', err);
    }
  );
};

// const info = () => {};

// const warn = () => {};

// const error = () => {};

// const debug = () => {};

// const Logger = {
//   log,
//   info,
//   warn,
//   error,
//   debug,
// };

// const query = () => {};
