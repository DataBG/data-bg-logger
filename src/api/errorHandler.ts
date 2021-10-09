import { IExceptionResponse } from '../model';

const EMPTY_RESPONSE_DATA: IExceptionResponse = {
  statusCode: 404,
  msg: 'empty response',
  detail: null,
};

export function adaptAxiosError(code: number, resData?): IExceptionResponse {
  if (!resData) {
    return { ...EMPTY_RESPONSE_DATA };
  }

  if (resData.status) {
    // axios 请求失败
    const { status, error, path } = resData;
    const data: IExceptionResponse = {
      statusCode: status,
      msg: error,
      detail: `Axios Request error: code=${status}, reason=${error}, path=${path}`,
    };
    return data;
  } else {
    // 后端抛错
    return {
      statusCode: code,
      ...resData,
    };
  }
}
