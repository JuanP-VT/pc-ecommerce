/**
 * Takes a number and return an array with format [integer, float]
 * eg, 10.99 returns [10,99]
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
