export const group = (name, cb): void => {
  console.group(name);
  cb();
  console.groupEnd();
};

export const error = (err): void => {
  console.error(err);
};

export const log = (log): void => {
  console.log(log);
};
