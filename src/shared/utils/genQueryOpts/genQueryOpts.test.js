import { genQueryOpts } from './genQueryOpts';

const testData = {
  test1: {
    method: 'POST',
    body: {
      userId: '0001',
      title: 'Some title',
      body: 'Some body',
      timestamp: 1729595400000,
    },
    expectedQuery: {
      method: 'POST',
      body: JSON.stringify({
        userId: '0001',
        title: 'Some title',
        body: 'Some body',
        timestamp: 1729595400000,
      }),
      headers: { 'Content-type': 'application/json' },
    },
  },

  test2: {
    method: 'PUT',
    body: {
      userId: '0002',
      title: 'Another title',
      body: 'Another body',
      timestamp: 1729595400000,
    },
    expectedQuery: {
      method: 'PUT',
      body: JSON.stringify({
        userId: '0002',
        title: 'Another title',
        body: 'Another body',
        timestamp: 1729595400000,
      }),
      headers: { 'Content-type': 'application/json' },
    },
  },

  test3: {
    method: 'DELETE',
    expectedQuery: {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
    },
  },
};

describe('genQueryOpts', () => {
  test('Unit test1', () => {
    const test1 = testData.test1;
    const queryOpts = genQueryOpts(test1.method, test1.body);
    expect(queryOpts).toEqual(test1.expectedQuery);
  });
  test('Unit test2', () => {
    const test2 = testData.test2;
    const queryOpts = genQueryOpts(test2.method,  test2.body);
    expect(queryOpts).toEqual(test2.expectedQuery);
  });
  test('Unit test3', () => {
    const test3 = testData.test3;
    const queryOpts = genQueryOpts(test3.method);
    expect(queryOpts).toEqual(test3.expectedQuery);
  });
});
