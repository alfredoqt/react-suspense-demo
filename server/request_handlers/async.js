const async = {};

/**
 * Useful for delaying API requests
 * @param {number} ms - Milliseconds until promise resolves
 * @returns {Promise} Promise that resolves after ms
 */
async.delay = function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

module.exports = async;
