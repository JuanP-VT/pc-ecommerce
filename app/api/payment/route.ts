/**
 * Payment Endpoint
 *
 * The body must contain a valid array of PurchaseOrders.
 * @param {PurchaseOrder[]}
 * In the headers, there must be an authentication string (See the createAuthHeader function for more details in the utils folder).
 *
 * @param {NextRequest} request - The Next.js request object containing the payment information and authentication headers.
 *
 * @returns {Promise<NextResponse>} A promise that resolves to the NextResponse object with the status of the payment transaction.
 *
 * This is the payment endpoint for the application. The function first retrieves the purchase order and the authentication header from the request.
 * It then validates the authentication header using the validateAuthHeader function.
 * If the header is valid, it retrieves the user object from the header using the getUserFromHeader function.
 * Next, it calculates the total price of the purchase using the calculateCartTotalPrice function.
 * If the user has enough cash to complete the transaction, it handles the transaction in the database using the handleTransaction function.
 * If the transaction is successful, it returns a NextResponse object with the success message and a status of 200 (OK).
 * If the user does not have enough cash, it returns a NextResponse object with a message indicating insufficient funds.
 * If the authentication header is invalid or if the user is not found, it returns a NextResponse object with a message of "Invalid Request" and a status of 401 (Unauthorized).
 */
import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import validateAuthHeader from "@/app/lib/validateAuthHeader";
import getUserFromHeader from "@/app/lib/getUserFromHeader";
import { User } from "@/app/types/user";
import { config } from "dotenv";
import calculateCartTotalPrice from "@/app/utils/calculateCartTotalPrice";
import { handleTransaction } from "./handleTransaction";
import { PurchaseOrder } from "@/app/types/order";

export async function POST(request: NextRequest) {
  config();
  //Get purchase order and auth header
  const purchaseOrder = (await request.json()) as PurchaseOrder[];
  const authorization = headers().get("Authorization");
  //validate the auth header
  if (authorization) {
    const isValidAuthHeader = await validateAuthHeader({
      authorization,
    });
    //On successful header, get the user
    if (isValidAuthHeader) {
      const user: User | null = await getUserFromHeader({ authorization });
      if (user) {
        const total = calculateCartTotalPrice(purchaseOrder);
        //check user cash

        if (user?.cash >= total) {
          // handle the transaction in the database
          const handlePurchase = await handleTransaction(purchaseOrder, user);
          return handlePurchase;
        } else {
          return NextResponse.json("User has not enough cash");
        }
      }
    }
  }
  return NextResponse.json("Invalid Request");
  //get user
}
