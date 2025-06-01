/**
 * Adds two numbers safely and returns the result.
 * @function addNumbers
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {number} The sum of `a` and `b`.
 * @throws {TypeError} If either argument is not a number.
 */
function addNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }

  // Optimization: Use bitwise OR for integer coercion (if needed)
  // return (a | 0) + (b | 0); // Forces 32-bit integer math

  return a + b;
}

// Usage with try-catch for error handling
try {
  const sum = addNumbers(5, 3); 
  console.log(sum);
  
  // addNumbers(5, "3"); // Throws TypeError
} catch (error) {
  console.error(`Calculation failed: ${error.message}`);
}