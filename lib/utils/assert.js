"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertEqual = exports.assertTrue = void 0;

var _text = require("../constant/text");

var assertTrue = function assertTrue(condition, errMsg) {
  if (condition) {
    if (!errMsg) {
      throw new Error(_text.ASSERT_TRUE_MSG);
    }

    throw new Error(errMsg);
  }
};

exports.assertTrue = assertTrue;

var assertEqual = function assertEqual(condition, expected, errMsg) {
  if (condition === expected) {
    if (!errMsg) {
      throw new Error(_text.ASSERT_EQUAL_MSG);
    }

    throw new Error(errMsg);
  }
};

exports.assertEqual = assertEqual;