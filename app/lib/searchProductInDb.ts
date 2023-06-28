import { ObjectId } from "mongodb";
import { dbClient, dbClose, dbConnect } from "./db";
import { ProductWithId } from "../types/product";
export default async function searchProductInDb(
  id: string
): Promise<ProductWithId | null> {
  const res = await fetch("http://localhost:3000/api/searchproduct", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id: id }),
  });
  const productList = res.json();
  if (productList) {
    return productList;
  }
  return null;
}
