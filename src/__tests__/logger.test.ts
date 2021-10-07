import { init, destroy, log, info, warn, error, debug } from '../index';
import { EMessageType } from '../model';

import './custom-matcher';
import { logger_def, LoggerTest } from './constant/logger';

describe('Test Logger with correct init', () => {
  beforeAll(() => {
    init(logger_def);
  });

  afterAll(() => {
    destroy();
  });

  test('Test log api', async () => {
    const res: any = await log(LoggerTest.LOG, LoggerTest.namespace);
    expect(res).not.toBeNull();
    expect(res).toBeValidLog(EMessageType.LOG);
  });

  test('Test info api', async () => {
    const res: any = await info(LoggerTest.INFO, LoggerTest.namespace);
    expect(res).not.toBeNull();
    expect(res).toBeValidLog(EMessageType.INFO);
  });

  test('Test warn api', async () => {
    const res: any = await warn(LoggerTest.WARN, LoggerTest.namespace);
    expect(res).not.toBeNull();
    expect(res).toBeValidLog(EMessageType.WARN);
  });

  test('Test error api', async () => {
    const res: any = await error(LoggerTest.ERROR, LoggerTest.namespace);
    expect(res).not.toBeNull();
    expect(res).toBeValidLog(EMessageType.ERROR);
  });

  test('Test debug api', async () => {
    const res: any = await debug(LoggerTest.DEBUG, LoggerTest.namespace);
    expect(res).not.toBeNull();
    expect(res).toBeValidLog(EMessageType.DEBUG);
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
