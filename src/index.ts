import {
  IDef,
  EEnv,
  EMessageType,
  ILogSubmitBody,
  EhttpMethod,
  ILock,
  ELock,
  IQueryBody,
  IQuery,
  IExceptionResponse,
  ILogModel,
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

export const log = (
  text: string,
  namespace?: string
): Promise<ILogModel | IExceptionResponse> => {
  assertTrue(_initLock.flag, ELock.LOCKED, LOG_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  return new Promise((resolve, reject) => {
    httpRequest(
      `${REPORT_URL}/${env}/${EMessageType.LOG}`,
      EhttpMethod.POST,
      body
    )
      .then(
        (res) => {
          // console.log('SDK log success', res.data);
          const logRes = res.data;
          resolve(logRes);
        },
        (err) => {
          // console.log('SDK log failed', err);
          reject(err);
        }
      )
      .catch((err) => {
        reject(err);
      });
  });
};

export const info = (
  text: string,
  namespace?: string
): Promise<ILogModel | IExceptionResponse> => {
  assertTrue(_initLock.flag, ELock.LOCKED, INFO_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  return new Promise((resolve, reject) => {
    httpRequest(
      `${REPORT_URL}/${env}/${EMessageType.INFO}`,
      EhttpMethod.POST,
      body
    )
      .then(
        (res) => {
          // console.log('SDK log success', res.data);
          const infoRes = res.data;
          resolve(infoRes);
        },
        (err) => {
          // console.log('SDK log failed', err);
          reject(err);
        }
      )
      .catch((err) => {
        reject(err);
      });
  });
};

export const warn = (
  text: string,
  namespace?: string
): Promise<ILogModel | IExceptionResponse> => {
  assertTrue(_initLock.flag, ELock.LOCKED, WARN_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  return new Promise((resolve, reject) => {
    httpRequest(
      `${REPORT_URL}/${env}/${EMessageType.WARN}`,
      EhttpMethod.POST,
      body
    )
      .then(
        (res) => {
          // console.log('SDK log success', res.data);
          const warnRes = res.data;
          resolve(warnRes);
        },
        (err) => {
          // console.log('SDK log failed', err);
          reject(err);
        }
      )
      .catch((err) => {
        reject(err);
      });
  });
};

export const error = (
  text: string,
  namespace?: string
): Promise<ILogModel | IExceptionResponse> => {
  assertTrue(_initLock.flag, ELock.LOCKED, ERROR_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  return new Promise((resolve, reject) => {
    httpRequest(
      `${REPORT_URL}/${env}/${EMessageType.ERROR}`,
      EhttpMethod.POST,
      body
    )
      .then(
        (res) => {
          // console.log('SDK log success', res.data);
          const errorRes = res.data;
          resolve(errorRes);
        },
        (err) => {
          // console.log('SDK log failed', err);
          reject(err);
        }
      )
      .catch((err) => {
        reject(err);
      });
  });
};

export const debug = (
  text: string,
  namespace?: string
): Promise<ILogModel | IExceptionResponse> => {
  assertTrue(_initLock.flag, ELock.LOCKED, DEBUG_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  return new Promise((resolve, reject) => {
    httpRequest(
      `${REPORT_URL}/${env}/${EMessageType.DEBUG}`,
      EhttpMethod.POST,
      body
    )
      .then(
        (res) => {
          // console.log('SDK log success', res.data);
          const debugRes = res.data;
          resolve(debugRes);
        },
        (err) => {
          // console.log('SDK log failed', err);
          reject(err);
        }
      )
      .catch((err) => {
        reject(err);
      });
  });
};

export const query = (
  param: IQuery
): Promise<ILogModel | IExceptionResponse> => {
  assertTrue(_initLock.flag, ELock.LOCKED, QUERY_ERR_MSG);
  const { env, appName } = _def;
  const params: IQueryBody = {
    appName,
    env,
    ...param,
  };
  return new Promise((resolve, reject) => {
    httpRequest(`${QUERY_URL}`, EhttpMethod.GET, null, params)
      .then(
        (res) => {
          // console.log('SDK query success', res.data);
          const queryRes = res.data;
          resolve(queryRes);
        },
        (err) => {
          // console.log('SDK query failed', err);
          reject(err);
        }
      )
      .catch((err) => {
        reject(err);
      });
  });
};

export const queryAll = () => {
  assertTrue(_initLock.flag, ELock.LOCKED, QUERY_ERR_MSG);
  return new Promise((resolve, reject) => {
    httpRequest(`${QUERY_URL}/all`, EhttpMethod.GET)
      .then(
        (res) => {
          // console.log('SDK queryAll success', res.data);
          const queryAllRes = res.data;
          resolve(queryAllRes);
        },
        (err) => {
          // console.log('SDK queryAll failed', err);
          reject(err);
        }
      )
      .catch((err) => {
        reject(err);
      });
  });
};

export const Logger = {
  init,
  log,
  info,
  warn,
  error,
  debug,
  query,
  queryAll,
};
