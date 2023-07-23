/**
 * Delete from Cart
 *
 * This function removes a product from the cart list by its unique product ID.
 *
 * @function
 * @param {ProductWithId} product - The product to be removed from the cart.
 * @param {Dispatch<SetStateAction<PurchaseOrder[]>>} setCartList - The state setter function for the cart list.
 * @returns {void}
 *
 * @typedef {Object} ProductWithId - An object representing a product with an ID.
 * @property {string} _id - The unique identifier of the product.
 * @property {string} name - The name of the product.
 *
 * @typedef {Object} PurchaseOrder - An object representing a purchase order.
 */

import { Dispatch, SetStateAction } from "react";
import { ProductWithId } from "../types/product";
import getCartItems from "./getCartItems";
import { PurchaseOrder } from "../types/order";

export default function deleteFromCart(
  product: ProductWithId,
  setCartList: Dispatch<SetStateAction<PurchaseOrder[]>>
) {
  // Step 1: Get the current cart list from session storage using getCartItems function
  const cart = getCartItems(process.env.SESSION_CART_KEY);

  //Find the index of the product in the cart list
  const findIndex = cart.findIndex(
    (order) => order.product._id === product._id
  );

  //Create a copy of the cart list to update it without mutating the original array
  const updCart = [...cart];

  //Check if the product was found in the cart list
  if (findIndex || findIndex === 0) {
    //  Remove the product from the updated cart list using splice
    updCart.splice(findIndex, 1);

    //Update the session storage with the updated cart list
    sessionStorage.setItem(
      process.env.SESSION_CART_KEY,
      JSON.stringify(updCart)
    );

    //Dispatch a custom event to notify other components about the storage update
    const storageUpdateEvent = new Event("storageUpdate");
    window.dispatchEvent(storageUpdateEvent);

    //Update the state of the cart list in the component using the setCartList function
    setCartList(updCart);
  }
}
