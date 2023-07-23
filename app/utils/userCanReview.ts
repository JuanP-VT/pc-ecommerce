/**
 * User Can Review
 *
 * This function checks if the user can review the given product. The user must have the product in their items list,
 * and the product should not already have a review from this user.
 *
 * @function
 * @param {ProductWithId} product - The product object to be evaluated.
 * @param {User | null} user - The user session (or null if no user session exists).
 * @returns {boolean} True if the user can review the product, otherwise false.
 *
 * @typedef {ProductWithId}  - An object representing a product with an ID.
 * 
 *
 * @typedef {User} - An object representing a user.
 * @property {string} _id - The unique identifier of the user.
 * 
 *
 * @example
 * const product = { _id: "1", name: "Product A", ... };
 * const user = { _id: "user123", items: [{ _id: "1", ... }] };
 * const canReview = userCanReview(product, user);
 * console.log(canReview);
 * // Output: true (user can review the product)
 */
import { ProductWithId } from "../types/product";
import { User } from "../types/user";
export default function userCanReview(
  product: ProductWithId,
  user: User | null
) {
  //return if no session
  if (user === null || user === undefined) return false;
  const userItemList = user.items;
  const prodReviews = product.reviews ?? [];
  if (userItemList) {
    const findInItemList = userItemList.find(
      (item) => item._id === product._id
    );
    if (findInItemList) {
      const findUser = prodReviews.find(
        (reviews) => reviews.user._id === user._id
      );

      if (!findUser) {
        return true;
      }
    }
  }
  return false;
}
