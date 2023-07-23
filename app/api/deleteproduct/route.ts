/**
 * Delete a product from the database collection.
 * Request body type @param {ProductWithId}
 * @param {Request} request - The request object containing the product data to be deleted.
 *
 * @returns {Promise<NextResponse>} A promise that resolves to the NextResponse object containing the result of the delete operation.
 */
import { ObjectId, WithId } from "mongodb";
import { NextResponse } from "next/server";
import { dbClient } from "../../lib/db";
export const dynamic = "force-dynamic";
// Delete product from the collection
export async function POST(request: Request) {
  try {
    const res: WithId<Request> = await request.json();
    const targetId = new ObjectId(res._id.toString());
    const collection = dbClient.db("Cluster0").collection("products");
    const user = await collection.findOneAndDelete({ _id: targetId });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log("error has occurred", error);
    return NextResponse.json({ status: 400 });
  }
}
