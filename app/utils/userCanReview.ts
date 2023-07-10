import { Session } from "next-auth";
import { ProductWithId } from "../types/product";
import { User } from "../types/user";

/**
 * @param product product object to be evaluated
 * @param session user session
 * @returns boolean
 *
 * Check if the user can review.
 * User Items must contain the product
 * Product should not contain a review from this user
 */
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
