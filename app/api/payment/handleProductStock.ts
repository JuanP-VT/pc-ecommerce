/**
 * Handle the update of product stock based on the purchase order.
 *
 * @param {PurchaseOrder[]} purchaseOrder - An array of purchase orders, each containing product details and the quantity to be purchased.
 *
 * @throws {Error} If there is an error connecting to the product database or if the new stock value goes below 0 for any product.
 * This should never happen since there a filters to prevent this.
 */
import { dbClient } from "@/app/lib/db";
import { PurchaseOrder } from "@/app/types/order";
import { ProductWithId } from "@/app/types/product";
import { ObjectId } from "mongodb";

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
