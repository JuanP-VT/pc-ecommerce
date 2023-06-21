/**
 * Since we do not save product categories in the database we need to create the list
 * by fetching all products and then sort, this is a very bad implementation for a larger project
 * but since this is a local project this implementation is good enough, for larger projects storing
 * category list would be better
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
