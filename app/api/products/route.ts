import { NextResponse } from "next/server";
import { dbClient, dbConnect, dbClose } from "../../../lib/db";

//Return all products from the database
export async function GET(request: Request) {
  try {
    await dbConnect();
    const productCollection = dbClient.db("Cluster0").collection("products");
    const allProducts = await productCollection.find().toArray();
    return NextResponse.json(allProducts);
  } finally {
    await dbClose();
  }
}
