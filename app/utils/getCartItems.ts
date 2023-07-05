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
