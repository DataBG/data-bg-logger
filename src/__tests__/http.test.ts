import { IExceptionResponse } from '..';
import { httpRequest } from '../api/http';
import { EEnv, EHttpMethod } from '../model';
import { createLogPrefix, PRE_BASE_URL, QUERY_ALL_PREFIX } from './constant/config';

const PRE_TEST_URL = `${PRE_BASE_URL}${QUERY_ALL_PREFIX}`;
const PRE_TEST_URL2 = `${PRE_BASE_URL}${createLogPrefix(EEnv.PRE)}`;

describe('Tests for httpRequest', () => {
  test('success test', async () => {
    const res = await httpRequest(PRE_TEST_URL, EHttpMethod.GET);
    expect(res).not.toBeNull();
  });

  test('fail test: path not found', async () => {
    const err: IExceptionResponse = await httpRequest(`${PRE_TEST_URL}/fail`, EHttpMethod.GET)
      .then(() => null)
      .catch((err) => err);
    console.log('err', err);
    expect(err).not.toBeNull();
    expect(err.msg).not.toBeNull();
    expect(err.detail).not.toBeNull();
    expect(err.statusCode).toBe(404);
  });

  test('fail test: unsupport media', async () => {
    const err: IExceptionResponse = await httpRequest(`${PRE_TEST_URL2}`, EHttpMethod.POST)
      .then(() => null)
      .catch((err) => err);
    console.log('err', err);
    expect(err).not.toBeNull();
    expect(err.msg).not.toBeNull();
    expect(err.detail).not.toBeNull();
    expect(err.statusCode).toBe(415);
  });

  test('fail test: wrong params', async () => {
    const err: IExceptionResponse = await httpRequest(`${PRE_TEST_URL2}`, EHttpMethod.POST, {})
      .then(() => null)
      .catch((err) => err);
    console.log('err', err);
    expect(err).not.toBeNull();
    expect(err.msg).not.toBeNull();
    expect(err.detail).not.toBeNull();
    expect(err.statusCode).toBe(500);
  });
});
