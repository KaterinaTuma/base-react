/**
 * @typedef {import('./types').Method} Method
 * @typedef {import('./types').Content} Content
 */

/**
 * @function genQueryOpts
 * @param {Method} method
 * @param {Content} content
 * @returns {*}
 */

export const genQueryOpts = (method, content = null) => {
  const queryOpts = {
    method,
    headers: { 'Content-type': 'application/json' },
  };

  if (content) {
    queryOpts.body = JSON.stringify(content);
  };

  return queryOpts;
};
