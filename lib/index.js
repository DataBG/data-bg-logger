"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = exports.queryAll = exports.query = exports.debug = exports.error = exports.warn = exports.info = exports.log = exports.init = void 0;

var _model = require("./model");

var _instance = require("./api/instance");

var _config = require("./api/config");

var _http = require("./api/http");

var _lock = require("./utils/lock");

var _assert = require("./utils/assert");

var _text = require("./constant/text");

var _debug = require("./utils/debug");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 環境參數
var _def = {
  appName: 'DEFAULT_APP_NAME',
  env: _model.EEnv.TEST
}; // 初始化鎖

var _initLock = {
  flag: _model.ELock.LOCKED
};

var init = function init(def) {
  (0, _debug.debugConsole)('[init] def', def);
  _def = def;
  (0, _instance.updateBaseURL)(def.env);
  (0, _lock.unlock)(_initLock);
};

exports.init = init;

var log = function log(text, namespace) {
  (0, _assert.assertEqual)(_initLock.flag, _model.ELock.LOCKED, _text.LOG_ERR_MSG);
  var _def2 = _def,
      env = _def2.env,
      appName = _def2.appName;
  var body = {
    appName: appName,
    namespace: namespace,
    text: text
  };
  return (0, _http.httpRequest)("".concat(_config.REPORT_URL, "/").concat(env, "/").concat(_model.EMessageType.LOG), _model.EHttpMethod.POST, body);
};

exports.log = log;

var info = function info(text, namespace) {
  (0, _assert.assertEqual)(_initLock.flag, _model.ELock.LOCKED, _text.INFO_ERR_MSG);
  var _def3 = _def,
      env = _def3.env,
      appName = _def3.appName;
  var body = {
    appName: appName,
    namespace: namespace,
    text: text
  };
  return (0, _http.httpRequest)("".concat(_config.REPORT_URL, "/").concat(env, "/").concat(_model.EMessageType.INFO), _model.EHttpMethod.POST, body);
};

exports.info = info;

var warn = function warn(text, namespace) {
  (0, _assert.assertEqual)(_initLock.flag, _model.ELock.LOCKED, _text.WARN_ERR_MSG);
  var _def4 = _def,
      env = _def4.env,
      appName = _def4.appName;
  var body = {
    appName: appName,
    namespace: namespace,
    text: text
  };
  return (0, _http.httpRequest)("".concat(_config.REPORT_URL, "/").concat(env, "/").concat(_model.EMessageType.WARN), _model.EHttpMethod.POST, body);
};

exports.warn = warn;

var error = function error(text, namespace) {
  (0, _assert.assertEqual)(_initLock.flag, _model.ELock.LOCKED, _text.ERROR_ERR_MSG);
  var _def5 = _def,
      env = _def5.env,
      appName = _def5.appName;
  var body = {
    appName: appName,
    namespace: namespace,
    text: text
  };
  return (0, _http.httpRequest)("".concat(_config.REPORT_URL, "/").concat(env, "/").concat(_model.EMessageType.ERROR), _model.EHttpMethod.POST, body);
};

exports.error = error;

var debug = function debug(text, namespace) {
  (0, _assert.assertEqual)(_initLock.flag, _model.ELock.LOCKED, _text.DEBUG_ERR_MSG);
  var _def6 = _def,
      env = _def6.env,
      appName = _def6.appName;
  var body = {
    appName: appName,
    namespace: namespace,
    text: text
  };
  return (0, _http.httpRequest)("".concat(_config.REPORT_URL, "/").concat(env, "/").concat(_model.EMessageType.DEBUG), _model.EHttpMethod.POST, body);
};

exports.debug = debug;

var query = function query(param) {
  (0, _assert.assertEqual)(_initLock.flag, _model.ELock.LOCKED, _text.QUERY_ERR_MSG);
  var _def7 = _def,
      env = _def7.env,
      appName = _def7.appName;

  var params = _objectSpread({
    appName: appName,
    env: env
  }, param);

  return (0, _http.httpRequest)("".concat(_config.QUERY_URL), _model.EHttpMethod.GET, null, params);
};

exports.query = query;

var queryAll = function queryAll() {
  (0, _assert.assertEqual)(_initLock.flag, _model.ELock.LOCKED, _text.QUERY_ERR_MSG);
  return (0, _http.httpRequest)("".concat(_config.QUERY_URL, "/all"), _model.EHttpMethod.GET);
};

exports.queryAll = queryAll;
var Logger = {
  init: init,
  log: log,
  info: info,
  warn: warn,
  error: error,
  debug: debug,
  query: query,
  queryAll: queryAll
};
exports.Logger = Logger;