/**
 * Performs a GET request and returns JSON
 * @param {string} url - URL to GET
 * @param {Object} [options={}] - Options passed to fetch
 * @returns {Promise} Promise that represents the request
 */
export async function getJSON(url, options = {}) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw await response.json();
    }
    return await response.json();
  } catch (e) {
    throw e;
  }
}
