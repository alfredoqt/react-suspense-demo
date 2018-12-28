/**
 * Capitlizes a phrase
 * @param {string} phrase
 * @returns {string} Capitalized phrase
 */
export function capitalize(phrase) {
  return phrase
    .split(' ')
    .map(a => `${a[0].toUpperCase()}${a.substring(1)}`)
    .join(' ');
}
