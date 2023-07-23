/**
 * @param cart a list of purchase orders,
 * @param userID unique MongoDB ID for the user
 * @returns feedback as  JSON response from the API
 *
 * Sends the purchase order to the backend
 * Displays feedback in the DOM using  the document API, query selectors, i feel is an okay move
 * with react since it is going to be a very simple Dom manipulation.
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
