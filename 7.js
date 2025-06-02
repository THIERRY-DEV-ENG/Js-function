/**
 * Tracks hand-raising cycles for 3 people at a given step.
 * @param {number} step - Current step in the sequence.
 * @returns {number[]} - Array of hands raised [person1, person2, person3].
 * @example handsUp(5) → [1, 1, 0]
 */
function handsUp(step) {
  const cycle = [1, 2, 0]; // Person 1's cycle: raise 1, raise 2, lower
  const p1 = cycle[step % 3];
  const p2 = cycle[Math.floor(step / 3) % 3] || 0; 
  const p3 = cycle[Math.floor(step / 9) % 3] || 0; 
  return [p1, p2, p3];
}