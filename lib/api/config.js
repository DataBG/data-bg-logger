"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QUERY_URL = exports.REPORT_URL = exports.PORT = exports.BASE_IP = void 0;

var _model = require("../model");

var _PORT;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BASE_IP = 'http://8.130.31.99';
exports.BASE_IP = BASE_IP;
var PORT = (_PORT = {}, _defineProperty(_PORT, _model.EEnv.PROD, '8080'), _defineProperty(_PORT, _model.EEnv.PRE, '8081'), _PORT);
exports.PORT = PORT;
var REPORT_URL = '/logger/submit';
exports.REPORT_URL = REPORT_URL;
var QUERY_URL = '/logger/query';
exports.QUERY_URL = QUERY_URL;