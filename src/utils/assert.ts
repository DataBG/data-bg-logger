export const assertTrue = (
  condition1: any,
  condition2: any,
  errMsg: string
): void => {
  if (condition1 === condition2) {
    throw new Error(errMsg);
  }
};

export const assertFalse = (
  condition1: any,
  condition2: any,
  errMsg: string
): void => {
  if (condition1 !== condition2) {
    throw new Error(errMsg);
  }
};
