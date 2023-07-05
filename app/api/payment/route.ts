import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import validateAuthHeader from "@/app/lib/validateAuthHeader";
import getUserFromHeader from "@/app/lib/getUserFromHeader";
import { User } from "@/app/types/user";
import { config } from "dotenv";
import calculateCartTotalPrice from "@/app/utils/calculateCartTotalPrice";
import { handleTransaction } from "./handleTransaction";
import { PurchaseOrder } from "@/app/types/order";

/**
 * Payment Endpoint
 * Documentation for this endpoint is in a folder at the root of this project
 * The body must contain a valid array of PurchaseOrders
 * In the headers there must be an authentication string (See the createAuthHeader function
 * for more details if needed at utils folder)
 */
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
