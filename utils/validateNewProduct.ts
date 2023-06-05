//Check if the new entry contains all the required properties, return an array with all the error messages

import type { Product } from "@/types/product";
export function validateNewProduct(newProduct: Product): String[] | [] {
  const errors = [];

  if (!newProduct.name) {
    errors.push("Invalid Name");
  }
  if (!newProduct.category) {
    errors.push("Invalid Category");
  }
  if (!newProduct.img) {
    errors.push("Invalid Image");
  }
  if (newProduct.stock === null || newProduct.stock === undefined) {
    errors.push("Invalid Stock");
  }
  if (newProduct.price === null || newProduct.price === undefined) {
    errors.push("Invalid Price");
  }
  if (
    newProduct.discountPercentage === null ||
    newProduct.discountPercentage === undefined
  ) {
    errors.push("Invalid Discount");
  }
  return errors;
}
