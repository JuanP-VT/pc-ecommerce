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
    const product = await collection.findOne({ _id: targetId });
    if (product) {
      return NextResponse.json(product, { status: 200 });
    }
    return NextResponse.json("Not Found");
  } catch (error) {
    console.log("error has occurred", error);
    return NextResponse.json({ status: 400 });
  }
}
