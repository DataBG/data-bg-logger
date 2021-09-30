"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ASSERT_EQUAL_MSG = exports.ASSERT_TRUE_MSG = exports.QUERY_ERR_MSG = exports.DEBUG_ERR_MSG = exports.ERROR_ERR_MSG = exports.WARN_ERR_MSG = exports.INFO_ERR_MSG = exports.LOG_ERR_MSG = void 0;
// Error 報錯消息
var LOG_ERR_MSG = 'Unable to report log! Please initialize logger SDK environment by calling init().';
exports.LOG_ERR_MSG = LOG_ERR_MSG;
var INFO_ERR_MSG = 'Unable to report info! Please initialize logger SDK environment by calling init().';
exports.INFO_ERR_MSG = INFO_ERR_MSG;
var WARN_ERR_MSG = 'Unable to report warn! Please initialize logger SDK environment by calling init().';
exports.WARN_ERR_MSG = WARN_ERR_MSG;
var ERROR_ERR_MSG = 'Unable to report error! Please initialize logger SDK environment by calling init().';
exports.ERROR_ERR_MSG = ERROR_ERR_MSG;
var DEBUG_ERR_MSG = 'Unable to report debug! Please initialize logger SDK environment by calling init().';
exports.DEBUG_ERR_MSG = DEBUG_ERR_MSG;
var QUERY_ERR_MSG = 'Unable to query log! Please initialize logger SDK environment by calling init().'; // Assert 報錯消息

exports.QUERY_ERR_MSG = QUERY_ERR_MSG;
var ASSERT_TRUE_MSG = 'Assertion Error: assert true unexpected!';
exports.ASSERT_TRUE_MSG = ASSERT_TRUE_MSG;
var ASSERT_EQUAL_MSG = 'Assertion Error: assert equal unexpected!';
exports.ASSERT_EQUAL_MSG = ASSERT_EQUAL_MSG;