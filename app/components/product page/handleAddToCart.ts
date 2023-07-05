/**
 * The shopping cart is an array of purchase orders ({product , quantity}),
 * this array will be stored in session so it can be preserved.
 *
 * This file handles a request to add a new purchase order to the shopping cart,
 * if an order with the same item already exist in the cart, the new order
 * should replace the old one.
 */
import { PurchaseOrder } from "@/app/types/order";
import { ProductWithId } from "@/app/types/product";
import addProductToCart from "@/app/utils/addProductToCart";
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
}
