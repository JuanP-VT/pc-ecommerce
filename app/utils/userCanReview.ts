import { Session } from "next-auth";
import { ProductWithId } from "../types/product";

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
  session: Session | null | undefined
) {
  //return if no session
  if (session === null || session === undefined) return false;
  const userItemList = session?.user.items;
  const prodReviews = product.reviews ?? [];
  if (userItemList) {
    const findInItemList = userItemList.find(
      (item) => item._id === product._id
    );
    if (findInItemList) {
      const findUser = prodReviews.find(
        (reviews) => reviews.user._id === session.user._id
      );

      if (!findUser) {
        return true;
      }
    }
  }
  return false;
}
