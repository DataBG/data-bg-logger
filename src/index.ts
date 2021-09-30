import {
  IDef,
  EEnv,
  EMessageType,
  ILogSubmitBody,
  EHttpMethod,
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
import { LOG_ERR_MSG, INFO_ERR_MSG, WARN_ERR_MSG, ERROR_ERR_MSG, DEBUG_ERR_MSG, QUERY_ERR_MSG } from './constant/text';

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

export const log = (text: string, namespace?: string): Promise<ILogModel | IExceptionResponse> => {
  assertTrue(_initLock.flag, ELock.LOCKED, LOG_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  return httpRequest(`${REPORT_URL}/${env}/${EMessageType.LOG}`, EHttpMethod.POST, body);
};

export const info = (text: string, namespace?: string): Promise<ILogModel | IExceptionResponse> => {
  assertTrue(_initLock.flag, ELock.LOCKED, INFO_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  return httpRequest(`${REPORT_URL}/${env}/${EMessageType.INFO}`, EHttpMethod.POST, body);
};

export const warn = (text: string, namespace?: string): Promise<ILogModel | IExceptionResponse> => {
  assertTrue(_initLock.flag, ELock.LOCKED, WARN_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  return httpRequest(`${REPORT_URL}/${env}/${EMessageType.WARN}`, EHttpMethod.POST, body);
};

export const error = (text: string, namespace?: string): Promise<ILogModel | IExceptionResponse> => {
  assertTrue(_initLock.flag, ELock.LOCKED, ERROR_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  return httpRequest(`${REPORT_URL}/${env}/${EMessageType.ERROR}`, EHttpMethod.POST, body);
};

export const debug = (text: string, namespace?: string): Promise<ILogModel | IExceptionResponse> => {
  assertTrue(_initLock.flag, ELock.LOCKED, DEBUG_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  return httpRequest(`${REPORT_URL}/${env}/${EMessageType.DEBUG}`, EHttpMethod.POST, body);
};

export const query = (param: IQuery): Promise<ILogModel | IExceptionResponse> => {
  assertTrue(_initLock.flag, ELock.LOCKED, QUERY_ERR_MSG);
  const { env, appName } = _def;
  const params: IQueryBody = {
    appName,
    env,
    ...param,
  };
  return httpRequest(`${QUERY_URL}`, EHttpMethod.GET, null, params);
};

export const queryAll = () => {
  assertTrue(_initLock.flag, ELock.LOCKED, QUERY_ERR_MSG);
  return httpRequest(`${QUERY_URL}/all`, EHttpMethod.GET);
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
