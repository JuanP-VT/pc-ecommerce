/**
 * Handle the final step in the payment process and update user balance and product stock in the database.
 *
 * @param {PurchaseOrder[]} purchaseOrder - An array of purchase orders, each containing product details and the quantity to be purchased.
 * @param {User} user - The user object making the request.
 *
 * @returns {Promise<NextResponse>} A promise that resolves to the NextResponse object with the status of the transaction.
 *
 * This function handles the logic and updates the user balance and product stock in the database. It is the final step in the payment process.
 * The function first checks if the user has enough balance to complete the purchase transaction.
 * Then, it handles the product stock update in the database using the handleProductStock function.
 * If the user has sufficient balance and the product stock update is successful, the function updates the user's item list and cash balance in the database.
 * If the user is not found (null), it returns a NextResponse object with a status of 404 (Not Found).
 */
import { dbClient } from "@/app/lib/db";
import { PurchaseOrder } from "@/app/types/order";
import { User } from "@/app/types/user";
import calculateCartTotalPrice from "@/app/utils/calculateCartTotalPrice";
import { Collection } from "mongodb";
import { NextResponse } from "next/server";
import handleProductStock from "./handleProductStock";

export async function handleTransaction(
  purchaseOrder: PurchaseOrder[],
  user: User
) {
  //Get purchased items IDS, and user item list
  const orderProductList = purchaseOrder.map((order) => order.product);

  if (user) {
    const updatedItems = user.items;
    //Check if items from purchase order are not in the user item list
    orderProductList.forEach((prod) => {
      const find = updatedItems.find((item) => item._id === prod._id);
      if (!find) {
        updatedItems.push(prod);
      }
    });
    //Calculate new user balance cash
    const total = calculateCartTotalPrice(purchaseOrder);
    const userBalance = user.cash;
    if (userBalance < total)
      throw new Error(
        "Error on purchase transaction, user cash balance is lower than the amount to pay"
      );
    // Handle product stock in database
    await handleProductStock(purchaseOrder);

    const newBalance = parseFloat((userBalance - total).toFixed(2));
    //Update user item list
    const users = dbClient
      .db("Cluster0")
      .collection("users") as Collection<User>;
    await users.findOneAndUpdate(
      { _id: user._id },
      { $set: { items: updatedItems, cash: newBalance } }
    );
    return NextResponse.json("Success", { status: 200 });
  }
  return NextResponse.json("User Not Found", { status: 404 });
}
