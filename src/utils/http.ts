import instance from '../api/axios';

const get = (url: string, params: any) => {
  return new Promise((resolve, reject) => {
    instance
      .get(url, params)
      .then(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      )
      .catch((error) => {
        reject(error);
      });
  });
};

const post = (url: string, params: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, params)
      .then(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      )
      .catch((error) => {
        reject(error);
      });
  });
};

export { get, post };
