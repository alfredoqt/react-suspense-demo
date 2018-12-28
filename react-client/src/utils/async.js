/**
 * Useful for delaying API requests
 * @param {number} ms - Milliseconds until promise resolves
 * @returns {Promise} Promise that resolves after ms
 */
export function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
