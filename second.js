/**
 * Checks if a string has the same number of 'x's and 'o's (case-insensitive).
 * @param {string} str - The input string to check.
 * @returns {boolean} - True if counts match, false otherwise.
 * @example XO("xoOx") → true, XO("xXoo") → false
 */
function XO(str) {
  const x = str.toLowerCase().split('x').length - 1; // Count 'x's
  const o = str.toLowerCase().split('o').length - 1; // Count 'o's
  return x === o;
}