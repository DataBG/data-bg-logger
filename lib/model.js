"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ELock = exports.EHttpMethod = exports.EMessageType = exports.EEnv = void 0;
var EEnv;
exports.EEnv = EEnv;

(function (EEnv) {
  EEnv["TEST"] = "TEST";
  EEnv["PRE"] = "PRE";
  EEnv["PROD"] = "PROD";
})(EEnv || (exports.EEnv = EEnv = {}));

var EMessageType;
exports.EMessageType = EMessageType;

(function (EMessageType) {
  EMessageType["LOG"] = "LOG";
  EMessageType["INFO"] = "INFO";
  EMessageType["WARN"] = "WARN";
  EMessageType["ERROR"] = "ERROR";
  EMessageType["DEBUG"] = "DEBUG";
})(EMessageType || (exports.EMessageType = EMessageType = {}));

var EHttpMethod;
exports.EHttpMethod = EHttpMethod;

(function (EHttpMethod) {
  EHttpMethod["GET"] = "GET";
  EHttpMethod["POST"] = "POST";
  EHttpMethod["PUT"] = "PUT";
  EHttpMethod["DELETE"] = "DELETE";
})(EHttpMethod || (exports.EHttpMethod = EHttpMethod = {}));

var ELock;
exports.ELock = ELock;

(function (ELock) {
  ELock["LOCKED"] = "LOCKED";
  ELock["UNLOCKED"] = "UNLOCKED";
})(ELock || (exports.ELock = ELock = {}));