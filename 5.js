/**
 * Returns a romantic phrase based on petal count (cyclic pattern).
 * @param {number} nbPetals - Total petals plucked.
 * @returns {string} - Phrase from the cycle.
 * @example howMuchILoveYou(3) → "a lot"
 */
function howMuchILoveYou(nbPetals) {
  const phrases = ["not at all", "I love you", "a little", "a lot", "passionately", "madly"];
  return phrases[nbPetals % phrases.length]; 
}