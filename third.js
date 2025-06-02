/**
 * Validates if a string is a number (e.g., "3", "-3.23", "  3  ").
 * @param {string} s - Input string to check.
 * @returns {boolean} - True if valid number, false otherwise.
 * @example isDigit("3.5") → true, isDigit("abc") → false
 */
function isDigit(s) {
  return !isNaN(s) && !isNaN(parseFloat(s)); // Parses trimmed strings and checks NaN
}