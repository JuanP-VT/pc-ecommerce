/**
 * The handleAddToCart function is responsible for adding a new purchase order to the shopping cart.
 * The shopping cart is an array of purchase orders ({ product, quantity }) that will be stored in the session to preserve it.
 * If an order with the same item already exists in the cart, the new order should replace the old one.
 *
 * @function
 *
 * @param {ProductWithId} product - The product to be added to the shopping cart.
 * @param {number} quantity - The quantity of the product to be added to the shopping cart.
 * @throws {Error} If the specified quantity exceeds the available stock for the product.
 * @returns {void} This function does not return any value.
 */
import { PurchaseOrder } from "@/app/types/order";
import { ProductWithId } from "@/app/types/product";
import addProductToCart from "@/app/utils/addProductToCart";
import displayFeedbackEffect from "./displayFeedbackEffect";
export default function handleAddToCart(
  product: ProductWithId,
  quantity: number
) {
  const key = process.env.SESSION_CART_KEY;
  //Create new order
  const newOrder: PurchaseOrder = { product, quantity };
  //throw error if quantity is higher than product stock
  if (quantity > product.stock) {
    throw new Error(
      `Quantity exceeds the available stock for product ${product._id}`
    );
  }

  addProductToCart(key, newOrder);
  displayFeedbackEffect();
}
