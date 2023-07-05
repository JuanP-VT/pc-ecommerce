/**
 * Adds or replaces a purchase order in the session cart array
 * Returns the updated cart
 * Triggers custom event once finished so other components can subscribe
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
