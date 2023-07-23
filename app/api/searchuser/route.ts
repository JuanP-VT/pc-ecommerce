/**
 * Fetch a user from the database based on their ID.
 *
 * @param {Request} request - The request object containing the user ID in its body.
 *
 * @returns {Promise<NextResponse>} A promise that resolves to the NextResponse object containing the user fetched from the database (if found) or null (if not found).
 *
 * This function fetches a user from the database based on their ID. It first retrieves the user ID from the request body.
 * It then converts the ID to an ObjectId and searches for the user in the database using the converted ObjectId.
 * If the user is found, it returns a NextResponse object with the user details and a status of 200 (OK).
 * If the user is not found, it returns a NextResponse object with null (indicating that the user was not found).
 * If there is an error during the database query, it logs the error to the console and returns a NextResponse object with null.
 */
import { ObjectId, WithId } from "mongodb";
import { NextResponse } from "next/server";
import { dbClient } from "../../lib/db";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const res: WithId<Request> = await request.json();
    const targetId = new ObjectId(res._id.toString());
    const collection = dbClient.db("Cluster0").collection("users");
    const product = await collection.findOne({ _id: targetId });
    if (product) {
      return NextResponse.json(product, { status: 200 });
    }
    return NextResponse.json(null);
  } catch (error) {
    console.log("error has occurred", error);
    return NextResponse.json(null);
  }
}
