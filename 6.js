/**
 * Computes the absolute difference in years when the father's age was 2x the son's.
 * @param {number} dadAge - Father's current age.
 * @param {number} sonAge - Son's current age.
 * @returns {number} - Absolute years difference.
 * @example twiceAsOld(36, 7) → 22 (36-7*2=22)
 */
function twiceAsOld(dadAge, sonAge) {
  return Math.abs(dadAge - 2 * sonAge);
}