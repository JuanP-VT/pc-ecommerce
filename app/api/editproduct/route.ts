/**
 * Update a product in the database collection.
 * Request body type @param {ProductWithId}
 *
 * @param {Request} request - The request object containing the updated product data.
 *
 * @returns {Promise<NextResponse>} A promise that resolves to the NextResponse object containing the result of the update operation.
 */
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { dbClient } from "../../lib/db";
import type { ProductWithId } from "@/app/types/product";
export const dynamic = "force-dynamic";
// Delete product from the collection
export async function POST(request: Request) {
  try {
    const res: ProductWithId = await request.json();
    console.log(res);
    const targetId = new ObjectId(res._id.toString());
    const collection = dbClient.db("Cluster0").collection("products");
    const myrest = await collection.findOneAndUpdate(
      { _id: targetId },
      {
        $set: {
          name: res.name,
          category: res.category,
          img: res.img,
          description: res.description,
          stock: res.stock,
          price: res.price,
          discountPercentage: res.discountPercentage,
          specs: res.specs,
        },
      }
    );
    console.log(myrest);
    return NextResponse.json(myrest, { status: 200 });
  } catch (error) {
    console.log("error has occurred", error);
    return NextResponse.json({ status: 400 });
  }
}
