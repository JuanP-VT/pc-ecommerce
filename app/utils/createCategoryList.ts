/**
 * Create Category List
 *
 * This function creates a list of unique product categories by fetching all products and
 * extracting their categories. Since product categories are not saved in the database,
 * this approach fetches categories directly from the array of products provided.
 * For larger projects, storing the category list in a separate data structure would be
 * a better implementation, but for a local project or smaller dataset, this approach is sufficient.
 *
 * @function utils/createCategoryList
 * @param {ProductWithId[]} productList - An array of products with their respective IDs.
 * @returns {string[]} An array containing unique product categories extracted from the productList.
 *
 * @typedef {Object} ProductWithId - An object representing a product with an ID.
 * @property {string} _id - The unique identifier of the product.
 * @property {string} category - The category of the product.
 *
 * @example
 * const products = [
 *   { _id: "1", category: "Electronics" },
 *   { _id: "2", category: "Clothing" },
 *   { _id: "3", category: "Electronics" },
 *   { _id: "4", category: "Books" },
 *   { _id: "5", category: "Clothing" },
 *   { _id: "6", category: "Home & Kitchen" },
 * ];
 *
 * const categories = createCategoryList(products);
 * console.log(categories);
 * // Output: ["Electronics", "Clothing", "Books", "Home & Kitchen"]
 */
import { ProductWithId } from "../types/product";

// Create a category [] with unique values (no repeated values)
export default function createCategoryList(
  productList: ProductWithId[]
): string[] {
  let categories: string[] = [];

  productList.forEach((prod) => {
    if (!categories.includes(prod.category)) {
      categories.push(prod.category);
    }
  });
  return categories;
}
