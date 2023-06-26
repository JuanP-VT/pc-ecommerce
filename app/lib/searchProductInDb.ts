import { ObjectId } from "mongodb";
import { dbClient } from "./db";
import { ProductWithId } from "../types/product";
export default async function searchProductInDb(
  id: string
): Promise<ProductWithId | null> {
  try {
    const prodId = new ObjectId(id);
    const collection = dbClient.db("Cluster0").collection("products");
    const find = (await collection.findOne({
      _id: prodId,
    })) as ProductWithId | null;
    return find;
  } catch (err) {
    return null;
  } finally {
    await dbClient.close();
  }
}
