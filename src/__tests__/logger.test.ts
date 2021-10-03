import { init, destroy, log, info, warn, error, debug } from '../index';
import { IDef, EEnv, EMessageType, ILogModel } from '../model';

import './logger-matcher';

const LoggerTest = {
  LOG: 'log测试',
  INFO: 'info测试',
  WARN: 'warn测试',
  ERROR: 'error测试',
  DEBUG: 'debug测试',
  namespace: 'src.__tests__',
  appName: 'TEST_LOGGER',
};

const _def: IDef = { appName: LoggerTest.appName, env: EEnv.PROD };

describe('Test Logger with correct init', () => {
  beforeAll(() => {
    init(_def);
  });

  afterAll(() => {
    destroy();
  });

  test('Test log api', async () => {
    const res: any = await log(LoggerTest.LOG, LoggerTest.namespace);
    expect(res).not.toBeNull();
    expect(res).toBeValidLog(EMessageType.LOG);
    // const { appName, env, type, namespace, text } = res;
    // expect(appName).toBe(LoggerTest.appName);
    // expect(env).toBe(_def.env);
    // expect(namespace).toBe(LoggerTest.namespace);
    // expect(type).toBe(EMessageType.LOG);
    // expect(text).toBe(LoggerTest.LOG);
  });

  test('Test info api', async () => {
    const res: any = await info(LoggerTest.INFO, LoggerTest.namespace);
    expect(res).not.toBeNull();

    const { appName, env, type, namespace, text } = res;
    expect(appName).toBe(LoggerTest.appName);
    expect(env).toBe(_def.env);
    expect(namespace).toBe(LoggerTest.namespace);
    expect(type).toBe(EMessageType.INFO);
    expect(text).toBe(LoggerTest.INFO);
  });

  test('Test warn api', async () => {
    const res: any = await warn(LoggerTest.WARN, LoggerTest.namespace);
    expect(res).not.toBeNull();

    const { appName, env, type, namespace, text } = res;
    expect(appName).toBe(LoggerTest.appName);
    expect(env).toBe(_def.env);
    expect(namespace).toBe(LoggerTest.namespace);
    expect(type).toBe(EMessageType.WARN);
    expect(text).toBe(LoggerTest.WARN);
  });

  test('Test error api', async () => {
    const res: any = await error(LoggerTest.ERROR, LoggerTest.namespace);
    expect(res).not.toBeNull();

    const { appName, env, type, namespace, text } = res;
    expect(appName).toBe(LoggerTest.appName);
    expect(env).toBe(_def.env);
    expect(namespace).toBe(LoggerTest.namespace);
    expect(type).toBe(EMessageType.ERROR);
    expect(text).toBe(LoggerTest.ERROR);
  });

  test('Test debug api', async () => {
    const res: any = await debug(LoggerTest.DEBUG, LoggerTest.namespace);
    expect(res).not.toBeNull();

    const { appName, env, type, namespace, text } = res;
    expect(appName).toBe(LoggerTest.appName);
    expect(env).toBe(_def.env);
    expect(namespace).toBe(LoggerTest.namespace);
    expect(type).toBe(EMessageType.DEBUG);
    expect(text).toBe(LoggerTest.DEBUG);
  });
});

describe('Test Logger without correct init', () => {
  test('Test log api', () => {
    expect(() => {
      return log(LoggerTest.LOG, LoggerTest.namespace);
    }).toThrow(Error);
  });

  test('Test info api', () => {
    expect(() => {
      return info(LoggerTest.INFO, LoggerTest.namespace);
    }).toThrow(Error);
  });

  test('Test warn api', () => {
    expect(() => {
      return warn(LoggerTest.WARN, LoggerTest.namespace);
    }).toThrow(Error);
  });

  test('Test error api', () => {
    expect(() => {
      return error(LoggerTest.ERROR, LoggerTest.namespace);
    }).toThrow(Error);
  });

  test('Test debug api', () => {
    expect(() => {
      return debug(LoggerTest.DEBUG, LoggerTest.namespace);
    }).toThrow(Error);
  });
});
