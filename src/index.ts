import { IDEF, EEnv, EMessageType, ILogSubmitBody } from './model';
import { updateBaseURL } from './api/axios';
import { REPORT_URL, QUERY_URL } from './api/config';
import { http } from './utils/index';

// 環境參數
let appName: string = '';
let namespace: string = '';
let env: EEnv = null;

const init = (def: IDEF): void => {
  appName = def.appName;
  namespace = def.namespace;
  env = def.env;
  updateBaseURL(env);
};

const log = (logger: ILogSubmitBody) => {
  http.post(`${REPORT_URL}/${env}/${EMessageType.LOG}`, logger).then(
    (res) => {
      console.log('SDK log success ', res);
    },
    (err) => {
      console.log('SDK log failed ', err);
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
