/**
 * Calculate Cart Total Price
 *
 * This function calculates the total price of the cart based on the provided array of purchase orders.
 * The total price is the sum of the true value (after discount) of each item multiplied by its quantity.
 *
 * @function
 * @param {PurchaseOrder[]} purchaseOrderList - An array of purchase orders.
 * @returns {number} The total price of the cart as a number with two decimal places.
 *
 * @typedef {PurchaseOrder} - An object representing a purchase order.
 * @property {Object} product - The product details associated with the order.
 * @property {string} product._id - The unique identifier of the product.
 * @property {string} product.name - The name of the product.
 * @property {number} product.price - The original price of the product.
 * @property {number} product.discountPercentage - The discount percentage applied to the product.
 * @property {number} quantity - The quantity of the product in the order.
 *
 * @example
 * const purchaseOrderList = [
 *   {
 *     product: { _id: "1", name: "Product A", price: 100, discountPercentage: 20 },
 *     quantity: 2,
 *   },
 *   {
 *     product: { _id: "2", name: "Product B", price: 50, discountPercentage: 10 },
 *     quantity: 3,
 *   },
 * ];
 *
 * const totalCartPrice = calculateCartTotalPrice(purchaseOrderList);
 * console.log(totalCartPrice);
 * // Output: 270 (calculated as (80 * 2) + (45 * 3) = 270)
 */
import { PurchaseOrder } from "../types/order";
export default function calculateCartTotalPrice(
  purchaseOrderList: PurchaseOrder[]
) {
  const prices = purchaseOrderList.map((order) => {
    //max two decimals
    const realPrice = parseFloat(
      (
        (order.product.price * (100 - order.product.discountPercentage)) /
        100
      ).toFixed(2)
    );
    return realPrice * order.quantity;
  });

  const total = prices.reduce(
    (accumulator = 0, totalValue) => accumulator + totalValue,
    0
  );
  return parseFloat(total.toFixed(2));
}
