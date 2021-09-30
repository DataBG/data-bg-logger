"use strict";

var _ = require("..");

var _model = require("../model");

(0, _.init)({
  appName: 'TEST_LOGGER',
  env: _model.EEnv.PROD
});
var logRes = (0, _.log)('log测试', 'src.__tests__');
logRes.then(function (res) {
  return console.log(res);
}); // init({ appName: 'sampleAppName', env: EEnv.PROD });
// const queryAllParam: IQuery = {
//   type: EMessageType.ERROR,
//   namespace: 'sampleNamespace',
//   keyword: 'blablabla',
// };
// query(queryAllParam);
// init({ appName: 'sampleAppName', env: EEnv.PROD });
// queryAll();