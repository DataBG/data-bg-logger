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
