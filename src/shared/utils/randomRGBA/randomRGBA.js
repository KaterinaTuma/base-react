import { randomInt } from 'shared/utils';

/**
 * @function randomRGBA
 * @param {number} alpha
 * @returns {string}
 */

export const randomRGBA = (alpha) => `
  rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, ${alpha})
`.trim();
