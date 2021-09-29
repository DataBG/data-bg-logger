import {
  IDef,
  EEnv,
  EMessageType,
  ILogSubmitBody,
  EhttpMethod,
  ILock,
  ELock,
  IQueryBody,
} from './model';
import { updateBaseURL } from './api/instance';
import { REPORT_URL, QUERY_URL } from './api/config';
import { httpRequest } from './api/http';
import { unlock } from './utils/lock';
import { assertTrue } from './utils/assert';

// Error 報錯消息
const LOG_ERR_MSG =
  'Unable to report log! Please initialize logger SDK environment by calling init().';
const INFO_ERR_MSG =
  'Unable to report info! Please initialize logger SDK environment by calling init().';
const WARN_ERR_MSG =
  'Unable to report warn! Please initialize logger SDK environment by calling init().';
const ERROR_ERR_MSG =
  'Unable to report error! Please initialize logger SDK environment by calling init().';
const DEBUG_ERR_MSG =
  'Unable to report debug! Please initialize logger SDK environment by calling init().';
const QUERY_ERR_MSG =
  'Unable to query log! Please initialize logger SDK environment by calling init().';

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
  assertTrue(_initLock.flag, ELock.LOCKED, LOG_ERR_MSG);
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

export const info = (text: string, namespace?: string) => {
  assertTrue(_initLock.flag, ELock.LOCKED, INFO_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  httpRequest(
    `${REPORT_URL}/${env}/${EMessageType.INFO}`,
    EhttpMethod.POST,
    body
  ).then(
    (res) => {
      console.log('SDK info success', res.data);
    },
    (err) => {
      console.log('SDK info failed', err);
    }
  );
};

export const warn = (text: string, namespace?: string) => {
  assertTrue(_initLock.flag, ELock.LOCKED, WARN_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  httpRequest(
    `${REPORT_URL}/${env}/${EMessageType.WARN}`,
    EhttpMethod.POST,
    body
  ).then(
    (res) => {
      console.log('SDK warn success', res.data);
    },
    (err) => {
      console.log('SDK warn failed', err);
    }
  );
};

export const error = (text: string, namespace?: string) => {
  assertTrue(_initLock.flag, ELock.LOCKED, ERROR_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  httpRequest(
    `${REPORT_URL}/${env}/${EMessageType.ERROR}`,
    EhttpMethod.POST,
    body
  ).then(
    (res) => {
      console.log('SDK error success', res.data);
    },
    (err) => {
      console.log('SDK error failed', err);
    }
  );
};

export const debug = (text: string, namespace?: string) => {
  assertTrue(_initLock.flag, ELock.LOCKED, DEBUG_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  httpRequest(
    `${REPORT_URL}/${env}/${EMessageType.DEBUG}`,
    EhttpMethod.POST,
    body
  ).then(
    (res) => {
      console.log('SDK debug success', res.data);
    },
    (err) => {
      console.log('SDK debug failed', err);
    }
  );
};

// const Logger = {
//   log,
//   info,
//   warn,
//   error,
//   debug,
// };

const query = () => {};

const queryAll = () => {};
