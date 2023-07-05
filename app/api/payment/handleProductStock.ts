import { dbClient } from "@/app/lib/db";
import { PurchaseOrder } from "@/app/types/order";
import { ProductWithId } from "@/app/types/product";
import { ObjectId } from "mongodb";
/**
 *
 * @param purchaseOrder is an array of type {product:{}, quantity:number},
 * quantity is the amount of products the user wants to buy
 *
 * Connect to the database and subtract the quantity to each product stock
 * Stock can never go below 0,
 */
export default async function handleProductStock(
  purchaseOrder: PurchaseOrder[]
) {
  const collection = dbClient.db("Cluster0").collection("products");
  try {
    //Validate stock directly
    purchaseOrder.forEach(async (order) => {
      const _id = new ObjectId(order.product._id);
      const product = (await collection.findOne({
        _id,
      })) as ProductWithId | null;
      if (product) {
        const currentStock = product.stock;
        const updStock = currentStock - order.quantity;
        if (updStock < 0) {
          throw new Error(`Invalid new stock for product ${order.product._id}`);
        }

        await collection.findOneAndUpdate(
          { _id },
          { $set: { stock: updStock } }
        );
      }
    });
  } catch (err) {
    throw new Error(
      "Error connecting to product database trying to reduce a products stock"
    );
  }
}
