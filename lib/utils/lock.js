"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unlock = exports.lock = void 0;

var _model = require("../model");

var lock = function lock(_lock) {
  if (_lock.flag === _model.ELock.UNLOCKED) {
    _lock.flag = _model.ELock.LOCKED;
  }
};

exports.lock = lock;

var unlock = function unlock(lock) {
  if (lock.flag === _model.ELock.LOCKED) {
    lock.flag = _model.ELock.UNLOCKED;
  }
};

exports.unlock = unlock;