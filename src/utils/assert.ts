import { ASSERT_EQUAL_MSG, ASSERT_TRUE_MSG } from '../constant/text';

export const assertTrue = (condition: any, errMsg?: string): void => {
  if (condition) {
    if (!errMsg) {
      throw new Error(ASSERT_TRUE_MSG);
    }
    throw new Error(errMsg);
  }
};

export const assertEqual = (condition: any, expected: any, errMsg?: string): void => {
  if (condition === expected) {
    if (!errMsg) {
      throw new Error(ASSERT_EQUAL_MSG);
    }
    throw new Error(errMsg);
  }
};
