const group = (name: string, cb: () => void): void => {
  console.group(name);
  cb();
  console.groupEnd();
};

const err = (err): void => {
  console.error(err);
};

const log = (log): void => {
  console.log(log);
};

export const Console = {
  group,
  err,
  log,
};
