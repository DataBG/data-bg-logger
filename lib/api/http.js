"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.httpRequest = void 0;

var _instance = _interopRequireDefault(require("./instance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var httpRequest = function httpRequest(url, method, data, params) {
  return (0, _instance["default"])(url, {
    method: method,
    data: data,
    params: params
  }).then(function (res) {
    return res.data;
  });
};

exports.httpRequest = httpRequest;