/**
 * @function randomInt
 * @param {number} minNum
 * @param {number} maxNum
 * @returns {number}
 */

export const randomInt = (minNum, maxNum) =>
  Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
