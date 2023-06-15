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
  interface ExtendedProduct extends Product {
    reviews: [];
  }
  const newProduct: ExtendedProduct = {
    name: res.name,
    category: res.category,
    img: res.img,
    description: res.description,
    stock: res.stock,
    price: res.price,
    discountPercentage: res.discountPercentage,
    reviews: [], //Starts with no user reviews
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
