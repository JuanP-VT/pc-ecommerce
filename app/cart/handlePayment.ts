/**
 * @param cart a list of purchase orders,
 * @param userID unique MongoDB ID for the user
 * @returns feedback as  JSON response from the API
 *
 * Sends the purchase order to the backend
 */
import { PurchaseOrder } from "../types/order";
import createAuthHeader from "../utils/createAuthHeader";

export default async function handlePayment(
  cart: PurchaseOrder[],
  userID: string
) {
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
  console.log(feedBack.value);
}
