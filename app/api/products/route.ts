/**
 * Get all products from the database.
 *
 *
 * @returns {Promise<NextResponse>} A promise that resolves to the NextResponse object containing all products fetched from the database.
 *
 * This function fetches all products from the database and returns them as a JSON response with a status of 200 (OK).
 * If an error occurs during the database query, it logs the error to the console.
 */
import { NextResponse } from "next/server";
import { dbClient } from "../../lib/db";
import { Product } from "../../types/product";
import validateNewProduct from "../../utils/validateProduct";
export const dynamic = "force-dynamic";
//Return all products from the database
export async function GET(request: Request) {
  try {
    const productCollection = dbClient.db("Cluster0").collection("products");
    const allProducts = await productCollection.find().toArray();
    return NextResponse.json(allProducts, { status: 200 });
  } catch (error) {
    console.log("error has occurred", error);
  }
}

export async function POST(request: Request) {
  const res: Product = await request.json();
  //Validate request
  const errors = validateNewProduct(res);
  //return error message if found
  if (errors.length !== 0) {
    return NextResponse.json(errors);
  }
  //if no errors save product in database
  const newProduct: Product = {
    name: res.name,
    category: res.category,
    img: res.img,
    description: res.description,
    stock: res.stock,
    price: res.price,
    discountPercentage: res.discountPercentage,
    specs: res.specs,
  };
  try {
    const productCollection = dbClient.db("Cluster0").collection("products");
    await productCollection.insertOne(newProduct);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.log("an error occurred", error);
    return NextResponse.json({ status: 400 });
  }
}
