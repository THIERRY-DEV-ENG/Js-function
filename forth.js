/**
 * Applies a basic math operation to two values.
 * @param {string} op - Operator (+, -, *, /).
 * @param {number} v1 - First value.
 * @param {number} v2 - Second value.
 * @returns {number} - Result of the operation.
 * @example basicOp("+", 4, 7) → 11
 */
function basicOp(op, v1, v2) {
  switch (op) {
    case '+': return v1 + v2; // Addition
    case '-': return v1 - v2; // Subtraction
    case '*': return v1 * v2; // Multiplication
    case '/': return v1 / v2; // Division
    default: return 0; // Fallback (optional)
  }
}