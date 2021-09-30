"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Console = void 0;

var group = function group(name, cb) {
  console.group(name);
  cb();
  console.groupEnd();
};

var err = function err(_err) {
  console.error(_err);
};

var log = function log(_log) {
  console.log(_log);
};

var Console = {
  group: group,
  err: err,
  log: log
};
exports.Console = Console;