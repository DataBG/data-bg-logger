import { IDef, EEnv, EMessageType, ILogSubmitBody } from './model';
import { updateBaseURL } from './api/axios';
import { REPORT_URL, QUERY_URL } from './api/config';
import { http } from './utils/index';

// 環境參數
let _def: IDef = { appName: 'DEFAULT_APP_NAME', env: EEnv.TEST };

export const init = (def: IDef): void => {
  console.log('[init] def', def);
  _def = def;
  updateBaseURL(def.env);
};

export const log = (text: string, namespace?: string) => {
  const { env, appName } = _def;
  const body: ILogSubmitBody = {
    appName,
    namespace,
    text,
  };
  http.post(`${REPORT_URL}/${env}/${EMessageType.LOG}`, body).then(
    (res) => {
      console.log('SDK log success', res.data);
      // console.log('SDK log success ', res);
    },
    (err) => {
      console.log('SDK log failed');
      // console.log('SDK log failed ', err);
    }
  );
};

// const info = () => {};

// const warn = () => {};

// const error = () => {};

// const debug = () => {};

// const Logger = {
//   log,
//   info,
//   warn,
//   error,
//   debug,
// };

// const query = () => {};
