export enum EEnv {
  TEST = 'TEST', // 测试环境
  PRE = 'PRE', // 预发环境 port8081
  PROD = 'PROD', // 线上环境 port 8080
}

export enum EMessageType {
  LOG = 'LOG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  DEBUG = 'DEBUG',
}

export interface ILogSubmitBody {
  appName: string;
  userId?: number;
  namespace?: string;
  text: string;
}

export interface IDef {
  appName: string;
  env: EEnv;
}

export interface ExceptionResponse {
  statusCode: number; // HttpStatus http状态码
  msg: string; // 异常信息
  detail: string; // 异常详细信息（可以是 JSON 序列化后结果）
}

export type ThttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export enum EhttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type TLock = 'LOCKED' | 'UNLOCKED';

export interface ILock {
  flag: TLock;
}

export enum ELock {
  LOCKED = 'LOCKED',
  UNLOCKED = 'UNLOCKED',
}

export interface IQueryBody {
  appName?: string;
  env?: EEnv;
  type?: EMessageType;
  userId?: number;
  namespace?: string;
  keyword?: string;
  startTime?: number;
  endTime?: number;
}
