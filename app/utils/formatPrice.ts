/**
 * Format Price
 *
 * This function takes a number and returns an array with two elements representing the integer and decimal
 * parts of the number. If the number is an integer, the array will contain only the integer part.
 *
 * @function
 * @param {number} price - The number to be formatted.
 * @returns {[number, number] | [number]} An array with two elements representing the integer and decimal parts
 *                                       of the number, or an array with only the integer part if the number is an integer.
 *
 * @example
 * const price1 = 10.99;
 * const formatted1 = formatPrice(price1);
 * console.log(formatted1);
 * // Output: [10, 99]
 *
 * const price2 = 15;
 * const formatted2 = formatPrice(price2);
 * console.log(formatted2);
 * // Output: [15]
 */
export default function formatPrice(
  price: number
): [number, number] | [number] {
  //Check for valid price
  if (isNaN(price)) {
    throw new Error("Invalid input. Expected a number.");
  }
  //if number is not float
  if (price % 1 === 0) {
    return [price];
  }
  //is float
  const split = price.toString().split(".");
  const integerPart = parseFloat(split[0]);
  const floatPart = parseFloat(split[1]);
  return [integerPart, floatPart];
}
