import { init, destroy, query, queryAll } from '../index';
import { query_def } from './constant/query';

import './custom-matcher';

describe('Test Logger with correct init', () => {
  beforeAll(() => {
    init(query_def);
  });

  afterAll(() => {
    destroy();
  });

  test('Test query api', async () => {
    const res: any = await query({});
    expect(res).not.toBeNull();
    expect(res).toBeValidQuery();
  });

  test('Test queryAll api', async () => {
    const res: any = await queryAll();
    expect(res).not.toBeNull();
  });
});

describe('Test Logger without correct init', () => {
  test('Test query api', () => {
    expect(() => {
      return query({});
    }).toThrow(Error);
  });

  test('Test queryAll api', () => {
    expect(() => {
      return queryAll();
    }).toThrow(Error);
  });
});
