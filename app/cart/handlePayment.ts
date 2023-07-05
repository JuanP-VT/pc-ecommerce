/**
 * @param cart a list of purchase orders,
 * @param userID unique MongoDB ID for the user
 * @returns feedback as  JSON response from the API
 *
 * Sends the purchase order to the backend
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
  console.log(feedBack);
  if (feedBack === "Success") {
    sessionStorage.clear();
    const storageUpdateEvent = new Event("storageUpdate");
    window.dispatchEvent(storageUpdateEvent);
    router.refresh();
    router.push("/");
  }
}
