import { IDef, IQuery, IExceptionResponse, ILogModel } from './model';
export declare const init: (def: IDef) => void;
export declare const log: (text: string, namespace?: string) => Promise<ILogModel | IExceptionResponse>;
export declare const info: (text: string, namespace?: string) => Promise<ILogModel | IExceptionResponse>;
export declare const warn: (text: string, namespace?: string) => Promise<ILogModel | IExceptionResponse>;
export declare const error: (text: string, namespace?: string) => Promise<ILogModel | IExceptionResponse>;
export declare const debug: (text: string, namespace?: string) => Promise<ILogModel | IExceptionResponse>;
export declare const query: (param: IQuery) => Promise<ILogModel | IExceptionResponse>;
export declare const queryAll: () => Promise<ILogModel | IExceptionResponse>;
export declare const Logger: {
    init: (def: IDef) => void;
    log: (text: string, namespace?: string) => Promise<ILogModel | IExceptionResponse>;
    info: (text: string, namespace?: string) => Promise<ILogModel | IExceptionResponse>;
    warn: (text: string, namespace?: string) => Promise<ILogModel | IExceptionResponse>;
    error: (text: string, namespace?: string) => Promise<ILogModel | IExceptionResponse>;
    debug: (text: string, namespace?: string) => Promise<ILogModel | IExceptionResponse>;
    query: (param: IQuery) => Promise<ILogModel | IExceptionResponse>;
    queryAll: () => Promise<ILogModel | IExceptionResponse>;
};
