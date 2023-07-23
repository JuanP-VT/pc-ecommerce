/**
 * Searches for a product in the database based on the provided product ID.
 * @param id The ID of the product to search for.
 * @returns A Promise that resolves to a ProductWithId object if found, or null if not found.
 * This function makes a POST request to the specified API endpoint with the given product ID to retrieve the product information.
 */
import { ProductWithId } from "../types/product";
export default async function searchProductInDb(
  id: string
): Promise<ProductWithId | null> {
  const res = await fetch(
    "https://store-juanp-vt.vercel.app/api/searchproduct",
    {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: id }),
    }
  );
  const productList = await res.json();
  if (productList) {
    return productList;
  }
  return null;
}
