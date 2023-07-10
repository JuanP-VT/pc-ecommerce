import { Dispatch, SetStateAction } from "react";
import { ProductWithId } from "../types/product";
import getCartItems from "./getCartItems";
import { PurchaseOrder } from "../types/order";

export default function deleteFromCart(
  product: ProductWithId,
  setCartList: Dispatch<SetStateAction<PurchaseOrder[]>>
) {
  const cart = getCartItems(process.env.SESSION_CART_KEY);
  const findIndex = cart.findIndex(
    (order) => order.product._id === product._id
  );
  const updCart = [...cart];
  if (findIndex || findIndex === 0) {
    updCart.splice(findIndex, 1);
    sessionStorage.setItem(
      process.env.SESSION_CART_KEY,
      JSON.stringify(updCart)
    );
    const storageUpdateEvent = new Event("storageUpdate");
    window.dispatchEvent(storageUpdateEvent);
    setCartList(updCart);
  }
}
