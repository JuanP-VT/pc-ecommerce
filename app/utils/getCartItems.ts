/**
 * Get Cart Items
 *
 * This function retrieves the cart items from session storage based on the provided cart key.
 * If the cart key is missing in session storage, it initializes an empty cart and returns an empty array.
 *
 * @function
 * @param {string} cartKey - The key to access the cart items in session storage.
 * @returns {PurchaseOrder[]} An array of cart items representing the purchase orders.
 *
 * @typedef {PurchaseOrder}  - An object representing a purchase order.
 *
 *
 * @example
 * // Assume the session storage has the following data under "cart_items" key:
 * // '[{"product": {...}, "quantity": 2}, {"product": {...}, "quantity": 1}]'
 *
 * const cartKey = "cart_items";
 * const cartItems = getCartItems(cartKey);
 * console.log(cartItems);
 * // Output: [{ product: {...}, quantity: 2 }, { product: {...}, quantity: 1 }]
 */
import { PurchaseOrder } from "../types/order";

export default function getCartItems(cartKey: string) {
  const cartList = sessionStorage.getItem(cartKey);
  if (cartList) {
    const parse: PurchaseOrder[] = JSON.parse(cartList);
    return parse;
  }
  //handle when key is missing
  sessionStorage.setItem(cartKey, JSON.stringify([]));
  return [];
}
