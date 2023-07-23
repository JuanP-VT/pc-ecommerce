/**
 * The handleSendReview function handles the process of sending a review for a product to the server.
 *
 * @function
 *
 * @param {React.FormEvent<HTMLFormElement>} e - The form event triggered when submitting the review form.
 * @param {Review} review - The review object to be sent to the server.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setIsLoading - The state setter function to set the loading state during the review submission process.
 * @param {AppRouterInstance} router - The Next.js app router instance to refresh the page after the review is sent.
 * @param {Dispatch<SetStateAction<boolean>>} setCanReview - The state setter function to update the ability to review a product.
 * @returns {Promise<void>} A Promise that resolves when the review is successfully sent and processed by the server.
 */
import { Review } from "@/app/types/product";
import createAuthHeader from "@/app/utils/createAuthHeader";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { Dispatch, SetStateAction } from "react";

export default async function handleSendReview(
  e: React.FormEvent<HTMLFormElement>,
  review: Review,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  router: AppRouterInstance,
  setCanReview: Dispatch<SetStateAction<boolean>>
) {
  e.preventDefault();
  setIsLoading(true);
  const authHeader = createAuthHeader(review.user._id);
  const send = await fetch("/api/review", {
    body: JSON.stringify(review),
    headers: {
      ...authHeader,
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  // once review is done
  await send.json();
  setCanReview(false);
  router.refresh();
}
