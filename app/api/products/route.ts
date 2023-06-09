import { NextResponse } from "next/server";
import { dbClient } from "../../../lib/db";
import { Product } from "@/types/product";
import validateNewProduct from "@/utils/validateProduct";

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

//Add new product to database
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
