export declare enum EEnv {
    TEST = "TEST",
    PRE = "PRE",
    PROD = "PROD"
}
export declare enum EMessageType {
    LOG = "LOG",
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR",
    DEBUG = "DEBUG"
}
export interface ILogSubmitBody {
    appName: string;
    userId?: number;
    namespace?: string;
    text: string;
}
export interface ILogModel {
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
export interface IDef {
    appName: string;
    env: EEnv;
}
export interface IExceptionResponse {
    statusCode: number;
    msg: string;
    detail: string;
}
export declare enum EHttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}
export interface ILock {
    flag: ELock;
}
export declare enum ELock {
    LOCKED = "LOCKED",
    UNLOCKED = "UNLOCKED"
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
export interface IQuery {
    type?: EMessageType;
    userId?: number;
    namespace?: string;
    keyword?: string;
    startTime?: number;
    endTime?: number;
}
