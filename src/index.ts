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
import { lock, unlock } from './utils/lock';
import { assertEqual } from './utils/assert';
import { LOG_ERR_MSG, INFO_ERR_MSG, WARN_ERR_MSG, ERROR_ERR_MSG, DEBUG_ERR_MSG, QUERY_ERR_MSG } from './constant/text';
import { DEFAULT_DEF } from './constant/env';
import { debugConsole } from './utils/debug';

// 環境參數
let _def: IDef = DEFAULT_DEF;

// 初始化鎖
let _initLock: ILock = {
  flag: ELock.LOCKED,
};

export const init = (def: IDef): void => {
  debugConsole('[init] Logger SDK environment', def);
  _def = def;
  updateBaseURL(def.env);
  unlock(_initLock);
};

export const destroy = (): void => {
  debugConsole('[destroy] Logger SDK environment');
  _def = DEFAULT_DEF;
  lock(_initLock);
};

export const log = (text: string, namespace?: string): Promise<ILogModel | IExceptionResponse> => {
  assertEqual(_initLock.flag, ELock.LOCKED, LOG_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  return httpRequest(`${REPORT_URL}/${env}/${EMessageType.LOG}`, EHttpMethod.POST, body);
};

export const info = (text: string, namespace?: string): Promise<ILogModel | IExceptionResponse> => {
  assertEqual(_initLock.flag, ELock.LOCKED, INFO_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  return httpRequest(`${REPORT_URL}/${env}/${EMessageType.INFO}`, EHttpMethod.POST, body);
};

export const warn = (text: string, namespace?: string): Promise<ILogModel | IExceptionResponse> => {
  assertEqual(_initLock.flag, ELock.LOCKED, WARN_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  return httpRequest(`${REPORT_URL}/${env}/${EMessageType.WARN}`, EHttpMethod.POST, body);
};

export const error = (text: string, namespace?: string): Promise<ILogModel | IExceptionResponse> => {
  assertEqual(_initLock.flag, ELock.LOCKED, ERROR_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  return httpRequest(`${REPORT_URL}/${env}/${EMessageType.ERROR}`, EHttpMethod.POST, body);
};

export const debug = (text: string, namespace?: string): Promise<ILogModel | IExceptionResponse> => {
  assertEqual(_initLock.flag, ELock.LOCKED, DEBUG_ERR_MSG);
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  return httpRequest(`${REPORT_URL}/${env}/${EMessageType.DEBUG}`, EHttpMethod.POST, body);
};

export const query = (param: IQuery): Promise<ILogModel | IExceptionResponse> => {
  assertEqual(_initLock.flag, ELock.LOCKED, QUERY_ERR_MSG);
  const { env, appName } = _def;
  const params: IQueryBody = {
    appName,
    env,
    ...param,
  };
  return httpRequest(`${QUERY_URL}`, EHttpMethod.GET, null, params);
};

export const queryAll = (): Promise<ILogModel | IExceptionResponse> => {
  assertEqual(_initLock.flag, ELock.LOCKED, QUERY_ERR_MSG);
  return httpRequest(`${QUERY_URL}/all`, EHttpMethod.GET);
};

export const Logger = {
  init,
  destroy,
  log,
  info,
  warn,
  error,
  debug,
  query,
  queryAll,
};
