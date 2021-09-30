"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debugConsole = void 0;

var _debug = _interopRequireDefault(require("debug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var debugConsole = (0, _debug["default"])('DEBUG');
exports.debugConsole = debugConsole;