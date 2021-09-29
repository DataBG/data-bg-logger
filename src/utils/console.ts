const Group = (name, cb): void => {
  console.group(name);
  cb();
  console.groupEnd();
};

const Err = (err): void => {
  console.error(err);
};

const Log = (log): void => {
  console.log(log);
};

export const Console = {
  Group,
  Err,
  Log,
};
