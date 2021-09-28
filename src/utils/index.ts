export const consoleGroup = (name, cb) => {
  console.group(name);
  cb();
  console.groupEnd();
};
