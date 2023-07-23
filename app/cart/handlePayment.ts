/**
 * Handle Payment Function
 *
 * @param {PurchaseOrder[]} cart - A list of purchase orders representing the items in the cart.
 * @param {string} userID - The unique MongoDB ID for the user making the payment.
 * @param {Dispatch<SetStateAction<boolean>>} setIsLoading - A state setter function to control the loading state during payment processing.
 * @param {AppRouterInstance} router - The Next.js app router instance.
 *
 * @returns {Promise<void>} - A promise that resolves after the payment processing is completed.
 *
 * This function sends the purchase order to the backend API for payment processing. It displays feedback in the DOM using the document API,
 * query selectors, and simple DOM manipulation. The function first sets the loading state to true using setIsLoading to indicate that the payment
 * is in progress. It then creates the authentication header using the userID with the createAuthHeader utility function. Next, it makes a POST
 * request to the "/api/payment/" endpoint with the cart data and the authentication header. After receiving the response from the backend, it parses
 * the JSON feedback and sets the loading state back to false.
 *
 * If the feedback indicates that the user does not have enough cash to make the payment, it displays a message "Not Enough Cash" in the DOM for a brief moment.
 * If the payment is successful ("Success" feedback), it clears the sessionStorage, triggers a "storageUpdate" event, refreshes the router to update the UI with the new cart,
 * and navigates the user back to the home page ("/").
 */
import { Dispatch, SetStateAction } from "react";
import { PurchaseOrder } from "../types/order";
import createAuthHeader from "../utils/createAuthHeader";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
export default async function handlePayment(
  cart: PurchaseOrder[],
  userID: string,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  router: AppRouterInstance
) {
  setIsLoading(true);
  const authHeader = createAuthHeader(userID);
  const res = await fetch("/api/payment/", {
    cache: "no-cache",
    body: JSON.stringify(cart),
    headers: {
      ...authHeader,
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const feedBack = await res.json();
  setIsLoading(false);
  //if user has not enough cash
  if (feedBack === "User has not enough cash") {
    const feedbackDom = document.querySelector("#paymentFeed");
    if (feedbackDom) {
      feedbackDom.textContent = "Not Enough Cash";
      setTimeout(() => {
        feedbackDom.textContent = "";
      }, 2000);
    }
  }
  if (feedBack === "Success") {
    //on success payment
    sessionStorage.clear();
    const storageUpdateEvent = new Event("storageUpdate");
    window.dispatchEvent(storageUpdateEvent);
    router.refresh();
    router.push("/");
  }
}
