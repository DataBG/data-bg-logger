// TODO: PORT 接口没有 TEST 对应的端口，所以应该去除 TEST
export enum EEnv {
  PRE = 'PRE', // 预发环境 port 8081
  PROD = 'PROD', // 线上环境 port 8080
}

export enum EMessageType {
  LOG = 'LOG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  DEBUG = 'DEBUG',
}

export abstract class ILogSubmitBody {
  appName: string;
  userId?: number;
  namespace?: string;
  text: string;
}

export abstract class ILogModel {
  id: number;
  appName: string;
  env: EEnv;
  type: EMessageType;
  userId: number;
  namespace: string;
  text: string;
  createTime: number;
  lastModifiedTime: number;
}

export abstract class IDef {
  appName: string;
  env: EEnv;
}

export abstract class IExceptionResponse {
  statusCode: number; // HttpStatus http状态码
  msg: string; // 异常信息
  detail: string; // 异常详细信息（可以是 JSON 序列化后结果）
}

export enum EHttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export abstract class ILock {
  flag: ELock;
}

export enum ELock {
  LOCKED = 'LOCKED',
  UNLOCKED = 'UNLOCKED',
}

export abstract class IQueryBody {
  appName?: string;
  env?: EEnv;
  type?: EMessageType;
  userId?: number;
  namespace?: string;
  keyword?: string;
  startTime?: number;
  endTime?: number;
}

export abstract class IQuery {
  type?: EMessageType;
  userId?: number;
  namespace?: string;
  keyword?: string;
  startTime?: number;
  endTime?: number;
}
