/**
 * Adds or replaces a purchase order in the session cart array.
 *
 * @function
 * @param {string} cartKey - The key used to identify the cart in sessionStorage.
 * @param {PurchaseOrder} order - The purchase order to be added or replaced in the cart.
 * @returns {PurchaseOrder[]} - The updated cart as an array of purchase orders.
 *
 * @typedef {Object} PurchaseOrder - An object representing a purchase order.
 * @property {Object} product - The product details associated with the order.
 * @property {string} product._id - The unique identifier of the product.
 * @property {number} quantity - The quantity of the product in the order.
 */
import { PurchaseOrder } from "../types/order";
import getCartItems from "./getCartItems";
export default function addProductToCart(
  cartKey: string,
  order: PurchaseOrder
) {
  const orderList = getCartItems(cartKey);
  // Check if item is already in the cart
  // If order already exist in cart, replace it with new one
  const find = orderList.find((ord) => ord.product._id === order.product._id);
  if (find) {
    const index = orderList.indexOf(find);
    orderList[index] = order;
    sessionStorage.setItem(cartKey, JSON.stringify(orderList));
    //return updated cart
    const updatedCart = getCartItems(cartKey);
    const storageUpdateEvent = new Event("storageUpdate");
    window.dispatchEvent(storageUpdateEvent);
    return updatedCart;
  }
  // add order if is not in the cart,
  orderList.push(order);
  sessionStorage.setItem(cartKey, JSON.stringify(orderList));
  const updatedCart = getCartItems(cartKey);
  const storageUpdateEvent = new Event("storageUpdate");
  window.dispatchEvent(storageUpdateEvent);
  return updatedCart;
  //return updated cart
}
