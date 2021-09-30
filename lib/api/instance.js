"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updateBaseURL = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _console = require("../utils/console");

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var config = {
  withCredentials: true
};

var instance = _axios["default"].create(config);

var updateBaseURL = function updateBaseURL(env) {
  var baseURL = "".concat(_config.BASE_IP, ":").concat(_config.PORT[env]);
  instance.defaults.baseURL = baseURL;
};

exports.updateBaseURL = updateBaseURL;
instance.interceptors.request.use(function (config) {
  _console.Console.group("[axios.request] ".concat(config.url), function () {// console.log(instance.defaults.baseURL);
  });

  return config;
}, function (err) {
  // console.error(err);
  _console.Console.err('interceptors.request.error');

  return Promise.reject(err);
});
instance.interceptors.response.use(function (response) {
  var config = response.config;

  _console.Console.group("[axios.response] ".concat(config.url), function () {// console.log(response);
  });

  return response;
}, function (err) {
  // console.error(err);
  _console.Console.err('interceptors.response.error');

  return Promise.reject(_objectSpread({
    code: err.response.status
  }, err.response.data));
});
var _default = instance;
exports["default"] = _default;