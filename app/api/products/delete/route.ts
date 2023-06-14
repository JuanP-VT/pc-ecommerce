import { ObjectId, WithId } from "mongodb";
import { NextResponse } from "next/server";
import { dbClient } from "../../../../lib/db";
export const dynamic = "force-dynamic";
// Delete product from the collection
export async function POST(request: Request) {
  try {
    const res: WithId<Request> = await request.json();
    const targetId = new ObjectId(res._id);
    const collection = dbClient.db("Cluster0").collection("products");
    await collection.findOneAndDelete({ _id: targetId });
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log("error has occurred", error);
    return NextResponse.json({ status: 400 });
  }
}
