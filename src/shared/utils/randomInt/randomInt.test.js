import { randomInt } from './randomInt';

const testData = {
  test1: {
    minNum: 5,
    maxNum: 5,
    expectedNum: 5,
  },

  test2: {
    minNum: 0,
    maxNum: 255,
  },

  test3: {
    minNum: 10,
    maxNum: 20,
  },
};

describe('randomInt', () => {
  test('Unit test1', () => {
    const test1 = testData.test1;
    const randomNun = randomInt(test1.minNum, test1.maxNum);
    expect(randomNun).toBe(test1.expectedNum);
  });

  test('Unit test2', () => {
    const test2 = testData.test2;
    const randomNun = randomInt(test2.minNum, test2.maxNum);
    expect(randomNun).toBeGreaterThanOrEqual(test2.minNum);
    expect(randomNun).toBeLessThanOrEqual(test2.maxNum);
  });

  test('Unit test3', () => {
    const test3 = testData.test3;
    const randomNun = randomInt(test3.minNum, test3.maxNum);
    expect(randomNun).toBeGreaterThanOrEqual(test3.minNum);
    expect(randomNun).toBeLessThanOrEqual(test3.maxNum);
  });
});
